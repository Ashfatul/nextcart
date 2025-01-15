import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Special from "./Special"

const FrontEndLayout = () => {
    return(
        <div className="container-fluid">
            <Special/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default FrontEndLayout