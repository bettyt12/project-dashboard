"use client";

import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export default function ProjectList({
  projects,
  onSelectProject,
}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center text-zinc-500">
        No projects to show.
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard
            project={project}
            onClick={() => onSelectProject?.(project)}
          />
        </li>
      ))}
    </ul>
  );
}
