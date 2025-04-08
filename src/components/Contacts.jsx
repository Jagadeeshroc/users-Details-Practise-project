import React from 'react';
import axios from 'axios';
import "tailwindcss";
import ContactDetails from './ContactDetails';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: null, 
            error: null,
            selectedUser: null  // Add state to track selected user
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data });
            })
            .catch((err) => {
                this.setState({ error: err });
            });
    }

    // Method to handle user selection
    handleUserSelect = (user) => {
        this.setState({ selectedUser: user });
    }

    render() {
        const { users, error, selectedUser } = this.state;
        
        return (
            <div className="p-4">
                 <div className=" p-6 border border-gray-200 rounded-lg bg-white shadow-sm">

                    <h1 className='text-red-400 text-4xl mb-6 p-2'>Contact List</h1>
                    <div className='flex flex-row gap-8'>
                        {/* User List */}
                        <div className="w-1/2">
                            {users ? (
                                users.map((user) => (
                                    <div 
                                        key={user.id}
                                        className="mb-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                                        onClick={() => this.handleUserSelect(user)}
                                    >
                                        <h3 className="text-lg font-semibold">{user.name}</h3>
                                        <p className="text-blue-500">{user.email}</p>
                                        <p className="text-blue-500">{user.age}</p>
                                        <p className="text-blue-500">{user.address.city}</p>
                                        
                                    </div>
                                ))
                            ) : (
                                !error && <div>Loading...</div>
                            )}
                                {error && <div className="text-red-500">Error loading users</div>}
                    </div>
                    
                    {/* User Details */}
                    <div className="w-1/2">
                        {selectedUser ? (
                            <ContactDetails user={selectedUser} />
                        ) : (
                            <div className="text-gray-500 p-4 border border-gray-200 rounded-lg">
                                Select a user to view details
                            </div>
                        )}
                    </div>
                </div>
            </div>
     </div>    
        );
    }
}

export default Contacts;