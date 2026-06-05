import { getAllExperiencesServer } from "@lib/experiences-action"

import FixedButton from "@components/ui/FixedButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import Me from "@components/about/Me"
import Skills from "@components/about/Skills"
import Experience from "@components/about/Experience"
import Education from "@components/about/Education"

export const revalidate = 3600

export default async function AboutPage() {
  const experiences = await getAllExperiencesServer()

  return (
    <main className="overflow-hidden">
      <FixedButton href="/#about">
        <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
      </FixedButton>

      <div className="container mx-auto my-10 grid grid-cols-1 gap-10">
        <div className="mb-5 flex flex-col items-start justify-center">
          <Me />
          <Skills />
          <Experience experiences={experiences} />
          <Education />
        </div>
      </div>
    </main>
  )
}
