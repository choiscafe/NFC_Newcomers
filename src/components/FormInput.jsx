import './formInput.css';
import { useState, useEffect } from "react"

function FormInput() {

  const initialValues = {
    name: "",
    gender: "",
    dateOfBirth: "",
    community: "",
    contactNumber: "",
    emailAddress: "",
    kakaoId: "",
    boroughsOfNewYorkCity: "",
    baptism: ""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [isSubmit, formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameRegex = /^[a-zA-Z_ ]*$/i;
    const phoneRegex = /^[0-9]{10,14}$/i;

    if (!values.name) {
      errors.name = "*This field is required";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "*A valid name must be entered";
    }

    if (!values.email) {
      errors.email = "*This field is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "*A valid email format must be entered";
    }

    if (!values.contactNumber) {
      errors.contactNumber = "*This field is required";
    } else if (!phoneRegex.test(values.contactNumber)) {
      errors.contactNumber = "*A valid number must be entered";
    }
    return errors;
  };

  return (

    <div className="formInput">

      <form onSubmit={handleSubmit}>
        <div className="ui-divider"></div>
        <div className="ui-form">

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
              required="true"
            />
          </div>
          <span className="error">{formErrors.name}</span>

          <div className="field">
            <label>Gender</label>
            <select
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
            >
              <option value="select">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="field">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formValues.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Community</label>
            <select
              name="community"
              value={formValues.community}
              onChange={handleChange}
            >
              <option value="select">Select...</option>
              <option value="student">Student</option>
              <option value="youngAdult">Young Adult</option>
              <option value="marriedCouple">Married Couple</option>
            </select>
          </div>

          <div className="field">
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={formValues.contactNumber}
              onChange={handleChange}
              required="true"
            />
          </div>
          <span className='error'>{formErrors.contactNumber}</span>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required="true"
            />
          </div>
          <span className='error'>{formErrors.email}</span>

          <div className="field">
            <label>Kakao ID</label>
            <input
              type="text"
              name="kakaoId"
              placeholder="Kakao ID"
              value={formValues.kakaoId}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Boroughs of New York City</label>
            <select
              name="boroughsOfNewYorkCity"
              value={formValues.boroughsOfNewYorkCity}
              onChange={handleChange}
            >
              <option value="select">Select...</option>
              <option value="manhattan">Manhattan</option>
              <option value="queens">Queens</option>
              <option value="brooklyn">Brooklyn</option>
              <option value="bronx">Bronx</option>
              <option value="statenIsland">Staten Island</option>
              <option value="newJersey">New Jersey</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="field">
            <label>Baptism</label>
            <select
              name="baptism"
              value={formValues.baptism}
              onChange={handleChange}
            >
              <option value="select">Select...</option>
              <option value="baptized">I am Baptized</option>
              <option value="notBaptized">I am not Baptized</option>
            </select>
          </div>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui-message-success">Thank you for submitting!</div>
      ) : (
        null
      )}
    </div>
  );
}

export default FormInput