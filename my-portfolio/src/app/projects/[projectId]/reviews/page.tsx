import Link from "next/link";

export default function ProductReview({
  params,
}: {
  params: { projectId: string };
}) {
  const projectId = params.projectId;

  return (
    <>
      <h1 className="text-white text-2xl font-bold">
        All reviews for Project {projectId}
      </h1>
      <ul className="text-white mt-4 space-y-2">
        {[1, 2, 3, 4].map((reviewId) => (
          <li key={reviewId}>
            <Link
              href={`/projects/${projectId}/reviews/${reviewId}`}
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              Review {reviewId}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
