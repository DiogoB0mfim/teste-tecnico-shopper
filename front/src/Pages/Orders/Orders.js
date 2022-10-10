import * as S from "./StyledOrders";
import Header from "../../Components/Header/Header";
import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import useForm from "../../Hooks/useForm";

const Orders = () => {
  const { orders, getUserOrder, deleteOrder, updateOrder } = useContext(GlobalStateContext);
  const [form, onChange] = useForm({ name: "", quantity: "" });

  const ordersList = orders && orders.map((item) => {
      return (
        <S.ContainerOrders key={item.id_purchase}>
          <p><b>Id da compra:</b> {item.id_purchase}</p>
          <p><b>Produto:</b> {item.name_product}</p>
          <p><b>Qtd do produto:</b> {item.qty_product}</p>
          <p><b>Comprador:</b> {item.customer_name}</p>
          <S.ContainerAttQtd>
            <input
              placeholder="Nova quantidade"
              name="quantity"
              onChange={onChange}
            />
            <S.ButtonAtt onClick={() => updateOrder(item.id_purchase, form.quantity)}>Atualizar</S.ButtonAtt>
          </S.ContainerAttQtd>
          <div>
            <S.ButtonCancel onClick={() => deleteOrder(item.id_purchase)}>Cancelar pedido</S.ButtonCancel>
          </div>
        </S.ContainerOrders>
      );
    });

  return (
    <>
      <Header />
      <S.Container>
        <S.ContainerInput>
          <input
            placeholder="Digite seu nome"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <S.ButtonSearch onClick={() => getUserOrder(form.name)}>Procurar</S.ButtonSearch>
        </S.ContainerInput>
        <div>
            {ordersList}
        </div>
      </S.Container>
    </>
  );
};

export default Orders;
