import React, {} from "react";
import "./style.css";

import  { Router } from "./router";
import { Provider } from "./Contexts/ContextCadastrar/FormContext";

const App = () => {
  return(
        <Provider>
          <Router />
        </Provider>
  );
};

export default App;