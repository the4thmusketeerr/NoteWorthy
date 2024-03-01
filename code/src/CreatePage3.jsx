/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./CreatePage.css";
import Header from "./Header";
import Footer from "./Footer";

function CreatePage() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const addNote = (e) => {
    e.preventDefault();
    const newNote = { id: Date.now(), title: input.title, content: input.content };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setInput({ title: "", content: "" });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <>
      <Header />
      <main className="form-page">
        <h1 className="form-title">Add a Note</h1>
        <form onSubmit={addNote}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              value={input.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={input.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn" type="submit">
            <span>Add Note</span>
          </button>
        </form>
        <div className="notes-container">
          {notes.map((note) => (
            <div className="note" key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <button className="delete-btn" onClick={() => deleteNote(note.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CreatePage;