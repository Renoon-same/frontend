import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Authentication/AuthenticationPage";
import ForgotPasswordForm from "./components/Authentication/ForgotPasswordForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/account/registration" element={<Authentication />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      </Routes>
    </Router>
  );
}

export default App;
