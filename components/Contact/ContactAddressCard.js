import Link from "next/link"

const ContactAddressCard=(props)=>{
return(
<div className="col-lg-4 col-md-6">
    <div className="contact_card_style__two">
    <div className="card__top">
        <h3>{props.location}</h3>
        <p>{props.address}</p>
        <p className="office__location">{props.country}</p>
    </div>
    <div className="card__bottom" >
        <Link href={props.MapLink}>
        <a target="_blank" className="map__link">View on Map</a>
        </Link>
        <Link href="mailto:nft@ocean.com">
        <a className="office__mail">{props.email}</a>
        </Link>
    </div>
    </div>
</div>
)
}
export default ContactAddressCard