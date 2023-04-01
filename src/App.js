import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignInCheck from "./pages/SignInCheck";
import SignUp from "./pages/SignUp";
import NextSignUp from "./pages/NextSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signincheck" element={<SignInCheck />}></Route>
        <Route path="/nextsignup" element={<NextSignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
