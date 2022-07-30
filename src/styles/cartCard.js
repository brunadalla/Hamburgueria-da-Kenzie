import styled from "styled-components";

export const CardCart = styled.li`

    width: 100%;
    height: 40%;
    min-height: 100px;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    img {
        width: 30%;
        height: 100%;
        max-width: 100px;
        max-height: 100px;

        border-radius: 4px;

        background-color: var(--grey-20);
    }

    div {
        width: 70%;
        height: 100%;
        padding: 0 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    div h3 {
        color: var(--grey-100);
        font-size: 1rem;
        font-weight: 700;
    }

    div p {
        color: var(--grey-50);
        font-size: 12px;
        font-weight: 400;
    }

    button {
        height: fit-content;
        padding-top: 2px;

        background-color: unset;

        color: var(--grey-50);
        font-size: 12px;
        font-weight: 500;

        align-self: flex-start;
    }

    button:hover {
        cursor: pointer;

        color: var(--grey-100);
        border-bottom: 2px solid var(--grey-100);
    }
       
`