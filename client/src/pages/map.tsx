import { Icon, Point } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import MarkerGreen from '../assets/marker_green.png';
import MarkerOrange from '../assets/marker_orange.png';
import MarkerRed from '../assets/marker_red.png';
import MarkerYellow from '../assets/marker_yellow.png';

const MapPage = () => {
    const iconNormal = new Icon({
        iconUrl: MarkerGreen,
        iconRetinaUrl: MarkerGreen,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    const iconDelay = new Icon({
        iconUrl: MarkerYellow,
        iconRetinaUrl: MarkerYellow,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    const iconOverThreshold = new Icon({
        iconUrl: MarkerOrange,
        iconRetinaUrl: MarkerOrange,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    const iconError = new Icon({
        iconUrl: MarkerRed,
        iconRetinaUrl: MarkerRed,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    return (
        <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={iconNormal}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                <Tooltip direction="bottom" permanent={false} offset={[0, 5]}>
                    Tooltip for Marker
                </Tooltip>
            </Marker>
        </MapContainer>
    );
};

export default MapPage;
