import Link from "next/link"
import FooterConstant from "../../../constant/Footer/FooterConstant"

const FooterTwo=()=>{
return(
<div className="footer_style__one bg-body-2 varient-2 section_gap_y_top__1">
<div className="container">
<div className="row gy-4">
<div className="col-lg-3">
    <div className="footer__about">
        <div className="footer__logo">
            <Link href="/">
            <a className="for-dark">
                <img src={FooterConstant.LogoDark} alt=""/>
            </a>
            </Link>
            <Link href="/">
            <a className="for-light">
                <img src={FooterConstant.LogoLight} alt=""/>
            </a>
            </Link>
        </div>
        <p>{FooterConstant.Info}</p>
        <h5>Language</h5>

        <div className="languege__dropdown varient-3">
            <button>
                <img src="/images/icons/flag-us.png" alt=""/> English
            </button>
            <ul className="languege__list">
                <li><a> <img src="/images/icons/flag-us.png" alt=""/> English</a></li>
                <li><a> <img src="/images/icons/flag-us.png" alt=""/> English</a></li>
            </ul>
        </div>
    </div>
</div>
<div className="col-lg-3 col-6 d-flex justify-content-lg-center">
    <div className="footer__widget varient-2">
        <h6 className="footer_widget__title">Market plac</h6>

        <ul className="footer_widget__links">
            <li><Link href="/author-profile"><a>Profile</a></Link></li>
            <li><Link href="/marketplace-1"><a>Marketplace</a></Link></li>
            <li><Link href="/creators"><a>Creators</a></Link></li>
            <li><Link href="/activity"><a>Activity</a></Link></li>
            <li><Link href="/collection"><a>Colletctions</a></Link></li>
        </ul>
    </div>
</div>
<div className="col-lg-2 col-6 d-flex justify-content-lg-center ">
    <div className="footer__widget varient-2">
        <h6 className="footer_widget__title">Company</h6>

        <ul className="footer_widget__links">
            <li><Link href="/create-nft"><a>Upload</a></Link></li>
            <li><Link href="/connect-wallet"><a>Connect wallet</a></Link></li>
            <li><Link href="/blog"><a>Our blog </a></Link></li>
            <li><Link href="/nft-detail"><a>Item details</a></Link></li>
            <li><Link href="/contact"><a>Contact us</a></Link></li>
        </ul>
    </div>
</div>
<div className="col-lg-4">
    <div className="footer__widget newslatter__widget">
        <h6 className="footer_widget__title">Join Newsletter</h6>
        <form action="#" method="POST" id="footer_form__one">
            <div className="footer_newslatter__one style__three mt-2">
                <input type="text" placeholder="Your Email"/>
                <button type="submit"
                    className="form__submit submit-btn-one btn-rounded-v1">Subscribe</button>
            </div>
        </form>

        <ul className="footer_social__links d-flex style__three">
            <li><Link href={FooterConstant.SocialLinks.twitter}><a><i className="bi bi-twitter"></i></a></Link></li>
            <li><Link href={FooterConstant.SocialLinks.instagram}><a><i className="bi bi-instagram"></i></a></Link></li>
            <li><Link href={FooterConstant.SocialLinks.youtube}><a><i className="bi bi-youtube"></i></a></Link></li>
            <li><Link href={FooterConstant.SocialLinks.github}><a><i className="bi bi-github"></i></a></Link></li>
            <li><Link href={FooterConstant.SocialLinks.discord}><a><i className="bi bi-discord"></i></a></Link></li>
        </ul>
    </div>
</div>
</div>
<div className="row footer__copyright has-border-top varient-2">
<div className="col-lg-12">
    <p className="text-center">
        {FooterConstant.CopyRightText}
        <Link href={FooterConstant.CopyRightLink.link}>
            <a>{FooterConstant.CopyRightLink.Text}</a></Link>
    </p>
</div>
</div>
</div>
</div>
)
}
export default FooterTwo