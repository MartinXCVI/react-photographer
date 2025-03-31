import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-96 flex justify-center items-center">
        This is the Home page
      </div>
      <Footer />
    </>
  )
}

export default Home