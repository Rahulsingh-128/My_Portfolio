import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-[200vh]">
      <h1>Project List</h1>
      <h2>
        <Link href="/projects/1" className="text-blue-500 underline">
          Project 1
        </Link>
      </h2>
      <h2>
        <Link href="/projects/2" className="text-blue-500 underline">
          Project 2
        </Link>
      </h2>
      <h2>
        <Link href="/projects/3" className="text-blue-500 underline">
          Project 3
        </Link>
      </h2>
    </div>
  );
}
