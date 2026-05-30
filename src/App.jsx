import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import { Component } from "react";
import Filter from "./components/Filterr/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      // name: event.target.value
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
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
      };
    });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <>
        <h1>Phone</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <br />
            <input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
            ></input>
          </label>

          <br />
          <label>
            {" "}
            Number
            <br />
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

        
          <br />
          <button type="submit">Add contact</button>
        </form> */}
        <Filter onChange={this.handleChange} value={this.state.filter} />
        {/* <label>
          Find contact by name
          <br />
          <input type="text" name="filter" onChange={this.handleChange} />
        </label> */}
        Contacts
        <ul>
          {filterContact.map((contact, index) => {
            return (
              <li key={index}>
                {contact.name} : {contact.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
