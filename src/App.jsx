import "./App.css";

import ContentMain from "./components/ContentMain.jsx";
import Hero from "./components/Hero.jsx";
import Social from "./components/Social.jsx";
import AddSave from "./components/AddSave.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div>
      <Hero />
      <AddSave />
      <Social />
      <ContentMain />
      <Footer />
    </div>
  );
}

export default App;
