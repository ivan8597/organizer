import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type News ={
  id: number;
  title: string;
  content: string;
}

type NewsState= {
  newsList: News[];
}

const initialState: NewsState = {
  newsList: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('newsList') || '[]') : [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews(state, action: PayloadAction<News>) {
      state.newsList.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('newsList', JSON.stringify(state.newsList));
      }
    },
    editNews(state, action: PayloadAction<News>) {
      const index = state.newsList.findIndex(news => news.id === action.payload.id);
      if (index !== -1) {
        state.newsList[index] = action.payload;
        if (typeof window !== 'undefined') {
          localStorage.setItem('newsList', JSON.stringify(state.newsList));
        }
      }
    },
    deleteNews(state, action: PayloadAction<number>) {
      state.newsList = state.newsList.filter(news => news.id !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('newsList', JSON.stringify(state.newsList));
      }
    },
  },
});

export const { addNews, editNews, deleteNews } = newsSlice.actions;
export default newsSlice.reducer;
