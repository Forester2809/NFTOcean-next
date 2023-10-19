import { useState } from "react"
import Link from "next/link"

const SubMenu=()=>{
const [MenuItem,setMenuItem] = useState(false)

return(
<>
<i className="fl flaticon-plus" 
onClick={e=>MenuItem?setMenuItem(false):setMenuItem(true)}
>{MenuItem?"-":"+"}</i>
<ul>
    <li><Link href="/"><a>Home Style - 01</a></Link></li>
    <li><Link href="/home-2"><a>Home Style - 02</a></Link></li>
    <li><Link href="/home-3"><a>Home Style - 03</a></Link></li>
</ul>
</>
)
}
export default SubMenu