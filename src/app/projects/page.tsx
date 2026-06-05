import { getVisibleProjects } from "@lib/projects"
import ProjectsClient from "./components/ProjectsClient"

export const revalidate = 3600

export default function Page() {
  const projects = getVisibleProjects()

  return <ProjectsClient projects={projects} />
}
