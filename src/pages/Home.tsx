import React from 'react';
import Counter from '../components/Counter/Counter';
import UserDataForm from '../components/UserDataForm/UserDataForm';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';

const Home: React.FC = () => {
  return (
    <main>
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
