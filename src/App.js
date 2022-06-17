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
    clickBtn = () => {
        if (this.state.name === "") {
            alert("Заполните Имя")
        } else {
            this.setState((prevState => ({
                contacts: [...this.state.contacts, this.state.name],
                name: ""
            })))
        }
    }

    render() {
        return (
            <div>
                <Phonebook
                    state={this.state}
                    onInputName={this.onInputName}
                    clickBtn={this.clickBtn}
                />
            </div>
        )
    }
}

