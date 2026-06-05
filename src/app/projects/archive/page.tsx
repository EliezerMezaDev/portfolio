import { getAllProjects } from "@lib/projects"
import ArchiveClient from "./ArchiveClient"

export const revalidate = 3600

export default function Page() {
  const projects = getAllProjects()
  return <ArchiveClient projects={projects} />
}
