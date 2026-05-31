import { Component } from "react";
import { nanoid } from "nanoid";
import style from "./ContsactForm.module.css"


class ContactForm extends Component {
state = {
  name: "",
  number: ""
}


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();


    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };


    this.props.addContact(newContact)

    this.setState({
      name: "",
      number: ""
    })

  };



  render() {
    return (
      <>
     <form onSubmit={this.handleSubmit} className={style.form}>
  <label className={style.label}>
    Name
    <input
      className={style.input}
      onChange={this.handleChange}
      value={this.state.name}
      type="text"
      name="name"
    />
  </label>

  <label className={style.label}>
    Number
    <input
      className={style.input}
      type="tel"
      name="number"
      value={this.state.number}
      onChange={this.handleChange}
    />
  </label>

  <button className={style.btn} type="submit">
    Add contact
  </button>
</form>
      </>
    );
  }
}

export default ContactForm;
