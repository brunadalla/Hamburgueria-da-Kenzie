import styled from "styled-components";

export const ContainerCarrinho = styled.aside`

    width: 90%;
    height: max-content;
    max-width: 560px;
    max-height: 400px;
    padding-bottom: 40px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex;

    border-radius: 8px;

    background-color: var(--grey-0);

    .cart_title {
        width: 100%;
        min-height: 60px;
        padding: 0 21px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        border-radius: 8px 8px 0 0 ;

        background-color: var(--color-primary);

        color: var(--color-white);
        font-size: 1rem;
        font-weight: 700
    };

    .cart_empty {
        width: 100%;
        height: 110px;

        gap: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

    }

    .cart_empty h2 {
        color: var(--grey-100);
        font-size: 1rem ;
        font-weight: 700;
    }

    .cart_empty p {
        color: var(--grey-50);
        font-size: 0.8rem ;
        font-weight: 400;
    }

    @media (min-width: 768px) {
        width: 40%;
        max-width: 365px;
        max-height: 525px;
        padding-bottom: 10px;

        .cart_empty {
            height: 160px;
        }
}
`
export const CartList = styled.div`

    width: 100%;
    height: 88%;
    padding: 15px 15px 10px 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
        width: 100%;
        height: 70%;
        padding-bottom: 20px;

        border-bottom: 2px solid var(--grey-20);

        overflow: auto;

        gap: 28px;
        display: flex;
        flex-direction: column;
    };

    ul::-webkit-scrollbar {
        display: none;
    }

    .cart_info {
        width: 100%;
        height: 30%;
        padding-top: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

    .cart_info div {
        width: 100%;

        display: flex;
        align-items: flex-start;
        justify-content: space-between
    }

    .cart_info div p {
        color: var(--grey-100);
        font-size: .8rem;
        font-weight: 550;
    }

    .cart_info div span {
        color: var(--grey-50);
        font-size: .8rem;
        font-weight: 550;
    }

    .cart_info button {
        width: 100%;
        min-height: 3rem;
        margin-top: 15px;

        border: 2px solid unset;
        border-radius: 8px;

        color: var(--grey-50);
        font-size: .9rem;
        font-weight: 550;

        background-color: var(--grey-20);
    }

    .cart_info button:hover {
        cursor: pointer;

        color: var(--grey-20);
        background-color: var(--grey-50);
    }

    @media (min-width: 768px) {
       ul {
        max-height: 300px;
       }
    }
`
