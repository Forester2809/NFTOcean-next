import HistoryPaper from "../svgs/HistoryPaper"
import DetailHistoryItem from "./DetailHistoryItem"
import { v4 as uuidv4 } from "uuid"
import { useRef } from "react"

const NftDetailHistory=(props)=>{
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
    <h2 
    onClick={BoxToggle}
    className="accordion-header sidebar__header" id="blockHeadingThree">
        <button className="accordion-button"
         ref={btnRef}
        >
            <HistoryPaper/>
            <span>History</span>
        </button>
    </h2>
    <div id="block-collapseThree"
    className="scroll_hidden"
    style={{
        transition:"0.3s ease-in-out",
        height: "364px",
        overflow: "auto"
    }}
    ref={boxRef}
    >
        <div className="accordion-body sidebar__body">
         {props.items.map(list=>{
           return <DetailHistoryItem
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
export default NftDetailHistory