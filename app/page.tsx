import { ProjectsWithFilters } from "@/components";
import { projects } from "@/data";

export default function Home() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-medium text-zinc-800">Projects</h2>
      <ProjectsWithFilters projects={projects} />
    </div>
  );
}
