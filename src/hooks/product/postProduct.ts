import { IProducts } from "@/interface";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const portProduct = async (product: IProducts) => {
  const { description, price, title } = product;

  if (!description || !price || !title) {
    return;
  }

  try {
    await axios.post(
      process.env.NEXT_PUBLIC_API_KEY as string,
      {
        ...product,
      }
    );
  } catch (error: unknown) {
    console.log("Error! Failed to post product. Please try again later.");
  } finally{
    revalidatePath("/")
  }
};
