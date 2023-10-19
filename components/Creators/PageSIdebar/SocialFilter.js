import { useEffect , useRef , useState } from "react"

const CTpgSocielFilter=()=>{
const [boxHeight,setBoxHeight] = useState(0)
const boxRef = useRef(null)
const btnRef = useRef(null)

useEffect(()=>{

   boxRef.current.style.height = `${boxRef.current.clientHeight}px`
   setBoxHeight(boxRef.current.clientHeight)

},[])

function ToggleBox(){
  try{
    btnRef.current.classList.toggle("active")
    boxRef.current.style.height==="0px"?boxRef.current.style.height =`${boxHeight}px`:boxRef.current.style.height="0px"
  }catch(err){}
}

return(
<div className="accordion-item sidebar_collections__filter sidebar__filter ">
<h2 
 onClick={ToggleBox}
 className="accordion-header sidebar__header" id="filterHeadingSocial">
    <button className="accordion-button" ref={btnRef}>
    Social Verification
    </button>
</h2>
<div id="filter-collapseSocial"
ref={boxRef}
style={{
    overflow: "hidden",
    transition: "0.3s ease-in-out"
}}
className="scroll_hidden"
>
    <div className="accordion-body sidebar__body">
        <ul>
            <li className="single__col style__two">
            <label>
                <span className="col__right">
                    <input type="checkbox"/>
                        <span className="check__circle"></span> 
                    <ins className="col__name">Twitter</ins>
                </span>
                <span className="type__count">2,080</span>
            </label>
            </li>
            <li className="single__col style__two">
            <label>
                <span className="col__right">
                    <input type="checkbox"/>
                        <span className="check__circle"></span> 
                    <ins className="col__name">Instagram</ins>
                </span>
                <span className="type__count">1,080</span>
            </label>
            </li>
            <li className="single__col style__two">
            <label>
                <span className="col__right">
                    <input type="checkbox"/>
                        <span className="check__circle"></span> 
                    <ins className="col__name">Not verified</ins>
                </span>
                <span className="type__count">890</span>
            </label>
            </li>
        </ul>
    </div>
</div>
</div>
)
}
export default CTpgSocielFilter