import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Listing {
  id: number;
  title: string;
  price: number;
  category: string;
  location: string;
  image: string;
  coordinates: [number, number];
}

interface MapViewProps {
  listings: Listing[];
}

function MapController() {
  const map = useMap();
  
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  
  return null;
}

const MapView = ({ listings }: MapViewProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={[55.7558, 37.6173]}
      zoom={5}
      className="h-full w-full rounded-lg"
      scrollWheelZoom={true}
    >
      <MapController />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={listing.coordinates}
        >
          <Popup maxWidth={250}>
            <div className="min-w-[200px]">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="font-bold text-sm mb-1">{listing.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">
                {listing.price === 0 ? 'Договорная' : `${listing.price.toLocaleString()} ₽`}
              </p>
              <Button
                size="sm"
                className="w-full"
                onClick={() => navigate(`/listing/${listing.id}`)}
              >
                Подробнее
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
