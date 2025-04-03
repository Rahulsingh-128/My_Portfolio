import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProjectReview({
  params,
}: {
  params: { projectId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  const awaitParams = await params;
  const { projectId, reviewId } = awaitParams;
  if (parseInt(projectId) > 1000) {
    notFound();
    //redirect("/projects");
  }

  if (random === 1) {
    throw new Error("Error loading generated");
  }
  return (
    <h2>
      Review {reviewId} for project {projectId}
    </h2>
  );
}
