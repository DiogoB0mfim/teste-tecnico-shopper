import GlobalStateContext from "../../Global/GlobalStateContext";
import * as S from "./StyledCart.js";
import { useContext, useState } from "react";
import imgprod from "../../Assets/prod-s-img.png";
import Header from "../../Components/Header/Header";

const Cart = () => {
  const { cart, addMoreProduct, removeMoreProduct, postOrder, removeAllProduct } = useContext(GlobalStateContext);
  const [formName, setFormName] = useState("");
  const [formDate, setFormDate] = useState("");

  const onChangeName = (event) => {
    setFormName(event.target.value);
  };

  const onChangeDate = (event) => {
    setFormDate(event.target.value);
  };

  const sumTotalCart = () => {
    let cartTotalPrice = 0
    
    for (let item of cart) {
        cartTotalPrice += (item.price * item.quantity)
    }
    return cartTotalPrice.toFixed(2).replace(".", ",")
  }

  const cartList = cart && cart.map((item) => {
      return (
        <S.ProductCard key={item.id}>
          <S.ProductImg src={imgprod} alt="imagem do produto" />
          <div>
            <S.ProductInfo><b>{item.name}</b></S.ProductInfo>
            <S.ProductInfo><b>Preço: </b> R$ {item.price}</S.ProductInfo>
            <S.ContainerQtd>
                <S.ButtonQtd onClick={() => removeMoreProduct(item)}>-</S.ButtonQtd>
                <S.ProductInfo><b>Qtd:</b> {item.quantity}UND</S.ProductInfo>
                <S.ButtonQtd onClick={() => addMoreProduct(item)}>+</S.ButtonQtd>
                <S.ButtonDelete onClick={() => removeAllProduct(item)}>Deletar todos</S.ButtonDelete>
            </S.ContainerQtd>
            
          </div>
        </S.ProductCard>
      );
    });

  return (
    <>
    <Header/>
    <S.DivCart>
        <S.FormCart>
            <h2>Pedido</h2>
            <S.FormInput
            placeholder="Digite seu nome"
            required
            onChange={onChangeName}
            value={formName}
            />
            <S.FormInput
            type="date"
            placeholder="Agende a data"
            onChange={onChangeDate}
            value={formDate}
            />
            <S.ProductInfo><b>Total:</b> R${sumTotalCart()}</S.ProductInfo>
            <S.ButtonForm onClick={() => postOrder(formDate, formName)}>Confirmar pedido</S.ButtonForm>
        </S.FormCart>
        
        <S.ContainerCart>
            {cartList}
        </S.ContainerCart>
    </S.DivCart>
    </>
  );
};

export default Cart;
