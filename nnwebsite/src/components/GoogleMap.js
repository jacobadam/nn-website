import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {

render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 53.39641, lng: -2.89742 }}
      >
        <Marker position={{ lat: 53.39641, lng: -2.89742 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCXHRxVwkiChn_-IyxBlq57Apac6_Th4P0'
})(MapContainer);