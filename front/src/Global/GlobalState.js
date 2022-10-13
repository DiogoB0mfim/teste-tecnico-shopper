import axios from "axios";
import { useState } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { toast } from "react-toastify";

const GlobalState = (props) => {
  const [stock, setStock] = useState();
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  const BASE_URL = "http://localhost:3003";

  // Função para setar alert
  const alertSuccess = (message) => {
    toast.success(`${message}`, {
      position: "top-right",
      className: "toast-message",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
    });
  };

  const alertError = (message) => {
    toast.error(`${message}`, {
      position: "top-right",
      className: "toast-message",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
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
      alertSuccess("Produto adicionado! 😀");
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

  // Função para somar valores do carrinho
  const sumTotalCart = () => {
    let cartTotalPrice = 0
    
    for (let item of cart) {
        cartTotalPrice += (item.price * item.quantity)
    }
    setCartTotalPrice(cartTotalPrice)
  }

  // Requisição para mostrar todo estoque
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

  // Requisição para mostrar todos pedidos de um cliente
  const getUserOrder = (userName) => {
    axios
      .get(`${BASE_URL}/user-purchases/${userName}`)

      .then((response) => {
        setOrders(response.data.message);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  // Requisição para fazer uma compra
  const postOrder = (formDate, formName) => {
    const body = {
      products: cart.map((product) => {
        return {
          id_product: product.id,
          name_product: product.name,
          qty_product: product.quantity,
          tot_price: product.price * product.quantity,
          date: formDate,
          customer_name: formName,
        };
      }),
    };

    axios
      .post(`${BASE_URL}/create-order`, body)

      .then(() => {
        alertSuccess("Pedido confirmado!");

        setCart([]);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  // Requisição para cancelar uma compra
  const deleteOrder = (id) => {
    axios
      .delete(`${BASE_URL}/delete-order-product/${id}`)

      .then(() => {
        alertSuccess("Produto deletado!");
        getUserOrder();
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  // Requisição para atualizar qtd de produtos em uma compra
  const updateOrder = (id, qtd) => {
    const body = {
      id: id,
      qty_product: qtd,
    };

    axios
      .put(`${BASE_URL}/update-order-product`, body)

      .then(() => {
        alertSuccess("Quantidade atualizada!");
        getUserOrder();
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const data = {
    // Estados
    stock,
    cart,
    orders,
    cartTotalPrice,

    // Requisições
    getStock,
    postOrder,
    getUserOrder,
    deleteOrder,
    updateOrder,

    // Funções
    alertSuccess,
    alertError,
    addToCart,
    addMoreProduct,
    removeMoreProduct,
    removeAllProduct,
    sumTotalCart
    
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
