"use server"

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Experience } from "./types"
import { resolveTechNames } from "./tech-utils"

async function getAllExperiencesServer(): Promise<(Experience & { techNames: string[] })[]> {
  const experiencesDirectory = path.join(process.cwd(), "src/content/experiences")

  const files = fs.readdirSync(experiencesDirectory).filter((file: string) => file.endsWith(".md"))

  const experiences = files.map((filename: string) => {
    const filePath = path.join(experiencesDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    return {
      startDate: data.startDate,
      endDate: data.endDate,
      company: data.company,
      site: data.site,
      position: data.position,
      type: data.type,
      location: data.location,
      tech: data.tech || [],
      techNames: resolveTechNames(data.tech || []),
      content,
    }
  })

  return experiences.sort(
    (a: Experience, b: Experience) =>
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )
}

export { getAllExperiencesServer }
