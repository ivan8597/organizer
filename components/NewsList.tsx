import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNews, editNews } from '../slices/newSlice';
import NewsForm from './NewsForm';




type News = {
  id: number;
  title: string;
  content: string;
}

const NewsList: React.FC = () => {
  const newsList = useSelector((state: any) => state.news.newsList);
  const dispatch = useDispatch();
  const [editingNews, setEditingNews] = useState<News | null>(null);

  const handleEdit = (news: News) => {
    setEditingNews(news);
  };

  const handleUpdate = (updatedNews: News) => {
    dispatch(editNews(updatedNews));
    setEditingNews(null);
  };

  return (
    <div>
      <ul>
        {newsList.map((news: News) => (
          <li key={news.id}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            <button onClick={() => handleEdit(news)}>Edit</button>
            <button onClick={() => dispatch(deleteNews(news.id))}>Delete</button>
          </li>
        ))}
      </ul>
      {editingNews && (
        <NewsForm initialData={editingNews} onUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default NewsList;
