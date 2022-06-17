import React, {Component} from 'react'
import Phonebook from './components/PhoneBook/Phonebook'

export default class App extends Component {
    state = {
        contacts: [],
        name: ''
    }

    // onClickInput = (e) => {
    //     const newName = e.target.value;
    //     console.log(this.state.name)
    //     this.setState((prevState) => ({
    //         name: newName
    //     }))
    // }



    render() {
        return (
            <div>
                <Phonebook
                    state={this.state}
                    // onClickInput={this.onClickInput}
                />
            </div>
        )
    }
}

