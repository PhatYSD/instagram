import "./App.css";
import BlockFrist from "./components/BlockFrist";
import BlockSecond from "./components/BlockSecond";
import Footer from "./components/Footer";
import InstallApp from "./components/InstallApp";

function App() {
  return (
    <div className="app">
      <BlockFrist />
      <BlockSecond />
      <InstallApp />
      <Footer />
    </div>
  );
}

export default App;