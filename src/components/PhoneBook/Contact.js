import React from "react";
import {nanoid} from "nanoid";

export default function Contact({contacts}) {
    let itemId= nanoid();
    const contact = contacts.map((e, id) => <li name={e} id={itemId} key={id}>{e}</li>)
    return (
        <div>
            {contact}
        </div>
    )
}