import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivacyContent = () => {
  useEffect(() => {
    document.body.classList.add("overflow-y");

    return () => {
      document.body.classList.remove("overflow-y");
    };
  }, []);

  return (
    <div>
      <h1 className="title-main">POLÍTICA DE PRIVACIDAD</h1>
      <p className="title">
        ¿Qué es y por qué es importante para ti una política de datos?
      </p>
      <p className="normal">
        Una política de datos es un conjunto de reglas y principios que rigen la
        recopilación, el uso, el almacenamiento y el intercambio de tú
        información. Es importante que esté bien definida porque te permite
        proteger la privacidad y seguridad de tus datos, garantizar la legalidad
        de la información y mantener la transparencia y confianza entre tú y la
        herramienta o servicio que estás utilizando. <br />
        Sin una política de datos clara, te puedes enfrentar riesgos como
        pérdida de datos, violaciones de privacidad y seguridad, multas y
        sanciones legales, daño a la reputación y pérdidas de confianza entre
        los involucrados.
      </p>
      <p className="title">
        ¿Quién es el responsable de tratamiento de tus datos personales?
      </p>
      <p className="normal">
        Agora Partnerships ® en adelante Agora <br />
        260 Madison Avenue, 8th Floor, Manhattan, NY, United States, New York{" "}
        <br />
        Tel: +52 55 6138 7517 <br />
        email: info@agora2030.org <br />
      </p>

      <p className="title">¿Con qué finalidad tratamos tus datos personales?</p>
      <p className="normal">
        La organización sin ánimo de lucro Agora, la cual presta soporte a esta
        página web, manifiesta que este proyecto es totalmente anónimo y, por
        ello, el cuestionario no recoge ni esta relacionado ningún dato de
        carácter personal, de esta manera tus respuestas no pueden asociarse a
        ti de ninguna forma. Los únicos datos personales que podemos recoger son
        aquellos que facilites tú mismo al escribirnos a través de las vías que
        facilitamos para que puedas contactar con nosotros. Estos datos van a
        ser tratados con la única finalidad de atender la consulta que nos
        dirijas según la naturaleza de la misma y la base jurídica que nos
        permite llevar a cabo este tratamiento es tu consentimiento.
      </p>

      <p className="title">¿Cuánto tiempo vamos a conservar tus datos?</p>
      <p className="normal">
        Los datos que nos proporciones serán conservados mientras el este
        proyecto se encuentre vigente o sean relevantes para las etapas
        iniciales del estudio, es decir, hasta finales del año 2023 y siempre
        que no solicites su supresión. Una vez alcanzada esa fecha,
        conservaremos los datos bloqueados para atender cualquier
        responsabilidad legal que pudiera surgir pero no estarán disponibles
        para su tratamiento.
      </p>

      <p className="title">¿A qué destinatarios se comunicarán tus datos?</p>
      <p className="normal">
        No comunicaremos tus datos a ningún tercero salvo en aquellos casos en
        que lo establece la Ley. Los datos recabados a través de este sitio
        serán únicamente analizados por Agora. Algunos resultados sumarizados
        podrían ser compartidos con algunos aliados de Agora, pero nunca con
        datos personales.
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
        particular.
      </p>

      <p className="title">Cambios en la política</p>
      <p className="normal">
        Agora se plantea no actualizar esta polítca, pero en caso de hacerlo, no
        te preocupes, lo informaremos por medio de nuestras redes. Podrás seguir
        aceptando, rechazando o configurando tus preferencias. Siempre tendrás
        toda la información necesaria disponible en esta política. Y, si tienes
        cualquier duda, puedes contactar con nosotros a través de
        protecciondedatos@agora2030.org
      </p>

      <p className="title">
        ¿Qué estas autorizando/rechazando al responder las preguntas?
      </p>
      <p className="normal">
        No estas autorizando/rechazando nada en particular, simplemente estas
        respondiendo las preguntas que nos servirán como insumo para construir
        la política de datos de nuestra Plataforma de Intercambio de Información
        (IEP).
      </p>

      <p className="title">
        ¿Qué es una Plataforma de Intercambio de Información (IEP)?
      </p>
      <p className="normal">
        Actualmente la planteamos como: Una plataforma digital diseñada para
        facilitar la comunicación y colaboración entre personas en el ámbito
        emprendedor, ayudándolas a hacer crecer sus negocios y alianzas. La
        plataforma debe ofrecer acceso a información actualizada y verificable,
        así como a oportunidades de colaboración, financiamiento y aumento de
        visibilidad. Además, se debe enfocar en garantizar la privacidad,
        seguridad y descentralización de la información compartida. En este
        espacio seguro, se podría interactuar con otras personas con perfiles
        similares, tener foros de discusión, gestionar contactos y hacer
        preguntas.
      </p>
    </div>
  );
};

export default function Privacy() {
  const navigate = useNavigate();
  return (
    <div className="cardGeneralContainer" style={{}}>
      <PrivacyContent />

      <Button
        style={{
          borderColor: "#19417f",
          color: "#19417f",
          marginTop: "25px",
          marginBottom: "35px",
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
