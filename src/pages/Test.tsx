import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "mui-image";
import { QuestionOptions } from "../components/QuestionOptions";

export default function Test() {
  const navigate = useNavigate();

  return (
    <div className="cardGeneralContainer" style={{}}>
      <p className="normal" style={{ textAlign: "center" }}>
        Si has decidido donar tus datos, imagina que ahora descubres diferentes
        riesgos que esta decisión conlleva
      </p>
      <h2 className="title-main">¿Donarías tus datos ante estos riesgos?</h2>

      <QuestionOptions
        index="0"
        title="Pérdida de control sobre quién puede acceder a tus datos"
        desc="Hay una pérdida de control sobre tus datos y otros actores no
        autorizados reutilizan tus datos con fines desconocidos o no
        autorizados."
        options={["1", "2", "3", "4", "5"]}
      />
      <QuestionOptions
        index="1"
        title="Revelación de tu identidad"
        desc="Cruzando distintos datos, es posible que seas identificado y que se revele información sensible o comprometedora sobre ti a terceros."
        options={["1", "2", "3", "4", "5"]}
      />
      <QuestionOptions
        index="2"
        title="¿Qué grado de riesgo de identificación estás dispuesto a aceptar?"
        desc="Ser identificado entre cuantas personas"
        options={[
          "1 millón",
          "100.000",
          "1.000",
          "No aceptaría en ningún caso",
        ]}
      />

      <p className="normal" style={{ textAlign: "center" }}>
        Si has decidido NO donar tus datos, ahora imagina que te ofrecen
        incentivos a cambio de estos
      </p>
      <h2 className="title-main">
        ¿Donarías tus datos frente a estos incentivos?
      </h2>

      <QuestionOptions
        index="3"
        title="Análisis personalizados"
        desc="A cambio de donar tus datos te ofrecen información personalizada sobre tu salud basada en los datos que compartiste."
        options={["1", "2", "3", "4", "5"]}
      />
      <QuestionOptions
        index="4"
        title="Descuentos o cupones"
        desc="A cambio de donar tus datos te ofrecen descuentos o cupones para servicios o productos de salud."
        options={["1", "2", "3", "4", "5"]}
      />
      <QuestionOptions
        index="5"
        title="Dinero"
        desc="A cambio de compartir tus datos, te ofrecen una cantidad de dinero proporcional a la cantidad de datos que compartes.."
        options={["1", "2", "3", "4", "5"]}
      />

      <Button
        style={{
          backgroundColor: "#19417f",
          marginBottom: "35px",
          fontFamily: "Alatsi",
          marginTop: "35px",
        }}
        variant="contained"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Continuar
      </Button>
    </div>
  );
}
