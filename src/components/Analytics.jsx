import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Navbar from "./Navbar";
import axios from "axios";
import authService from "../services/Auth";

let arr = [];

export default function Analytics(props) {
  const [enquary, setEnquary] = useState([]);
  const [labels, setLables] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/enquary").then((res) => {
      const enquarydata = res.data;
      setEnquary(enquarydata);
      console.log(enquarydata);
      fun();
    });
  }, []);

  const fun = () => {
    let datacopy = [];
    let lablescopy = [];
    enquary.map((data) => {
      lablescopy.push(data.date);
      datacopy.push(data.enquaries);
    });
    setLables(lablescopy);
    setData(datacopy);
    console.log(lablescopy);
  };

  const Enquaries = {
    labels: labels,
    datasets: [
      {
        label: "Number of Submission",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: data
      }
    ]
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Navbar handleLogout={authService.handleLogout} prop={props} />

      <div className="upeercontainer">
        <input type="date" id="startdate" name="startdate" />
        <input type="date" id="enddate" name="startdate" />
      </div>

      <div>
        <Line
          data={Enquaries}
          options={{
            title: {
              display: true,
              text: "Analytics ",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    </>
  );
}
