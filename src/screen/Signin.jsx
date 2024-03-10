import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Button, Link } from "@mui/material";
import { signinEmailPassword } from "./firebase/firebaseApp";
import Alert from "@mui/material/Alert";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isError, setisError] = useState(false);
  const handleSignin = async (email, password) => {
    const response = await signinEmailPassword(email, password);
    // console.log(response);
    if (response.status === 400) {
      setError(response.message);
      setisError(true);
    }
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", itemAlign: "center" }}
    >
      {isError && <Alert severity="error">{error}</Alert>}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleSignin}
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
