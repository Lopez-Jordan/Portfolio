export default function SkillCard({ title, list }) {
    return (
        <div className="skillContainer">
            <h3 className="skillTitle">{title}</h3>
            <ul>
                {list.map((el, i) => {
                    return <li key={i}>{el}</li>
                })}
            </ul>
        </div>
    );
}
