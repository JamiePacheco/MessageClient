import Header from "../page-structure/header/Header";
import LayoutProps from "./LayoutProps";
import Footer from "../page-structure/footer/Footer";

export default function({children} : LayoutProps) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}