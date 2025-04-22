import { JSX } from "react"
import ContactInfoCard from "./ContactInfoCard"
import GoogleMapLocation from "./GoogleMapLocation";
import { myInfo } from "../../data/myInfo"
// React icons
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { BsEnvelopeAtFill } from "react-icons/bs";

const { address, phone, email, xtwitterUser } = myInfo

const ContactInfo = (): JSX.Element => {
  return (
    <section
      id="contact-info-section"
      className="w-11/12 md:w-10/12 p-3 md:p-10 flex flex-col gap-5 mb-10"
      aria-labelledby="contact-info-title"
    >
      <h2 className="text-2xl font-bold text-white" id="contact-info-title">
        Get In Touch With Me
      </h2>
      <p className="text-xl text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum debitis illo dolore vero. Consequuntur amet autem dolores voluptatibus minima commodi ullam eligendi rem aliquid rerum iusto, repellat blanditiis cumque voluptas.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <ContactInfoCard
          icon={<FaMapLocationDot />}
          data={address}
        />
        <ContactInfoCard
          icon={<MdOutlinePhoneAndroid />}
          data={phone}
        />
        <ContactInfoCard
          icon={<FaXTwitter />}
          data={xtwitterUser}
        />
        <ContactInfoCard
          icon={<BsEnvelopeAtFill />}
          data={email}
        />
      </div>
      <GoogleMapLocation />
    </section>
  )
}

export default ContactInfo