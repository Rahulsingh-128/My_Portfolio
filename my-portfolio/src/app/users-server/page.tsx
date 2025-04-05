import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function UserServer() {
  let users: User[] = [];

  try {
    users = await getUsers();
  } catch (error) {
    return <p className="text-red-500">Error fetching users.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List (Server Component)</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded-lg shadow-md">
            <p className="font-semibold">
              {user.name} (@{user.username})
            </p>
            <p className="text-sm text-white">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
