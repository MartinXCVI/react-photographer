import { JSX } from "react"

const HeroServices = (): JSX.Element => {
  return (
    <section className="services-hero flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-4xl text-shadow">
        Tailored photography sessions to capture your story
      </h1>
      <p className="text-center text-2xl text-shadow">From timeless portraits to elegant weddings and other events</p>
      <a className="btn btn-outline text-shadow" href="#main-services" title="Click to see main services">
        Discover what I offer
      </a>
    </section>
  )
}

export default HeroServices