import styled from "styled-components";

// Estilização Container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Estilização Container de pedidos
export const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #00a000;
  margin-top: 50px;
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

export const ButtonCancel = styled.button`
  background-color: #ffff;
  color: #ff0000;
  font-weight: bolder;
  border: 1px solid #ff0000;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ContainerAttQtd = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ButtonAtt = styled.button`
  background-color: #00a000;
  color: #ffff;
  font-weight: bolder;
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

// Estilização Container de input e button
export const ContainerInput = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonSearch = styled.button`
  background-color: #00a000;
  border: none;
  color: #ffff;
  border-radius: 5px;
  padding: 5px;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    background-color: #008000;
  }
`;
