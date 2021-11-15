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
            <div id="Home"><Slider/></div>
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
            <Css.SectionLocais id ="Locais">
                <Locais/>
            </Css.SectionLocais>
            <Css.SectionDoação>
                <h1>Faça uma Doação e ajude nosso projeto a crescer!</h1>   
                <Css.ContainerFormasDeDoar>
                    <h2>Formas de doar</h2>
                    <Css.FormasDeDoar>
                        <Css.FormasDeDoarLEFT>
                            <ul>
                                <li>Doe o seu tempo sendo voluntário no projeto</li>
                                <li>Fale para seus amigos e familiares sobre o projeto</li>
                                <li>Doe livros pessoalmente ou pela caixa posta 07716-295</li>
                            </ul>
                        </Css.FormasDeDoarLEFT>
                        <Css.FormasDeDoarRIGHT>
                            <div>
                                <h3>Para patrocinar o projeto entre em contato por uma de nossas redes sociais:</h3>
                            </div>
                            <ul>
                                <li>Fecebook: LerMais São Paulo Oficial</li>
                                <li>Instagram: LerMais_SãoPaulo</li>
                                <li>WhatsApp: (11) 92860-6473</li>
                            </ul>
                            <button >Entre em Contato</button>
                        </Css.FormasDeDoarRIGHT>
                    </Css.FormasDeDoar>
                </Css.ContainerFormasDeDoar>
                <Css.InfoDoações>
                    <Css.DestinoDasDoações>
                        <p>Todos os livros arrecadados são catalogados e ficam disponíveis para o público na semana seguinte à doação;</p>
                        <p>Todo o dinheiro arrecadado é destinado à manutenção do nosso site e dos veículos utilizados para transportar os livros e nosso pessoal.</p> 
                    </Css.DestinoDasDoações>
                    <div>
                        <h3>Atenção!</h3>
                        <p>Este projeto não tem fins lucrativos!</p>
                    </div>
                </Css.InfoDoações>
            </Css.SectionDoação>
        </Css.Container>
    );
};