import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data";
import type { ProjectStatus } from "@/types/project";

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  const styles: Record<ProjectStatus, string> = {
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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="inline-block text-sm text-zinc-600 hover:text-zinc-900"
      >
        ← Back to projects
      </Link>

      <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="min-w-0 flex-1 text-2xl font-semibold text-zinc-900 break-word">
            {project.name}
          </h1>
          <StatusBadge status={project.status} />
        </div>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-zinc-500">Client</dt>
            <dd className="mt-0.5 text-zinc-900 break-word">
              {project.clientName}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500">Status</dt>
            <dd className="mt-0.5">{project.status}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500">Start date</dt>
            <dd className="mt-0.5 text-zinc-900">
              {formatDate(project.startDate)}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500">End date</dt>
            <dd className="mt-0.5 text-zinc-900">
              {formatDate(project.endDate)}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-zinc-500">
              Description{" "}
              <span className="font-normal text-zinc-400">
                (optional field)
              </span>
            </dt>
            <dd className="mt-0.5 text-zinc-900 break-word">
              {project.description ?? "—"}
            </dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
