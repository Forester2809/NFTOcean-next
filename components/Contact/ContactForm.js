
const ContactFormSection=()=>{
return(
<div className="contact_form__wrap section_gap_y_top__3 section_gap_y_bottom__3"> 
<div className="row">
<div className="col-lg-4 h-100 d-none d-lg-block">
    <img src="/images/others/contact-form-img.png" alt="" />
</div>
<div className="col-lg-8">
    <div className="contact_form__outer">
        <form action="#" id="contact__form">
            <div className="row">
                <div className="col-lg-6 pt-20">
                    <div className="custom_input__style">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name"/>
                    </div>
                </div>
                <div className="col-lg-6 pt-20">
                    <div className="custom_input__style">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" id="email" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="col-lg-6 pt-20">
                    <div className="custom_input__style">
                        <div className="select_style__one varient-2">
                            <label>Your Name</label>
                            <select className="select__nice">
                                <option data-display="United States">United States</option>
                                <option value="1">Bangladash</option>
                                <option value="2">Japan</option>
                                <option value="3">Argetina</option>
                                <option value="4">Mongolia</option>
                                <option value="5">United Kingdom</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pt-20">
                    <div className="custom_input__style">
                        <div className="select_style__one varient-2">
                            <label>Select a Subject</label>
                            <select className="select__nice">
                                <option data-display="Service Request">Service Request</option>
                                <option value="1">Item Refand</option>
                                <option value="2">Buing Right</option>
                                <option value="3">For tiket</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 pt-20">
                    <div className="custom_input__style mt-4">
                        <label htmlFor="massege">Message</label>
                        <textarea  id="massege" cols="30" rows="5" placeholder="Write a Message"></textarea>
                    </div>
                </div>

                <div className="condition">
                    <input type="checkbox"  id="condition"/>
                    <label htmlFor="condition">Allow to all tearms & condition</label>
                </div>

                <div className="submit__btn">
                <button type="submit" className="submit-v1">Send Message</button>
                </div>

            </div>
        </form>
    </div>
    
</div>
</div>
</div>
)
}
export default ContactFormSection