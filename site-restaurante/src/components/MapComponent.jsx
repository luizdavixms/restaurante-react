import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

// Estilos do contêiner para centralizar o mapa
const PageWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh; /* 100% da altura da tela */
  width: 100%;
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 800px; /* Limita a largura máxima para o mapa */
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

const MapComponent = () => {
  const position = [-15.7801, -47.9292]; // Coordenadas do Estádio Mané Garrincha

  return (
    <PageWrapper>
      <MapWrapper>
        <MapContainer center={position} zoom={15} style={{ width: "100%", height: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>Estádio Mané Garrincha</Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </PageWrapper>
  );
};

export default MapComponent;
