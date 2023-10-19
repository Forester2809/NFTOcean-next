import BidHammer from "../svgs/BidHammer"
import DetailBidItem from "./DetailBidItem"
import { v4 as uuidv4 } from "uuid"
import { useRef } from "react"

const NftDetailBid=(props)=>{
const btnRef = useRef(null)
const boxRef = useRef(null)

function BoxToggle(){
  try{
    btnRef.current.classList.toggle("active")
    boxRef.current.style.height==="0px"?boxRef.current.style.height="364px":boxRef.current.style.height="0px"

  }catch(err){}
}

return(
<div className="accordion-item nd_single__block author__details mt-40">
<h2 className="accordion-header sidebar__header" id="blockHeadingTwo"
 onClick={BoxToggle}
>
<button className="accordion-button" ref={btnRef}>
    
    
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0061 13.9946L12.0195 10.0081" stroke="currentColor"
            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round" />
        <path
            d="M12.0181 10.0081L9.16707 12.8591C8.53888 13.4873 7.51606 13.4873 6.88787 12.8591L3.47309 9.4443C2.84491 8.81611 2.84491 7.7933 3.47309 7.16511L9.16707 1.47114C9.79526 0.842953 10.8181 0.842953 11.4463 1.47114L14.861 4.88593C15.4892 5.51412 15.4892 6.53693 14.861 7.16511L12.0181 10.0081Z"
            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
            strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 16H6.33222" stroke="currentColor" strokeWidth="1.5"
            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.17383 5.46582L10.8678 11.1598" stroke="currentColor"
            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>


    <span>Bids</span>
</button>
</h2>
<div id="block-collapseTwo" ref={boxRef} 
className="scroll_hidden"
style={{
    transition:"0.3s ease-in-out",
    height: "364px",
    overflow: "auto"
}}
>
<div className="accordion-body sidebar__body">
   
{props.items.map(list=>{
    return <DetailBidItem
             key={uuidv4()}
             pic={list.pic}
             price={list.price}
             username={list.username}
             created_at={list.created_at}
           />
})}

</div>
</div>
</div>
)
}
export default NftDetailBid