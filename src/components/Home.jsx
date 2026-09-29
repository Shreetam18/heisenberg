import './Home.css'
import './Buttons.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="welcome">
      <div className="welcome-text">
        <p className="eyebrow">
          HEISENBERG // BATCH DATABASE
        </p>

        <h1>
          Welcome to our
          <br />
          <span>perfectly stable</span>
          <br />
          and working website.
        </h1>

        <p className="subtitle">
          No bugs. No crashes. No questionable code written at 3 AM.
          <br />
          Definitely.
          <br /><br />
          60% vibe code · 25% human fixes · 15% tears
        </p>
      </div>

      <div className="welcome-gif">
        <iframe
          src="https://giphy.com/embed/PSxPL6jjDnpmM"
          width="414"
          height="480"
          frameBorder="0"
          allowFullScreen
          title="Everything is fine"
        ></iframe>

        <p className="gif-credit">
          <a
            href="https://giphy.com/gifs/fail-crash-PSxPL6jjDnpmM"
            target="_blank"
            rel="noreferrer"
          >
            via GIPHY
          </a>
        </p>

        <div className="gif-buttons">
          <Link to="/routine" className="page-button">
            Routine
          </Link>

         <Link to="/study-material" className="page-button">
  Study Material
</Link>

          <button className="page-button">
            Miscellaneous
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home