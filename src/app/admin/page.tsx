import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return <p className="text-center mt-10 text-red-600">Access Denied</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome Admin!</h1>
    </div>
  );
}
