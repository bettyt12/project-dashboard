"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Project } from "@/types/project";
import { filterProjects } from "@/lib";
import Filters from "./Filters";
import ProjectList from "./ProjectList";

interface ProjectsWithFiltersProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export default function ProjectsWithFilters({
  projects,
  onSelectProject,
}: ProjectsWithFiltersProps) {
  const router = useRouter();
  const handleSelectProject = onSelectProject ?? ((project: Project) => router.push(`/projects/${project.id}`));
  const [selectedStatuses, setSelectedStatuses] = useState<Project["status"][]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(
    () =>
      filterProjects(projects, {
        statuses: selectedStatuses.length > 0 ? selectedStatuses : undefined,
        searchText: searchQuery || undefined,
      }),
    [projects, selectedStatuses, searchQuery]
  );

  const hasActiveFilters = selectedStatuses.length > 0 || searchQuery.trim() !== "";
  const isEmpty = filteredProjects.length === 0;

  return (
    <div className="space-y-4">
      <Filters
        selectedStatuses={selectedStatuses}
        onStatusChange={setSelectedStatuses}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      {isEmpty ? (
        <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center text-zinc-500">
          {projects.length === 0
            ? "No projects available."
            : "No projects match your filters."}
        </div>
      ) : (
        <ProjectList
          projects={filteredProjects}
          onSelectProject={handleSelectProject}
        />
      )}
    </div>
  );
}
