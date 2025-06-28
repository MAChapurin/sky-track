"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  //   position: "fixed",
  width: "100%",
  height: "100%",
  //   zIndex: "-1",
};

const defaultCenter = {
  lat: 55.751244, // Москва, если геолокация не доступна
  lng: 37.618423,
};

export function MapWithCurrentLocation() {
  const [center, setCenter] = useState(defaultCenter);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Ошибка геолокации:", error);
        }
      );
    }
  }, []);

  if (loadError) return <div>Ошибка загрузки карты</div>;
  if (!isLoaded) return <div>Загрузка карты...</div>;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
