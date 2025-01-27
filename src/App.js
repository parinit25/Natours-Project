import About from "./components/about/About";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import SvgAnimations from "./components/svg animations/SvgAnimations";
import Tours from "./components/tours/Tours";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <SvgAnimations />
        <About />
        <Features />
        <Tours />
      </main>
    </div>
  );
}

export default App;
