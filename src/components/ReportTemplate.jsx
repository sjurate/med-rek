const ReportTemplate = ({ data }) => {
  return (
    <div
      className="list-card"
      id="list"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
        marginLeft: "24px",
      }}
    >
      <ul>
        <li
          className="list-line"
          style={{
            borderBottom: "0.05rem solid var(--main-black)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            fontSize: "12px",
          }}
        >
          <div
            className="li-drug-title line-box"
            style={{
              fontSize: "12px",
              textAlign: "center",
              borderTop: "0.05rem solid var(--main-black)",
              borderRight: "0.05rem solid var(--main-black)",
              borderLeft: "0.05rem solid var(--main-black)",
              padding: "0.5em 0",
              width: "140px",
            }}
          >
            Vaisto pavadinimas
          </div>
          <div
            className="li-drug-half line-box"
            style={{
              fontSize: "10px",
              textAlign: "center",
              borderTop: "0.05rem solid var(--main-black)",
              borderRight: "0.05rem solid var(--main-black)",
              borderLeft: "0.05rem solid var(--main-black)",
              padding: "8px 0",
              width: "35px",
            }}
          >
            1/2 tab?
          </div>
          <div
            className="li-drug-before_meal line-box"
            style={{
              fontSize: "10px",
              textAlign: "center",
              borderTop: "0.05rem solid var(--main-black)",
              borderRight: "0.05rem solid var(--main-black)",
              borderLeft: "0.05rem solid var(--main-black)",
              padding: "8px 0",
              width: "45px",
            }}
          >
            Prieš valgant?
          </div>
          <div
            className="li-drug-morning line-box"
            style={{
              fontSize: "10px",
              textAlign: "center",
              borderTop: "0.05rem solid var(--main-black)",
              borderRight: "0.05rem solid var(--main-black)",
              borderLeft: "0.05rem solid var(--main-black)",
              padding: "8px 0",
              width: "45px",
            }}
          >
            Ryte
          </div>
          <div
            className="li-drug-day line-box"
            style={{
              fontSize: "10px",
              textAlign: "center",
              borderTop: "0.05rem solid var(--main-black)",
              borderRight: "0.05rem solid var(--main-black)",
              borderLeft: "0.05rem solid var(--main-black)",
              padding: "8px 0",
              width: "45px",
            }}
          >
            Per pietus
          </div>
          <div
            className="li-drug-evening line-box"
            style={{
              fontSize: "10px",
              textAlign: "center",
              borderTop: "0.05rem solid var(--main-black)",
              borderRight: "0.05rem solid var(--main-black)",
              borderLeft: "0.05rem solid var(--main-black)",
              padding: "8px 0",
              width: "45px",
            }}
          >
            Vakare
          </div>
        </li>
        {data?.map((el) => (
          <li
            key={el.id}
            className="list-line"
            style={{
              borderBottom: "0.05rem solid var(--main-black)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "100%",
              height: "auto",
            }}
          >
            <div
              className="li-drug-title line-box"
              style={{
                textAlign: "left",
                borderTop: "0.05rem solid var(--main-black)",
                borderRight: "0.05rem solid var(--main-black)",
                borderLeft: "0.05rem solid var(--main-black)",
                padding: "8px 2px",
                width: "140px",
                height: "auto",
              }}
            >
              {el.title}
            </div>
            <div
              className="li-drug-half line-box"
              style={{
                fontSize: "8px",
                textAlign: "center",
                borderTop: "0.05rem solid var(--main-black)",
                borderRight: "0.05rem solid var(--main-black)",
                borderLeft: "0.05rem slid var(--main-black)",
                padding: "8px 0",
                width: "35px",
              }}
            >
              {el.half ? "Taip" : ""}
            </div>
            <div
              className="li-drug-before_meal line-box"
              style={{
                fontSize: "8px",
                textAlign: "center",
                borderTop: "0.05rem solid var(--main-black)",
                borderRight: "0.05rem solid var(--main-black)",
                borderLeft: "0.05rem solid var(--main-black)",
                padding: "8px 0",
                width: "45px",
              }}
            >
              {el.before_meal ? "Taip" : ""}
            </div>
            <div
              className="li-drug-morning line-box"
              style={{
                textAlign: "center",
                borderTop: "0.05rem solid var(--main-black)",
                borderRight: "0.05rem solid var(--main-black)",
                borderLeft: "0.05rem solid var(--main-black)",
                padding: "8px 0",
                width: "45px",
              }}
            >
              {el.morning ? "+" : ""}
            </div>
            <div
              className="li-drug-day line-box"
              style={{
                textAlign: "center",
                borderTop: "0.05rem solid var(--main-black)",
                borderRight: "0.05rem solid var(--main-black)",
                borderLeft: "0.05rem solid var(--main-black)",
                padding: "8px 0",
                width: "45px",
              }}
            >
              {el.day ? "+" : ""}
            </div>
            <div
              className="li-drug-evening line-box"
              style={{
                textAlign: "center",
                borderTop: "0.05rem solid var(--main-black)",
                borderRight: "0.05rem solid var(--main-black)",
                borderLeft: "0.05rem solid var(--main-black)",
                padding: "8px 0",
                width: "45px",
              }}
            >
              {el.evening ? "+" : ""}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportTemplate;
