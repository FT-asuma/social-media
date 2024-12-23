import { Container } from "@/components";
import { Metadata } from "next";

export async function generateMetadata(context: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await context.params;
  return {
    title: `Product - ${id}`,
  };
}

export default function ProductListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
