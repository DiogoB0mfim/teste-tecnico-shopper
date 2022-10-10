import { useNavigate } from "react-router-dom";
import * as S from "./StyledHeader";
import logoShopper from "../../Assets/logo-shopper.png";
import imgCart from "../../Assets/cart-img.png";
import stockIcon from "../../Assets/stock-icon.png";
import orderIcon from "../../Assets/order-icon.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.ContainerHeader>
        <S.ImgHeader
          src={logoShopper}
          alt="logo shopper"
          onClick={() => navigate("/")}
        />
        <S.ContainerImgsheader>
          <S.CartImg
            src={stockIcon}
            onClick={() => navigate("/stock")}
            alt="estoque"
          />
          <S.CartImg
            src={imgCart}
            onClick={() => navigate("/cart")}
            alt="carrinho de compras"
          />
          <S.CartImg
            src={orderIcon}
            onClick={() => navigate("/myOrders")}
            alt="icone meus pedidos"
          />
        </S.ContainerImgsheader>
      </S.ContainerHeader>
    </>
  );
};

export default Header;
