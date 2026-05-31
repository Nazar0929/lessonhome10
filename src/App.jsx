
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import { Component } from "react";
import Filter from "./components/Filterr/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  
    filter: "",
  };


handleDelete = (contactId) => {
  this.setState((prevState) => ({
  contacts: prevState.contacts.filter((contact)=>  contact.id !== contactId)
  }))
}

handleFilter = (event) => {
this.setState({
  filter: event.target.value
})
}

handleAdd = (newContact)=> {
  const dublicateName = this.state.contacts.some(({name}) => {
      return name.toLowerCase() === newContact.name.toLowerCase()

    
    })

    if (dublicateName) {
      alert(`${newContact.name} вже існує`)
      return;
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
       
      };
    });

}

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <>
        <h1>Phone</h1>
        <ContactForm
          addContact={this.handleAdd}
        />
  
        <Filter onChange={this.handleFilter} value={this.state.filter} />

        Contacts
        <ContactList contacts={filterContact} onDelete={this.handleDelete}/>
       
      </>
    );
  }
}

export default App;
