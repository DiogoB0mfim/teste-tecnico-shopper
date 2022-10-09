import axios from "axios";
import { useState } from "react";
import GlobalStateContext from "../Global/GlobalStateContext"

const GlobalState = (props) => {
    const [stock, setStock] = useState()
    const [cart, setCart] = useState([])

    const BASE_URL = "http://localhost:3003"
    
    // Requisição de mostrar todo estoque
    const getStock = () => {
        axios
            .get(`${BASE_URL}/stock`)

            .then((response) => {
                setStock(response.data)
            })

            .catch((error) => {
                console.log(error.message)
            })
    }

    // Função de adicionar ao carrinho
    const addToCart = (product, qtd) => {
        const index = cart.findIndex((cartProduct) => {
            if (cartProduct.id === product.id) {
                return true
            }
            
            else { return  false }
        })

        if (index === -1) {
            const setProduct = {
                ...product,
                quantity : Number(qtd)
            }
            const newCart = [...cart, setProduct]
            setCart(newCart)
            // Setando alert na tela
            alert("adicionado")  
        }
    }

    console.log(cart)

    const data = {
        stock,

        getStock,

        addToCart
    }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>   
    )
}

export default GlobalState; 