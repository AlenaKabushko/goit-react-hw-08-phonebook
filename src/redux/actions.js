import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
    return {
        type: 'contact/addContact',
        payload: {
            id: nanoid(4),
            name,
            number,
    }}
};

export const deleteContact = id => {
    return {
        type: 'contact/deleteContact',
        payload: id,
    }
};

export const setNameFilter = value => {
    return {
        type: 'filter/setNameFilter',
        payload: value,
    }
}