import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Main from "./components/Main"
import Program from "./components/program"
import About from "./components/about"
import Projects from "./components/projects"
function App() {
  

  return (
    // Start of Navbar
    <div className = 'w-full h-screen bg-stone-800'>
    <Navbar logo="V.R.M.D" />
    <Main />
    <Projects />
    <About />
    <Program />
    <Footer />
</div>


 
  )
}

export default App
