import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './ViewPage.css'




function ViewPage(){
    return(
        <>
            <Header/>
            <main className="view-content">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </main>
            <Footer/>
        </>
    )
}



export default ViewPage

