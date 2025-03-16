import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import { AppContextProvider } from "./context/AppContext"

function App() {

  return (
    <AppContextProvider>
      <Header />
      <Menu />
    </AppContextProvider>
  )
}

export default App
