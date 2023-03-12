import "./HomePage.css";

export function HomePage(){
    return(<>
    <h1 className="h1">Movies</h1>
    <div className="hero">
        <div className="hero-text">
            <button onClick={Redirect} className="start-btn">LET'S START!</button>
        </div>
     </div>
    </>
    );
}

