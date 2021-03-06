import Combo from "../components/combo";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";

const Map = dynamic(() => import("../components/map"), { ssr: false });

export async function getStaticProps() {
  // se fosse server side seria getServerSideProps
  /*
  return {

    props: {
      number: Math.round(Math.random() * 9999),
    },
  };
  */
  var resp = await fetch("http://localhost:3000/api/ubs");
  var json = await resp.json();

  //console.log(json);

  return {
    props: {
      //revalidate: 60 * 60; se setarmos o revalidate o next gera novamente a pagina estatica no intervalo definido (em segundos)
      cnes: json.cnes,
    },
  };
}

function StaticSamplePage(props) {
  const [mapCoord, setMapCoord] = useState([-8.287, -35.035]);
  const [message, setMessage] = useState("Bem vindo ao localizador de UBSs");

  function handleSelectChange(event) {
    // if you want to support some really old IEs, add
    // event = event || window.event;

    var selectElement = event.target;

    var value = selectElement.value;
    console.log(value);

    // localizando registro selecionado
    var cnes = props.cnes.filter((reg) => reg.CNES == value);
    console.log(cnes);

    var coordinates = [
      Number(cnes[0].LATITUDE.replace(",", ".")),
      Number(cnes[0].LONGITUDE.replace(",", ".")),
    ];
    var message =
      "Nome da UBS : " +
      cnes[0].NOME +
      ", Endereço : " +
      cnes[0].LOGRADOURO +
      ", " +
      cnes[0].BAIRRO;

    setMessage(message);

    console.log(coordinates);
    setMapCoord(coordinates);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Selecione uma UBS para ver no mapa</h1>

      <div style={{ marginBottom: "15px" }}>
        <Combo list={props.cnes} handler={handleSelectChange}></Combo>
      </div>
      <Map lat={mapCoord[0]} lon={mapCoord[1]} message={message}></Map>
    </>
  );
}

export default StaticSamplePage;
