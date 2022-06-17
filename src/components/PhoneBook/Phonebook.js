import React, {Component} from 'react';
import s from "./Phonebook.module.css"
import Contact from "./Contact";

class Phonebook extends Component {
    state ={
        contact : ["mikl", "gosha"],
        name: ""
    }
    onInputName=(e)=>{
        const{name, value}= e.currentTarget;
        console.log(name, value)
        this.setState({name: value});
        e.currentTarget.value= "";
    }
    clickBtn=()=>{
        console.log(this.state.contact)
        this.setState((prevState=>({
            contact: [...this.state.contact, this.state.name]
        })))
    }
    render() {
        return (
            <div className={s.wrapper}>
                <h1>Phonebook</h1>
                <div>
                    <h2>Name</h2>
                    <input
                        onBlur={this.onInputName}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <button onClick={this.clickBtn} type='button'>Add contact</button>
                </div>
                <h2>Contacts</h2>
                <Contact  contacts={this.state.contact}/>
            </div>
        );
    }
}

export default Phonebook;