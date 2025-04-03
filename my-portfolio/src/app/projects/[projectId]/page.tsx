import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;
  console.log(params.projectId);
  if (parseInt(projectId) > 1000) {
    notFound();
    //redirect("/projects");
  }
  return (
    <div className="min-h-[200vh] overflow-y-auto">
      <h2 className="mb-3">Project detail Page {projectId}</h2>
      <Link
        href={`/projects/${projectId}/reviews`}
        className=" text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:underline border-2 border-white"
      >
        All Reviews
      </Link>
    </div>
  );
}
