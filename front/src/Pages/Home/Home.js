import GlobalStateContext from "../../Global/GlobalStateContext";
import { useContext, useEffect, useState } from "react";
import imgProd from "../../Assets/prod-s-img.png";
import imgCart from "../../Assets/cart-img.png";
import * as S from "./StyledHome"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const { stock, getStock, addToCart } = useContext(GlobalStateContext);
  const [qtd, setQtd ] = useState()

  useEffect(() => {getStock()});

  const onChangeQtd = (event) => {
    setQtd(event.target.value)
  }
   
  const productList = stock && stock.map((item) => {
      return (
        <S.productCard key={item.id}>
          <S.productImg src={imgProd} alt="imagem do produto"/>
          <S.productInfos>{item.name}</S.productInfos>
          <S.productInfos><b>Preço:</b> R${item.price.toFixed(2).replace(".", ",")}</S.productInfos>
          <S.DivPriceQtd>
            <S.productInput 
              type="number" 
              min="1" 
              max={item.qty_stock} 
              placeholder="Quantidade" 
              onChange={onChangeQtd}
            />
            <S.CardButton 
              onClick={() => qtd <= item.qty_stock && qtd > 0 ? addToCart(item, qtd) : alert(`Quantidade indisponível, máximo de ${item.qty_stock}UND`)} >Adicionar ao carrinho</S.CardButton>
          </S.DivPriceQtd>
        </S.productCard>
      );
    });

  return (
    <>
      <S.CartImg src={imgCart} onClick={() => navigate("/cart")} alt="carrinho de compras"/>
      <S.productsContainer>
        {productList}
      </S.productsContainer>
    </>
    
  )
};

export default Home;
