import SideBar from "./components/SideBar"
import "./App.css"
import { DataValueProvider } from "./context/AppContext";
import Home from "./page/Home";
function App() {

  return (
    <div className="App">
      <DataValueProvider>
        <Home />
        
      </DataValueProvider>
    </div>
  );
}

export default App
