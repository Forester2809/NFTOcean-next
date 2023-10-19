import Link from "next/link"

const AboutMission=()=>{
return(
<div className="mission__style section_gap_y_bottom__2 bg-body-2">
<div className="container">
    <div className="row gy-4 align-items-center justify-content-center gx-lg-5">
        <div className="col-lg-6">
            <div className="mission__illustration text-lg-end">
                <img src="/images/about/mission-illustration.png" alt=""/>
            </div>
        </div>

        <div className="col-lg-6">
            <div className="mission__contents">
                <h2 className="mission__title"><span>Our Mission</span> What&apos;s MakersPlace?</h2>
                <p className="disc-text">Every digital creation is issued as a unique digital edition. Using blockchain technology, a creator can ensure that only a limited number of authentic editions can ever be owned, ensuring scarcity and uniqueness of a digital creation.</p>
               
               <Link href="/">
                <a className="btn-rounded-v5"><span>Learn more</span> <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.49988H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 1.49988L11 6.49988L6 11.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
               </Link>
            </div>
        </div>
    </div>
</div>
</div>
)
}
export default AboutMission