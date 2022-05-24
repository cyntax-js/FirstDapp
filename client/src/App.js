// import './App.css';
import Navbar from "./components/Pages/Navbar";
import Home from "./components/Pages/Home";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      {/* <Services />
      <Transaction />
      <Footer /> */}
    </div>
  );
};

export default App;
