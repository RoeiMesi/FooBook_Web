import React from 'react';
import SideBarItem from './SideBarItem';
import freindPic from '../../../Photos/friend.png'
import memoryPic from '../../../Photos/memories.png'
import savedPic from '../../../Photos/saved.png'
import groupPic from '../../../Photos/groups.png'
import facebookPic from '../../../Photos/facebook.png'
import SeeMoreButton from './SeeMoreButton';
import MemoryItem from './MemoryItem';
import { useUser } from '../../../UserContext';

const Sidebar = ({theme}) => {
    const { userDetails} = useUser();

    const sidebarItems = [
        { icon: userDetails.profilePic, label: userDetails.displayName, link: '#' },
        { icon: freindPic, label: 'Friends', link: '#' },
        { icon: memoryPic, label: 'Memories', link: '#' },
        { icon: savedPic, label: 'Saved', link: '#' },
        { icon: groupPic, label: 'Groups', link: '#' },
        { icon: facebookPic, label: 'Video', link: '#' },
    ];

    return (
        <div className="sidebar-container col-12 col-md-3">
            <div className={`h-100 overflow-visible scrollbar d-none d-xl-block ${theme === 'dark' ? 'text-white bg-black' : ''}`} style={{ maxWidth: '360px', width: '100%', zIndex: 4, position: 'absolute', left: 0 }}>
                <ul className="navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5" style={{ paddingTop: '50px' }}>
                    {sidebarItems.map((item, index) => (
                        <SideBarItem key={index} icon={item.icon} label={item.label} link={item.link} />
                    ))}
                    <SeeMoreButton />
                    <hr class="m-0" />
                    <div class="d-flex align-items-center justify-content-between mt-2 text-muted">
                        <h4 class="m-0 text-muted">Your Shortcuts</h4>
                        <p class="m-0 text-primary me-3">Edit</p>
                    </div>
                    <MemoryItem src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" label="Memories" />
                    <MemoryItem src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" label="Archive" />
                    <MemoryItem src="https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" label="Activities" />
                    <MemoryItem src="https://st4.depositphotos.com/33133132/39116/v/450/depositphotos_391165530-stock-illustration-pixel-game-logo-design-vector.jpg" label="Games" />
                    <MemoryItem src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" label="Favourites" />
                    <MemoryItem src="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" label="Stories" />
                </ul>

            </div>

        </div>
    );
};

export default Sidebar;
