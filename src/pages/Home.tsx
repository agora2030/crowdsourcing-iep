import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "mui-image";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="cardGeneralContainer" style={{}}>
      <Image
        src="logo.png"
        height="auto"
        style={{ marginBottom: "50px", width: "170px", height: "auto" }}
      />
      <h1 style={{ fontFamily: "Alatsi", color: "#19417f" }}>
        ¡Queremos ayudarte a cuidar los datos de tu empresa y la de tus
        clientes!
      </h1>
      <p style={{ marginBottom: "35px" }}>
        Sé parte de la iniciativa de Agora que busca construir una política que
        le permita empresarios/emprendedores como tú, compartir datos de forma
        segura y eficiente. ¿Cómo? Contestando las siguientes preguntas, nos
        ayudarás a definir una política más justa y beneficiosa para los
        empresarios, empresarias y sus clientes
      </p>
      <Button
        style={{ color: "#19417f", marginBottom: "15px", fontFamily: "Alatsi" }}
        variant="text"
        onClick={() => {
          navigate("/privacy");
        }}
      >
        Leer la política de privacidad y uso de datos de este sitio.
      </Button>
      <Button
        style={{
          backgroundColor: "#19417f",
          marginBottom: "15px",
          fontFamily: "Alatsi",
        }}
        variant="contained"
        onClick={() => {
          navigate("/questions");
        }}
      >
        Quiero Participar
      </Button>
      <Button
        style={{
          borderColor: "#19417f",
          color: "#19417f",
          marginBottom: "15px",
          fontFamily: "Alatsi",
        }}
        variant="outlined"
        onClick={() => {
          window.open(
            `https://agora2030.org/`,
            "_blank",
            "noopener,noreferrer",
          );
        }}
      >
        Conoce más sobre Agora
      </Button>
    </div>
  );
}
