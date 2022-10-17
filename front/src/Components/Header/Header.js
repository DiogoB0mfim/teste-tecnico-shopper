import { useNavigate } from "react-router-dom";
import * as S from "./StyledHeader";
import logoShopper from "../../Assets/logo-shopper.png";
import imgCart from "../../Assets/cart-img.png";
import stockIcon from "../../Assets/stock-icon.png";
import orderIcon from "../../Assets/order-icon.png";
import { goHome, goStock, goCart, goOrders } from "../../Router/Coordinator";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.ContainerHeader>
        <S.ImgHeader
          src={logoShopper}
          alt="logo shopper"
          onClick={() => goHome(navigate)}
        />
        <S.ContainerImgsheader>
          <S.CartImg
            src={stockIcon}
            onClick={() => goStock(navigate)}
            alt="estoque"
          />
          <S.CartImg
            src={imgCart}
            onClick={() => goCart(navigate)}
            alt="carrinho de compras"
          />
          <S.CartImg
            src={orderIcon}
            onClick={() => goOrders(navigate)}
            alt="icone meus pedidos"
          />
        </S.ContainerImgsheader>
      </S.ContainerHeader>
    </>
  );
};

export default Header;
