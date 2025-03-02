// Stories.js
import React from 'react';
import Story from './Story';
import { useUser } from '../../../UserContext';

const Stories = ({ theme }) => {
    const { userDetails } = useUser();

    const storiesData = [
        { image: userDetails.profilePic, label: 'Create Story', isMain: true },
        { image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Story 2' },
        { image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Story 3' },
        { image: 'https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Story 4' },
        { image: 'https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Story 5' },
        { image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Story 6' },
    ];

    return (
        <div className="d-flex justify-content-between position-relative mt-5">
            {storiesData.map((story, index) => (
                <Story theme={theme} key={index} image={story.image} label={story.label} isMain={story.isMain} />
            ))}
            <div className="position-absolute top-50 start-100 translate-middle pointer d-none d-lg-block">
                <i className={`fas fa-arrow-right p-3 border rounded-circle ${theme === 'dark' ? 'text-white bg-dark' : 'text-muted bg-white'}`}></i>
            </div>
        </div>
    );
};

export default Stories;
