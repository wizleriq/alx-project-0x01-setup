import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => {
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first post', imageUrl: '' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second post', imageUrl: '' },
  ];

  return (
    <>
      <Header />
      
      <Footer />
    </>
  );
};

export default PostsPage;