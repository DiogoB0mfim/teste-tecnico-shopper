import styled from "styled-components";

export const productsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
`
export const productCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f2f2f2;
    padding: 0.5rem;
    border-radius: 15px;
    width: 18%;
`

export const productImg = styled.img`
    width: 100%;
    border-radius: 15px;
`

export const productInfos = styled.p`
    font-size: 1.2rem;
`

export const productInput = styled.input`
    width: 40%;
`

export const DivPriceQtd = styled.div`
    display: flex;
    justify-content: space-between; 
` 

export const CarButton = styled.button`
    background-color: #00a000;
    color: #ffff;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #008000;
    }
`