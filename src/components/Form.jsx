import React, { useState } from "react";
import axios from "axios";

export default function Form(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState([]);

  const validate = (firstname, lastname, email, message) => {
    if (firstname !== "" && lastname !== "" && email !== "" && message !== "") {
      if (
        !firstname.match(/[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/) ||
        !lastname.match(/[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/)
      ) {
        alert("Only Letters are Allowed in Name field ");
        return false;
      } else if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )
      ) {
        alert("Enter the Valid Email ");
        return false;
      }

      return true;
    }

    alert("All fields are required ");
    return false;
  };

  const handleClick = () => {
    if (validate(firstname, lastname, email, message)) {
      let obj = {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Message: message
      };
      console.log(obj);

      axios.post("http://localhost:3000/contact_us", obj).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    }

    props.prop.history.push("/analytics");
  };

  return (
    <>
      <div className="form">
        <h1 className="title">Contact Us form</h1>
        <div className="listTitle">
          FirstName
          <input
            name="firstname"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            className="inputItem"
            type="text"
          />
        </div>

        <div className="listTitle">
          LastName{" "}
          <input
            name="firstname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            className="inputItem"
            type="text"
          />
        </div>

        <div className="listTitle">
          Email{" "}
          <input
            name="firstname"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="inputItem"
            type="text"
          />
        </div>

        <div className="listTitle">
          Message :{" "}
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="inputmessage"
            type="text"
          />
        </div>

        <div className="addButton">
          <button className="button" onClick={handleClick}>
            Submit{" "}
          </button>
        </div>
      </div>
    </>
  );
}
