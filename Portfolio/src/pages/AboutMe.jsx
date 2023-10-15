import { useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const iconStyle = {
    fontSize: '40px',
    color: 'white',
    transition: 'color 0.7s ease',
    cursor: 'pointer',
    backgroundColor: 'black',
    padding: '5px',
    borderRadius: '8px',
    zIndex: '9'
};

const iconHoverStyle = {
    color: 'rgb(115, 255, 204)',
};

export default function AboutMe() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (
        <>
            <div className="introDiv">
                <p className="spaceBottom">Hello!</p>
                <h1 id="Jordan">I'm Jordan Lopez</h1>
                <p>A dedicated, adaptable business Consultant and Web Developer with a strong background in Mathematics, Economics, and
                    industry-standard Full Stack technologies. This website was made with React and vanilla CSS--no templates!
                    If you are interested in my work, click on <span style={{ fontWeight: '600' }}>Projects</span> to see all of my
                    web-dev abilities or <span style={{ fontWeight: '600' }}>Resume</span> to get a complete picture.
                </p>
            </div>
            <div className="boxDiv">
            </div>
            <div className="pictureDiv">
                <div className="icons">
                    <a className="icon" href="mailto:jordanlopezemail@gmail.com">
                        <FaEnvelope
                            style={hoveredIcon === 'Mail' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                            onMouseEnter={() => setHoveredIcon('Mail')}
                            onMouseLeave={() => setHoveredIcon(null)}
                        />
                    </a>

                    <a className="icon" href="https://www.linkedin.com/in/jordanlopez123/">
                        <FaLinkedinIn
                            style={hoveredIcon === 'LinkedIn' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                            onMouseEnter={() => setHoveredIcon('LinkedIn')}
                            onMouseLeave={() => setHoveredIcon(null)}
                        />
                    </a>
                    <a className="icon" href="https://github.com/Lopez-Jordan">
                        <FaGithub
                            style={hoveredIcon === 'Github' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                            onMouseEnter={() => setHoveredIcon('Github')}
                            onMouseLeave={() => setHoveredIcon(null)}
                        />
                    </a>
                </div>
                <img id="me" src="/me.png" alt="nothing" />
            </div>
        </>
    );
} 