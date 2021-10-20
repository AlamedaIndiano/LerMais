import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "./Pages/HomePage";

import CadastroStep1 from "./Pages/Forms/Cadastro/CadastroStep1";
import CadastroStep2 from "./Pages/Forms/Cadastro/CadastroStep2";
import CadastroStep3 from "./Pages/Forms/Cadastro/CadastroStep3";

import LoginStep1 from "./Pages/Forms/Login/LoginStep1";
import LoginStep2 from "./Pages/Forms/Login/LoginStep2";

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                
                <Route path="/CadastroStep1" component={CadastroStep1} />
                <Route path="/CadastroStep2" component={CadastroStep2} />
                <Route path="/CadastroStep3" component={CadastroStep3} />

                <Route path="/LoginStep1" component={LoginStep1} />
                <Route path="/LoginStep2" component={LoginStep2} />
            </Switch>
        </BrowserRouter>
    );
};