import Header from "./components/molecules/header/Header";
import Home from "./components/organisms/home/Home";
import About from "./components/organisms/about/About";
import Portfolio from "./components/organisms/Portfolio";
import Contact from "./components/organisms/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="w-[95%] ml-[5%] mobile:ml-0 mobile:px-10 mobile:w-[100%] mobile:overflow-hidden">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
