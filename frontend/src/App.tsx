import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { AppContextProvider } from "./context/AppContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import PhonePage from "./pages/PhonePage";
import TabletsPage from "./pages/TabletsPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Header />
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<PhonePage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </AppContextProvider>
    </BrowserRouter>
  );
}

function Login() {
  return <h2>Login</h2>
}

export default App;
