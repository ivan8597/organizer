import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNews } from '../slices/newSlice';

type NewsFormProps= {
  initialData?: { id: number; title: string; content: string };
  onUpdate?: (news: { id: number; title: string; content: string }) => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ initialData, onUpdate }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const news = { id: initialData ? initialData.id : Date.now(), title, content };
    
    if (onUpdate) {
      onUpdate(news);
    } else {
      dispatch(addNews(news));
    }
    
    setTitle('');
    setContent('');
  };

  return (


    <form style={{display:"flex"}} onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />

      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <button style={{height:"49px"}} type="submit">{initialData ? 'Update News' : 'Add News'}</button>
    </form>
  );
};

export default NewsForm;