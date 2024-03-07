import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //getrequest--string
  const getDataFromBackend = async () => {
    const responce = await axios.get("http://localhost:8080/call");
    console.log(responce.data);
    document.getElementById("para").innerHTML = responce.data;
  };
  //postrequest--string
  const data = "Hello";
  const postDataFromFrontend = async () => {
    const responce = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(responce.data);
    document.getElementById("para").innerHTML = responce.data;
  };
  //postrequest--form
  const [formData, setFormData] = useState("");

  const postFormFromFrontend = async () => {
    const responce = await axios.post("http://localhost:8080/testform", {
      formData,
    });

    console.log(responce.data);
    document.getElementById("para").innerHTML = responce.data;
  };

  return (
    <div className="App">
      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>

      <br />
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br />

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};

export default App;
