import React from "react";
import * as Css from "./style";

import { SidebarItens } from "../../SidebarItens/Admin";

export const AdminTheme = ({ children }) => {
    return (
        <Css.Container>
            <Css.SideBar>
                <SidebarItens />
            </Css.SideBar>
            <Css.FormsContainer>
                <Css.FormsAdmin>
                    {children}
                </Css.FormsAdmin>
            </Css.FormsContainer>
        </Css.Container>
    );
};