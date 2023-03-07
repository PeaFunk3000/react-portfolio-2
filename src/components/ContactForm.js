import React, { useState } from "react";

export default function ContactForm() {
// CODE FOR PORT 5000 NODE SERVER, IN GITIGNORE

  // const [status, setStatus] = useState("Submit");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  // let response = await fetch("http://localhost:5000/contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json;charset=utf-8",
  //   },
  //   body: JSON.stringify(details),
  // });
  // setStatus("Submit");
  // let result = await response.json();
  // alert(result.status);

  // MOCK RESPONSE CODE FOR CHALLENGE SUBMISSION

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    alert(
      "Thank you for your message " +
        name +
        "\nMessage: " +
        message +
        "\nI will be back in touch on " +
        email
    );
    event.preventDefault();

    //clear all input values in the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="formBody" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          required
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </div>
      <button id="send" type="submit">
        Submit
        {/* {status} */}
      </button>
    </form>
  );
}
