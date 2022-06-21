import React, {Component} from 'react';
import "./App.css"
// import {nanoid} from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default class App extends Component {
    state = {
        contacts: [
            {id: 1, name: "Mikl", number: "555-55-55"},
            {id: 2, name: "Alesha", number: "777-77-77"},
            {id: 3, name: "Elena", number: "999-99-99"}
        ],
        filter: ""
    }
    onInputFilter = (e) => {
        const value = e.currentTarget.value;
        this.setState({filter: value})
    }
    onSubmit = (data) => {
        const tryName = this.state.contacts.map(c => c.name.toLowerCase())
        data.id = this.state.contacts.length + 1;
        if (tryName.includes(data.name.toLowerCase())) {
            alert(`${data.name} Уже занято, введите другое имя!`)
        } else {
            this.setState({contacts: [...this.state.contacts, data]})
        }
    }
    onFilter = () => {
        const {filter, contacts} = this.state;
        if (filter) {
            return contacts.filter(name => name.name.toLowerCase().includes(filter));
        } else {
            return contacts;
        }
    }
    onDelForId=(curentId)=>{
        const list = this.state.contacts.filter(({id})=>id !== curentId);
        this.setState({contacts: list});
    }

    render() {
        const filteredContacts = this.onFilter();
        return (
            <div className="wrapper">
                <h1>Phonebook</h1>
                <ContactForm
                    state={this.state}
                    onSubmit={this.onSubmit}
                />
                <h2>Contacts</h2>
                <Filter
                    state={this.state}
                    onInputFilter={this.onInputFilter}
                />
                <ContactList
                    contacts={filteredContacts}
                    onDelForId={this.onDelForId}
                />
            </div>
        )
    }
}