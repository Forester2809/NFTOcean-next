import HMgridItem from "./Homemarketplacegrid/HmGrid"
import Link from "next/link"
import { useState } from "react"

const HomeMarketplaceGrid=()=>{
const [Tab,setTab] = useState('trandings')

// change tab
function ChangeTab(tab){
  try{
    let tabs = document.querySelectorAll('.tab-pane')
    tabs.forEach(tb=>{
      tb.classList.remove("active")
      tb.classList.remove("show")
    })
    let cu_tab = document.getElementById(tab)
    cu_tab.classList.add("active")
    setTimeout(()=>{
        cu_tab.classList.add("show")
    },100)
    setTab(tab)
  }catch(err){}
}

return(
<div className="nft_grid_style__one bg-body section_gap_y_top__3 overflow-hidden">
<div className="container">
<div className="row gy-4 align-items-center pb-18">
    <div className="col-lg-5">
        <h2 className="section_title__1 fw-bold">
            <span className="text-nowrap">Marketplace</span>
            <img src="/images/shapes/nut-svg.svg" alt=""/>
        </h2>
    </div>
    <div className="col-lg-7 d-flex gap-3 justify-content-lg-end">
        <form action="#">
            <div className="nft__searchbar">
                <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.50914 14.6286C11.2726 14.6286 14.3235 11.5778 14.3235 7.81431C14.3235 4.05087 11.2726 1 7.50914 1C3.7457 1 0.694824 4.05087 0.694824 7.81431C0.694824 11.5778 3.7457 14.6286 7.50914 14.6286Z"
                        strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.6949 16L12.3218 12.627" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
                <input type="text" placeholder="Search..."/>
            </div>
        </form>
        <button className="nft-filter">
            <span className="filter-lavel">Filter & Sort</span>
            <svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.82351 1.89138C6.82351 0.846384 7.67456 0 8.72456 0C9.77395 0 10.625 0.846384 10.625 1.89138C10.625 2.93576 9.77395 3.78276 8.72456 3.78276C7.67456 3.78276 6.82351 2.93576 6.82351 1.89138ZM7.91385 6.55419C7.91385 6.09647 8.28718 5.72492 8.7471 5.72492C9.20639 5.72492 9.58034 6.09647 9.58034 6.55419V10.1707C9.58034 10.6284 9.20639 11 8.7471 11C8.28718 11 7.91385 10.6284 7.91385 10.1707V6.55419ZM0.625 9.10862C0.625 8.06363 1.47605 7.21724 2.52544 7.21724C3.57544 7.21724 4.42649 8.06363 4.42649 9.10862C4.42649 10.153 3.57544 11 2.52544 11C1.47605 11 0.625 10.153 0.625 9.10862ZM1.69281 0.828662C1.69281 0.371553 2.06614 0 2.52544 0C2.98535 0 3.35869 0.371553 3.35869 0.828662V4.4452C3.35869 4.90292 2.98535 5.27447 2.52544 5.27447C2.06614 5.27447 1.69281 4.90292 1.69281 4.4452L1.69281 0.828662Z" />
            </svg>
            Price: Low to High
        </button>
    </div>
</div>
<ul className="nft_nav__pills nav nav-pills">
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('trandings')}>
        <button className={`nav-link ${Tab==='trandings'?'active':null}`} id="nft_pill_1" data-bs-toggle="pill" data-bs-target="#nft_tab_1"
            type="button" role="tab" aria-controls="nft_tab_1" aria-selected="true">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M7.66667 1L1 10H7L6.33333 16L13 7H7L7.66667 1Z" stroke="currentColor"
                    strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span>Trendings</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('art')}>
        <button className={`nav-link ${Tab==='art'?'active':null}`} id="nft_pill_2" data-bs-toggle="pill" data-bs-target="#nft_tab_2"
            type="button" role="tab" aria-controls="nft_tab_2" aria-selected="true">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.47653 11.6598L5.21106 14.5107C7.13156 16.5129 7.78753 16.4799 9.68432 14.5107L14.0864 9.92127C15.6197 8.3228 16.0069 7.2599 14.0864 5.2577L11.3519 2.40682C9.30496 0.272785 8.41189 0.808353 6.87865 2.40682L2.47653 6.99623C0.587649 8.97372 0.429583 9.52577 2.47653 11.6598Z"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path opacity="0.6"
                    d="M14.6711 12.6733L14.1495 13.5714C13.4145 14.8485 13.9836 15.8949 15.414 15.8949C16.8445 15.8949 17.4136 14.8485 16.6786 13.5714L16.157 12.6733C15.746 11.9647 15.0742 11.9647 14.6711 12.6733Z"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path opacity="0.6"
                    d="M1.07764 8.92424C5.47186 7.68007 10.1032 7.63888 14.5132 8.81713L14.9084 8.92424"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>

            <span>Art</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('music')}>
        <button className={`nav-link ${Tab==='music'?'active':null}`} id="nft_pill_3" data-bs-toggle="pill" data-bs-target="#nft_tab_3"
            type="button" role="tab" aria-controls="nft_tab_3" aria-selected="true">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.52792 7.31936L13.6866 4.82153" stroke="currentColor" strokeOpacity="0.6"
                    strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <mask id="path-2-inside-1_12_72" fill="currentColor">
                    <path
                        d="M14.6191 11.2865V2.02939C14.6191 0.0565716 13.0925 -0.216588 11.5472 0.124861L5.70305 1.41478C4.63536 1.65 3.90485 2.3329 3.90485 3.31931V4.96585V6.07367V12.8571" />
                </mask>
                <path
                    d="M13.6191 11.2865C13.6191 11.8387 14.0668 12.2865 14.6191 12.2865C15.1714 12.2865 15.6191 11.8387 15.6191 11.2865H13.6191ZM11.5472 0.124861L11.7627 1.10136L11.7629 1.10131L11.5472 0.124861ZM5.70305 1.41478L5.9182 2.39136L5.91858 2.39128L5.70305 1.41478ZM2.90485 12.8571C2.90485 13.4094 3.35256 13.8571 3.90485 13.8571C4.45713 13.8571 4.90485 13.4094 4.90485 12.8571H2.90485ZM15.6191 11.2865V2.02939H13.6191V11.2865H15.6191ZM15.6191 2.02939C15.6191 1.40985 15.4992 0.84398 15.2283 0.361675C14.9519 -0.130157 14.5508 -0.476593 14.0906 -0.694505C13.2167 -1.10837 12.1825 -1.03963 11.3314 -0.851587L11.7629 1.10131C12.4572 0.947904 12.959 0.982494 13.2347 1.11306C13.3493 1.16735 13.4264 1.23777 13.4846 1.34134C13.5482 1.45444 13.6191 1.66252 13.6191 2.02939H15.6191ZM11.3317 -0.851635L5.48751 0.438284L5.91858 2.39128L11.7627 1.10136L11.3317 -0.851635ZM5.48789 0.4382C4.13328 0.736634 2.90485 1.70794 2.90485 3.31931H4.90485C4.90485 2.95786 5.13744 2.56337 5.9182 2.39136L5.48789 0.4382ZM2.90485 3.31931V4.96585H4.90485V3.31931H2.90485ZM2.90485 4.96585V6.07367H4.90485V4.96585H2.90485ZM2.90485 6.07367V12.8571H4.90485V6.07367H2.90485Z"
                    fill="currentColor" mask="url(#path-2-inside-1_12_72)" />
                <path
                    d="M4.39566 12.5022C4.39566 13.5504 3.54597 14.4001 2.49783 14.4001C1.44969 14.4001 0.6 13.5504 0.6 12.5022C0.6 11.4541 1.44969 10.6044 2.49783 10.6044C3.54597 10.6044 4.39566 11.4541 4.39566 12.5022Z"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path
                    d="M14.1385 12.1406C14.1385 13.244 13.244 14.1385 12.1407 14.1385C11.0373 14.1385 10.1429 13.244 10.1429 12.1406C10.1429 11.0373 11.0373 10.1428 12.1407 10.1428C13.2441 10.1428 14.1385 11.0373 14.1385 12.1406Z"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span>Music</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('video')}>
        <button className={`nav-link ${Tab==='video'?'active':null}`} id="nft_pill_4" data-bs-toggle="pill" data-bs-target="#nft_tab_4"
            type="button" role="tab" aria-controls="nft_tab_4" aria-selected="true">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.477 14.4H3.789C2.50854 14.4 1.74365 13.9855 1.28691 13.4433C0.814712 12.8826 0.6 12.0998 0.6 11.25V3.75C0.6 2.37655 0.838235 1.65352 1.25006 1.24593C1.66371 0.836546 2.39871 0.6 3.789 0.6H9.477C10.8673 0.6 11.6023 0.836546 12.0159 1.24593C12.4278 1.65352 12.666 2.37655 12.666 3.75V11.25C12.666 12.6223 12.426 13.3457 12.013 13.7537C11.5979 14.1637 10.8622 14.4 9.477 14.4Z"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path
                    d="M15.1115 11.551L15.11 11.5499L12.8659 9.99201V4.99922L15.1091 3.44194C15.1092 3.44185 15.1094 3.44175 15.1095 3.44165C15.6323 3.08033 15.9433 3.12112 16.0674 3.18525C16.1888 3.24802 16.3999 3.47299 16.3999 4.10636V10.8938C16.3999 11.5277 16.1886 11.7514 16.0685 11.8132C15.946 11.8761 15.6354 11.917 15.1115 11.551Z"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path
                    d="M8.5502 6.60946C9.29578 6.60946 9.9002 6.01127 9.9002 5.27336C9.9002 4.53545 9.29578 3.93726 8.5502 3.93726C7.80461 3.93726 7.2002 4.53545 7.2002 5.27336C7.2002 6.01127 7.80461 6.60946 8.5502 6.60946Z"
                    stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>
            <span>Video</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('sports')}>
        <button className={`nav-link ${Tab==='sports'?'active':null}`} id="nft_pill_5" data-bs-toggle="pill" data-bs-target="#nft_tab_5"
            type="button" role="tab" aria-controls="nft_tab_5" aria-selected="true">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6"
                    d="M12.5356 3.25012C10.7481 5.94869 7.30377 7.49667 3.71502 7.21791L1.53564 7.04592"
                    stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path opacity="0.6"
                    d="M5.53564 15.25C7.16064 11.8768 10.2919 9.94182 13.5544 10.2903L15.5356 10.5053"
                    stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path
                    d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                    stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>

            <span>Sports</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('utility')}>
        <button className={`nav-link ${Tab==='utility'?'active':null}`} id="nft_pill_7" data-bs-toggle="pill" data-bs-target="#nft_tab_7"
            type="button" role="tab" aria-controls="nft_tab_7" aria-selected="true">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path opacity="0.6"
                        d="M9.41277 6.98853C9.41277 6.98853 9.26257 7.73949 7.00969 10.7433C4.83191 13.597 7.98594 15.6997 8.36142 16H8.43652C8.88709 15.6246 14.5944 12.02 9.41277 6.98853Z"
                        stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M7.6105 5.33637C7.6105 3.60916 6.93464 2.03214 6.25878 1.13099C6.03349 0.905704 5.65801 0.9808 5.58291 1.28118C5.28253 2.40762 4.38138 4.8107 2.20359 7.66434C-0.57496 11.269 1.9783 15.1739 4.60666 15.9249C6.03349 16.3004 4.23118 15.1739 4.0059 12.846C3.78061 9.91722 7.6105 7.73944 7.6105 5.33637Z"
                        stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10"
                        strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>

            <span>Utility</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('photography')}>
        <button className={`nav-link ${Tab==='photography'?'active':null}`} id="nft_pill_8" data-bs-toggle="pill" data-bs-target="#nft_tab_8"
            type="button" role="tab" aria-controls="nft_tab_8" aria-selected="true">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path
                        d="M14.3952 5.95273L14.3951 5.95387L13.9954 12.1488C13.9514 12.83 13.7472 13.381 13.3858 13.7579C13.0343 14.1245 12.4635 14.4 11.5275 14.4H3.47253C2.53624 14.4 1.96338 14.1243 1.61092 13.7574C1.24908 13.3808 1.04527 12.8307 1.00475 12.1517L1.00456 12.1489L0.60489 5.95387L0.604814 5.95273C0.52132 4.69571 1.55056 3.6 2.88839 3.6C3.5798 3.6 4.21367 3.21444 4.5327 2.61405L4.53279 2.61409L4.53761 2.60461L5.0899 1.51928C5.20448 1.29916 5.43342 1.06304 5.73615 0.880026C6.03901 0.696935 6.36125 0.6 6.62379 0.6H8.38389C8.64166 0.6 8.96173 0.696328 9.26423 0.879672C9.56637 1.0628 9.79547 1.29905 9.9101 1.51928L10.4624 2.60461L10.4623 2.60466L10.4673 2.61405C10.7863 3.21444 11.4202 3.6 12.1116 3.6C13.4494 3.6 14.4787 4.69571 14.3952 5.95273Z"
                        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M6.34717 4.5H8.65297" stroke="currentColor" strokeWidth="1.2"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.6"
                        d="M7.50015 12C8.87595 12 9.99811 10.905 9.99811 9.5625C9.99811 8.22 8.87595 7.125 7.50015 7.125C6.12436 7.125 5.0022 8.22 5.0022 9.5625C5.0022 10.905 6.12436 12 7.50015 12Z"
                        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </g>
            </svg>


            <span>Photography</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('game')}>
        <button className={`nav-link ${Tab==='game'?'active':null}`} id="nft_pill_6" data-bs-toggle="pill" data-bs-target="#nft_tab_6"
            type="button" role="tab" aria-controls="nft_tab_6" aria-selected="true">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path
                        d="M18.9898 9.54797C18.9425 8.38775 18.7531 7.10142 18.4692 5.89076C18.1852 4.73054 17.8302 3.64598 17.4042 2.81365C15.7476 -0.28868 13.9491 0.190541 11.7955 0.795874C11.1092 0.972429 10.3756 1.17421 9.61833 1.24987H9.38167C8.62438 1.17421 7.89076 0.972429 7.20447 0.795874C5.05092 0.215764 3.25236 -0.28868 1.59579 2.83887C1.16981 3.6712 0.791167 4.75576 0.530849 5.91598C0.246865 7.12664 0.057543 8.41298 0.0102123 9.5732C-0.0371183 10.8595 0.0812082 11.7928 0.341527 12.4485C0.601845 13.0539 0.98049 13.4322 1.47746 13.5835C1.9271 13.7096 2.44774 13.6592 2.99204 13.407C3.91499 13.0034 4.97993 12.1459 6.0212 11.1118C6.75483 10.3551 8.12741 9.97675 9.5 9.97675C10.8726 9.97675 12.2452 10.3551 12.9788 11.1118C14.0201 12.1459 15.085 13.0034 16.008 13.407C16.5523 13.634 17.0729 13.7096 17.5225 13.5835C17.9958 13.4322 18.3982 13.0791 18.6585 12.4233C18.9188 11.7927 19.0371 10.8595 18.9898 9.54797ZM17.8539 12.0702C17.7119 12.4233 17.5225 12.6251 17.2859 12.7007C17.0256 12.7764 16.6943 12.726 16.3156 12.5746C15.4873 12.2215 14.517 11.4396 13.5704 10.4812C12.6712 9.52275 11.0856 9.04353 9.5 9.04353C7.91443 9.04353 6.32885 9.52275 5.4059 10.4308C4.43562 11.3892 3.46535 12.1963 2.66073 12.5242C2.28208 12.6755 1.95077 12.7512 1.69045 12.6503C1.4538 12.5746 1.26447 12.3729 1.12248 12.0197C0.933159 11.5405 0.838498 10.7586 0.885829 9.59842C0.933159 8.51387 1.09882 7.27798 1.3828 6.11776C1.64312 5.0332 1.97443 4.02431 2.37674 3.26765C3.67834 0.770652 5.19291 1.17421 6.99148 1.67865C7.7251 1.88043 8.48239 2.08221 9.31068 2.15787C9.33434 2.15787 9.33434 2.15787 9.35801 2.15787H9.61833C9.64199 2.15787 9.64199 2.15787 9.66566 2.15787C10.5176 2.08221 11.2749 1.88043 12.0085 1.67865C13.8071 1.19943 15.3217 0.770652 16.6233 3.26765C17.0256 4.02431 17.3569 5.00798 17.6172 6.11776C17.8775 7.27798 18.0668 8.48864 18.1142 9.59842C18.1615 10.7586 18.0668 11.5405 17.8539 12.0702Z"
                        fill="currentColor" />
                    <path
                        d="M7.32262 4.62957C7.08597 4.40257 6.80199 4.22601 6.47067 4.20079C6.44701 3.8729 6.30502 3.54501 6.09203 3.31801L6.06836 3.29279C5.80804 3.01535 5.47673 2.86401 5.09808 2.86401C4.71944 2.86401 4.36446 3.04057 4.12781 3.29279C3.91482 3.51979 3.74916 3.84768 3.7255 4.20079C3.39418 4.22601 3.1102 4.37735 2.87355 4.60435L2.84988 4.62957C2.58956 4.90701 2.44757 5.26012 2.44757 5.66368C2.44757 6.06723 2.61323 6.44557 2.84988 6.69779C3.08653 6.95001 3.37052 7.10134 3.7255 7.12656C3.74916 7.47968 3.89115 7.80756 4.12781 8.03456C4.38813 8.31201 4.71944 8.46334 5.09808 8.46334C5.47673 8.46334 5.83171 8.28679 6.06836 8.03456C6.28135 7.78234 6.44701 7.47968 6.47067 7.12656C6.80199 7.10134 7.10964 6.95001 7.32262 6.69779C7.58294 6.42034 7.72493 6.06723 7.72493 5.66368C7.72493 5.26012 7.55928 4.88179 7.32262 4.62957ZM6.73099 6.04201C6.63633 6.1429 6.518 6.19334 6.37601 6.19334H6.0447C5.80804 6.19334 5.59506 6.39512 5.59506 6.67257V7.00045C5.59506 7.15179 5.54773 7.2779 5.45306 7.37879C5.3584 7.47968 5.24008 7.53012 5.09808 7.53012C4.95609 7.53012 4.83777 7.47968 4.74311 7.37879C4.64844 7.2779 4.60111 7.15179 4.60111 7.00045V6.64734C4.60111 6.39512 4.41179 6.16812 4.15147 6.16812H3.82016C3.67817 6.16812 3.55984 6.11768 3.46518 6.01679C3.39418 5.94112 3.32319 5.81501 3.32319 5.66368C3.32319 5.51234 3.37052 5.38623 3.46518 5.28534C3.46518 5.28534 3.46518 5.28534 3.48884 5.26012C3.58351 5.18446 3.70183 5.13401 3.82016 5.13401H4.15147C4.38813 5.13401 4.60111 4.93223 4.60111 4.65479V4.30168C4.60111 4.15035 4.64844 4.02423 4.74311 3.92335C4.83777 3.82246 4.95609 3.77201 5.09808 3.77201C5.24008 3.77201 5.3584 3.82246 5.45306 3.92335C5.45306 3.92335 5.45306 3.92335 5.47673 3.94857C5.54773 4.04946 5.59506 4.17557 5.59506 4.30168V4.65479C5.59506 4.90701 5.78438 5.13401 6.0447 5.13401H6.37601C6.518 5.13401 6.63633 5.18446 6.73099 5.28534C6.82565 5.38623 6.87298 5.51234 6.87298 5.66368C6.87298 5.81501 6.82565 5.94112 6.73099 6.04201Z"
                        fill="currentColor" />
                    <path
                        d="M13.6179 4.75579C14.0753 4.75579 14.4462 4.36055 14.4462 3.87301C14.4462 3.38547 14.0753 2.99023 13.6179 2.99023C13.1604 2.99023 12.7896 3.38547 12.7896 3.87301C12.7896 4.36055 13.1604 4.75579 13.6179 4.75579Z"
                        fill="currentColor" />
                    <path
                        d="M13.6179 8.33733C14.0753 8.33733 14.4462 7.9421 14.4462 7.45455C14.4462 6.96701 14.0753 6.57178 13.6179 6.57178C13.1604 6.57178 12.7896 6.96701 12.7896 7.45455C12.7896 7.9421 13.1604 8.33733 13.6179 8.33733Z"
                        fill="currentColor" />
                    <path
                        d="M11.9374 6.54656C12.3948 6.54656 12.7656 6.15132 12.7656 5.66378C12.7656 5.17624 12.3948 4.78101 11.9374 4.78101C11.4799 4.78101 11.1091 5.17624 11.1091 5.66378C11.1091 6.15132 11.4799 6.54656 11.9374 6.54656Z"
                        fill="currentColor" />
                    <path
                        d="M15.2982 6.54656C15.7556 6.54656 16.1265 6.15132 16.1265 5.66378C16.1265 5.17624 15.7556 4.78101 15.2982 4.78101C14.8407 4.78101 14.4699 5.17624 14.4699 5.66378C14.4699 6.15132 14.8407 6.54656 15.2982 6.54656Z"
                        fill="currentColor" />
                </g>
            </svg>

            <span>Game</span>
        </button>
    </li>
    <li className="nav-item" role="presentation" onClick={e=>ChangeTab('more')}>
        <button className={`nav-link ${Tab==='more'?'active':null}`} id="nft_pill_9" data-bs-toggle="pill" data-bs-target="#nft_tab_9"
            type="button" role="tab" aria-controls="nft_tab_9" aria-selected="true">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path
                        d="M15.7656 7.3492L15.0301 10.4291C14.3996 13.0889 13.1538 14.1647 10.8122 13.9436C10.4369 13.9142 10.0317 13.8479 9.59638 13.7447L8.33552 13.45C5.20589 12.7205 4.23773 11.2027 4.97323 8.12285L5.70873 5.03562C5.85884 4.40933 6.03896 3.86409 6.26411 3.41463C7.14221 1.63155 8.63572 1.15263 11.1424 1.73471L12.3958 2.02206C15.5404 2.74414 16.5011 4.26933 15.7656 7.3492Z"
                        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path
                        d="M10.8122 13.9436C10.3469 14.253 9.76147 14.5109 9.04848 14.7393L7.86268 15.1225C4.88315 16.0656 3.31458 15.2772 2.34643 12.3521L1.38577 9.44166C0.425119 6.51652 1.22066 4.96922 4.20019 4.0261L5.38599 3.64296C5.6937 3.54718 5.9864 3.46613 6.26409 3.41455C6.03894 3.864 5.85881 4.40924 5.70871 5.03553L4.97321 8.12277C4.23771 11.2026 5.20587 12.7205 8.3355 13.4499L9.59636 13.7446C10.0317 13.8478 10.4369 13.9141 10.8122 13.9436Z"
                        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path opacity="0.6" d="M8.99585 5.94189L12.6358 6.84817" stroke="currentColor"
                        strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.6" d="M8.2605 8.79346L10.437 9.3387" stroke="currentColor"
                        strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>

            <span>See More</span>
        </button>
    </li>

