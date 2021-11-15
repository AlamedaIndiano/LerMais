import React from "react";
import * as Css from "./styled";

import { MdSouth} from "react-icons/md";

import { Slider } from "../../Components/Slider";
import { Menu } from "../../Components/Menu";
import { Locais } from "../../Components/Locais";
import { FormContato } from "../../Components/FormContato";

export const Site = () => {
    return(
        <Css.Container>
            <Css.ContainerMenu>
                <Menu />
            </Css.ContainerMenu>
            <Slider/>
            <Css.SectionSaibaMais>
                <Css.SaibaMais>
                    <Css.Info>
                        <p>Com o aumento do valor de alimentos, produtos de higiene basica e remédios, torna-se cada vez mais dificil adquirir um bom livro. Pensando nisso, nós do ler mais, tivemos a ideia de criar este Projeto Social que, de forma simples, vai possibilitar uma maior democratização e acessibilidade à Leitura para todos!</p>
                    </Css.Info>
                    imagem aqui
                    <Css.Frase>
                        <p>“A leitura é uma fonte inesgotável de prazer, mas, por incrível que pareça, a quase totalidade não sente esta sede”. </p>
                        <p>- Carlos Drummond de Andrade</p>
                        <Css.SaibaMaisLocais>
                            <p>Locais & Datas</p>
                            <div><MdSouth/></div>
                        </Css.SaibaMaisLocais>
                    </Css.Frase>
                </Css.SaibaMais>
            </Css.SectionSaibaMais>
            <Css.SectionLocais >
                <Locais/>
            </Css.SectionLocais>
            <Css.SectionFormContato>
                <FormContato/>
            </Css.SectionFormContato>
        </Css.Container>
    );
};