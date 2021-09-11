import React from "react";
import PropTypes from "prop-types";
import s from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import contactsActions from "../../redux/contacts/contacts-actions";

function Filter({ title }) {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    return (
        <>
            <h2 className={s.title}>{title}</h2>
            <label className={s.label}>
                Find contacts by name
                <input type="text" value={value} name="filter" onChange={e => dispatch(contactsActions.changeFilter(e.target.value))} className={s.input}></input>
            </label>
        </>
    )
}


Filter.propTypes = {
    title: PropTypes.string,
}
export default Filter;