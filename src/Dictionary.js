import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    let apiKey = "b99atfd426b3cde797eo6c02fa816d9b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    event.preventDefault();
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleWordChange} />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
