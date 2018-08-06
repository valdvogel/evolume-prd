import React from 'react';
import { Link } from 'react-router-dom'

const TestimonialMain = () => (
    <section id="three" className="wrapper special">
        <div className="inner">
            <header className="align-center">
                <h2>Depoimentos</h2>
            </header>
            <div className="flex flex-2">
                <article>
                    <div className="image fit">
                        <img src="./images/d1.png" />
                    </div>
                    <h2>Sandro José</h2>
                    
                    <div className="product-option-selection">
                        <span>Avaliação : </span>    
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <p>Experiência : Precisava de um rack com suporte para bicicletas durante o fim de semana com minhas filhas no campo. Aluguei um rack versátil compatível com meu carro que me proporcionou momentos de alegria com minha família e ainda economizei. Super recomendo a plataforma e o locador!</p>    
                </article>
                <article>
                    <div className="image fit">
                        <img src="./images/d2.png" />
                    </div>
                    <h2>Marco Antônio</h2>
                    <div className="product-option-selection">
                        <span>Avaliação : </span>    
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <p>Experiência : Tive um casamento de um amigo do colegial e combinei de rachar gasolina com mais 4 amigas. Quando percebemos, não tinhamos espaço para levar tantas malas. Entramos em contato com a equipe da eVolume e resolvemos nosso problema. Super eficientes e práticos!</p>    
                </article>
                <article>
                    <div className="image fit">
                        <img src="./images/d3.png" />
                    </div>
                    <h2>Daniel Zucullo</h2>
                    
                    <div className="product-option-selection">
                        <span>Avaliação : </span>    
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <p>Experiência : Sou oficial do corpo de bombeiro e marquei com a turma de irmos remar em Socorro. Achamos um locador através da eVolume que nós ajudou com equipamentos para tudo o que precisamos. Nosso sincero obrigado a todos pela ótima idéia.</p>    
                </article>
            </div>
        </div>
    </section>
);

export default TestimonialMain;

