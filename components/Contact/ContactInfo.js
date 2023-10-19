
const ContactInfoSection=(props)=>{
return(
<>
<div className="row pt-50 gy-4">
    <div className="col-lg-4 col-md-6">
        <div className="contact_card__style">
            <div className="contact__icon">
                <img src="/images/icons/3d-phone.svg" alt=""/>
            </div>
            <div className="contact__disc">
                <h5>Toll Free: <a href="tel:012345678910">+0123 4567 8910</a> <br/>
                    International: <a href="tel:012345678910">+0123 4567 8910</a></h5>
                
                    <a href="tel:012345678910" className="btn-pill-outlined">Call Us
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.49988H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 1.49988L11 6.49988L6 11.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 ">
        <div className="contact_card__style">
            <div className="contact__icon">
                <img src="/images/icons/3d-support.svg" alt=""/>
            </div>
            <div className="contact__disc">
                <h5>Online and always available, we’re
                    here to answer your questions 24/7</h5>
                
                    <a href="tel:012345678910" className="btn-pill-outlined">Contact Support
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.49988H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 1.49988L11 6.49988L6 11.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                    </a>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6">
        <div className="contact_card__style">
            <div className="contact__icon">
                <img src="/images/icons/3d-mail.svg" alt=""/>
            </div>
            <div className="contact__disc">
                <h5>Email us, 24/7, we’re alweys <br/>
                    responding</h5>
                
                    <a className="btn-pill-outlined">Contact Support
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.49988H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 1.49988L11 6.49988L6 11.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                    </a>
            </div>
        </div>
    </div>
</div>
</>
)
}
export default ContactInfoSection