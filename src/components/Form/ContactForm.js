import React, { Component } from 'react';
import './ContactForm.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className="item__form" onSubmit={this.handleSubmit}>
        <label>
          Ім’я
          <input
            className="item__input"
            type="text"
            name="name"
            placeholder="Jony Dep"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Телефон
          <input
            className="item__input"
            type="text"
            name="number"
            placeholder="111-11-11"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={name === '' || number === ''}>
          Зберегти контакт
        </button>
      </form>
    );
  }
}
export default ContactForm;
