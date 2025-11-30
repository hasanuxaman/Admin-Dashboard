import { Box, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        📸 Family Album Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardMedia
              component="img"
              height="180"
              image="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
              alt="Family Photos"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="600">Photos</Typography>
              <Typography color="text.secondary">View all family photos</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardMedia
              component="img"
              height="180"
              image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Family Videos"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="600">Videos</Typography>
              <Typography color="text.secondary">Watch family memories</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
