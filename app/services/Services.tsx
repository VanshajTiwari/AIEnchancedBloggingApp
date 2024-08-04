import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="mb-4">We offer a range of services to meet your needs. Here are some of the services we provide:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service 1:</strong> Description of Service 1.</li>
                <li><strong>Service 2:</strong> Description of Service 2.</li>
                <li><strong>Service 3:</strong> Description of Service 3.</li>
                <li><strong>Service 4:</strong> Description of Service 4.</li>
            </ul>
            <p className="mt-4">For more details about our services, please contact us.</p>
        </div>
    );
};

export default Services;
