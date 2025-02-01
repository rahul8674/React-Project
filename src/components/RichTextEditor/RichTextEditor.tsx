import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  initialContent?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ initialContent = '' }) => {
  const [content, setContent] = useState(initialContent);

  // Optionally, load saved content from local storage
  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem('richTextContent', value);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
