import React from "react";
import s from "./Contact.module.css"
import {nanoid} from "nanoid";

export default function Contact({state, onFilter}) {
    let itemId = nanoid();
    let filterContacts = state.contacts.filter(value => value.name.toLowerCase().includes(state.filter.toLowerCase()));
    const contact =filterContacts.map((e,id)=><li name={e.name} id={itemId} key={id}>{e.name}: {e.number}</li>)
    return (
        <div className={s.wrapper}>
            <p>Find contacts by name:</p>
            <input
                onInput={onFilter}
                value={state.filter}
                type="text"
                name='filter'
                title='search name'/>
            {contact}
        </div>
    )
}