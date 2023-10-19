import ChevronDown from "./svgs/ChevronDown"
import { v4 as uuidv4 } from "uuid"
import CheckIcon from "./svgs/Check"

const SelectorBox=(props)=>{
return(
<div className="selector_box">
    <div className="selector_box_top">
        <span>Recently Listed</span>
        <ChevronDown/>
    </div>
    <div className="stb_box_list_wraper">
       {props.options.map(option=>{
        return(
         <div className="stb_box_list" key={uuidv4()}> 
            <span>{option}</span>
            <CheckIcon/>
          </div>
        )
       })}
    </div>
</div>
)
}
export default SelectorBox