import React from 'react';
import SponsorItem from './SponsorItem';

const SponsoredSection = ({theme}) => {
  return (
    <>
      <h5 className="text-muted">Sponsored</h5>
      <SponsorItem theme={theme} imageUrl="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" siteName="Meow.com" />
      <SponsorItem theme={theme} imageUrl="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tLi4ufGVufDB8fDB8fHww" siteName="Meow.com" />
    </>
  );
};

export default SponsoredSection;
