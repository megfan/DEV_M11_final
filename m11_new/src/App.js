import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import Offert from './Components/Offert.js';
import Footer from './Components/Footer'

import * as Scroll from "react-scroll/modules/index";



class App extends React.Component {

    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }
    render(){
        return(
                <div>
                    <NavBar />
                    <Header />
                    <About />
                    <Offert />
                    <Contact />
                    <Footer />
                </div>
        )
    }
};
export default App;