import React, {Component} from 'react';
import s from "./Phonebook.module.css"
import Contact from "./Contact";


class Phonebook extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <h1>Phonebook</h1>
                <div>
                    <h2>Name</h2>
                    <input
                        onInput={this.props.onInputName}
                        value={this.props.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <h2>Number</h2>
                    <input
                        onInput={this.props.onInputNumber}
                        value={this.props.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button onClick={this.props.clickBtn} type='button'>Add contact</button>
                </div>
                <h2>Contacts</h2>
                <Contact
                    contacts={this.props.state.contacts}
                />
            </div>
        );
    }
}

export default Phonebook;