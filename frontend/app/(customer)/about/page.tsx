import AboutHero from "@/app/_components/about/AboutHero"
import ContainerOne from "@/app/_components/about/ContainerOne"
import ContainerTwo from "@/app/_components/about/ContainerTwo"

const page = () => {
  return (
    <main>
      <AboutHero />
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-15">
        <ContainerOne />
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-15">
        <ContainerTwo />
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-15">
        <ContainerOne />
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-4 md:pt-15 md:pb-2">
        <ContainerTwo />
      </section>
    </main>
  );
}

export default page
