import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import JobListing from "./components/JobListing";


function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <JobListing />
      </main>
    </div>
  );
}

export default App;
