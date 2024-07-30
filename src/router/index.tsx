import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Login from "../screens/login";
import NotFound from "../screens/notFound";
import { useAppSelector } from "../redux/reduxHooks";

export default function AppRouter() {
  const login = useAppSelector((state) => state.login);
  return (
    <div>
      <Router basename="/">
        {login.isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
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
