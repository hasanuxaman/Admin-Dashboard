import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
];

const ShowPage = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(timer);
  });

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box textAlign="center" p={3}>
      <Typography variant="h4" mb={3}>🎞 Family Slideshow</Typography>

      <Box
        component="img"
        src={images[index]}
        alt="slide"
        sx={{
          width: "70%",
          height: 400,
          borderRadius: 3,
          boxShadow: 4,
          objectFit: "cover",
        }}
      />

      <Box mt={2}>
        <Button variant="outlined" onClick={prevImage} sx={{ mr: 2 }}>
          ◀ Previous
        </Button>
        <Button variant="contained" onClick={nextImage}>
          Next ▶
        </Button>
      </Box>
    </Box>
  );
};

export default ShowPage;
