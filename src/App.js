import React from 'react';
import ContactsList from './ContactsList';
import contact from './contacts.json';
import { v4 as uniqueId } from 'uuid';
import Filter from './Filter';
class App extends React.Component {
  state = {
    contacts: contact,
    name: '',
    number: '',
    filter: '',
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
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { name, number, filter } = this.state;
    const norm = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(norm),
    );

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
          <button type="submit" disabled={name === '' || number === ''}>
            Зберегти
          </button>
        </form>
        <Filter value={filter} onChangle={this.changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
