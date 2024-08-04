import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-lg font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        rows={4}
                        placeholder="Your Message"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
