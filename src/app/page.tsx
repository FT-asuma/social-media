import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Container, Feed, Header, Sidebar } from "@/components";

export default async function Home() {
  // Get session information on the server
  const session = await getServerSession(authOptions);

  // If no session exists, redirect to login page
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Feed />
      </Container>
    </>
  );
}
