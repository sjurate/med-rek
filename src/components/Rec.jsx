import React, { useState } from "react";
import Check from "./Check";
import Check2 from "./Check2";
const uuid = require("uuid");

const Rec = ({ setData }) => {
  const [title, setTitle] = useState("");
  const [half, setHalf] = useState(false);
  const [before_meal, setBefore_meal] = useState(false);
  const [morning, setMorning] = useState(false);
  const [day, setDay] = useState(false);
  const [evening, setEvening] = useState(false);

  const addRec = () => {
    if (title.length === 0) {
      alert("Būtina įvesti vaisto pavadinimą.");
    } else {
      setData((prevData) => [
        ...prevData,
        {
          id: uuid.v4(),
          title,
          half,
          before_meal,
          morning,
          day,
          evening,
        },
      ]);
      setTitle("");
      setHalf(false);
      setBefore_meal(false);
      setMorning(false);
      setDay(false);
      setEvening(false);
    }
  };

  return (
    <div className="card">
      <h4 className="card-header">Skirsk vaistus</h4>

      <div className="card-line">
        <div className="choices">
          <div className="card-line-field drug-title">
            <label className="field-label">Vaisto pavadinimas</label>
            <input
              type="text"
              className="field-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="card-line-field drug-half">
            <label className="field-label ">1/2 tab?</label>
            <button
              onClick={() => setHalf((prevHalf) => !prevHalf)}
              className={half ? "btn--yes btn--dot" : "btn--no btn--dot"}
            >
              {half ? <Check2 /> : ""}
            </button>
          </div>
          <div className="card-line-field drug-before_meal">
            <label className="field-label ">Prieš valgį?</label>
            <button
              onClick={() => setBefore_meal((prevMeal) => !prevMeal)}
              className={before_meal ? "btn--yes btn--dot" : "btn--no btn--dot"}
            >
              {before_meal ? <Check2 /> : ""}
            </button>
          </div>
          <div className="card-line-field drug-morning">
            <label className="field-label ">Ryte</label>
            <button
              onClick={() => setMorning((prevMorning) => !prevMorning)}
              className={morning ? "btn--yes" : "btn--no"}
            >
              {morning ? <Check /> : ""}
            </button>
          </div>
          <div className="card-line-field drug-day">
            <label className="field-label ">Per pietus</label>
            <button
              onClick={() => setDay((prevDay) => !prevDay)}
              className={day ? "btn--yes" : "btn--no"}
            >
              {day ? <Check /> : ""}
            </button>
          </div>
          <div className="card-line-field drug-evening">
            <label className="field-label ">Vakare</label>
            <button
              onClick={() => setEvening((prevEvening) => !prevEvening)}
              className={evening ? "btn--yes" : "btn--no"}
            >
              {evening ? <Check /> : ""}
            </button>
          </div>
        </div>
        <div className="addRec">
          <button onClick={addRec} type="button" className="btn--add-rec">
            Pridėti
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rec;
