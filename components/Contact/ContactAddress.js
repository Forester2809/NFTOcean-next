import Link from "next/link"
import ContactAddressCard from "./ContactAddressCard"

const ContactAdress=()=>{
return(
<div className="contact_cards__style bg-body-3 section_gap_y_top__2 section_gap_y_bottom__1">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
        <h2 className="contact__title">We &apos;re here for you</h2>
        <p className="disc-text-2 pt-2">We are located in <strong>3 offices</strong></p>
        </div>
    </div>
    <div className="row pt-50 gy-4">

        <ContactAddressCard 
          location="London"
          address="Wework mansion house. 34 Queen street, albaqueki state"
          country="United Kingdom"
          MapLink="https://www.google.com/maps/place/Mirpur+DOHS+Shopping+Complex/@23.8380008,90.3731895,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c6b4dace62ed:0xc742e878029e533b!8m2!3d23.8379959!4d90.3753782"
          email="nft@ocean.com"
        />

        <ContactAddressCard 
          location="New York"
          address="Higson Ln, Melbourne boz sok. No: 18/2 3445 Istanbul"
          country="United State"
          MapLink="https://www.google.com/maps/place/Mirpur+DOHS+Shopping+Complex/@23.8380008,90.3731895,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c6b4dace62ed:0xc742e878029e533b!8m2!3d23.8379959!4d90.3753782"
          email="nft@ocean.com"
        />

        <ContactAddressCard 
          location="Dubai"
          address="Higson Ln, Melbourne boz sok. No: 18/2 3445 Istanbul"
          country="United Arab Emirates"
          MapLink="https://www.google.com/maps/place/Mirpur+DOHS+Shopping+Complex/@23.8380008,90.3731895,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c6b4dace62ed:0xc742e878029e533b!8m2!3d23.8379959!4d90.3753782"
          email="nft@ocean.com"
        />

    </div>
</div>
</div>
)
}
export default ContactAdress