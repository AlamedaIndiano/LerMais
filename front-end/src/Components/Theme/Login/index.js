import React from "react";
import * as Css from "./style";

import { Header } from "../../Header/Login";
import { SidebarItens } from "../../SidebarItens/Login";

export const Theme = ({ children }) => {
    return(
        <Css.Container>
            <Css.Area>
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