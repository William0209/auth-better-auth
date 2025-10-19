import Button from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { signOutAction } from "./actions/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bold">William Janssen</h1>
        <div className="flex gap-4 mt-8">
          <Button>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">William Janssen</h1>
      <div className="mt-8 text-center">
        <p className="text-lg mb-14">User ID: {session.user.id}</p>
        <form action={signOutAction}>
          <Button type="submit">Logout</Button>
        </form>
      </div>
    </div>
  );
}
