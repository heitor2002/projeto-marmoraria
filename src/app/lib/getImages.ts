export default async function getImages() {
    try {
      const response = await fetch(`${process.env.NEXT_AUTH_URL}api/images`, {
        cache: "no-cache",
      });
      if (!response) throw new Error("Failed to fetch");
  
      return response.json();
    } catch (error) {
      console.log("Error: " + error);
    }
}