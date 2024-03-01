/* eslint-disable no-unused-vars */
import React from "react"
import './CreatePage.css'
import Header from './Header';
import Footer from './Footer';


function CreatePage(){






    return(
        <>
        <Header/>
        <main className="form-page">
            <h1 className="form-title">Add a Note</h1>
            <form>
            <div className="form-control">
            <label htmlFor="title">Title</label><br></br>
            <input type="text" id="title" name="title"  required/>
            </div>
            <div className="form-control">
            <label htmlFor="content">Content</label>
            <textarea  id="content" name="content" ></textarea>
            </div>
            <button className="btn"><span>Add Note</span></button>
            </form>
        </main>
        <Footer/>
        </>
        
    )

}


export default CreatePage