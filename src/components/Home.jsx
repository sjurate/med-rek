import React from "react";
import img from "../assets/img/pills.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home page">
      <div className="about">
        <h2>Padėk suprasti!</h2>
        <h5>
          Padėk pacientui susigaudyti vaistų labirinte. Skirk vaistus
          suprantamai!
        </h5>
        <p>
          Taisyklingas medikamentų vartojimas gali pagerinti sveikatos kokybę ir
          prailginti gyvenimo trukmę. Deja, rekomendacijų laikymasis siekia
          <span style={{ fontStyle: "italic" }}> tik apie 50% </span>atvejų.
        </p>
        <p>
          Viena priežasčių - ta, kad pacientai, ypatingai vyresnio amžiaus,
          sunkiai supranta painias, skirtingų gydytojų rekomendacijas. Juk ne
          retu atveju žmogus vartoja ir daugiau nei kelis skirtingus vaistus.
          Skirkime keletą minučių, kad gydymas būtų efektyvesnis!
        </p>
        <NavLink className="link" to="/medrek/recs" end>
          Kurti rekomendacijas
        </NavLink>
      </div>
      <div className="intro-img">
        <img src={img} alt="pills.jpg" />
      </div>
    </div>
  );
};

export default Home;
