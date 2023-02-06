import React from "react";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import Line from "./Line";
import ReportTemplate from "./ReportTemplate";

const List = ({ data, setData, deleteSingleRec }) => {
  const [modal, setModal] = useState(false);

  const reportTemplateRef = useRef(null);

  const deleteAllRecs = () => {
    localStorage.removeItem("recs");
    setData([]);
  };

  const handleGeneratePdf = () => {
    setModal((prevModal) => true);
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");
    // Setting inner HTML
    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="list-card" id="list">
      <ul>
        <li className="list-line">
          <div className="li-drug-title line-box">
            Vaisto
            <br />
            pavadinimas
          </div>
          <div className="li-drug-half line-box">
            1/2
            <br />
            tab?
          </div>
          <div className="li-drug-before_meal line-box">
            Prieš
            <br />
            valgį?
          </div>
          <div className="li-drug-morning line-box">Ryte</div>
          <div className="li-drug-day line-box">Per pietus</div>
          <div className="li-drug-evening line-box">Vakare</div>
        </li>
        {data?.map((el) => (
          <Line key={el.id} el={el} deleteSingleRec={deleteSingleRec} />
        ))}
      </ul>
      <div className="list-btns">
        <button onClick={deleteAllRecs} className="btn--delete-all-recs">
          Išvalyti
          <br />
          rekomendacijas
        </button>
        <button onClick={handleGeneratePdf} className="btn--save-all-recs">
          Išsaugoti
        </button>
      </div>
      <div className={modal ? "modal-shown" : "modal-hidden"}>
        <button className="close-modal" onClick={closeModal}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div ref={reportTemplateRef}>
          <ReportTemplate data={data} />
        </div>
      </div>
      <div
        className={modal ? "overlay-shown" : "overlay-hidden"}
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default List;
