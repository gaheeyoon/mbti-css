import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from "./pages/home"
import Test  from "./pages/test"
import Result  from "./pages/result"

const MbtiRouter = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
   );
}
 
export default MbtiRouter;