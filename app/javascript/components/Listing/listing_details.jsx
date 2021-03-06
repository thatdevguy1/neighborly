import React from 'react';
import PropTypes from 'prop-types';

import Link from '../link';
import DeleteListingButton from './delete_listing_button';

const Listing = ({ listing, handleToggleEditMode, canShow }) => (
  <div id="listing-details-component">
    <div className="listing-details-header">
      <img className="listing-image" src={listing.imageUrl} alt={`${listing.title}`}></img>
      <h1 className="listing-title">{listing.title}</h1>
      <div className="listing-description-box">
        <h2 className="section-title">Details</h2>
        <h3 className="listing-description">{listing.description}</h3>
      </div>
    </div>
    <div className="listing-details-body">
      <div className="user-info-box">
        <h2>User Info</h2>
        <span>Name: COMING SOON</span>
        <span>Email: {listing.user.email}</span>
        <span>Created At: {listing.createdAt}</span>
      </div>
      <div className="map-box"></div>
    </div>

    <div className="heading">
      <Link className="btn btn-secondary" onClick={handleToggleEditMode} canShow={canShow}>
        Edit Listing
      </Link>

      {canShow && <DeleteListingButton listingId={listing.id} />}
    </div>
  </div>
);

Listing.propTypes = { listing: PropTypes.object, handleToggleEditMode: PropTypes.func, canShow: PropTypes.bool };

export default Listing;
