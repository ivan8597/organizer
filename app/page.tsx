"use client"
import NewsList from '@/components/NewsList';
import NewsForm from '@/components/NewsForm';
import React from 'react';


const Home: React.FC = () => {
    return (
        <div>
            <NewsList/>
            <NewsForm/>
        </div>
    );
};

export default Home;
