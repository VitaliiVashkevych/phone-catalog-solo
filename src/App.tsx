import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { AppContextProvider } from "./context/AppContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import PhonePage from "./pages/PhonePage";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Menu />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<PhonePage />} />
          <Route path="/phones/test/123" element={<PhonePage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </AppContextProvider>
  );
}

export default App;
