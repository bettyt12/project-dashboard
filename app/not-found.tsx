import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-xl font-semibold text-zinc-900">Not found</h1>
      <p className="text-zinc-600">The page or project you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="text-sm text-zinc-600 underline hover:text-zinc-900"
      >
        Back to projects
      </Link>
    </div>
  );
}
