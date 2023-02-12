import React from 'react';
import './App.css';
import PrimarySearchAppBar from "./components/Navbar/Navbar";
import PaginationControlled from "./components/Pagination/Pagination";
import DenseTable from "./components/Table/Table";

function App() {
  return (
    <div className="App">

        <PrimarySearchAppBar />

        <DenseTable />

        <PaginationControlled />

    </div>
  );
}

export default App;
