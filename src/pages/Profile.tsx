import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "mui-image";
import { QuestionOptions } from "../components/QuestionOptions";

export default function Profile() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((response) => response.json())
      .then((data) =>
        setCountries(data.map((country: any) => country.name.common).sort()),
      );
  }, []);

  return (
    <div className="cardGeneralContainer" style={{}}>
      <h2 className="title-main">Cuéntanos sobre ti</h2>

      <QuestionOptions
        index="6"
        title="¿A qué grupo de edad perteneces?"
        options={["18 a 24", "25 a 39", "40 a 65", "Más de 65"]}
      />

      <QuestionOptions
        index="7"
        title="¿Cuántos son tus ingresos brutos anuales? (USD)"
        options={[
          "$0-$8.000",
          "$8.000-$18.000",
          "$18.000-$30.000",
          "$30.000-$50.000",
          "Más de $50.000",
          "Prefiero no contestar",
        ]}
        orientation="vertical"
      />

      <QuestionOptions
        index="8"
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
      />

      <FormControl fullWidth style={{ marginTop: "25px" }}>
        <InputLabel id="demo-simple-select-label">País</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="País"
          onChange={(event) => {
            setCountry(event.target.value as string);
            localStorage.setItem(`question${9}`, event.target.value as string);
          }}
          inputProps={{
            style: {
              borderColor: "#19417f",
              color: "#19417f",
              fontFamily: "Alatsi",
            },
          }}
        >
          {countries?.map((country) => (
            <MenuItem
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
          backgroundColor: "#19417f",
          marginBottom: "35px",
          fontFamily: "Alatsi",
          marginTop: "35px",
        }}
        variant="contained"
        onClick={() => {
          navigate("/thanks");
        }}
      >
        Continuar
      </Button>
    </div>
  );
}
