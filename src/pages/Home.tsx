import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "mui-image";
import PrivacyDialog from "./PrivacyDialog";

export default function Home() {
  const navigate = useNavigate();
  const acceptedTermsLocal = localStorage.getItem("acceptedTerms");
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [dialogOpened, setDialogOpened] = useState(Boolean(acceptedTermsLocal) || false);
  const [acceptedTerms, setAcceptedTerms] = useState(Boolean(acceptedTermsLocal) || false);
  const [clickButton, setClickButton] = useState(false);

  const handleClickDialog = () => {
    setOpenPrivacy(!openPrivacy);
    if (openPrivacy === true) setDialogOpened(true);
  };

  const disabled = !acceptedTerms || !dialogOpened;

  return (
    <div className="cardGeneralContainer">
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
        le permita a empresarios/emprendedores como tú, compartir datos de forma
        segura y eficiente. ¿Cómo? Contestando las siguientes preguntas,
        nos ayudarás a definir una política más justa y beneficiosa para los
        empresarios, empresarias y sus clientes.
      </p>
      <PrivacyDialog
        open={openPrivacy}
        onClose={handleClickDialog}
        acceptedTerms={acceptedTerms}
        setAcceptedTerms={setAcceptedTerms}
      />
      {acceptedTerms ? (
        <p
          className="normal"
          style={{
            fontSize: "0.875rem",
            textAlign: "center",
            color: "green",
            marginBottom: "15px",
            paddingBottom: "6px",
          }}
        >
          Has leído y aceptado la{" "}
          <span
            style={{ textDecoration: "underline" }}
            onClick={() => {
              navigate("/privacy");
            }}
          >
            política de privacidad
          </span>{" "}
          y uso de datos de este sitio.
        </p>
      ) : (
        <Button
          style={{
            color: clickButton && disabled ? 'red' : "#19417f",
            fontSize: clickButton && disabled ? '1.25rem' : undefined,
            marginBottom: "15px",
            fontFamily: "Alatsi",
            textDecoration: "underline",
          }}
          variant="text"
          onClick={handleClickDialog}
        >
          Debes leer y aceptar la política de privacidad y uso de datos de este sitio.
        </Button>
      )}
      <p className="normal"></p>
      <Button
        style={{
          backgroundColor: "#19417f",
          marginBottom: "15px",
          fontFamily: "Alatsi",
        }}
        variant="contained"
        onClick={() => {
          if (disabled) {
            setClickButton(true);
            return;
          }
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
