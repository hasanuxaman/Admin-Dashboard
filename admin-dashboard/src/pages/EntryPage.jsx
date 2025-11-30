import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

const EntryPage = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    alert("File Added Successfully!");
  };

  return (
    <Box p={3} width="500px">
      <Typography variant="h5" mb={3} fontWeight="bold">
        ➕ Add New Photo / Video
      </Typography>

      <TextField
        fullWidth
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
        Choose File (Photo/Video)
        <input hidden type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Button>

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default EntryPage;
