import { UserData, UserModalProps } from '@/interfaces'
import React, { useState } from 'react'

const UserModal:React.FC<UserModalProps>= ({onClose, onSubmit}) => {
    const [user, setUser] = useState<UserData>({
        id: 1,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: "",
            }

        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "", 
            bs: "",
        }
    })

    //Handle Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
      const {name, value} = e.target;
      setUser((prevUser) => ({...prevUser, [name]: value}));
    };

    //Handle Submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    }
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
             <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <div className="max-h-[80vh] overflow-y-auto p-4">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor='id' className="block text-gray-700 font-medium mb-2">User ID</label>
                <input 
                type='number'
                id='id'
                name='id'
                value={user.id} 
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='name' className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                type='text'
                id='name'
                name='name'
                value={user.name}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='username' className="block text-gray-700 font-medium mb-2">UserName</label>
                <input 
                type=''
                id='username'
                name='username'
                value={user.username}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='email' className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                type='text'
                id='email'
                name='email'
                value={user.email}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Address</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.address.street}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Suite</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.address.suite}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">City</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.address.city}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Zipcode</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.address.zipcode}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
            <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Lat</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.address.geo.lat}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
             <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Lng</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.address.geo.lng}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
             <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Phone</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.phone}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
             <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Website</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.website}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
             <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Compant</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.company.name}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
             <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">CatchPhrase</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.company.catchPhrase}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
             <div className="mb-4">
                <label htmlFor='address' className="block text-gray-700 font-medium mb-2">Bs</label>
                <input 
                type='text'
                id='address'
                name='address'
                value={user.company.bs}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            </div>
             <div className="flex justify-between items-center">
                <button 
                type='button'
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
                Cancel
                </button>
                <button 
               type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                    Add Button
                </button>
            </div>
        </form>
        </div>

        </div>
    </div>
  )
}

export default UserModal