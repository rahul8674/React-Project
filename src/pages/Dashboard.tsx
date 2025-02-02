import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button, Paper, Typography, Box } from "@mui/material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const data = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 27 },
    { name: "Apr", value: 40 },
  ];

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Welcome, {user?.displayName}
      </Typography>
      <Button variant="contained" color="secondary" onClick={logout} sx={{ mb: 3 }}>
        Logout
      </Button>

      {/* Chart Container */}
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 800, margin: "auto" }}>
        <Typography variant="h6" gutterBottom>
          User Data Trends
        </Typography>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Dashboard;
