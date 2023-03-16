import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionOptions } from "../components/QuestionOptions";

export default function Test() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<(string | null)[]>([]);

  useEffect(() => {
    document.body.classList.add("overflow-y");
    for (let i = 0; i < 3; i++) {
      localStorage.removeItem(`question_risk${i}`);
      localStorage.removeItem(`question_benefit${i}`);
    }
    return () => {
      document.body.classList.remove("overflow-y");
    };
  }, []);

  const refreshAnswers = () => {
    const localAnswers: (string | null)[] = [];
    for (let i = 0; i < 3; i++) {
      localAnswers.push(localStorage.getItem(`question_risk${i}`));
      localAnswers.push(localStorage.getItem(`question_benefit${i}`));
    }
    setAnswers(localAnswers);
  };

  const disabled = answers.filter((n) => n !== null).length !== 6;

  return (
    <div className="cardGeneralContainer">
      <p
        className="normal"
        style={{ textAlign: "center", fontSize: "18px", marginTop: "15px" }}
      >
        Imaginemos que quieres compartir datos tuyos y/o de tu empresa, pero descubres que hay algunos
        riesgos
      </p>
      <h2 className="title-main" style={{ marginTop: "5px" }}>
        ¿Compartirías con estos riesgos?
      </h2>

      <QuestionOptions
        index="0"
        type="risk"
        title="Pérdida de control sobre quién puede acceder a los datos"
        desc="Hay una pérdida de control sobre los datos y otros actores no
        autorizados reutilizan los datos con fines desconocidos o no
        autorizados."
        options={["1", "2", "3", "4", "5"]}
        refreshAnswers={refreshAnswers}
      />
      <QuestionOptions
        index="1"
        type="risk"
        title="Revelación de identidad"
        desc="Cruzando distintos datos, es posible que seas identificado y que se revele información sensible o comprometedora sobre ti o tu empresa a terceros."
        options={["1", "2", "3", "4", "5"]}
        refreshAnswers={refreshAnswers}
      />
      <QuestionOptions
        index="2"
        type="risk"
        title="¿Qué grado de riesgo de identificación estás dispuesto a aceptar?"
        desc="Ser identificado entre cuantas personas"
        options={[
          "1 millón",
          "100.000",
          "1.000",
          "No aceptaría en ningún caso",
        ]}
        refreshAnswers={refreshAnswers}
      />

      <p
        className="normal"
        style={{ textAlign: "center", fontSize: "18px", marginTop: "45px" }}
      >
        Ahora imagina que NO deseas compartir tus datos y/o de tu empresa pero te ofrecen
        algunos beneficios a cambio de estos
      </p>
      <h2 className="title-main" style={{ marginTop: "5px" }}>
        ¿Compartirías con estos beneficios?
      </h2>

      <QuestionOptions
        index="0"
        type="benefit"
        title="Análisis personalizados"
        desc="A cambio de compartir los datos te ofrecen información personalizada sobre tu empresa, basados en los datos que compartiste."
        options={["1", "2", "3", "4", "5"]}
        refreshAnswers={refreshAnswers}
      />
      <QuestionOptions
        index="1"
        type="benefit"
        title="Descuentos o cupones"
        desc="A cambio de compartir los datos te ofrecen descuentos o cupones para servicios o productos."
        options={["1", "2", "3", "4", "5"]}
        refreshAnswers={refreshAnswers}
      />
      <QuestionOptions
        index="2"
        type="benefit"
        title="Dinero"
        desc="A cambio de compartir los datos, te ofrecen una cantidad de dinero proporcional a la cantidad de datos que compartes."
        options={["1", "2", "3", "4", "5"]}
        refreshAnswers={refreshAnswers}
      />

      <Button
        style={{
          backgroundColor: disabled ? undefined : "#19417f",
          marginBottom: "35px",
          fontFamily: "Alatsi",
          marginTop: "35px",
        }}
        disabled={disabled}
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
