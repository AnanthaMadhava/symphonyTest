import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    name: "",
    nameError: "",
    address: "",
    addressError: "",
    city: "",
    cityError: "",
    country: "",
    countryError: "",
    pincode: "",
    pincodeError: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        name: "",
        nameError: "",
        address: "",
        addressError: "",
        city: "",
        cityError: "",
        country: "",
        countryError: "",
        pincode: "",
        pincodeError: ""
      });
  };

  render() {
    return (
      <form>
        <br />
        <TextField
          name="name"
          hintText="Name"
          floatingLabelText="Name"
          value={this.state.name}
          onChange={e => this.change(e)}
          errorText={this.state.nameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="address"
          hintText="Address"
          floatingLabelText="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
          errorText={this.state.addressError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="city"
          hintText="City"
          floatingLabelText="City"
          value={this.state.city}
          onChange={e => this.change(e)}
          errorText={this.state.cityError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="country"
          hintText="Country"
          floatingLabelText="Country"
          value={this.state.country}
          onChange={e => this.change(e)}
          errorText={this.state.countryError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="pincode"
          hintText="Pincode"
          floatingLabelText="Pincode"
          value={this.state.pincode}
          onChange={e => this.change(e)}
          errorText={this.state.pincodeError}
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
