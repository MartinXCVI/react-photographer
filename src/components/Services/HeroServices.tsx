import { JSX } from "react"

const HeroServices = (): JSX.Element => {
  return (
    <section className="services-hero flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-4xl text-white text-shadow">
        Tailored photography sessions to capture your story
      </h1>
      <p className="text-center text-2xl text-white text-shadow">
        From timeless portraits to elegant weddings and other events
      </p>
      <a
        className="hero-services-btn btn btn-outline text-white hover:text-black dark:hover:text-white text-shadow hover-shadowless"
        href="#main-services"
        title="Click to see main services"
      >
        Discover what I offer
      </a>
    </section>
  )
}

export default HeroServices