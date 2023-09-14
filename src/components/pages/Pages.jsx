import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../home/Home';
import About from '../home/about/AboutP';
import Catalogue from '../../src/pages/Home'
import HouseContextProvider from '../../src/components/HouseContext';
import PropertyDetails from '../../src/pages/PropertyDetails';
import Careers from '../home/about/Careers';
import Services from '../home/about/Services'
import Contactsp from '../home/about/ContactsP';

const Pages = () => {
  return <>
    <HouseContextProvider>
      <Router>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/About' Component={About} />
          <Route exact path='/Catalogue' Component={Catalogue} />
          <Route exact path='/Career' Component={Careers} />
          <Route exact path='/Contacts' Component={Contactsp} />
          <Route path='/property/:id' element=
            {<PropertyDetails />} />
        </Routes>
      </Router>
    </HouseContextProvider>
  </>
}

export default Pages