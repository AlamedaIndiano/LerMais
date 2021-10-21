import React from "react";
import * as Css from "./style";

import { Header } from "../../Header/Cadastro";
import { SidebarItens } from "../../SidebarItens/Cadastro";

export const Theme = ({ children }) => {
    return(
        <Css.Container>
            <Css.Area>
                <Css.LogoImage/>
                <Header />
                <Css.Steps>
                    <Css.Sidebar>
                        <SidebarItens />
                    </Css.Sidebar>
                    <Css.Page>
                        {children}
                    </Css.Page>
                </Css.Steps>
            </Css.Area>
        </Css.Container>
    )
};