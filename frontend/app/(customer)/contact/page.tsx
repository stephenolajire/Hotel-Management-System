import ContactForm from "@/app/_components/contact/ContactForm";
import ContactHero from "@/app/_components/contact/ContactHero"
import MapAddress from "@/app/_components/contact/MapAddress";


const page = () => {
  return (
    <main>
      <ContactHero />
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-15">
        <ContactForm />
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-15">
        <MapAddress />
      </section>
    </main>
  );
}

export default page
