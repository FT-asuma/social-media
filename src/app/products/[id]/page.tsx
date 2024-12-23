import { getIdProduct } from "@/hooks";
import { Metadata } from "next";
import NotFoundPage from "./not-found";
import { IProducts } from "@/interface";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const pageProps: IProducts = await getIdProduct(id);
  return {
    title: pageProps ? pageProps.title : "Not found",
  };
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const product = await getIdProduct(id);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
