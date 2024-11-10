import React, { Component } from 'react';
import '../DataEntry.css';

export default class DataEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email : "",
      name : "",
      address : "",
      address2 : "",
      city: "",
      province: "",
      postalCode: "",
      submitData: null
      
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.provinces = [
      "Alberta (AB)",
      "British Columbia (BC)",
      "Manitoba (MB)",
      "New Brunswick (NB)",
      "Newfoundland and Labrador (NL)",
      "Nova Scotia (NS)",
      "Ontario (ON)",
      "Prince Edward Island (PE)",
      "Quebec (QC)",
      "Saskatchewan (SK)",
      "Northwest Territories (NT)",
      "Nunavut (NU)"
    ];
  }

    handleOnChange(e) {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();

      this.setState({
        submitData: {
          email: this.state.email,
          name: this.state.name,
          address: this.state.address,
          address2: this.state.address2,
          city: this.state.city,
          province: this.state.province,
          postalCode: this.state.postalCode
        }
      });
    }
  


  render() {
    return (
      <>
      <div className = "form-container">
        <h1>Data Entry Form</h1>
        <form onSubmit = {this.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlfor="Email">Email</label> 
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="Enter Email" required />
            </div>
            <div className="form-group">
              <label htmlfor="Name">Name</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Full Name" required />
            </div> 
          </div>


        <div className="form-group full-width">
          <label htmlfor="Address">Address</label>
          <input type="text" id="address" name="address" value={this.state.address} onChange={this.handleOnChange} placeholder="Enter Address" required />
        </div>

        <div className="form-group full-width">
          <label htmlfor="Address 2">Address 2</label>
          <input type="text" id="address2" name="address2" value={this.state.address2} onChange={this.handleOnChange} placeholder="Enter Address 2" required />
        </div>

        <div className="form-row">

          <div className="form-group">
            <label htmlfor="City">City</label>
            <input type="text" id="city" name="city" value={this.state.city} onChange={this.handleOnChange} placeholder="Enter City" required />
          </div>

          <div className="form-group">
            <label htmlfor="Province">Province</label>
            <select name="province" value={this.state.province} onChange={this.handleOnChange}>
              <option value="">Select a province</option>
              {this.provinces.map((province, index) => (
                <option key={index} value={province}>{province}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlfor="Postal Code">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" value={this.state.postalCode} onChange={this.handleOnChange} placeholder="Enter Postal Code" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlfor="checkbox">Agree terms & condition?</label>
          <input type="checkbox" id="checkbox" name="checkbox" required />
        </div>

        <button type="submit" name="btnSubmit">Submit</button>
    </form>
  </div>
  {/* Display the submitted data */}
        {this.state.submitData && (
          <div className="submitted-data">
            <h3>Submitted Information:</h3>
            <p><strong>Email:</strong> {this.state.submitData.email}</p>
            <p><strong>Full Name:</strong> {this.state.submitData.name}</p>
            <p><strong>Address:</strong> {this.state.submitData.address}</p>
            {this.state.submitData.address2 && (
              <p><strong>Address 2:</strong> {this.state.submitData.address2}</p>
            )}
            <p><strong>City:</strong> {this.state.submitData.city}</p>
            <p><strong>Province:</strong> {this.state.submitData.province}</p>
            <p><strong>Postal Code:</strong> {this.state.submitData.postalCode}</p>
          </div>
        )}
</>
    
    );
  }
}
