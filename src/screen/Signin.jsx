import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Button, Link } from "@mui/material";

const Signin = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", itemAlign: "center" }}
    >
      <Box
        height={300}
        width={300}
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/signup" variant="body2">
                Already have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Signin;
