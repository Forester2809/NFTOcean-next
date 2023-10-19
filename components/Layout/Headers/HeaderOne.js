import { useContext , useState , useRef } from "react"
import ThemeContext from "../../../context/Theme/ThemeContext"
import Link from "next/link"
import HeaderConstant from "../../../constant/Header/HeaderConstant"
import { useIsVisible } from 'react-is-visible'

const HeaderOne=()=>{
const { DarkTheme , setDarkTheme } = useContext(ThemeContext)
const [MobileMenu,setMobilemenu] = useState(false)
const [MobileSearch,setMobilesearch] = useState(false)

const navRef = useRef(null)
const isVisible = useIsVisible(navRef)

function ToggleTheme(){
  try{
    if(DarkTheme){
        setDarkTheme(false)
        localStorage.setItem('theme','light')
    }else{
        setDarkTheme(true)
        localStorage.setItem('theme','dark')
    }
  }catch(err){}
}

// toggle sub menu
function ToggleSubMenu(e){
   try{
    let togller = e.target
    togller.innerHTML==="+"?togller.innerHTML="-":togller.innerHTML="+"
    let next_el = togller.nextSibling
    next_el.style.height===next_el.getAttribute("data-height")?next_el.style.height="0px":next_el.style.height=next_el.getAttribute("data-height")
   }catch(err){}
}

return(
<>    

<div className={`mobil__searchbar ${MobileSearch?'active-search':''} `} id="mobilSearch">
<div className="input__wrapper">
<div className="container">
<div className="row">
    <div className="col-lg-6">
        <div className="pb-3 d-flex align-items-center justify-content-between">
            <h5>What are you looking for?</h5> 
            <span 
            onClick={e=>MobileSearch?setMobilesearch(false):setMobilesearch(true)}
            className="close__search" id="closeSearch">Close Popup</span>
            </div>
        <form action="#">
            <div className="d-flex">
                <input type="text" placeholder="Search Item, Creators, Collections etc."/>
                <button className="submit-v1 ml-2">Search</button>
            </div>
        </form>
    </div>
</div>
</div>
</div>
</div>

<header ref={navRef}>
<div className={`header-area header-defult header_style__one bg-body ${isVisible?'':'sticky'}`}>
<div className="nav-container">
<div className="row justify-content-between">
<div className="col-xl-4 col-lg-4 col-2 align-items-center d-flex">
    <div className="nav-logo logo-switch d-flex justify-content-between align-items-center">
        <Link href="/">
        <a className="logo-dark"><img src={HeaderConstant.LogoDark} alt="logo"/></a></Link>
        <Link href="/">
        <a className="logo-light">
        <img src={HeaderConstant.LogoLight} alt="logo"/></a>
       </Link>
    </div>
    <div className="nav-search-style-one w-100 d-xl-block d-none">
        <span className="search__icon">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.26847 16.0378C12.2827 16.0378 15.5369 12.7834 15.5369 8.7689C15.5369 4.7544 12.2827 1.5 8.26847 1.5C4.2542 1.5 1 4.7544 1 8.7689C1 12.7834 4.2542 16.0378 8.26847 16.0378Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"></path>
                <path d="M17.0002 17.5L13.4023 13.9025" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </span>
        <input type="text" placeholder={HeaderConstant.SearchPlaceholder}/>
    </div>
</div>
<div className="col-xxl-8 col-lg-8 col-10  d-flex justify-content-end">
    <nav className={`main-nav mr-2 ${MobileMenu?'slidenav':''} `}>
        <div className="inner-logo d-xl-none text-center pt-4">
            <Link href="/"><a className="for-dark"><img src="/images/logo.png" alt=""/></a></Link>
            <a className="for-light"><img src="/images/logo-v2.png" alt=""/></a>
        </div>
        <ul>
            <li className="has-child-menu">
                <Link href="/"><a>Home</a></Link>
                <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                <ul className="sub-menu sub_menu_show"
                data-height="100px"
                >
                    <li><Link href="/"><a>Home Style - 01</a></Link></li>
                    <li><Link href="/home-2"><a>Home Style - 02</a></Link></li>
                    <li><Link href="/home-3"><a>Home Style - 03</a></Link></li>
                </ul>
            </li>
            <li className="has-child-menu">
                <a>Explore</a>
                <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                <ul className="sub-menu sub_menu_show" 
                data-height="150px"
                >
                    <li><Link href="/marketplace-1"><a>Marketplace - 1</a></Link></li>
                    <li><Link href="/marketplace-2"><a>Marketplace - 2</a></Link></li>
                    <li><Link href="/live-auction"><a>Live Auction</a></Link></li>
                    <li><Link href="/collection"><a>Collection</a></Link></li>
                </ul>
            </li>
            <li className="has-child-menu">
                <a>Pages</a>
                <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                <ul className="sub-menu sub_menu_show"
                data-height="320px"
                >
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/live-auction"><a>Live Auction</a></Link></li>
                    <li><Link href="/collection"><a>Collection</a></Link></li>
                    <li><Link href="/activity"><a>Activity</a></Link></li>
                    <li><Link href="/connect-wallet"><a>Connect Wallet</a></Link></li>
                    <li><Link href="/nft-detail"><a>NFT Details</a></Link></li>
                    <li><Link href="/author-profile"><a>Author Profile</a></Link></li>
                    <li><Link href="/login"><a>Login</a></Link></li>
                    <li><Link href="/register"><a>Register</a></Link></li>
                </ul>
            </li>
            <li className="has-child-menu">
                <a>Create</a>
                <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                <ul className="sub-menu sub_menu_show"
                data-height="150px"
                >
                    <li><Link href="/create-nft"><a>Create NFT</a></Link></li>
                    <li><Link href="/create-multiple-nft"><a>Create NFT (Maltiple)</a></Link></li>
                    <li><Link href="/create-single-nft"><a>Create NFT (Single)</a></Link></li>
                    <li><Link href="/"><a>Creators</a></Link></li>
                </ul>
            </li>
            <li className="has-child-menu">
                <a>Blog</a>
                <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                <ul className="sub-menu sub_menu_show"
                data-height="80px"
                >
                    <li><Link href="/blog"><a>Blog Grid</a></Link></li>
                    <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                </ul>
            </li>
            <li><Link href="/contact"><a>Contact</a></Link></li>

        </ul>

        <div className="d-xl-none d-inline-flex flex-column gap-3 px-3 mt-4">
            <Link href="/connect-wallet">
            <a className="btn-rounded-v1">
                <img src="/images/icons/walllet-regular.svg" alt=""/>
                <span> Connect Wallet</span>
            </a>
            </Link>
        </div>
    </nav>
    <div className="nav-actions d-flex align-items-center">

        <label className="theme-switch-one style__one mr-2"
        >
            <input type="checkbox" id="slider" className="check-status"
             onChange={e=>{}}
             checked={DarkTheme?true:false}
            />
            <span className="slider round" onClick={ToggleTheme}></span>
        </label>
        <button 
        onClick={e=>MobileSearch?setMobilesearch(false):setMobilesearch(true)}
        type="button" className="nav_search__icon mr-2 d-block d-xl-none mr-2 style__two" id="navSearch">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.26847 16.0378C12.2827 16.0378 15.5369 12.7834 15.5369 8.7689C15.5369 4.7544 12.2827 1.5 8.26847 1.5C4.2542 1.5 1 4.7544 1 8.7689C1 12.7834 4.2542 16.0378 8.26847 16.0378Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"></path>
                <path d="M17.0002 17.5L13.4023 13.9025" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
        <div className="profile-switch-one mr-2">
            <div className="profile-switch-avater">
                <a>
                    <img src="/images/profil-avater.png" alt=""/>
                </a>
            </div>
        </div>
        <div className="d-none d-md-block">
            <Link href="/connect-wallet">
            <a className="btn-rounded-v1">
                <img src="/images/icons/walllet-regular.svg" alt=""/>
                <span> Connect Wallet</span>
            </a>
            </Link>
        </div>
        <div className="d-flex align-items-center ml-2">
            <div className="mobile-menu d-flex ">
                <div className={`hamburger d-block d-xl-none ${MobileMenu?'h-active':''}`}
                 onClick={e=>MobileMenu?setMobilemenu(false):setMobilemenu(true)}
                >
                    <span className="h-top"></span>
                    <span className="h-middle"></span>
                    <span className="h-bottom"></span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</header>
</>
)
}

export default HeaderOne