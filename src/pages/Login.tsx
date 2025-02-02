import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const Login: React.FC = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home if already logged in
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    await login();
    navigate("/"); // Redirect after login
  };

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Sign in with Google
      </Button>
    </Box>
  );
};

export default Login;
