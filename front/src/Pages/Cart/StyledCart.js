import styled from "styled-components";

// Estilização Div principal Cart
export const DivCart = styled.div`
    display: flex;
    align-items: start;
    margin-top: 10px;
    padding: 10px;
`

// Estilização Container de produtos no cart
export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 20px;
`

// Estilização Card do produto
export const ProductCard = styled.div`
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #c3c3c3;
    display: flex;
    gap: 30px;
` 
 
export const ProductInfo = styled.p`
    font-size: 1.2rem;
`

export const ProductImg = styled.img`
    height: 17vh;
    border-radius: 15px;
`

export const ContainerQtd = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ButtonQtd = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background-color: #008000;
    color: #ffff;
`

// Estilização do form
export const FormCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    gap: 20px;
    border-radius: 15px;
    height: 50vh;
`

export const FormInput = styled.input`
    width: 50%;
    text-align: center;
`

export const ButtonForm = styled.button`
    width: 50%;
    background-color: #00a000;
    color: #ffff;
    font-weight: bolder;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #008000;
    }
`

// Estilização botão de home
export const ButtonHome = styled.button`
    background-color: #ffff;
    color: #00a000;
    font-weight: bolder;
    border: 1px solid #00a000;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`

// Estilização botão de deletar produto
export const ButtonDelete = styled.button`
    background-color: #FF0000;
    color: #ffff;
    font-weight: bolder;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`