import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  console.count('count');
  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        Click me! {`${openModal}`}{' '}
      </button>
      <Header />
      <Footer />
    </>
  );
}

export default App;
