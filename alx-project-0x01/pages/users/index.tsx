import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const UsersPage: React.FC = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="p-2 border rounded">
              {user.name}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;