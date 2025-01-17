import About from "./Components/About"
import Achievements from "./Components/Achievements"
import Footer from "./Components/Footer"
import Forms from "./Components/Form"
import Gallery from "./Components/Gallery"
import Header from "./Components/Header"
import Home from "./Components/Home"

function App() {
  return (
    <>
      <Header />
      <div id="home"><Home /></div>
      <div id="about" className="pt-2 bg-light"><About /></div>
      <div id="achievements" className="my-4"><Achievements/></div>
      <div id="gallery"><Gallery/></div>
      <div id="form" className="formbg"><Forms/></div>
      <Footer/>

    </>
  )
}

export default App
