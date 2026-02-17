import type { Project, ProjectStatus } from "@/types/project";

export interface FilterOptions {
  statuses?: ProjectStatus[];
  searchText?: string;
}

/**
 * Filters projects by status and/or search text.
 */
export function filterProjects(
  projects: Project[],
  options: FilterOptions
): Project[] {
  const { statuses, searchText } = options;
  const search = searchText?.trim().toLowerCase() ?? "";

  return projects.filter((project) => {
    if (statuses != null && statuses.length > 0 && !statuses.includes(project.status)) {
      return false;
    }
    if (search !== "") {
      const name = project.name.toLowerCase();
      const client = project.clientName.toLowerCase();
      if (!name.includes(search) && !client.includes(search)) {
        return false;
      }
    }
    return true;
  });
}
