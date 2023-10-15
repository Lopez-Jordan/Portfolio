const list1 = ["React", "JavaScript", "HTML", "CSS", "JQuery","Bootstrap", "UiKit"];
const list2 = ["SQL", "MongoDB", "Express", "Node", "GraphQL", "Python", "RESTful API's", "Mongoose", "Sequelize"];
const list3 = ["financial management", "business development", "managing/leading teams"];

import SkillCard from "../components/SkillCard";

export default function Resume () {
    return(
        <>
            <div className="skillsDiv">
                <h2 id="Jordan">My technincal skills!</h2>
            </div>
            <div id="allSkill">
                <SkillCard title="Front End" list={list1}/>
                <SkillCard title="Back End" list={list2}/>
                <SkillCard title="Other" list={list3}/>
            </div>
        </>
    )
} 