import { getProjectBySlug } from "@lib/projects"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: "Not Found | EaMZ" }

  const description = (project.content.split("\n\n")[0] || project.content).slice(0, 160)
  const ogImage = project.images[0]?.src

  return {
    title: `${project.title} | EaMZ`,
    description,
    openGraph: {
      title: `${project.title} | EaMZ`,
      description,
      ...(ogImage && {
        images: [{ url: ogImage, alt: project.title }],
      }),
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
