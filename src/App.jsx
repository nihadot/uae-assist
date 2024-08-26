import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Suspense } from 'react';


import UserRoutes from "./UserRoutes";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/*' element={<UserRoutes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
