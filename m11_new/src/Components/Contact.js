import React from 'react'

class Contact extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="contact">
                    <div className="contact_title">
                        <div className="contact_title__main">
                            <span>Masz</span>
                            <span className='offset_title'>Pytania?</span>
                        </div>
                        <div className="contact_title_form">
                            <textarea name="message" cols="30" rows="10">Napisz do nas ...</textarea>
                        </div>
                        <button className='contact_title_btn'>Wyślij</button>
                    </div>
                    <div className="contact_slider">
                        <img src="https://firebasestorage.googleapis.com/v0/b/m-11-25231.appspot.com/o/1.jpg?alt=media&token=cbf02dbc-bcc8-48e6-a277-ab0d874ea508" alt="header" className="header_slider__pic"/>
                    </div>
                </div>
            </div>
        )
    }
};
export default Contact;