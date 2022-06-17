import React, {Component} from 'react'
import Phonebook from './components/PhoneBook/Phonebook'

export default class App extends Component {
    state = {
        contacts: [],
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
    clickBtn = () => {
        let a = [this.state.name, this.state.number];
        let b = a.join(": ")
        if (this.state.name === "" || this.state.number === "") {
            alert("Заполните Имя и телефон")
        } else {
            this.setState((prevState => ({
                contacts: [...this.state.contacts, b],
                name: "",
                number: ''
            })))
        }
    }

    render() {
        return (
            <div>
                <Phonebook
                    state={this.state}
                    onInputName={this.onInputName}
                    onInputNumber={this.onInputNumber}
                    clickBtn={this.clickBtn}
                />
            </div>
        )
    }
}

