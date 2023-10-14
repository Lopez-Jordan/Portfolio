import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const iconStyle = {
    fontSize: '40px',
    color: 'white',
    transition: 'color 0.5s ease',
    margin: '0 70px', // Margin on each side
    cursor: 'pointer', // Show cursor pointer on hover
    float: 'right',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '10px',
    zIndex: '9'
};

const iconHoverStyle = {
    color: '#8CBCFF',
};

export default function Icons () {

    const [hoveredIcon, setHoveredIcon] = useState(null);

    return (
        <div className="icons">
            <a href="https://www.instagram.com/jordan___lopez/">
                <FaInstagram
                    style={hoveredIcon === 'Instagram' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                    onMouseEnter={() => setHoveredIcon('Instagram')}
                    onMouseLeave={() => setHoveredIcon(null)}
                />
            </a>

            <a href="https://www.linkedin.com/in/jordanlopez123/">
                <FaLinkedinIn
                    style={hoveredIcon === 'LinkedIn' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                    onMouseEnter={() => setHoveredIcon('LinkedIn')}
                    onMouseLeave={() => setHoveredIcon(null)}
                />
            </a>
            <a href="https://github.com/Lopez-Jordan">
                <FaGithub
                    style={hoveredIcon === 'Github' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                    onMouseEnter={() => setHoveredIcon('Github')}
                    onMouseLeave={() => setHoveredIcon(null)}
                />
            </a>
        </div>
    );
}