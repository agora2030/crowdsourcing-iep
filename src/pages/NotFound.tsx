import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "mui-image";
import PrivacyDialog from "./PrivacyDialog";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="cardGeneralContainer">
      <Image
        src="logo.png"
        height="auto"
        style={{ marginBottom: "50px", width: "170px", height: "auto" }}
      />
      <h1 style={{ fontFamily: "Alatsi", color: "#19417f", marginBottom: "85px", }}>
        ¡404 Página no encontrada! 😔
      </h1>

      <Button
        style={{
          borderColor: "#19417f",
          color: "#19417f",
          marginBottom: "15px",
          fontFamily: "Alatsi",
        }}
        variant="outlined"
        onClick={() => {
          navigate("/");
        }}
      >
        Volver
      </Button>
    </div>
  );
}
