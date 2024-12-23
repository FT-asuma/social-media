import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 60 * 30 }); 

export const getIdProduct = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_KEY}/${id}`;

  const cachedData = cache.get(url);
  if (cachedData) {
    console.log("Returning cached data");
    return cachedData;
  }

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();

      cache.set(url, data);
      return data;
    } else {
      console.log("Error fetching product:", res.statusText);
    }
  } catch (error) {
    console.log("Error fetching product:", error);
  }
};
