import React from 'react';
import Counter from '../components/Counter/Counter';
import UserDataForm from '../components/UserDataForm/UserDataForm';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';
import { useAuth } from '../context/AuthContext';
import { Button } from '@mui/material';

const Home: React.FC = () => {
  const { user, logout } = useAuth(); // Get logout function from AuthContext

  return (
    <main>
      <div style={{ textAlign: 'center', padding: '1rem' }}>
      <p>Welcome, {user?.displayName}</p>
        <Button variant="contained" color="secondary" onClick={logout}>
          Logout
        </Button>
      </div>
      
      <div className='page-container'>
        <Counter />
      </div>
      <div className='page-container'>
        <UserDataForm />
      </div>
      <div className='page-container'>
        <RichTextEditor />
      </div>
    </main>
  );
};


export default Home;
