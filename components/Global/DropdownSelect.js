import { v4 as uuidv4 } from "uuid"
import { useState , useRef , useEffect } from "react"

const DropdownSelect=(props)=>{
const [Selected,setSelected] = useState("")
const [Show,setShow] = useState(false)
const dds_lists = useRef(null)

useEffect(()=>{

setSelected(props.options[0])   

},[props.options])

function ChangeSelected(list){
  try{
     setSelected(list)
     setShow(false)
  }catch(err){}
}

function ToggleShow(){
   try{
    Show?setShow(false):setShow(true)
   }catch(err){}
}


return(
<div className="downpdown_selector">
 <div className={`dds_selected ${props.selected_design}`} onClick={ToggleShow}>
     <span>{Selected}</span>
     <div className="dds_selected_icon"></div>
</div>
 <div className={`dds_select_lists ${Show?'show':''}`} style={{
    height: Show?props.options.length * 40:0,
 }}>
  {
   props.options.map(list=>{
    return(
    <div className="dds_select_item" 
    ref={dds_lists}
    key={uuidv4()}
    onClick={e=>ChangeSelected(list)}
    >
        <span>{list}</span>
        <div className="dds_list_icon"></div>
     </div>
    )
   })
  }
 </div>
</div>
)
}
export default DropdownSelect