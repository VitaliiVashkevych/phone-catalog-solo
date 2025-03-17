import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import { AppContextProvider } from "./context/AppContext"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <AppContextProvider>
      <Header />
      <Menu />
      <HomePage />
      <Footer />
    </AppContextProvider>
  )
}

export default App
