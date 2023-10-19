import BlogSidebar from "./BlogSidebar"
import BlogComment from "./Comment/BlogComment"
import BlogCommentBox from "./Comment/CommentBox"
import Link from "next/link"

const BlogDetail=()=>{
return(
<div className="blog_details__wrapper bg-body-2 section_gap_y_bottom__1 pt-60 overflow-hidden">
<div className="container">
<div className="blog__details">
<div className="row">
    <div className="blog_d__header">
        <ul className="blog__actions">
            <li><svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 3.25V7.15002C13 8.64002 12.24 9.76001 11 10.2C10.62 10.33 10.2 10.4 9.75 10.4H7.15L4.26 12.33C3.83 12.61 3.25 12.3 3.25 11.79V10.4C2.28 10.4 1.46 10.08 0.89 9.51001C0.32 8.94001 0 8.12002 0 7.15002V3.25C0 2.8 0.0699998 2.38 0.2 2C0.64 0.76 1.76 0 3.25 0H9.75C11.7 0 13 1.3 13 3.25Z"
                        fill="currentColor"></path>
                </svg>

                <span>1</span>
            </li>
            <li><svg width="11" height="13" viewBox="0 0 11 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.326376 6.88142C1.32175 4.29472 4.86578 4.15524 4.00989 0.395643C3.94649 0.116685 4.24447 -0.0988737 4.48539 0.0469453C6.78679 1.4037 8.44152 4.12354 7.05307 7.68659C6.93895 7.97823 7.28131 8.25085 7.52856 8.06065C8.6761 7.19208 8.79655 5.9431 8.69512 5.04917C8.65708 4.71949 9.08819 4.56099 9.27205 4.83361C9.70317 5.49297 10.1406 6.55808 10.1406 8.16209C9.89971 11.7125 6.90091 12.8029 5.82312 12.9424C4.28251 13.139 2.6151 12.8537 1.41685 11.7568C0.0981377 10.5332 -0.383699 8.58053 0.326376 6.88142ZM6.01965 10.4635C5.1067 10.2416 4.82774 9.18916 4.70094 8.60588C4.49173 7.69927 5.30958 6.81168 4.758 5.37885C5.12898 6.34253 6.01965 9.17015 6.01965 10.4635C4.18107 11.9724 4.11767 11.1419 6.01965 10.4635Z"
                        fill="currentColor"></path>
                </svg>

                <span>5480</span>
            </li>
            <li><svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.95279 1.3359V0.433735C7.95279 0.196627 7.75616 0 7.51905 0C7.28194 0 7.08532 0.196627 7.08532 0.433735V1.3012H3.32628V0.433735C3.32628 0.196627 3.12965 0 2.89255 0C2.65544 0 2.45881 0.196627 2.45881 0.433735V1.3359C0.897365 1.48048 0.139775 2.41157 0.0241122 3.79373C0.0125459 3.96144 0.151341 4.10024 0.313269 4.10024H10.0983C10.266 4.10024 10.4048 3.95566 10.3875 3.79373C10.2718 2.41157 9.51423 1.48048 7.95279 1.3359Z"
                        fill="currentColor"></path>
                    <path
                        d="M9.83133 4.96771C10.1494 4.96771 10.4096 5.22795 10.4096 5.54603V9.10844C10.4096 10.8434 9.54217 12 7.51807 12H2.89157C0.86747 12 0 10.8434 0 9.10844V5.54603C0 5.22795 0.260241 4.96771 0.578313 4.96771H9.83133Z"
                        fill="currentColor"></path>
                    <path
                        d="M3.18378 7.9518C3.03342 7.9518 2.88306 7.88818 2.77318 7.78408C2.66908 7.6742 2.60547 7.52384 2.60547 7.37348C2.60547 7.22312 2.66908 7.07276 2.77318 6.96288C2.93511 6.80096 3.18957 6.7489 3.40354 6.84143C3.47872 6.87034 3.54234 6.91084 3.59438 6.96288C3.69848 7.07276 3.7621 7.22312 3.7621 7.37348C3.7621 7.52384 3.69848 7.6742 3.59438 7.78408C3.4845 7.88818 3.33414 7.9518 3.18378 7.9518Z"
                        fill="currentColor"></path>
                    <path
                        d="M5.19941 7.9518C5.04905 7.9518 4.89868 7.88818 4.78881 7.78408C4.68471 7.6742 4.62109 7.52384 4.62109 7.37348C4.62109 7.22312 4.68471 7.07276 4.78881 6.96288C4.84085 6.91084 4.90447 6.87034 4.97965 6.84143C5.19362 6.7489 5.44808 6.80096 5.61001 6.96288C5.71411 7.07276 5.77772 7.22312 5.77772 7.37348C5.77772 7.52384 5.71411 7.6742 5.61001 7.78408C5.58109 7.80721 5.55218 7.83034 5.52326 7.85347C5.48856 7.87661 5.45387 7.89397 5.41917 7.90554C5.38447 7.92289 5.34977 7.93445 5.31507 7.94024C5.27459 7.94602 5.23989 7.9518 5.19941 7.9518Z"
                        fill="currentColor"></path>
                    <path
                        d="M7.23066 7.95183C7.0803 7.95183 6.92993 7.88821 6.82006 7.78411C6.71596 7.67423 6.65234 7.52388 6.65234 7.37352C6.65234 7.22316 6.71596 7.0728 6.82006 6.96292C6.87789 6.91087 6.93572 6.87038 7.0109 6.84146C7.11499 6.7952 7.23066 6.78363 7.34632 6.80676C7.38102 6.81255 7.41572 6.82411 7.45042 6.84146C7.48512 6.85303 7.51981 6.87039 7.55451 6.89352C7.58343 6.91666 7.61234 6.93979 7.64126 6.96292C7.74536 7.0728 7.80897 7.22316 7.80897 7.37352C7.80897 7.52388 7.74536 7.67423 7.64126 7.78411C7.61234 7.80725 7.58343 7.83038 7.55451 7.85351C7.51981 7.87664 7.48512 7.89401 7.45042 7.90557C7.41572 7.92292 7.38102 7.93449 7.34632 7.94027C7.30584 7.94605 7.26536 7.95183 7.23066 7.95183Z"
                        fill="currentColor"></path>
                    <path
                        d="M3.18378 9.97591C3.1086 9.97591 3.03342 9.95857 2.96402 9.92965C2.88884 9.90074 2.83101 9.86024 2.77318 9.80819C2.66908 9.69831 2.60547 9.54796 2.60547 9.39759C2.60547 9.24723 2.66908 9.09688 2.77318 8.987C2.83101 8.93495 2.88884 8.89445 2.96402 8.86554C3.06812 8.81927 3.18378 8.80771 3.29945 8.83084C3.33414 8.83662 3.36884 8.84819 3.40354 8.86554C3.43824 8.87711 3.47294 8.89447 3.50764 8.9176C3.53655 8.94074 3.56547 8.96386 3.59438 8.987C3.69848 9.09688 3.7621 9.24723 3.7621 9.39759C3.7621 9.54796 3.69848 9.69831 3.59438 9.80819C3.56547 9.83132 3.53655 9.86024 3.50764 9.87759C3.47294 9.90072 3.43824 9.91808 3.40354 9.92965C3.36884 9.947 3.33414 9.95856 3.29945 9.96435C3.25896 9.97013 3.22426 9.97591 3.18378 9.97591Z"
                        fill="currentColor"></path>
                    <path
                        d="M5.19941 9.97587C5.04905 9.97587 4.89868 9.91225 4.78881 9.80815C4.68471 9.69827 4.62109 9.54792 4.62109 9.39756C4.62109 9.2472 4.68471 9.09684 4.78881 8.98696C5.00278 8.77298 5.39603 8.77298 5.61001 8.98696C5.71411 9.09684 5.77772 9.2472 5.77772 9.39756C5.77772 9.54792 5.71411 9.69827 5.61001 9.80815C5.50013 9.91225 5.34977 9.97587 5.19941 9.97587Z"
                        fill="currentColor"></path>
                    <path
                        d="M7.23066 9.97587C7.0803 9.97587 6.92993 9.91225 6.82006 9.80815C6.71596 9.69827 6.65234 9.54792 6.65234 9.39756C6.65234 9.2472 6.71596 9.09684 6.82006 8.98696C7.03403 8.77298 7.42728 8.77298 7.64126 8.98696C7.74536 9.09684 7.80897 9.2472 7.80897 9.39756C7.80897 9.54792 7.74536 9.69827 7.64126 9.80815C7.53138 9.91225 7.38102 9.97587 7.23066 9.97587Z"
                        fill="currentColor"></path>
                </svg>

                <span>2</span>
            </li>
        </ul>
        <h2 className="blog__title">A year In Images: Defining NFTs on
            Foundation In 2022</h2>
        <ul className="blog__meta">
            <li className="blog__writer">
                <img src="/images/blog/blog-avater-sm.png" alt="" className="blog__avater"/>
                <span>Ephimera</span>
            </li>
            <li>October 4, 2022</li>
            <li className="reading__time"><ins>4</ins> <span>Min Read</span> </li>
        </ul>

        <div className="blog-thumb">
            <img src="/images/blog/blog-d-thumb.png" alt=""/>
        </div>
    </div>
</div>

<div className="row gx-6">
    <div className="col-lg-8 pt-60">
        <div className="blog_d__body">

            <p >Damon Davis is a post-disciplinary artist exploring identity, culture, and power, often through a surrealist lens. Based in St. Louis, Missouri, Damon utilizes a variety of media such as film, sculpture, multi-media and more to illustrate how identity is formed by power and mythology. His most notable work, “Darker Gods”, navigates Afro-surrealist manifestations of black culture. Damon’s work is held in the permanent collections of the Smithsonian National Museum of African American History and Culture.</p>

            <h3 className="pt-4">1. Be Unique and Memorable</h3>

            <p className="pt-3">FTs have a steep learning curve, which is symptomatic of such a cutting edge concept. One of the best ways to learn about it is to get yourself immersed in the community — luckily, there are loads of people willing to guide you through the blockchain maze. “Being very active on communications platforms like Discord was very helpful for me early on — actually, Rarible Discord is very active and there are a lot of collectors on there,” Lux Expression said, adding:</p>

            <div className="blog_inner__img mt-40">
                <img src="/images/blog/blog-d-inner.png" alt=""/>
            </div>

            <h5>“Being very active on communications platforms like Discord was very helpful for me early on — actually, Rarible Discord is very active and there are a lot of collectors on there,” Lux Expression said, adding:</h5>

            <ul>
                <li>Consectetur libero id faucibus nisl tincidunt eget.</li>
                <li>Penatibus et magnis dis parturient montes nascetur ridiculus.</li>
                <li>Mix ea viderer sanctus nunc mattis enim indoctum.</li>
                <li>Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a.</li>
                <li>Possit theo phrastusat erat pellentesque adipiscing.</li>
            </ul>

            <div className="blog__quote">
                <div className="uppper__icon">
                    <img src="/images/icons/quote-blue.svg" alt=""/>
                </div>
                <h4> Rapidious qntegrate distrbuted supply chains throuih markeposition bestn practces chain marke positonn</h4>
                <div className="lower__icon">
                    <svg width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_604_144" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="34">
                        <rect width="50" height="34" fill="#C4C4C4"></rect>
                        </mask>
                        <g mask="url(#mask0_604_144)">
                        <path d="M34.7484 22.9541H46.4755C46.2755 34.6312 43.975 36.5566 36.7988 40.8073C35.9736 41.3074 35.6986 42.3575 36.1987 43.2077C36.6987 44.0328 37.7489 44.308 38.5991 43.8079C47.0506 38.807 50.0011 35.7564 50.0011 21.2037V7.72645C50.0011 3.45069 46.5255 0 42.2747 0H34.7734C30.3726 0 27.047 3.32566 27.047 7.72645V15.2278C27.022 19.6286 30.3476 22.9541 34.7484 22.9541Z" fill="currentColor" fillOpacity="0.08"></path>
                        <path d="M7.70152 22.9541H19.4286C19.2286 34.6312 16.9282 36.5566 9.75189 40.8073C8.92674 41.3074 8.65169 42.3575 9.15178 43.2077C9.65187 44.0328 10.7021 44.308 11.5522 43.8079C20.0037 38.807 22.9543 35.7564 22.9543 21.2037V7.72645C22.9543 3.45069 19.4786 0 15.2279 0H7.72652C3.32574 0 0.000140069 3.32566 0.000140069 7.72645V15.2278C-0.0248644 19.6286 3.30073 22.9541 7.70152 22.9541Z" fill="currentColor" fillOpacity="0.08"></path>
                        </g>
                        </svg>
                </div>
            </div>

            <p className="pt-30">If you are getting started in the NFT space, be humble and disciplined. You might have heard quite a few rags-to-riches stories about people making a fortune on collectibles, but remember that being a successful NFT artist or trader requires skills.</p>
            <br/>
            <span className="highlighted__text">Till then, Happy Designing!</span>
        </div>

        <div className="blog__bottom">
            <div className="d-flex align-content-center justify-content-between flex-wrap">
                <ul className="blog__tags">
                    <li><Link href="/blog"><a>NFT</a></Link></li>
                    <li><Link href="/blog"><a>Creative</a></Link></li>
                    <li><Link href="/blog"><a>Crypto</a></Link></li>
                    <li><Link href="/blog"><a>Software</a></Link></li>
                    <li><Link href="/blog"><a>Art</a></Link></li>
                </ul>
                <div className="blog__share d-flex align-items-center">
                    <span>ShareThis :</span>
                    <ul className="d-flex">
                        <li><Link href="/blog"><a><img src="/images/icons/fb-round.svg" alt=""/></a></Link></li>
                        <li><Link href="/blog"><a><img src="/images/icons/twitter-round.svg" alt=""/></a></Link></li>
                        <li><Link href="/blog"><a><img src="/images/icons/insta-round.svg" alt=""/></a></Link></li>
                    </ul>
                </div>
            </div>


            <div className="blog__publisher mt-40">
                <div className="publisher__avater">
                    <img src="/images/blog/publisher-avater.png" alt=""/>
                </div>
                <div className="publisher__disc">
                    <h5>Dylan Meringue</h5>
                    <p>Eu consequat ac felis donec et. Amet risus nullam eget felis eget. Cursus risus at ultrices mi tempus.</p>
                </div>
            </div>


            <div className="blog__switcher d-flex gap-3 pt-40 flex-column flex-lg-row">
                <div className="single__switcher">
                    <a className="switch__icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 8H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 1L1 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <div className="switcher__info">
                        <span>Previous Post </span>
                        <h5><a>Most Employees Support Measures to Prevent Spread</a></h5>
                    </div>
                </div>
                <div className="single__switcher toright">
                    <div className="switcher__info text-end">
                        <span>Previous Post </span>
                        <h5><a>Most Employees Support Measures to Prevent Spread</a></h5>
                    </div>
                    <a className="switch__icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            
                    </a>
                </div>
            </div>

            <div className="blog__comments pt-60">
                <h4 className="comt__count pb-4">Comments (3)</h4>
                <ul className="single_comment__block">
                    <BlogComment
                      avatar="/images/blog/bd-avater-one.png"
                      author="Daniel Smith"
                      created_at="April 16,2022 at 10:30 pm"
                      text="Dolor sit amet, consectetur adipiscing elit. Phasellus 
                      feugiat elit vitae enim lacinia semper. cras nulla lectus, 
                      porttitor vitae urna."
                    />
                    <BlogComment
                      avatar="/images/blog/bd-avater-two.png"
                      author="Daniel Smith"
                      created_at="April 16,2022 at 10:30 pm"
                      text="Dolor sit amet, consectetur adipiscing elit. Phasellus 
                      feugiat elit vitae enim lacinia semper. cras nulla lectus, 
                      porttitor vitae urna."
                    />
                </ul>
            </div>

            <BlogCommentBox/>

        </div>
    </div>

    <div className="col-lg-4 pt-60">

      <BlogSidebar/> 
       
    </div>
</div>
</div>

</div>
</div>
)
}
export default BlogDetail