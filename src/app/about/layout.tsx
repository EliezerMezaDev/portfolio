import Footer from "@components/ui/Footer"

export const metadata = {
  title: "Sobre mi | EaMZ",
  description:
    "Eliezer A Meza — Frontend Engineer con +5 años de experiencia en arquitecturas escalables y aplicaciones híbridas. Especializado en Fintech.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Footer />
    </>
  )
}
