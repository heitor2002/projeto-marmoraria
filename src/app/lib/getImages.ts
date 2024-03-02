export default async function getImages() {
    try {
      const response = await fetch("http://localhost:3000/api/images", {
        cache: "no-cache",
      });
      if (!response) throw new Error("Failed to fetch");
  
      return response.json();
    } catch (error) {
      console.log("Error: " + error);
    }
  }