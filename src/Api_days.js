// @ts-check
import './App.css';
import { useState, useEffect } from "react";


// make two stock photo people say random quotes
// https://programming-quotes-api.herokuapp.com/quotes/random
// https://api.themotivate365.com/stoic-quote
// https://inspirobot.me/api?generate=true

function Api_days() {

//   const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(300);

  const collect = async () => {
    // const imgProviders = [
    //     {url: "https://axoltlapi.herokuapp.com/", objKey: "url"},
    //     {url: "https://random-d.uk/api/v2/random", objKey: "url"},
    //     {url: "https://randomfox.ca/floof/", objKey: "image"},
    //     {url: "https://placebear.com/200/300", objKey: ""},
    //     {url: "https://placekitten.com/200/300", objKey: ""}
    // ]

    const pHolderProviders = [
      "https://place.dog/300/200",
      "http://placekitten.com/200/300",
      "https://baconmockup.com/300/200",
      "https://placebear.com/200/300",
      "https://placekitten.com/200/300"
  ];



    try {
      let maxNumber = pHolderProviders.length - 1;
      let randomNumber = Math.floor((Math.random() * maxNumber));
      console.log("max number is "+ maxNumber + "random number is " + randomNumber);
      const response = await fetch(pHolderProviders[randomNumber]);
      if(response.status !== 200){
        throw new Error("oops something went wrong");
      }
      // const data = await response.json();
      // setAdvice(data.slip);
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
      setImageURL(imageObjectURL);

    } catch (error) {
      setError({error: true, message: error.message })

    }  
  }

  
  //
  useEffect(() => {
    console.log("hello");
    collect();
  }, [])

  if (error.error) {
    return <h1>an error has occured: {error.message}</h1>
  }


  return (
    <div>
      {/* <h1>advice: {advice.advice}</h1> */}
      <img src={imageURL} alt="something random"></img>
      <button onClick={collect}>fetch</button>
    </div>
  );
}

export default Api_days;
