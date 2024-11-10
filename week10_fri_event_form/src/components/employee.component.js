import React, { useRef } from 'react';

const Employee = () => {
  // Define refs to reference form fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);

  const cities = [
    "Calgary",
    "Edmonton",
    "Red Deer",
    "Lethbridge",
    "St. Albert"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access values from refs
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
    };
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <h3> Employee - Uncontrolled Form </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name:</label>
        <input 
          type="text"
          id="first_name"
          name="first_name"
          ref={firstNameRef}
          placeholder="Enter First name" 
          required 
        />
        <br/>

        <label htmlFor="last_name">Last Name:</label>
        <input 
          type="text" 
          id="last_name" 
          name="last_name" 
          ref={lastNameRef}
          placeholder="Enter Last name" 
        />
        <br/>

        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email" 
          name="email" 
          ref={emailRef}
          placeholder="Enter Email" 
        />
        <br/>

        <label htmlFor="city">City:</label>
        <select name="city" ref={cityRef}>
          <option value="">Select a city</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        
        <br/>
        <button type="submit" name="btnSubmit">Submit</button>
      </form>
    </div>
  );
};

export default Employee;
