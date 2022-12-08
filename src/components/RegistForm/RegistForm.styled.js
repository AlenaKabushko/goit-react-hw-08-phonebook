import styled from 'styled-components';

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 32px;
    margin-left: auto;
    margin-right: auto;
    gap: 24px;
    width: 600px;

    border: 1px solid black;
    box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 10px;
`

export const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;
`

export const InputStyle = styled.input`
    font-size: 20px;
    margin-top: 8px;
    padding: 8px;
`

export const ButtonStyle = styled.button`
    font-size: 20px;
    padding: 10px;
    border: none;
    font-weight: 700;
    cursor: pointer;

    border: 1px solid grey;
    box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 5px;
    background-color: #b3c6e5;
`