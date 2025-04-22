import routes from "../routes/routes"
const { contact } = routes

import Navbar from "../components/Navbar"
import AccordionImages from "../components/Gallery/AccordionImages"
import GallerySlider from "../components/Gallery/GallerySlider"
import GalleryCarousel from "../components/Gallery/GalleryCarousel"
import Footer from "../components/Footer"

import GalleryContactVideo from '/videos/gallery/gallery-contact-video.mp4'

const Gallery = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-center text-5xl py-5">Natural Wonders</h1>
        <AccordionImages />
        <GallerySlider />
        <section
          id="gallery-contact-section"
          className="w-full min-h-screen flex flex-col justify-center items-center gap-5"
          aria-label="Gallery's intermediate contact section"
        >
          <video
            className="gallery-contact-video w-full min-h-screen object-cover"
            src={GalleryContactVideo}
            autoPlay
            muted
            loop
            aria-label="Background video"
          ></video>
          <p className="text-white text-2xl text-center md:leading-9 px-10 text-shadow">
            My photographic journey captures and celebrates what I appreciate in life - the simple, extraordinary magic of minor life moments forever frozen within each image.
          </p>
          <a
            className="btn btn-outline px-10 py-5 text-[1rem] text-white hover:text-black dark:hover:text-white"
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