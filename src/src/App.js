import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import PropertyDetails from './pages/PropertyDetails';





const App = () => {
  
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
        <Routes>
          <Route path='/property/:id' element=
          {<PropertyDetails />} />
        </Routes>
    </div>
  );
}

export default App;

