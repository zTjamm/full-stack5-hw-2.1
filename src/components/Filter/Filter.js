import React from "react";
import s from "./Filter.module.css"

export default function Filter({state, onInputFilter}) {
    return(
        <div className={s.items}>
            <label>Find contacts by name</label>
            <input
                onInput={onInputFilter}
                type="text"
                name="filter"
                value={state.filter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"

            />
        </div>
    )

}