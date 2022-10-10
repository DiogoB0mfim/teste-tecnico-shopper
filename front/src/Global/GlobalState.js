import axios from "axios";
import { useState } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";

const GlobalState = (props) => {
  const [stock, setStock] = useState();
  const [cart, setCart] = useState([]);

  const BASE_URL = "http://localhost:3003";

  // Requisição de mostrar todo estoque
  const getStock = () => {
    axios
      .get(`${BASE_URL}/stock`)

      .then((response) => {
        setStock(response.data.message);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  // Requisição de fazer uma compra
  const postOrder = (formDate, formName) => {
    const body = {
      products: cart.map((product) => {
        return {
          id_product: product.id,
          qty_product: product.quantity,
          date: formDate,
          customer_name: formName,
        };
      }),
    };

    axios
      .post(`${BASE_URL}/create-order`, body)

      .then((response) => {
        alert("Pedido confirmado");
        
        setCart([]);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  // Função de adicionar ao carrinho
  const addToCart = (product, qtd) => {
    const index = cart.findIndex((cartProduct) => {
      if (cartProduct.id === product.id) {
        return true;
      } else {
        return false;
      }
    });

    if (index === -1) {
      const setProduct = {
        ...product,
        quantity: Number(qtd),
      };
      const newCart = [...cart, setProduct];
      setCart(newCart);
      // Setando alert na tela
      alert("adicionado");
    }
  };

  // Função adicionar mais um produto ao carrinho
  const addMoreProduct = (product) => {
    const newCart = cart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + 1,
        };
      } else {
        return cartProduct;
      }
    });

    setCart(newCart);
  };

  // Função remover um produto do carrinho
  const removeMoreProduct = (product) => {
    const newCart = cart
      .map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        } else {
          return cartProduct;
        }
      })

      .filter((cartProduct) => {
        if (cartProduct.quantity < 1) {
          return false;
        } else {
          return true;
        }
      });

    setCart(newCart);
  };

  // Função remover todos produtos do carrinho
  const removeAllProduct = (product) => {
    const newCart = cart
      .map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity === 0,
          };
        } else {
          return cartProduct;
        }
      })

      .filter((cartProduct) => {
        if (cartProduct.quantity < 1) {
          return false;
        } else {
          return true;
        }
      });

    setCart(newCart);
  };

  const data = {
    // Estados
    stock,
    cart,

    // Requisições
    getStock,
    postOrder,

    // Funções
    addToCart,
    addMoreProduct,
    removeMoreProduct,
    removeAllProduct
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
