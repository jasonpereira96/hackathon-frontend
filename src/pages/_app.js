// pages/_app.js
import '@/styles/globals.css';
import React from 'react';
import AuthDetails from '../components/auth/AuthDetails';

function MyApp() {
  return (
    <div className="App">
      <AuthDetails />
    </div>
  );
}

export default MyApp;
