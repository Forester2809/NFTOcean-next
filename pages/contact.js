import ContactAdress from "../components/Contact/ContactAddress"
import ContactFormSection from "../components/Contact/ContactForm"
import ContactInfoSection from "../components/Contact/ContactInfo"
import BreadCrumbTwo from "../components/Global/BreadCrumbTwo"
import FooterOne from "../components/Layout/Footers/FooterOne"
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"

const ContactPage=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbTwo pagename="Contact Us" />

<div className="contact_wrapper__style bg-body-2 section_gap_y_top__2">
<div className="container">
<div className="row justify-content-center">
    <div className="col-xl-5 col-lg-6 text-center">
        <h2 className="contact__title"><span>Hi,🖐 We are</span> NFTOcean</h2>
        <p className="disc-text-2 pt-2">We’re here to help and answer any question you might have.We look forward to hearing from you 🙂</p>
    </div>
</div>

<ContactInfoSection />
<ContactFormSection />
<ContactAdress />

</div>


</div>

<FooterOne white={true}/>
</>
)
}
export default ContactPage