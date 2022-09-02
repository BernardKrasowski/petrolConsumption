import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import History from "./routes/history/history.component";
import SignIn from "./routes/signIn/signIn.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="auth" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
