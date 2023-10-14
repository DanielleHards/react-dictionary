import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong>
        {props.meaning.definition}
        <br />
        <strong>Example:</strong>
        {props.meaning.example}
        <br />
        <strong>Synonyms:</strong>
        {props.meaning.synonyms}
      </p>
    </div>
  );
}
