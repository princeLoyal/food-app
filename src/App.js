import React from 'react';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
        <Modal />
      </main>
    </React.Fragment>
  );
};

export default App;
