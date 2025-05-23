import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route ,useLocation} from "react-router";

// Components
import Sidebar from "./components/ui/Sidebar";
import Header from "./components/ui/Nav";
import Preloader from "./components/ui/Preloader";
// Pages
import Dashboard from "./pages/dashborad";
import Appointments from "./pages/appointments";
import Patients from "./pages/patients";
import Settings from "./pages/settings";

function App() {
  const [preloader, setPreloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (


    <BrowserRouter>
        {preloader && <Preloader />}
        <div className="flex bg-base-300">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/dashborad" element={<Dashboard />} />
              <Route path="/appointments/*" element={<Appointments />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
        
    </BrowserRouter>
  );
}

export default App;