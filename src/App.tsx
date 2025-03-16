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
    </AppContextProvider>
  )
}

export default App
