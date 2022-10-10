import styled from "styled-components";

// Estilização Header
export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffff;
  border-bottom: 1px solid #d3d3d3;
  padding: 10px;
  margin-bottom: 5vh;
  position: sticky;
  top: 0;
  gap: 45%;
`;

// Estilização Imagens Header
export const ContainerImgsheader = styled.div`
  display: flex;
  gap: 3rem;
`;

// Estilização logo carrinho
export const ImgHeader = styled.img`
  width: 12%;
  cursor: pointer;
`;

// Estilização icone carrinho
export const CartImg = styled.img`
  width: 50px;
  cursor: pointer;
`;
