import React from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import { currentLocation } from "../../actions";
import "../../css/loader.scss";

export class MapContainer extends React.Component {
  state = {
    loading: true,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  componentDidMount() {
    if (this.props.centerLoc) {
      this.props.currentLocation({
        lat: this.props.centerLoc.lat,
        lng: this.props.centerLoc.lng
      });
      this.setState({ loading: false });
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          this.props.currentLocation({ lat: latitude, lng: longitude });
          this.setState({ loading: false });
        },
        () => {
          this.setState({ loading: false });
        }
      );
    }
  }

  onMarkerClick = (props, marker) => {
    if (marker.name !== "Marker") {
      this.setState({
        activeMarker: marker,
        selectedPlace: marker.name,
        showingInfoWindow: true
      });
    } else {
      const geocoder = new props.google.maps.Geocoder();
      const latlng = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
      };

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            this.setState({
              activeMarker: marker,
              selectedPlace: results[0].formatted_address,
              showingInfoWindow: true
            });
          }
        } else {
          this.setState({
            activeMarker: marker,
            selectedPlace: `${latlng.lat} / ${latlng.lng}`,
            showingInfoWindow: true
          });
        }
      });
    }
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  displayMarkers = () => {
    if (!this.props.dataArry) return;
    const array = this.props.dataArry;
    return array.map((data, index) => {
      return (
        <Marker
          key={index}
          id={index}
          name={data.locname}
          position={{ lat: data.lat, lng: data.lng }}
          onClick={this.onMarkerClick}
        />
      );
    });
  };

  displayInfoWindow = () => {
    return (
      <InfoWindow
        marker={this.state.activeMarker}
        onClose={this.onInfoWindowClose}
        visible={this.state.showingInfoWindow}
        style={{ fontSize: "1rem" }}
      >
        {this.state.selectedPlace}
      </InfoWindow>
    );
  };

  render() {
    const { loading } = this.state;
    const { google } = this.props;
    const userLocation = this.props.currloc;

    if (loading) {
      // return null;
      return <div className="--loader" />;
    }

    return (
      <Map
        google={google}
        onClick={this.onMapClicked}
        style={{ height: "100%", position: "relative", width: "100%" }}
        zoom={this.props.zoom}
        initialCenter={userLocation}
        center={this.props.currloc}
      >
        {this.displayMarkers()}
        {this.displayInfoWindow()}
      </Map>
    );
  }
}

const MapStateToProps = state => {
  return {
    currloc: state.currloc
  };
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBL-R4lym7oYUvwO-g6ShEArRKH-l0_-vg"
})(
  connect(
    MapStateToProps,
    { currentLocation }
  )(MapContainer)
);
