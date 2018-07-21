import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => (
    <div>
        <section id="main" className="cadastro-wrapper">
            <div className="inner">
                <header className="align-center">
                    <h2>Quem somos</h2>
                </header>
                <p align="justify">
                    A eVolume tem como um de seus propósitos, conectar viajantes, aventureiros, esportistas, famílias, dentre outros; com proprietários de equipamentos para transporte de grandes volumes com segurança, tais como, bagageiros, racks, bebês-conforto e cadeirinhas, kits de segurança para pets e malas para bikes; tudo isso de forma única e segura através de nossa plataforma digital.
                    <br />
                    Inicialmente, buscávamos atender uma necessidade pessoal, quando vislumbramos a gravidade da questão de segurança existente neste contexto. Desde então não medimos esforços para buscar transformar a ideia em algo com um propósito maior.
                    <br />
                    Servare vitas, do latim, salvar vidas! Ao imaginarmos ações correlatas à frase anterior, imaginamos a mais nobre das profissões, os bombeiros. Contudo, acreditamos que, salvar vidas, pode ser resultado de inúmeras outras ações que não apenas resgates realizados pelos nobres bombeiros. Criar novas oportunidades, através da aplicação do conceito de economia compartilhada e colaborativa, pode resultar no “salvamento de vidas”, através da transformação e geração de novas oportunidades.
                    <br />
                    Disseminar a ideia e o uso de equipamentos que promovem maior segurança no transporte automotivo, para a sociedade como um todo e ainda permitir a criação de novos negócios baseados no conceito de economia criativa, promovendo a transformação de forma compartilhada.
                    <br />
                    Nós nos sentimos realizados com o grande propósito de aumentar a segurança e salvar vidas quanto ao transporte de famílias, esportistas e aventureiros; bem como, na transformação de vidas.
                </p>
            </div>
        </section>
        <section id="two" className="wrapper style1 special">
            <div className="inner">
                <header>
                    <h2>Time</h2>
                </header>
                <div className="box alt">
                    <div className="flex flex 2">
                        <div className="6u">
                            <div className="articleheader">
                                <Link to={`https://www.linkedin.com/in/belloluciano/`}>
                                    Luciano Bello
                            </Link>
                            </div>
                            <p className="rowarticle1">
                                <Link to={`https://www.linkedin.com/in/belloluciano/`}>
                                    <img src="./images/bello.jpg" width="77" height="80" />
                                </Link>
                            </p>
                            <p className="rowarticleabout">
                                Founder e CEO
                                <br />
                                Apaixonado por itens bélicos e tecnologia. Mais de 28 anos de experiência em consultorias de TI, atuando em projetos nas mais diversas áreas da TI.
                        </p>
                        </div>
                        <div className="6u">
                            <div className="articleheader">
                                <Link to={`https://www.linkedin.com/in/cristina-abritta-65176b10/`}>
                                    Cristina Abritta
                            </Link>
                            </div>
                            <p className="rowarticle1">
                                <Link to={`https://www.linkedin.com/in/cristina-abritta-65176b10/`}>
                                    <img src="./images/cristina.jpg" width="77" height="80" />
                                </Link>
                            </p>
                            <p className="rowarticleabout">
                                Founder e CFO
                                <br />
                                Empreendedora e empresária, com carreira em gestão e TI. Meus 5 pilares: família, filho, força, foco e fé!
                            </p>
                        </div>
                        <div className="6u">
                            <div className="articleheader">
                                <Link to={`https://www.linkedin.com/in/valdvogel/`}>
                                    José Valdvogel
                            </Link>
                            </div>
                            <p className="rowarticle1">
                                <Link to={`https://www.linkedin.com/in/valdvogel/`}>
                                    <img src="./images/jose.png" width="77" height="80" />
                                </Link>
                            </p>
                            <p className="rowarticleabout">
                                Founder e CTO
                                <br />
                                Amplamente conhecido como Zé. Adora trabalhar no desenvolvimento de produtos digitais e nas horas vagas gosta de dançar forró.
                            </p>
                        </div>
                        <div className="6u">
                            <div className="articleheader">
                                <Link to={`https://www.linkedin.com/in/dmsimoes/`}>
                                    Daniel Simões
                            </Link>
                            </div>
                            <p className="rowarticle1">
                                <Link to={`https://www.linkedin.com/in/dmsimoes/`}>
                                    <img src="./images/daniel.jpg" width="77" height="80" />
                                </Link>
                            </p>
                            <p className="rowarticleabout">
                                Co-founder e COO
                                <br />
                                Daniel atua na área de tecnologia, interessado em ações de sustentabilidade e educação ambiental . Ele acredita que as pessoas podem fazer a diferença.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>

);

export default AboutUsPage;