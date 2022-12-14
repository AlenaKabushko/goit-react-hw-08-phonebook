import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
    gap: 8px;
    width: 400px;
    border: 1px solid black;
    box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 10px;
`

export const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
`   

export const InputStyle = styled(Field)`
    font-size: 14px;
    margin-top: 8px;
    padding: 8px;
    width: 350px;
`

export const ButtonStyle = styled.button`
    font-size: 14px;
    padding: 10px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid grey;
    box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 5px;
    background-color: #b3c6e5;
`