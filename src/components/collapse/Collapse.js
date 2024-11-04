import React, { useState } from 'react'
import './collapse.css'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <span>{title}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse
