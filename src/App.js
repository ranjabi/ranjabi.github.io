import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <div className="bg-slate-500 h-screen">
      {/* <Hero /> */}
      {/* <Projects /> */}
      <div className="bg-slate-600 text-2xl py-4 pl-28 pr-72 flex justify-between">
        <div className="text-3xl font-extrabold">ようこそ</div>
        <div className="border-red-700 border-2">
          <a href="" className="px-8 bg-red-700 hover:bg-opacity-50">Projects</a>
          <a href="" className="px-8">Contact</a>
        </div>
      </div>
      <h1 className="text-3xl font-bold underline">Hola, this is Fikri Ranjabi.</h1>
      <span>Second year computer science student interested in Front End Web Development.</span>
    </div>
  );
}

export default App;
