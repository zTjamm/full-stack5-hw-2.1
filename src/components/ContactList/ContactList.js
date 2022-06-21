import React from "react";
import s from "./ContactList.module.css"

export default function ContactList({contacts, onDelForId}) {
    const render = contacts.map((contact)=><li className={s.item} key={contact.id}><p>{contact.name}: {contact.number}</p><button className={s.btn} id={contact.id} type="button" onClick={()=>{onDelForId(contact.id)}}>Delete</button></li>)
        return(
            <div>
                <ul>
                    {render}
                </ul>
            </div>
        )
}