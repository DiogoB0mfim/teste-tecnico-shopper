import * as S from "./StyledStock";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { useContext } from "react";
import Header from "../../Components/Header/Header";

const Stock = () => {
  const { stock } = useContext(GlobalStateContext);

  const stockList = stock && stock.map((item) => {
      return (
        <S.CardProdStock key={item.id}>
          <p>{item.name}</p>
          <p><b>Qtd: </b>{item.qty_stock}UND</p>
        </S.CardProdStock>
      );
    });

  return (
    <>
      <Header />
      <S.ContainerStock>
        <h2>Estoque</h2>
        {stockList}
      </S.ContainerStock>
    </>
  );
};

export default Stock;
