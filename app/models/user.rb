class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  #  Callbacks

  #  Assosiactions
  has_one :profile, autosave: true
  has_and_belongs_to_many :roles
  has_many :listings, -> { order "updated_at desc" }, dependent: :destroy
  has_many :locations, dependent: :destroy

  # Validations
  validates :email, presence: true, uniqueness: true

  # Delegation Methods
  delegate :first_name, :first_name=,
           :last_name, :last_name=,
           :phone_number, :phone_number=,
           :full_name, :full_name=,
           :location, :location=,
           to: :profile

  #  Allows user to receive a hash with nested attributes to populate profile
  accepts_nested_attributes_for :profile

  # USER AUTHORITY METHODS
  def add_role(role)
    self.roles << role
  end

  def add_role_by_role_name(role_name)
    self.roles << Role.find_by_name(role_name)
  end

  def role_names
    roles.map { |role| role.name }
  end

  def is_admin?
    is_role_by_name?(:admin)
  end

  def is_role?(role)
    self.roles.include?(role)
  end

  def is_role_by_name?(role_name)
    self.roles.include?(Role.find_by_name(role_name))
  end

  # Profile Method
  def find_or_build_profile
    if profile.nil?
      build_profile
    end
    profile
  end
end
