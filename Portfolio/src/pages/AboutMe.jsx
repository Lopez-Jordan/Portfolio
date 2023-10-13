export default function AboutMe () {
    return(
        <>
            <div className="introDiv">
                <p className="spaceBottom">Hello!</p>
                <h1 id="Jordan">I'm Jordan Lopez</h1>
                <p>A dedicated, adaptable business Consultant and Web Developer with a strong background in Mathematics, Economics, and
                    industry-standard Full Stack technologies. An example of my skills would be this website--made with React and vanilla CSS!
                    If you are interested in my work, click on <span style={{fontWeight: '600'}}>Projects</span> to see all of my 
                    web-dev abilities or <span style={{fontWeight: '600'}}>Resume</span> to get a complete picture.
                </p>
            </div>
            <div className="pictureDiv">
                <img id="me" src="/me.png" alt="nothing" />
            </div>
        </>
    );
} 