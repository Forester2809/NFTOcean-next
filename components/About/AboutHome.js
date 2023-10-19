import Link from "next/link"

const AboutHome=()=>{
return(
<div className="about__header section_gap_y_top__1">
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="about_header__content">
                <h2>Digital Art
                    Collectibles a New Ocean</h2>
                <p>Our mission is to empower designers, developers and agencies with the tools they need to build their digital products.</p>

                <a href="#" className="btn-rounded-v4">Connect with Us</a>
            </div>
        </div>
    </div>

    <div className="row pt-60">
        <div className="about_video__wrap">
            <div className="video__thumb">
                <img src="/images/about/about-video.png" alt=""/>
            </div>

            <div className="video_play__icon">
                <Link href="https://www.youtube.com/watch?v=_sI_Ps7JSEk&amp=">
                <a>
                    <img src="/images/icons/play-red.svg" alt=""/>
                </a>
                </Link>
                <div className="blur-bg"></div>
            </div>
        </div>
    </div>
</div>
</div>
)
}
export default AboutHome