import styled from 'styled-components';

export const LogBox = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const LogButtonStyle = styled.button`
    font-size: 14px;
    padding: 5px;
    border: none;
    font-weight: 400;
    cursor: pointer;

    border: 1px solid grey;
    box-shadow: rgb(128 128 128 / 28%) 0px 0px 3px 5px;
    background-color: #b3c6e5;
`

export const LogText = styled.p`
    font-size: 20px;
    font-weight: 700;
`