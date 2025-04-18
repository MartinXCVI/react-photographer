import routes from "../routes/routes"
const { contact } = routes

import Navbar from "../components/Navbar"
import AccordionImages from "../components/Gallery/AccordionImages"
import GallerySlider from "../components/Gallery/GallerySlider"
import GalleryCarousel from "../components/Gallery/GalleryCarousel"
import Footer from "../components/Footer"

const Gallery = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-center text-5xl py-5">Natural Wonders</h1>
        <AccordionImages />
        <GallerySlider />
        <section
          className="w-full min-h-96 flex flex-col justify-center items-center gap-5 bg-blue-950"
          aria-label="Gallery's intermediate contact section"
        >
          <p className="text-white text-2xl text-center px-10">
            My photographic journey captures and celebrates what I appreciate in life - the simple, extraordinary magic of minor life moments forever frozen within each image.
          </p>
          <a
            className="btn btn-outline px-10 py-5 text-[1rem]"
            href={contact}
            title="Go to Contact page"
          >
            Let's Keep in Touch
          </a>
        </section>
        <GalleryCarousel />
      </main>
      <Footer />
    </>
    
  )
}

export default Gallery