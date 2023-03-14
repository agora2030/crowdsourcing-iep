import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();
  return (
    <div className="cardGeneralContainer" style={{}}>
      <h1 className="title-main">POLÍTICA DE PRIVACIDAD</h1>
      <p className="title">
        ¿Quién es el responsable de tratamiento de tus datos personales?
      </p>
      <p className="normal">
        Agora Partnerships ® <br />
        Washington, District of Columbia, United States <br />
        Tel: 202-580-8776 <br />
        email: info@agora2030.org <br />
      </p>

      <p className="title">¿Con qué finalidad tratamos tus datos personales?</p>
      <p className="normal">
        El proyecto TRIEM, al que esta página web presta soporte, es totalmente
        anónimo y, por ello, su cuestionario no recoge ningún dato de carácter
        personal y tus respuestas no pueden asociarse a ti de ninguna forma. Los
        únicos datos personales que podemos recoger son aquellos que facilites
        tú mismo al escribirnos a través de las vías que facilitamos para que
        puedas contactar con nosotros. Estos datos van a ser tratados con la
        única finalidad de atender la consulta que nos dirijas según la
        naturaleza de la misma y la base jurídica que nos permite llevar a cabo
        este tratamiento es tu consentimiento.
      </p>

      <p className="title">¿Cuánto tiempo vamos a conservar tus datos?</p>
      <p className="normal">
        Los datos personales que nos proporciones serán conservados mientras el
        proyecto TRIEM esté vigente, es decir, hasta el mes de marzo de 2019 y
        siempre que no solicites su supresión. Una vez alcanzada esa fecha,
        conservaremos los datos bloqueados para atender cualquier
        responsabilidad legal que pudiera surgir pero no estarán disponibles
        para su tratamiento.
      </p>

      <p className="title">¿A qué destinatarios se comunicarán tus datos?</p>
      <p className="normal">
        No comunicaremos tus datos a ningún tercero salvo en aquellos casos en
        que lo establece la Ley. Los daros recabados a través de TRIEM serán
        analizados por Ideas 3493 S.L. (CIF B62051743), SALUS GOVERNANCE OF
        HEALTH DATA, S.C.C.L. (F-67114629) y Fundació per a la Universitat
        Oberta de Catalunya (G-60667813).
      </p>

      <p className="title">
        ¿Cuáles son tus derechos cuando nos facilitas tus datos personales?
      </p>
      <p className="normal">
        Puedes ejercer el derecho de acceso a tus datos personales, así como
        solicitar la rectificación de los que sean inexactos o, en su caso,
        puedes solicitar su supresión cuando los datos ya no sean necesarios
        para los fines para los que los recogimos. También puedes solicitar la
        limitación, portabilidad y oposición del tratamiento de tus datos, en
        determinadas circunstancias y por motivos relacionados con tu situación
        particular. En caso de que no obtengas una respuesta satisfactoria y
        quieras formular una reclamación u obtener mayor información al respecto
        de cualquiera de estos derechos, puedes acudir a la Agencia Española de
        Protección de Datos (www.aepd.es - C/ Jorge Juan, 6 de Madrid).
      </p>

      <p className="title">Cambios en la política</p>
      <p className="normal">
        Si cambiamos el tipo de cookies utilizamos, te informaremos, no te
        preocupes. Podrás seguir aceptando, rechazando o configurando tus
        preferencias. Siempre tendrás toda la información necesaria disponible
        en esta política. Y, si tienes cualquier duda, puedes contactar con
        nosotros a través deinfo@ideasforchange.com
      </p>

      <Button
        style={{
          borderColor: "#19417f",
          color: "#19417f",
          marginTop: "25px",
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
