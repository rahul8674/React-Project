import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const UserDataForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    userId: ''
  });
  const [isDirty, setIsDirty] = useState(false);

  // Warn user of unsaved changes on browser close
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFormData = { ...formData, userId: uuidv4() };
    // Save to local storage (or dispatch to Redux if using RTK)
    localStorage.setItem('userData', JSON.stringify(newFormData));
    setIsDirty(false);
    alert('Data saved!');
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: '20px auto', padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        User Data Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default UserDataForm;
