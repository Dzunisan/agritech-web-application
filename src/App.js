import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Registration } from "./components/forms/registration";
import { SignUp } from "./components/forms/signUp";
import { DashboardComponent } from '../src/pages/dashboard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardComponent />}>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
