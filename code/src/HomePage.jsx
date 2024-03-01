/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './HomePage.css'
import Header from './Header';
import Footer from './Footer';

function HomePage () {
  return (
    <>
    <Header/>
    <main className='main-content'>
      <h1 className='title'>NoteWorthy</h1>
      <p className='catchphrase'>More Than Just Notes, It's Your Creative Spark.</p>
      <div className='buttons-section'>
        <a href="/create">
          <button className="oprt-buttons">Create Note</button>
        </a>
        <a href="/view">
          <button className="oprt-buttons">View Notes</button>
        </a>
      </div>
    </main>
    <Footer/>
    </>   
  );
}

export default HomePage;
