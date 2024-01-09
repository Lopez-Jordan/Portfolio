import Card from '../components/Card';
export default function Projects() {
    return (
        <>
            <div className='bgColorDiv'>
                <div className="introDiv" id="projectDiv">
                    <h2 id="Jordan">Check out my projects!</h2>
                    <p className='text'>
                        I've done everything from full stack applications, data base management, financial dashboards,
                        weather reports and more!
                    </p>
                </div>
                <div className='cardContainer'>
                    <Card
                        name="Admission GPT"
                        deployed="https://infinite-thicket-94821-c40c39ef6cfc.herokuapp.com/"
                        repo="https://github.com/Lopez-Jordan/UC-Chatbot"
                        imagePath="/home.png"
                    />
                    <Card
                        name="Surf Report"
                        deployed="https://floating-shelf-66988-88c62d989e6d.herokuapp.com/"
                        repo="https://github.com/Lopez-Jordan/SurfReport"
                        imagePath="/SurfReport.png"
                    />
                    <Card
                        name="forumZ"
                        deployed="https://forumz-090c0b5b4bff.herokuapp.com/"
                        repo="https://github.com/Lopez-Jordan/forumZ"
                        imagePath="/forumZ.png"
                    />
                    <Card
                        name="Crypto Portfolio"
                        deployed="https://ailllycxr.github.io/cryptoDashboard/"
                        repo="https://github.com/Lopez-Jordan/cryptoDashboard"
                        imagePath="/crypto.png"
                    />
                    <Card
                        name="SQL Manager"
                        deployed="https://github.com/Lopez-Jordan/Employee-Tracker"
                        repo="https://github.com/Lopez-Jordan/Employee-Tracker"
                        imagePath="/employeeTracker.png"
                    />
                    <Card
                        name="Weather Report"
                        deployed="https://lopez-jordan.github.io/weather-app/"
                        repo="https://github.com/Lopez-Jordan/weather-app"
                        imagePath="/weather.png"
                    />
                    <Card
                        name="JS Quiz"
                        deployed="https://lopez-jordan.github.io/javascript-quiz/"
                        repo="https://github.com/Lopez-Jordan/javascript-quiz"
                        imagePath="/quiz.png"
                    />
                </div>
            </div>
        </>
    );
} 