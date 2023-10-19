
const AupSidebar=()=>{
return(
<div className="col-lg-3">
<div className="author_detail__info">
    <div className="copy__bord">
        <span>#43463</span>
        <button>0xCC3C…EC00
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.80388 13.2632H3.5941C1.28115 13.2632 0 11.9967 0 9.68638V3.57677C0 1.27497 1.27255 0 3.5941 0H7.52354C9.83649 0 11.1176 1.26642 11.1176 3.57677C11.1176 3.92761 10.8253 4.21854 10.4728 4.21854C10.1202 4.21854 9.8279 3.92761 9.8279 3.57677C9.8279 1.96808 9.14003 1.28353 7.52354 1.28353H3.5941C1.97762 1.28353 1.28975 1.96808 1.28975 3.57677V9.68638C1.28975 11.2951 1.97762 11.9796 3.5941 11.9796H5.80388C6.15641 11.9796 6.44875 12.2706 6.44875 12.6214C6.44875 12.9722 6.15641 13.2632 5.80388 13.2632Z"
                    fill="currentColor" />
                <path
                    d="M11.8705 14H9.54195C8.17131 14 7.41211 13.1959 7.41211 11.729V7.84992C7.41211 6.38846 8.16622 5.57895 9.54195 5.57895H11.8705C13.2411 5.57895 14.0003 6.38302 14.0003 7.84992V11.729C14.0003 13.1959 13.2462 14 11.8705 14ZM9.54195 6.39389C8.58403 6.39389 8.17641 6.82852 8.17641 7.84992V11.729C8.17641 12.7504 8.58403 13.1851 9.54195 13.1851H11.8705C12.8284 13.1851 13.236 12.7504 13.236 11.729V7.84992C13.236 6.82852 12.8284 6.39389 11.8705 6.39389H9.54195Z"
                    fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
            </svg>
        </button>
    </div>


    <h3 className="author__name">Melih Polat</h3>
    <h6 className="author__username">@djmooney786</h6>

    <div className="followers__wrap">
        <div className="single__flw">
            <h5>174</h5>
            <span>Following</span>
        </div>
        <div className="single__flw">
            <h5>237</h5>
            <span>Followers</span>
        </div>
        <div className="follow__btn">
            <button>Follow</button>
        </div>
    </div>

    <div className="follow__avater">
        <h5>Followed by</h5>

        <div className="avater__group">
            <img src="/images/nft/ag-one.png" alt=""/>
            <img src="/images/nft/ag-two.png" alt=""/>
            <img src="/images/nft/ag-three.png" alt=""/>
            <img src="/images/nft/ag-four.png" alt=""/>
        </div>

        <div className="all__followers">
            <a className="view__btn">View all</a>
        </div>
    </div>

    <ul className="author_social__links">
        <li>
            <a className="social__link">
                <img src="/images/icons/twitter-color.svg" alt=""
                    className="social__icon"/> <span>@mpmelihpolat</span> <img
                    src="/images/icons/tick-blue.svg" alt="" className="tick__icon"/> </a>
        </li>
        <li>
            <a className="social__link">
                <img src="/images/icons/insta-color.svg" alt=""
                    className="social__icon"/> <span>@mpmelihpolat</span></a>
        </li>
        <li>
            <a className="social__link">
                <img src="/images/icons/web-color.svg" alt=""
                    className="social__icon"/> <span>Ocean.com</span></a>
        </li>
    </ul>

    <div className="join__date">
        <strong>Joined</strong>
        <span>November 2021</span>
    </div>

</div>
</div>
)
}

export default AupSidebar