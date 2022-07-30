import styled from "styled-components";

export const List = styled.ul`

    width: 100%;
    min-height: 305px;
    max-height: 335px;
    height: 60%;
    padding: 0 16px;
    margin-bottom: 20px;

    overflow: auto;

    gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    ::-webkit-scrollbar {
        display: none;
    }
    
    @media (min-width: 768px) {
        width: 70%; 

        gap: 12px;
        flex-wrap: wrap;
        justify-content: space-between;
       
        overflow: visible;
        
    }
`