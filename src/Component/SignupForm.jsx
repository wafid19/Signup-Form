import React from "react";
import Form from "./Form";

const initValue = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
};


class SignupForm extends React.Component{
    
    state = {
        values: initValue,
        agreement: false
    };

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value 
            }
        });
    };

  handleAgreement = event =>{

    this.setState({
        agreement: event.target.checked
    });
  };

  handleSubmit = event =>{
    event.preventDefault();
    console.log(this.state.values);

    event.target.reset();
    this.setState({ values: initValue, agreement: false});
  };

  // validate = () => {
  //   const errors = {}
  //   const {values: {name, email, password, gender, birthDate}} = this.state

  //   if (!name) {
  //     errors.name = 'Please Provide Your Name'
  //   }
  // }

  render(){
    return(
        <div>
           <h1>Sign Up</h1>
           <Form
             values={this.state.values}
             agreement={this.state.agreement}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             handleAgreement={this.handleAgreement}
           
           />
        </div>
    )
  }

}

export default SignupForm