import React from "react";

export default function ContactList({contacts}) {
    const render = contacts.map((contact)=><li key={contact.id}>{contact.name}: {contact.number}</li>)
        return(
            <div>
                {render}
            </div>
        )
}