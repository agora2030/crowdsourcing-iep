import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Image } from "mui-image";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  WhatsApp,
} from "@mui/icons-material";
import { CLIENT } from "../utils/database";

export default function FinishTest() {
  const [email, setEmail] = useState<string>();
  const [errorEmail, setErrorEmail] = useState(false);
  const [subscribed, setSubscribed] = useState(
    Boolean(localStorage.getItem("subscribed")),
  );

  const validateEmail = (newEmail: string) => {
    if (newEmail && newEmail.length > 0) {
      const re = /\S+@\S+\.\S+/;
      const isValid = re.test(newEmail);
      setErrorEmail(!isValid);
    } else setErrorEmail(true);
  };

  const titleMessage = "Decidamos el futuro de nuestros datos";
  const urlPage = "https://crowdsourcing-iep.web.app/";
  const message = `Decidamos el futuro de nuestros datos. Decidamos cómo compartirlos. Yo ya he contribuido paraa crear políticas de datos para empresarios de LATAM junto con #AgoraPartnerships, súmate y compártelo 👉 ${urlPage}`;

  return (
    <div className="cardGeneralContainer" style={{}}>
      <Image
        src="logo.png"
        height="auto"
        style={{ marginBottom: "50px", width: "170px", height: "auto" }}
      />
      <h1 style={{ fontFamily: "Alatsi", color: "#19417f" }}>
        ¡Gracias por contribuir a crear políticas de privacidad y uso de datos
        para todos!
      </h1>
      <p style={{ marginBottom: "25px" }}>
        A finales del 2023 presentaremos el estudio sobre las preferencias de
        los emprearios para compartir sus datos basándonos en los resultados de
        este sitio. Pronto tendremos novedades que compartir contigo. Sé el
        primero en conocerlas apuntando tu correo aquí y siguiéndonos en redes
        sociales. Para más información, contáctanos en info@agora2030.org
      </p>

      {subscribed ? (
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
          Ya te has suscrito, te informaremos apenas hayan novedades en nuestra
          plataforma (IEP) y/o en los resultados de la política de privacidad y
          uso de datos.
        </p>
      ) : (
        <div
          style={{
            justifyContent: "center",
            marginBottom: "25px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            label="Correo"
            type="email"
            value={email || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
              validateEmail(event.target.value);
            }}
            size="small"
            autoComplete="email"
            style={{ marginRight: "15px" }}
            error={errorEmail}
          />
          <Button
            style={{
              backgroundColor: !email || errorEmail ? undefined : "#19417f",
              fontFamily: "Alatsi",
            }}
            disabled={!email || errorEmail}
            variant="contained"
            onClick={async () => {
              try {
                const query = "INSERT INTO emails (`email`) VALUES (:email)";
                const params = {
                  email,
                };
                const conn = CLIENT.connection();
                await conn.execute(query, params);
                setSubscribed(true);
                localStorage.setItem("subscribed", "true");
              } catch (error: any) {
                if (
                  error.message.includes("AlreadyExists desc = Duplicate entry")
                )
                  setSubscribed(true);
                  localStorage.setItem("subscribed", "true");
              }
            }}
          >
            Quiero recibir novedades
          </Button>
        </div>
      )}

      <p style={{ marginBottom: "15px", textAlign: "center" }}>
        ¡También nos ayudas un montón si compartes con otros empresarios de tu
        red!
      </p>
      <div style={{ marginBottom: "10px" }}>
        <Facebook
          sx={{ color: "#3B5998" }}
          fontSize="large"
          style={{ marginRight: "15px" }}
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${urlPage}`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        />
        <Twitter
          sx={{ color: "#55ACEE" }}
          fontSize="large"
          style={{ marginRight: "15px" }}
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?text=${message}`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        />
        <LinkedIn
          sx={{ color: "#007bb5" }}
          fontSize="large"
          style={{ marginRight: "15px" }}
          onClick={() => {
            window.open(
              `https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fcrowdsourcing-iep.web.app&title=Decidamos%20el%20futuro%20de%20nuestros%20datos.%20&summary=Decidamos%20c%C3%B3mo%20compartirlos.%20Yo%20ya%20he%20contribuido%20a%20crear%20las%20primeras%pol%C3%ADticas%20de%20datos,%20s%C3%BAmate%20y%20comp%C3%A1rtelo%20%3A%20https%3A%2F%2Fcrowdsourcing-iep.web.app`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        />
        <Email
          sx={{ color: "#ff5700" }}
          fontSize="large"
          style={{ marginRight: "15px" }}
          onClick={() => {
            window.open(
              `mailto:?&subject=${titleMessage}&body=${message}`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        />
        <WhatsApp
          sx={{ color: "#368C41" }}
          fontSize="large"
          style={{ marginRight: "15px" }}
          onClick={() => {
            window.open(
              `https://wa.me?text="${message}"`,
              "_blank",
              "noopener,noreferrer",
            );
          }}
        />
      </div>

      <Button
        style={{
          backgroundColor: "#19417f",
          fontFamily: "Alatsi",
          marginBottom: "25px",
        }}
        variant="contained"
        onClick={() => {
          navigator.clipboard.writeText(urlPage);
        }}
      >
        Copiar enlace para compartir
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
