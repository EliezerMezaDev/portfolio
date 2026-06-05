import Footer from "@components/ui/Footer"

export const metadata = {
  title: "Sobre mi | EaMZ",
  description:
    "Eliezer A Meza — Full Stack Engineer con +5 años de experiencia en arquitecturas escalables, aplicaciones híbridas y sistemas de IA conversacional. Especializado en Fintech y Travel Tech.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Footer />
    </>
  )
}
