import React from 'react';
import "tailwindcss";

class ContactDetails extends React.Component {
    render() {
        const { user } = this.props;
        
        return (
            <>
            <div className="sticky top-4 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h1 className="text-2xl font-bold mb-4 sticky top-4">Contact Details</h1>

            <div className="sticky top-4 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-2">{user.name}</h3>
                <p className="text-blue-500 mb-2">{user.email}</p>
                <div className="mb-2">
                    <p className="font-semibold">Address:</p>
                    <p>{user.address.street}, {user.address.suite}</p>
                    <p>{user.address.city}, {user.address.zipcode}</p>
                </div>
                <p className="mb-2"><span className="font-semibold">Phone:</span> {user.phone}</p>
                <p className="mb-2"><span className="font-semibold">Website:</span> {user.website}</p>
                <div className="mb-2">
                    <p className="font-semibold">Company:</p>
                    <p>{user.company.name}</p>
                    <p className="text-gray-500 italic">"{user.company.catchPhrase}"</p>
                    <p className="text-gray-500">{user.company.bs}</p>
                </div>
            </div>
            </div>
            </>
           
        );
    }
}

export default ContactDetails;