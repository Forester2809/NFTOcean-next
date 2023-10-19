
import "../styles/jquery.fancybox.min.css"
import "../styles/dropzone.min.css"
import "../styles/bootstrap-icons.css"
import "../styles/animate.css"
// import"../styles/swiper-bundle.min.css"
import "../styles/bootstrap.min.css"
import "../styles/style.css"
import "../styles/responsive.css"
import "../styles/custom.css"
import "../styles/nice-select.css"

import { useEffect , useState } from "react"
import Layout from "../components/Layout"
import ThemeContext from "../context/Theme/ThemeContext"

function MyApp({ Component, pageProps }) {
const [DarkTheme,setDarkTheme] = useState(false)

useEffect(()=>{

let Theme = localStorage.getItem('theme')
if(Theme==='light'){
  setDarkTheme(false)
}else{
  setDarkTheme(true)
}

},[])

return(
  <>
  <ThemeContext.Provider value={{DarkTheme , setDarkTheme}}>  
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeContext.Provider>
  </>
 )
}

export default MyApp
