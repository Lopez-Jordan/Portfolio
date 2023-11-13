import { useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import SkillCard from "../components/SkillCard";

const list1 = ["React", "JavaScript", "HTML", "CSS", "JQuery", "Bootstrap", "UiKit"];
const list2 = ["SQL", "MongoDB", "MVC", "Express", "Node", "GraphQL", "Python", "RESTful API's", "Mongoose", "Sequelize"];
const list3 = ["financial management", "business development", "leading teams"];

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

export default function Resume() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (
        <>
            <div className="bgColorDiv">

                <div className="flexDiv">
                    <div className="skillsDiv">
                        <h2 id="Jordan">Check out my technical skills!</h2>
                    </div>
                    <button className="resume">            
                        <a

                        href="/JordanLopezResume.pdf"
                        download="Resume.pdf"
                        >
                        Download Resume
                        </a>
                    </button>
                </div>
                <div className="boxDiv2">
                </div>
                <div id="allSkill">
                    <SkillCard title="Front End" list={list1} />
                    <SkillCard title="Back End" list={list2} />
                    <SkillCard title="Other" list={list3} />
                </div>
                <div className="icons2">
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
            </div>
        </>
    )
} 