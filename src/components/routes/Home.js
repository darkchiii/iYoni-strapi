
import React from 'react';
import '../../App.css';
import MomSection from '../home/MomSection';
import BenefitsSection from '../home/BenefitsSection';
import FunctionsSection from '../home/FunctionsSection.js';
import ValuesSection from '../home/ValuesSection.js';
import AppStoreSection from '../home/AppStoreSection.js';
import BaseSection from '../home/BaseSection.js';

import Hero from '../home/Hero.js'
import axios from 'axios';

class Home extends React.Component {
    state = {
        page: null
    }

    async componentDidMount() {
        const pages_res = await axios({
            method: 'GET',
            url: 'https://strapi-iyoni.herokuapp.com/pages/1'
        })
        // console.log("Home.componentDidMount pages_res", pages_res)
        this.setState({ page: pages_res.data })
    }

    render() {
        const { page } = this.state
        // console.log("App.render mockPage", mockPage)
        return (
            <>
                {page && page.content &&
                    <>
                        {page.content.map(component => (
                            <>
                                {component.__component === 'home.hero' &&
                                    <Hero data={component} />
                                }

                                {component.__component === 'home.basia' &&
                                    <MomSection data={component} />
                                }

                                {component.__component === 'home.benefits' &&
                                    <BenefitsSection data={component} />
                                }
                                {component.__component === 'home.knowledge-base' &&
                                    <BaseSection data={component} />
                                }
                                {component.__component === 'home.functions' &&
                                    <FunctionsSection data={component} />
                                }
                                {component.__component === 'home.values' &&
                                    <ValuesSection data={component} />
                                }
                                {component.__component === 'home.app-store' &&
                                    <AppStoreSection data={component} />
                                }
                            </>
                        ))}
                    </>
                }
                {/* <Hero/> */}
                {/* <MomSection data={mockPage.content[1]}/>
            <BenefitsSection data={mockPage.content[2]}/>
            <FunctionsSection data={mockPage.content[3]}/>
            <ValuesSection data={mockPage.content[4]}/>
            <AppStoreSection data={mockPage.content[5]}/>   */}
            </>
        )
    }

}

export default Home;