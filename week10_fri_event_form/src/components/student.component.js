import React, { Component } from 'react';

export default class Student extends Component {

  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      city: "" // Add city to state
    }
    this.handleOnChange = this.handleOnChange.bind(this); // bind the method to the class
    this.handleSubmit = this.handleSubmit.bind(this); // bind the submit method to the class
    this.cities = [
      "Calgary",
      "Edmonton",
      "Red Deer",
      "Lethbridge",
      "St. Albert"
    ];
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Event Fired");
    console.log(this.state);
  }

  // Event is a function that is called when a user interacts with the form
  render() {
    return (
      <div>
        <h3> Student - Controlled Form </h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <input 
            type="text"
            id="first_name"
            name="first_name"
            value={this.state.first_name} 
            onChange={this.handleOnChange} 
            placeholder='Enter First name' 
            required 
          />
          <br/>
          <label htmlFor="last_name">Last Name:</label>
          <input 
            type="text" 
            id="last_name" 
            name="last_name" 
            value={this.state.last_name} 
            onChange={this.handleOnChange} 
            placeholder='Enter Last name' 
          />
          <br/>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            id="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleOnChange} 
            placeholder='Enter Email' 
          />
          <br/>
          <label htmlFor="city">City:</label>


          {/* Add a select dropdown for city */}
          <select 
            name="city" 
            value={this.state.city} 
            onChange={this.handleOnChange}
          >
            <option value="">Select a city</option>
            {this.cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>


          <br/>
          <button type="submit" name="btnSubmit">Submit</button>
        </form>
      </div>
    );
  }
}
