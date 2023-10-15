export default function Card({ name, imagePath, deployed, repo }) {
    return (
        <>
            <div className="cardDiv">
                <h3 className="cardTitle">{name}</h3>
                <img className="cardImage" src={imagePath} />
                <div className="flex">
                    <a className="button" href={deployed}>Link</a>
                    <a className="button" href={repo} >Repo</a>
                </div>
            </div>
        </>
    );
}