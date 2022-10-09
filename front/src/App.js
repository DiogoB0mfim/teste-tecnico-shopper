import GlobalStyle from "./GlobalStyle";
import GlobalState from "./Global/GlobalState";
import Router from "./Router/Router";

const App = () => {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </div>
  );
};

export default App;
