import React from 'react';
import ReactDOM from 'react-dom';

const ChaptersContainerStyles = {
    position: 'fixed',
    overflow: 'hidden',
    justifyContent: 'space-between',
    display: 'flex',
    bottom: 0,
    marginBottom: '1rem',
    marginLeft: 0,
    zIndex: 1000,
}

const ChaptersOverlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
} 

export default function ChaptersContainer({ open, children, onClose}) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div style={ChaptersOverlayStyles} onClick={onClose}/>
            <div style={ChaptersContainerStyles}>
                <button className="chapters-btn" onClick={onClose}>Chapters</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}