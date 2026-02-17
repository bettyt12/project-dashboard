"use client";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles: Record<Project["status"], string> = {
    Active: "bg-emerald-100 text-emerald-800",
    "On Hold": "bg-amber-100 text-amber-800",
    Completed: "bg-zinc-200 text-zinc-700",
  };
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-sm font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="rounded-lg border border-zinc-200 bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h2 className="min-w-0 flex-1 text-base font-semibold text-zinc-900 truncate" title={project.name}>
          {project.name}
        </h2>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-1 text-sm text-zinc-600 truncate" title={project.clientName}>
        {project.clientName}
      </p>
      <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500">
        <div>
          <dt className="sr-only">Start</dt>
          <dd>{formatDate(project.startDate)}</dd>
        </div>
        <div>
          <dt className="sr-only">End</dt>
          <dd>{formatDate(project.endDate)}</dd>
        </div>
      </dl>
    </article>
  );
}
