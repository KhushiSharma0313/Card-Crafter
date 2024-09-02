import React from 'react'
import BusinessCard from './BusinessCard';

const preview = ({Values}) => {
    
    return( 
    <section className = "Preview">
        <h2>Preview Pane</h2>
        <div className="Preview-wrapper">
            <BusinessCard Values={Values} />
        </div>
      
    </section>
    );
    
    
  
};

export default preview;
