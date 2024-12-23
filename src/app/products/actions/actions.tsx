"use server";
import { revalidatePath } from "next/cache";

import { portProduct } from "@/hooks";
import { IProducts } from "@/interface";

export async function addProduct(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("desc");
  const price = formData.get("price");
  const formProps: IProducts = {
    title: String(title),
    description: String(description),
    price: Number(price),
  };
  await portProduct(formProps);
  revalidatePath("/");
}
