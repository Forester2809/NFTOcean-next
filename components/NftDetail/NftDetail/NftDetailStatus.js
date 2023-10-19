import DotBars from "../svgs/DotBars"
import { v4 as uuidv4 } from "uuid"
import DetailStatusItem from "./DetailStatusItem"   
import { useRef } from "react"

const NftDetailStatus=()=>{
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
    <h2 className="accordion-header sidebar__header" id="blockHeadingOne"
     onClick={BoxToggle}
    >
        <button className="accordion-button" ref={btnRef}>
            <DotBars/>

            <span>Status</span>
        </button>
    </h2>
    <div id="block-collapseOne"
    className="scroll_hidden"
    style={{
        transition:"0.3s ease-in-out",
        height: "364px",
        overflow: "auto"
    }}
    ref={boxRef}
    >
        <div className="accordion-body sidebar__body">
            <h5 className="author_dtitle">Owner</h5>
            <div className="author">
                <div className="avater">
                    <img src="/images/nft/d-author.png" alt="" className="author__img"/>
                    <img src="/images/icons/tick-blue.svg" alt="" className="tick"/>
                </div>
                <h6>Eric Widget</h6>
            </div>


            <h5 className="author_dtitle mt-20">Properties</h5>
            <div className="row gx-2 gy-2">
                
                <DetailStatusItem/>
                <DetailStatusItem/>
                <DetailStatusItem/>
                <DetailStatusItem/>
                <DetailStatusItem/>
                <DetailStatusItem/>
            </div>
        </div>
    </div>
</div>
)
}
export default NftDetailStatus