import { Outlet } from "react-router-dom";
import { Header } from "../componenter/Header/header";
import { Footer } from "../componenter/Footer/footer"

export function LayoutBase(){
    return (

        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        
        </>
    )
}