</ul>
<div className="tab-content" id="pills-tabContent">

    <div className="tab-pane fade active show" id="trandings">
        <div className="row">

         <HMgridItem
          avatar="/images/nft/avater-smm-one.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-one.png"
          Icon="/images/nft/avater-sm-one.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-two.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-two.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-one.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-three.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-two.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-four.png"
          Icon="/images/nft/avater-sm-four.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />

        <HMgridItem
          avatar="/images/nft/avater-smm-two.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-five.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-two.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-six.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />

        <HMgridItem
          avatar="/images/nft/avater-smm-one.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-seven.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-two.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-eight.png"
          Icon="/images/nft/avater-sm-four.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />
            
        </div>
    </div>

    <div className="tab-pane fade" id="art">
        <div className="row">
             
        <HMgridItem
          avatar="/images/nft/avater-smm-three.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-five.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-three.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-four.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-three.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-three.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-three.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-two.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-three.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-one.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        </div>
    </div>

    <div className="tab-pane fade" id="music">
        <div className="row">
            
        <HMgridItem
          avatar="/images/nft/avater-smm-four.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-four.png"
          Icon="/images/nft/avater-sm-one.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-four.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-five.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-six.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-six.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-four.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-seven.png"
          Icon="/images/nft/avater-sm-four.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 
            
        </div>
    </div>
    <div className="tab-pane fade" id="video">
        <div className="row">
           
        <HMgridItem
          avatar="/images/nft/avater-smm-five.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-two.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 

         <HMgridItem
          avatar="/images/nft/avater-smm-five.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-eight.png"
          Icon="/images/nft/avater-sm-four.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />

         <HMgridItem
          avatar="/images/nft/avater-smm-five.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-five.png"
          Icon="/images/nft/avater-sm-one.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />  
            
        </div>
    </div>
    <div className="tab-pane fade" id="sports">
        <div className="row">

        <HMgridItem
          avatar="/images/nft/avater-smm-six.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-eight.png"
          Icon="/images/nft/avater-sm-one.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         /> 
         <HMgridItem
          avatar="/images/nft/avater-smm-six.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-two.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />    
            
        </div>
    </div>
    <div className="tab-pane fade" id="utility">
        <div className="row">

        <HMgridItem
          avatar="/images/nft/avater-smm-seven.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-seven.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />   
            
        </div>
    </div>
    <div className="tab-pane fade" id="photography">
        <div className="row">
            
        <HMgridItem
          avatar="/images/nft/avater-smm-one.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-one.png"
          Icon="/images/nft/avater-sm-one.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
        /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-four.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-four.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
        /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-four.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-eight.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
        /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-four.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-seven.png"
          Icon="/images/nft/avater-sm-three.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
        /> 
            
        </div>
    </div>
    <div className="tab-pane fade" id="game">
        <div className="row">

        <HMgridItem
          avatar="/images/nft/avater-smm-six.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-six.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
        />  

        <HMgridItem
          avatar="/images/nft/avater-smm-five.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-five.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
        /> 

        <HMgridItem
          avatar="/images/nft/avater-smm-two.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-two.png"
          Icon="/images/nft/avater-sm-two.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
        />   
            
        </div>
    </div>
    <div className="tab-pane fade" id="more">
        <div className="row">

        <HMgridItem
          avatar="/images/nft/avater-smm-one.png"
          username="@GHARLIERA"
          Img="/images/nft/n-md-one.png"
          Icon="/images/nft/avater-sm-one.png"
          name="Special Surprise"
          title="Geometrical Figure"
          price="0.40 ETH"
         />    
            
        </div>
    </div>
</div>

<div className="more-load-wrap text-center mt-50">
    <Link href="/">
    <a className="load-more-btn">
        <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
        View all items
    </a>
    </Link>
</div>
</div>
</div>
)
}
export default HomeMarketplaceGrid