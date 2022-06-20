import React, {Component} from 'react'
import Phonebook from './components/PhoneBook/Phonebook'

export default class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
    }
    onInputName = (e) => {
        const {value} = e.currentTarget;
        this.setState({
                name: value
            }
        )
    }
    onInputNumber = (e) => {
        const {value} = e.currentTarget;
        this.setState({
                number: value
            }
        )
    }
    clickBtn = (e) => {
        e.preventDefault();
        let a = {id: this.state.contacts.length + 1, name: this.state.name, number: this.state.number}
        if (this.state.name === '' || this.state.number === "") {
            alert("Заполните Имя и телефон")
        } else {
            this.setState((prevState => ({
                contacts: [...this.state.contacts, a],
                name: "",
                number: ''
            })))
        }
    }
    onFilter = (e) => {
        this.setState({filter: e.currentTarget.value})
    }
    render() {
        return (
            <div>
                <Phonebook
                    state={this.state}
                    onInputName={this.onInputName}
                    onInputNumber={this.onInputNumber}
                    clickBtn={this.clickBtn}
                    onFilter={this.onFilter}
                />
            </div>
        )
    }
}