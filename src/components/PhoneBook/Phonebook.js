import React, {Component} from 'react';
import s from "./Phonebook.module.css"
import Contact from "./Contact";


class Phonebook extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <h1>Phonebook</h1>
                <form className={s.form} onSubmit={this.props.clickBtn}>
                    <label>Name</label>
                    <input
                        onInput={this.props.onInputName}
                        value={this.props.state.name}
                        type="text"
                        name="name"
                        placeholder="Enter you name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <label>Number</label>
                    <input
                        onInput={this.props.onInputNumber}
                        value={this.props.state.number}
                        type="tel"
                        name="number"
                        placeholder="Enter you phone number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button  type='submit'>Add contact</button>
                </form>
                <h2>Contacts</h2>
                    <Contact
                        state={this.props.state}
                        onFilter={this.props.onFilter}
                    />
            </div>
        );
    }
}

export default Phonebook;