import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AspadanaRoutes from "./routes/indext";

function App() {
  return (
    <div >
    <BrowserRouter>
      <AspadanaRoutes />
    </BrowserRouter>
  </div>
  );
}

export default App;
