import styled from 'styled-components';

export default styled.div`
    margin-bottom: 20px;
    border: 5px solid rgb(250, 240, 145);
    background-color: rgba(138, 202, 100, 0.8);
    border-radius: 5px;
    width: 30%;
    text-transform: uppercase;
    .types {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 0 10%;
    }
    .imgContainer {
        border-radius: 3px;
        border: 5px solid rgb(250, 240, 145);
        background-color: rgba(225, 225, 225, 0.5);
        padding: 2% 2%;
        margin: 0 5%;
    }
    .underline {
        text-decoration: underline;
    }
    .stats {
        padding: 0 10%;
        justify-content: space-between;
        text-align: left;
        display: flex;
        flex-flow: row wrap;
    }
`;