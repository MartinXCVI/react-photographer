import { FunctionComponent, JSX } from "react";
import { IGalleryImages } from "../../interfaces/IGalleryImages";


const HomeGalleryImages: FunctionComponent<IGalleryImages> = (props): JSX.Element => {

  const { data, onClick } = props

  const handleClickImage = (index: number): void => {
    onClick(index)
  }

  return (
    <section className="home-gallery-images-wrapper px-5 py-10">
      {data.map((slide, index)=> (
        <figure
          onClick={()=> handleClickImage(index)}
          key={index}
          className="home-gallery-fig"
        >
          <img
            src={slide.src}
            alt={slide.description}
            title={slide.title}
            loading="lazy"
          />
        </figure>
      ))}
    </section>
  )
}

export default HomeGalleryImages