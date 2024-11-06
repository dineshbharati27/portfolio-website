import React from "react";
import "../Components/Global.css";

const handlecolorName = () => {
  let naam = document.getElementById("naam");
  let borderColorName = document.getElementById("borderColorName");
  naam.style.color = "#FE7878";
  borderColorName.style.border = "1px solid #FE7878";
};

const handlecolorEmail = () => {
  let email = document.getElementById("email");
  let borderColorEmail = document.getElementById("borderColorEmail");
  email.style.color = "#1B74E4";
  borderColorEmail.style.border = "1px solid #1B74E4";
};

const handlecolorMessage = () => {
  let message = document.getElementById("message");
  let borderColorMessage = document.getElementById("borderColorMessage");
  message.style.color = "#CE65F3";
  borderColorMessage.style.border = "1px solid #CE65F3";
};

const Contact = ({ bgcolor, darkmode }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "6933971e-34ea-4fd5-bba7-86bc77ccfed9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className={`${
        darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
      } p-10 rounded-lg flex flex-col gap-10`}
    >
      <h1
        className="text-3xl font-bold"
        style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}
      >
        Contact
      </h1>

      <div
        className="flex flex-col lg:w-11/12 sm:w-full gap-2 p-5 rounded-lg"
        style={{
          background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
        }}
      >
        <div className="my-3">
          <h1
            className="text-2xl"
            style={{
              color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
            }}
          >
            Have a project or idea in mind?
          </h1>{" "}
          <h1
            className="text-2xl font-bold"
            style={{
              color: `${bgcolor === "white" ? "#000000" : "white"}`,
            }}
          >
            Let's collaborate and make it a reality!
          </h1>
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label
              id="naam"
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              Name*
            </label>

            <input
              type="text"
              className="w-10/12 p-2 border border-gray-300 outline-none rounded"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
                color: `${bgcolor === "white" ? "#000000" : "white"}`,
              }}
              onClick={handlecolorName}
              name="name"
              id="borderColorName"
              required
            />
          </div>

          <div className="my-10 flex flex-col">
            <label
              id="email"
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              Email*
            </label>

            <input
              type="text"
              className="w-10/12 p-2 border border-gray-300 outline-none rounded"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
                color: `${bgcolor === "white" ? "#000000" : "white"}`,
              }}
              onClick={handlecolorEmail}
              name="email"
              id="borderColorEmail"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              id="message"
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              Message*
            </label>
            <textarea
              className="w-10/12 p-2 border border-gray-300 outline-none rounded"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
                color: `${bgcolor === "white" ? "#000000" : "white"}`,
              }}
              onClick={handlecolorMessage}
              name="message"
              id="borderColorMessage"
              rows="4"
              required
            />
          </div>

          <button
            className="my-2 w-32 h-11 hover:bg-blue-500 hover:text-white font-bold rounded-lg btn-submit border border-blue-500"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              color: `${bgcolor === "white" ? "#000000" : "white"}`,
            }}
            type="submit"
          >
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
