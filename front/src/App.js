import GlobalStyle from "./Global/GlobalStyle";
import GlobalState from "./Global/GlobalState";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <Router />
        <ToastContainer />
      </GlobalState>
    </div>
  );
};

export default App;
