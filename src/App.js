import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrer from './components/Career/career';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';
import TermsOfService from './components/TermsOfService/TermsOfService';




function App() {
  return (
    <div>
        <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/carrer' element={<Carrer/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/term' element={<TermsOfService/>}/>
      </Routes>      
            
            </BrowserRouter>
            <Footer/>

    </div>
  );
}

export default App;
