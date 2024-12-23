export const getFakeStore = async ({
  setNotification,
}: {
  setNotification: React.Dispatch<React.SetStateAction<string>>;
}) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_KEY}/feeds`;
    console.log("Fetching from:", url);

    const req = await fetch(url, { cache: "no-store" });

    if (!req.ok) {
      setNotification(`HTTP error! status: ${req.status}`);
      return; // Stop execution if the response is not OK
    }

    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      setNotification("Error! Received a non-JSON response.");
      return;
    }

    const data = await req.json();
    if (!Array.isArray(data)) {
      setNotification("Error! Unexpected data format received.");
      return;
    }

    return data;
  } catch (error: any) {
    console.error("Fetch error:", error);
    setNotification("Error! Could not fetch the data: " + error.message);
    return;
  }
};
