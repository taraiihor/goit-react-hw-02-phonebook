import React from 'react';
import ContactsList from './ContactsList';
import contact from './contacts.json';
import { v4 as uniqueId } from 'uuid';
class App extends React.Component {
  state = {
    contacts: contact,
    name: '',
    number: '',
  };
  addContact = (name, number) => {
    const contact = {
      id: uniqueId(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // toggleCompleted = contactId => {
  //   this.setStata(prevState => ({
  //     contacts: prevState.contacts.mapcontacts(contact => {
  //       if (contact.id === contactId) {
  //         return { ...contact, contacts: !contact.contacts };
  //       }
  //       return contact;
  //     }),
  //   }));
  // };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.addContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Ім’я
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Телефон
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Зберегти</button>
        </form>
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
