
import React from 'react'
import { UserProps } from '@/interfaces'
import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'
// import { getStaticProps } from '../posts'

const Users: React.FC<UserProps[]> = ({users}) => {
  console.log(users)
  return (
  <div className="flex flex-col h-screen">
      <Header />
     <main className="p-4">
         <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">UsersDetails</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Users</button>
        </div>
       <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-white">
          {
            users?.map(({id, name, username, email, address, phone, website, company}: UserProps, key: number) => (
            <UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company}/>
            ))
          }
        </div>
      </main>
      </div>
  
  )
}

export async function getStaticProps () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return{
    props:{
      users
    }
  }
}
export default Users