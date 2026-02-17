"use client";

import type { ProjectStatus } from "@/types/project";

const STATUS_OPTIONS: ProjectStatus[] = ["Active", "On Hold", "Completed"];

interface FiltersProps {
  selectedStatuses: ProjectStatus[];
  onStatusChange: (statuses: ProjectStatus[]) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function Filters({
  selectedStatuses,
  onStatusChange,
  searchQuery,
  onSearchChange,
}: FiltersProps) {
  const selectedStatus = selectedStatuses[0] ?? "";

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as ProjectStatus | "";
    onStatusChange(value ? [value] : []);
  }

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-zinc-200 bg-white p-4">
      <div className="flex w-56 items-center gap-2">
        <label htmlFor="search" className="sr-only">
          Search by project or client name
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search by project or client name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded border border-zinc-300 px-3 py-2 text-sm placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="status" className="text-sm font-medium text-zinc-700">
          Status
        </label>
        <select
          id="status"
          value={selectedStatus}
          onChange={handleStatusChange}
          className="rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-700 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        >
          <option value="">All statuses</option>
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
