import React from "react";
import './App.css';
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {

  return (
    <section className="App">
    <h2>Add Course </h2>
    <CourseForm/>

    <CourseList/>
    </section>
  );
}

export default App;
