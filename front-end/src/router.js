import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "./Pages/HomePage";

import CadastroStep1 from "./Pages/Forms/Cadastro/CadastroStep1";
import CadastroStep2 from "./Pages/Forms/Cadastro/CadastroStep2";
import CadastroStep3 from "./Pages/Forms/Cadastro/CadastroStep3";

import LoginStep1 from "./Pages/Forms/Login/LoginStep1";
import LoginStep2 from "./Pages/Forms/Login/LoginStep2";

import LoginStep2Admin from "./Admin/LoginStep2Admin";
import { NewLivros } from "./Admin/Upload/Form_Upload_NewLivros";
import { DeleteLivros } from "./Admin/Upload/Form_Delete_Livros";

import { Site } from "./Pages/Site";

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

                <Route path="/LoginStep2Admin" component={LoginStep2Admin}/>
                <Route path="/NewLivros" component={NewLivros}/>
                <Route path="/DeleteLivros" component={DeleteLivros}/>

                <Route path="/Site" component={Site} />
            </Switch>
        </BrowserRouter>
    );
};