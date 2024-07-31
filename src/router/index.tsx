import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAppSelector } from "../redux/reduxHooks";
import Home from "../screens/home";
import About from "../screens/about";
import Login from "../screens/login";
import NotFound from "../screens/notFound";
import LangCheck from "../screens/langCheck";
import { useEffect } from "react";
import i18n from "i18next";

export default function AppRouter() {
  const login = useAppSelector((state) => state.login);
  const { lang } = useAppSelector((state) => state.lang);
  
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  
  return (
    <div>
      <Router basename="/">
        {login.isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lang" element={<LangCheck />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}
