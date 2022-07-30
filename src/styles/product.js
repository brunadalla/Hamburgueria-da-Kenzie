import styled from "styled-components";

export const ProductCard = styled.li`

    height: 100%;
    width: 72.5%;
    min-width: 205px;
    min-height: 303px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    border: solid 2px var(--grey-20);
    border-radius: 8px;

    background-color: var(--grey-0);

    &:hover {
        border: solid 2px var(--grey-100);
    };

    .container_image {
        width: 100%;
        height: 45%;

        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    img {
        width: 60%;
        height: 100%;
        max-width: 135px;
    }

    @media (min-width: 768px){
        width: 48%;
        min-width: 0;
        max-width: 250px;
    }
    
`

export const ProductInfo = styled.div`

    width: 100%;
    height: 55%;
    padding: 22px 20px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 0 0 8px 8px;
    
    background-color: var(--color-white);

    h3 {
        color: var(--grey-100);
        font-weight: 700
    }

    small {
        color: var(--grey-50);
        font-size: .70rem;
        font-weight: 400
    }

    span {
        color: var(--color-primary);
        font-size: .8rem;
        font-weight: 600
    }

    button {
        width: 50%;
        height: 25%;
        min-width: 85px;
        max-width: 160px;

        color: var(--color-white);
        font-size: .8rem;
        font-weight: 600;

        border: 2px solid var(--color-primary);
        border-radius: 8px;

        background-color: var(--color-primary);
    }

    button:hover {
        cursor: pointer;

        border: 2px solid var(--color-primary-50);
        background-color: var(--color-primary-50);
        
    }

`