import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionOptions } from "../components/QuestionOptions";
import { CLIENT } from "../utils/database";

export default function Profile() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [answers, setAnswers] = useState<(string | null)[]>([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/region/americas/?fields=name,region,subregion",
    )
      .then((response) => response.json())
      .then((data) => {
        const filterCountries = data
          .filter(
            (country: any) =>
              [
                "South America",
                "Caribbean",
                "North America",
                "Central America",
              ].includes(country.subregion) &&
              !country.name.common.includes("United States"),
          )
          .map(
            (country: any) =>
              country?.name?.nativeName?.spa?.common || country.name.common,
          )
          .sort();
        setCountries(filterCountries);
      });
    document.body.classList.add("overflow-y");
    for (let i = 0; i < 4; i++) {
      localStorage.removeItem(`question_profile${i}`);
    }
    return () => {
      document.body.classList.remove("overflow-y");
    };
  }, []);

  const refreshAnswers = () => {
    const localAnswers: (string | null)[] = [];
    for (let i = 0; i < 4; i++) {
      localAnswers.push(localStorage.getItem(`question_profile${i}`));
    }
    setAnswers(localAnswers);
  };

  const disabled = answers.filter((n) => n !== null).length !== 4;

  return (
    <div className="cardGeneralContainer" style={{}}>
      <h2 className="title-main">Cuéntanos sobre ti</h2>

      <QuestionOptions
        index="0"
        type="profile"
        title="¿A qué grupo de edad perteneces?"
        options={["18 a 24", "25 a 39", "40 a 65", "Más de 65"]}
        refreshAnswers={refreshAnswers}
      />

      <QuestionOptions
        index="1"
        type="profile"
        title="¿Cuántos son los ingresos brutos anuales de tu empresa? (USD)"
        options={[
          "$0-$8.000",
          "$8.000-$18.000",
          "$18.000-$30.000",
          "$30.000-$50.000",
          "Más de $50.000",
          "Prefiero no contestar",
        ]}
        orientation="vertical"
        refreshAnswers={refreshAnswers}
      />

      <QuestionOptions
        index="2"
        type="profile"
        title="¿Cuál es el nivel educativo más alto que has completado?"
        options={[
          "Sin estudios",
          "Primaria",
          "Bachillerato elemental / ESO",
          "Bachillerato Superior",
          "Ténico",
          "Estudios Universitarios",
          "Postgrado / Máster / Doctorado",
        ]}
        orientation="vertical"
        refreshAnswers={refreshAnswers}
      />

      <FormControl fullWidth style={{ marginTop: "25px" }}>
        <InputLabel id="demo-simple-select-label">País</InputLabel>
        <Select
          value={country}
          label="País"
          onChange={(event) => {
            setCountry(event.target.value as string);
            localStorage.setItem(
              `question_profile${3}`,
              JSON.stringify({
                title: "País",
                type: "profile",
                answer: event.target.value as string,
              }),
            );
            refreshAnswers();
          }}
          inputProps={{
            style: {
              borderColor: "#19417f",
              color: "#19417f",
              fontFamily: "Alatsi",
            },
          }}
          sx={{
            color: "red",
            "& .MuiInputBase-input": {
              color: "#19417f",
              textAlign: "justify",
              alignSelf: "center",
              fontFamily: "Alatsi",
              border: "1px solid #ced4da",
            },
            "&:focus": {
              borderColor: "#19417f",
            },
          }}
        >
          {countries?.map((country) => (
            <MenuItem
              key={country}
              style={{ fontFamily: "Alatsi", color: "#19417f" }}
              value={country}
            >
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        style={{
          backgroundColor: disabled ? undefined : "#19417f",
          marginBottom: "35px",
          fontFamily: "Alatsi",
          marginTop: "35px",
        }}
        disabled={disabled}
        variant="contained"
        onClick={async () => {
          try {
            const questionsSwipe: any = [];
            const questionsRisks: any = [];
            const questionsBenefits: any = [];
            const questions: any = [];
            for (let i = 0; i < 30; i++) {
              const questionSwipeLocal = localStorage.getItem(
                `question_swipe${i}`,
              );
              if (questionSwipeLocal) questionsSwipe.push(questionSwipeLocal);
            }
            for (let i = 0; i < 3; i++) {
              const questionRiskLocal = localStorage.getItem(
                `question_risk${i}`,
              );
              if (questionRiskLocal) {
                questions.push(questionRiskLocal);
                questionsRisks.push(questionRiskLocal);
              }
              const questionBenefitLocal = localStorage.getItem(
                `question_benefit${i}`,
              );
              if (questionBenefitLocal) {
                questions.push(questionBenefitLocal);
                questionsBenefits.push(questionBenefitLocal);
              }
            }
            for (let i = 0; i < 4; i++) {
              const questionProfileLocal = localStorage.getItem(
                `question_profile${i}`,
              );
              if (questionProfileLocal) questions.push(questionProfileLocal);
            }
            if (questionsSwipe.length !== 30) navigate("/questions");
            if (questionsRisks.length !== 3 || questionsBenefits.length !== 3) navigate("/test");
            const query =
              "INSERT INTO answers (`questions_data`) VALUES (:questions_data)";
            const params = {
              questions_data: JSON.stringify({ questionsSwipe, questions }),
            };
            const conn = CLIENT.connection();
            await conn.execute(query, params);
            localStorage.setItem("finish", "true");
            navigate("/thanks");
          } catch (error: any) {
            console.log(error);
          }
        }}
      >
        Continuar
      </Button>
    </div>
  );
}
