import { useState, useEffect } from "react";
import ImageList from "../components/ImageList";
import axios from "axios";

function AllImagesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRoverImages, setLoadedRoverImages] = useState([]);

  async function FetchImages() {
    const roverData = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_API_KEY}`
    );

    const roverImages = roverData.data.photos.map((image) => ({
      id: image.id,
      title: String(image.rover.name).concat(
        " ",
        "Rover",
        " ",
        image.camera.full_name
      ),
      url: image.img_src,
      date: image.earth_date,
    }));
    setLoadedRoverImages(roverImages);
  }

  useEffect(() => {
    setIsLoading(true);
    FetchImages();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1 style={{ textAlign: "center" }}>Spacestagram </h1>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Spacestagram </h1>
      <ImageList images={loadedRoverImages} />
    </section>
  );
}
export default AllImagesPage;
