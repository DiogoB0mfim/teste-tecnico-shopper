import GlobalStateContext from "../../Global/GlobalStateContext";
import Header from "../../Components/Header/Header";
import { useContext, useEffect } from "react";
import imgProd from "../../Assets/prod-s-img.png";
import * as S from "./StyledHome"
import useForm from "../../Hooks/useForm";

const Home = () => {
  const { stock, getStock, addToCart, alertError } = useContext(GlobalStateContext);
  const [form, onChange] = useForm({ qtd: "" });

  useEffect(() => {getStock()});

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
              onChange={onChange}
              name="qtd"
            />
            <S.CardButton 
              onClick={() => form.qtd <= item.qty_stock && form.qtd  > 0 
              ? addToCart(item, form.qtd ) 
              : alertError(`Máximo de ${item.qty_stock}UND`)} >Adicionar ao carrinho</S.CardButton>
          </S.DivPriceQtd>
        </S.productCard>
      );
    });

  return (
    <>
      <Header/>
      <S.productsContainer>
        {productList}
      </S.productsContainer>
    </> 
  )
};

export default Home;
