import React from 'react';
import './BioSection.css';
import ReactMarkdown from 'react-markdown' ;


export default ({ data }) => {
    const { title1, titlePink1, description1, title2, titlePink2, description2, title3, titlePink3, description3 } = data
    return (
        <section>
            <img className='vector-b-3' src='./images/vector-b-3.png' alt='vector-b-3' />
            <div className='flex-wrap'>
                {/* <img className='vector-b-3' src='./images/vector-b-3.png' alt='vector-b-3'/> */}

                <div className='row'>
                    <div className='column order-2'>
                        <div className='text-container'>
                            <h4>{title1} <b className='pink'>{titlePink1}</b></h4>
                            {/* <p className='p-a'>Podpowiedzi i sugestie, które otrzymujesz, oparte są o aktualną wiedzę naukową oraz rekomendacje towarzystw medycznych. Algorytmy będące podstawą naszej aplikacji zostały opracowane przy współpracy z ekspertami – <strong className='strong'>specjalistami medycyny rozrodczości z kilkudziesięcioletnim doświadczeniem.</strong>
                            </p>
                            <p className='p-a'>Aplikacja wspiera kobiety podczas naturalnych starań o dziecko, ale jest także po to, by na wczesnym etapie wykrywać ew. ryzyko zaburzeń powodujących trudności z zajściem w ciążę. Korzystając z niej, zadbasz o swoją płodność, a jeśli będzie taka potrzeba – dowiesz się, jakie badania wykonać i jakie dodatkowe kroki podjąć, by zostać mamą.
                           </p> */}
                            <p className='p-a'>
                                <ReactMarkdown className="line-break">
                                    {description1}
                                </ReactMarkdown>                              
                             </p>
                        </div>
                    </div>
                    <div className='column-2 order-1'>
                        <div className='images-container'>
                            <img className='bio-image-1' src='./images/bio1.png' alt='' />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='column-2 order-1'>
                        <div className='images-container'>
                            <img className='bio-image-2' src='./images/bio2.png' alt='' />
                        </div>
                    </div>
                    <div className='column order-2'>
                        <div className='text-container'>
                            <h4><b className='pink'>{titlePink2}</b>{title2}</h4>
                            <p className='p-a'>
                                <ReactMarkdown className="line-break">
                                    {description2}
                                </ReactMarkdown>                              
                             </p>
                            {/* <p className='p-a'>Pomagamy dbać o płodność w sposób kompleksowy.  Chcemy, byś podejmowała decyzje i działała świadomie. I zależy nam na tym, byś została mamą. Dostarczamy Ci wsparcia w naturalnych staraniach o ciążę, ale też podpowiadamy rzetelnie, jeśli – w świetle aktualnej wiedzy – w swojej sytuacji warto, byś wykonała dodatkowe badania lub skonsultowała się z lekarzem.
                </p>
                            <p className='p-a'>Rekomendacje dot. stylu życia, starań, badań czy możliwości postępowania przy wsparciu medycyny, które otrzymujesz, są zgodne z praktyką kliniczną i zasadą <strong className='strong'>evidence based medicine.</strong> Mają na celu wsparcie Ciebie w możliwie jak najszybszym poczęciu dziecka. W iYoni wierzymy w jakość i skuteczność.
                </p> */}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='column order-2'>
                        <div className='text-container'>
                            <h4><b className='pink'>{titlePink3}</b>{title3} </h4>
                            <p className='p-a'>
                                <ReactMarkdown className="line-break">
                                    {description3}
                                </ReactMarkdown>                              
                             </p>
                            {/* <p className='p-a'><strong className='strong'>Korzystamy z serwerów firmy Microsoft,&nbsp;</strong>w których zastosowano najnowsze rozwiązania dot. architektury i inżynierii systemów, zapewniające bezpieczeństwo.
                           </p>
                            <p className='p-a'><strong className='strong'>Twoje dane osobowe (e-mail) przechowywane są w osobnej bazie&nbsp;,</strong>&nbsp;a ich połączenie z informacjami wprowadzanymi w trakcie korzystania z aplikacji jest odpowiednio szyfrowane. Mechanika połączenia danych jest poufna i znana tylko iYoni. Nasze zabezpieczenia przechodzą dodatkowo audyty przeprowadzane przez zewnętrzne, niezależne podmioty.
                          </p> */}
                        </div>
                    </div>
                    <div className='column-2 order-1'>
                        <div className='images-container'>
                            <img className='bio-image-3' src='./images/bio3.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

// export default BioSection;