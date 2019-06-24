import React from 'react'

class Main extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="header">
                    <div className="header_title">
                        <div className="header_title__main">
                            <span>City</span>
                            <span className='offset_title'>Living.</span>
                            <span>Refined</span>
                        </div>
                        <button className='header_title_btn'>Contact Us</button>
                    </div>
                    <div className="header_slider">
                        <img src="https://firebasestorage.googleapis.com/v0/b/m-11-25231.appspot.com/o/2.jpg?alt=media&token=3548452b-c703-47f0-a2cf-fa0037691e6b" alt="header" className="header_slider__pic"/>
                    </div>
                </div>
            </div>
        )
    }
};
export default Main;