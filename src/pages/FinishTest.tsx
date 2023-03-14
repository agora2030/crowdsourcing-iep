import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "mui-image";

export default function FinishTest() {
  const navigate = useNavigate();
  return (
    <div className="cardGeneralContainer" style={{}}>
      <Image
        src="logo.png"
        height="auto"
        style={{ marginBottom: "50px", width: "170px", height: "auto" }}
      />
      <h1 style={{ fontFamily: "Alatsi", color: "#19417f" }}>
      ¡Gracias por contribuir a crear licencias de datos para todos!
      </h1>
      <p style={{ marginBottom: "35px" }}>
      En primavera de 2019 presentaremos el estudio sobre las preferencias de los ciudadanos para compartir sus datos de salud basado en esta aplicación. Pronto tendremos novedades que compartir contigo. Sé el primero en conocerlas apuntándote aquí y siguiéndonos en redes sociales

Para más información, contáctanos a salus@ideasforchange.com
      </p>

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
