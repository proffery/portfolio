import { Project } from '../const/data/projects'

export const extractProjectsCategories = (projects: Project[]): string[] => {
  const categories = new Set<string>()

  for (const project of projects) {
    categories.add(project.projectCategory)
  }

  return Array.from(categories)
}
