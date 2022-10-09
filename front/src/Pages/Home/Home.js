import GlobalStateContext from "../../Global/GlobalStateContext";
import { useContext, useEffect, useState } from "react";
import imgprod from "../../Assets/prod-s-img.png";
import * as S from "./StyledHome"

const Home = () => {
  const { stock, getStock, addToCart } = useContext(GlobalStateContext);
  const [qtd, setQtd ] = useState()

  useEffect(() => { getStock()}, []);

  const onChangeQtd = (event) => {
    setQtd(event.target.value)
  }

  const productList = stock && stock.map((item) => {
      return (
        <S.productCard key={item.id}>
          <S.productImg src={imgprod} alt="imagem do produto"/>
          <S.productInfos>{item.name}</S.productInfos>
          <S.productInfos>Preço: <b>R${item.price}</b></S.productInfos>
          <S.DivPriceQtd>
            <S.productInput 
              type="number" 
              min="1" 
              max={item.qty_stock} 
              placeholder="Quantidade" 
              onChange={onChangeQtd}/>
            <S.CarButton 
              onClick={() => qtd > item.qty_stock ? alert(`Quantidade indisponível, máximo de ${item.qty_stock}UND`) : addToCart(item, qtd)}>Adicionar ao carrinho</S.CarButton>
          </S.DivPriceQtd>
        </S.productCard>
      );
    });

  return (
    <S.productsContainer>
      {productList}
    </S.productsContainer>
  )
};

export default Home;
