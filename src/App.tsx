import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from "react-router-dom";
import AspadanaRoutes from "./routes/indext";

function App() {

  const { t, i18n } = useTranslation();

  document.body.dir = i18n.dir();
  return (
    <div >
    <BrowserRouter>
      <AspadanaRoutes />
    </BrowserRouter>
  </div>
  );
}

export default App;
