// import React from 'react' ;
// import AboutSecton from '../about/AboutSection';
// import BioSection from '../about/BioSection.js';
// import BioAppSection from '../about/BioAppSection.js';
// import '../../App.css' ;

// export default function OIyoni() {
//     return (
//         <>
//         <AboutSecton/> 
//         <BioSection/>
//         <BioAppSection/>
//         </>
//     )
// }

// export default OIyoni ;


import React from 'react';
import '../../App.css';
import AboutSecton from '../about/AboutSection';
import BioSection from '../about/BioSection.js';
import BioAppSection from '../about/BioAppSection.js';
import mockPage from '../../utils/page'
import axios from 'axios';

class OIyoni extends React.Component {
    state = {
        page: null
    }

    async componentDidMount() {
        const pages_res = await axios({
            method: 'GET',
            url: 'http://localhost:1337/pages/2'
        })
        console.log("Home.componentDidMount pages_res", pages_res)
        this.setState({ page: pages_res.data })
    }

    render() {
        const { page } = this.state
        console.log("App.render mockPage", mockPage)
        return (
            <>
                {page && page.content &&
                    <>
                        {page.content.map(component => (
                            <>
                                {component.__component === 'about.introduction' &&
                                    <AboutSecton data={component} />
                                }

                                {component.__component === 'about.purposes' &&
                                    <BioSection data={component} />
                                }

                                {component.__component === 'about.app-stores2' &&
                                    <BioAppSection data={component} />
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

export default OIyoni;