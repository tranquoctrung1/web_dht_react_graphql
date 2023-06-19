import { Text } from '@mantine/core';
import { Icon, Point } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import MarkerGreen from '../assets/marker_green.png';
import MarkerOrange from '../assets/marker_orange.png';
import MarkerRed from '../assets/marker_red.png';
import MarkerYellow from '../assets/marker_yellow.png';

import { useGetAllSiteAndChannelQuery } from '../__generated__/graphql';

const MapPage = () => {
    const { loading, data, error } = useGetAllSiteAndChannelQuery();

    if (error) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dánh sách các điểm vị trí
            </Text>
        );
    }

    const iconGreen = new Icon({
        iconUrl: MarkerGreen,
        iconRetinaUrl: MarkerGreen,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    const iconYellow = new Icon({
        iconUrl: MarkerYellow,
        iconRetinaUrl: MarkerYellow,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    const iconOrange = new Icon({
        iconUrl: MarkerOrange,
        iconRetinaUrl: MarkerOrange,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    const iconRed = new Icon({
        iconUrl: MarkerRed,
        iconRetinaUrl: MarkerRed,
        popupAnchor: [0, -3],
        iconSize: new Point(25, 25),
        className: '',
    });

    const convertMarker = (data: any) => {
        let markers = [];
        if (data != undefined && data != null) {
            if (data.GetAllSiteAndChannel.length > 0) {
                for (let site of data.GetAllSiteAndChannel) {
                    if (
                        site.Latitude != null &&
                        site.Latitude != undefined &&
                        site.Longitude != null &&
                        site.Longitude != undefined
                    ) {
                        let marker = (
                            <Marker
                                key={site._id}
                                position={[site.Latitude, site.Longitude]}
                                icon={iconGreen}
                                riseOnHover
                            >
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily
                                    customizable.
                                </Popup>
                                <Tooltip
                                    direction="bottom"
                                    permanent={false}
                                    offset={[0, 5]}
                                >
                                    Tooltip for Marker
                                </Tooltip>
                            </Marker>
                        );

                        markers.push(marker);
                    }
                }
            }
        }

        return markers;
    };

    return (
        <MapContainer
            center={[10.811542, 106.630067]}
            zoom={12}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {convertMarker(data)}
        </MapContainer>
    );
};

export default MapPage;
