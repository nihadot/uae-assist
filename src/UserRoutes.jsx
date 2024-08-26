import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  UserAboutPage,
UserHome,
TermsOfUserPage,
PrivacyPolicyPage
} from "./Routes"
import NotFoundPage from './NotFoundPage';


const UserRoutes = () => (
  <Suspense fallback={<div></div>}>
    <Routes>
      <Route index element={<UserHome />} />
      <Route path='/about' element={<UserAboutPage />} />
      <Route path='/terms-of-use' element={<TermsOfUserPage />} />
      <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>

  </Suspense>
);

export default UserRoutes;
