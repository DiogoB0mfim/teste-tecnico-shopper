import * as S from "./StyledOrders";
import Header from "../../Components/Header/Header";
import { useContext, useState } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";

const Orders = () => {
  const { orders, getUserOrder } = useContext(GlobalStateContext);
  const [userName, setUserName] = useState("");

  const onChangeName = (event) => {
    setUserName(event.target.value);
  };

  const ordersList = orders && orders.map((item) => {
      return (
            <div>
                <p>{item.id_purchase}</p>
                <p>{item.qty_product}</p>
                <p>{item.customer_name}</p>
            </div>
        );
    });

  return (
    <>
      <Header />
      <input
        placeholder="Digite seu nome"
        value={userName}
        onChange={onChangeName}
      />
      <button onClick={() => getUserOrder(userName)}>Procurar</button>

      {ordersList}
    </>
  );
};

export default Orders;
