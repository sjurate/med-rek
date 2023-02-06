import React, { useState, useEffect } from "react";
import List from "./List";
import Rec from "./Rec";

const Main = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(true);

  // useEffect(() => {
  //   // declare the async data fetching function
  //   const fetchData = async () => {
  //     // get the data from the api
  //     const data = await fetch("https://yourapi.com");
  //     // convert the data to json
  //     const json = await response.json();

  //     // set state with the result
  //     setData(json);
  //   };

  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await JSON.parse(localStorage.getItem("recs"));
      if (!data) return;
      setData(data);
    };
    fetchData().catch(console.error);

    // const data1 = JSON.parse(localStorage.getItem("recs"));
    // if (!data1) console.log(data1);
    // setData((prevData) => data1);
  }, []);

  useEffect(() => {
    console.log(data);
    if (data !== null) localStorage.setItem("recs", JSON.stringify(data));
  }, [data, change]);

  const deleteSingleRec = (id) => {
    setChange((prev) => !prev);
    const selectedEl = data.findIndex((el) => el.id === id);
    data.splice(selectedEl, 1);
    setData(data);
  };

  return (
    <div className="main page">
      <Rec data={data} setData={setData} />
      <div className="list">
        <List data={data} setData={setData} deleteSingleRec={deleteSingleRec} />
      </div>
    </div>
  );
};

export default Main;
