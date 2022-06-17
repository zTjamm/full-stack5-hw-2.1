import React from "react";

export default function Contact({contacts}){
        const contact = contacts.map((e, id)=><li key={id}>{e}</li>)
    return(
        <div>
            {contact}
        </div>
    )
}