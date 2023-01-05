import './App.css';
import TypeIt from 'typeit-react';
import FormInput from './components/FormInput';
import { useState } from "react"

function App() {

  const [values, setValues] = useState({
    name: "",
    gender: "",
    dateOfBirth: "",
    community: "",
    contactNumber: "",
    emailAddress: "",
    kakaoId: "",
    boroughsOfNewYorkCity: "",
    baptism: ""
  })

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Name must be entered",
      label: "Name",
      pattern: "^[a-zA-Z_ ]*$",
      required: true
    },
    {
      id: 2,
      name: "gender",
      type: "text",
      placeholder: "Gender",
      errorMessage: "Genders must be entered",
      label: "Gender",
      pattern: "^[a-zA-Z_ ]*$",
      required: true
    },
    {
      id: 3,
      name: "dateOfBirth",
      type: "date",
      placeholder: "Date of Birth",
      label: "Date of Birth",
    },
    {
      id: 4,
      name: "community",
      type: "text",
      placeholder: "Community",
      errorMessage: "Community must be entered",
      label: "Community",
      required: true
    },
    {
      id: 5,
      name: "contactNumber",
      type: "text",
      placeholder: "Contact Number",
      errorMessage: "Please provide a valid number",
      label: "Contact Number",
      pattern: "^[0-9]{10,14}$",
      required: true
    },
    {
      id: 6,
      name: "emailAddress",
      type: "text",
      placeholder: "Email Address",
      errorMessage: " It should be a valid email address",
      label: "Email Address",
      required: true
    },
    {
      id: 7,
      name: "kakaoId",
      type: "text",
      placeholder: "Kakao ID",
      label: "Kakao ID",
    },
    {
      id: 8,
      name: "boroughsOfNewYorkCity",
      type: "text",
      placeholder: "Boroughs of New York City",
      label: "Boroughs of New York City",
      required: true
    },
    {
      id: 9,
      name: "baptism",
      type: "text",
      placeholder: "Baptism",
      errorMessage: "Please enter if you have received Baptism",
      label: "Baptism",
      required: true
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  console.log(values)

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images.squarespace-cdn.com/content/v1/5b0efe015cfd793504d5d5ab/1534993905752-5LYTBKUJFBNKH06TCOYR/NFC_HORIZONTAL_LOCKUP_white_lg.png?format=1500w" className="App-logo" alt="logo" />
        <h1>
          <TypeIt>NEWCOMERS REGISTRATION FORM</TypeIt>
        </h1>

        <h3>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("Hello, New family members. Welcome.")
                .pause(750)
                .delete(8, { delay: 1000 })
                .type("Shalom!")
                .go();

              // Remember to return it!
              return instance;
            }}
          />
        </h3><br></br>
        <p>
          We welcome you in the name of the Lord.<br></br> If you are new to New Frontier Church (NFC), please fill out and submit the form below.
        </p>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
