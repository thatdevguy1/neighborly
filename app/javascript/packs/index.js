import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';

// Components
import Listings from '../components/Listings';
import Dashboard from '../components/Dashboard';
import MapBox from '../components/Mapbox';

render(
  <Provider>
    <section className="map-dashboard-section">
      <Dashboard />
      <MapBox />
    </section>

    <Listings />
  </Provider>,
  document.querySelector('#home')
);
