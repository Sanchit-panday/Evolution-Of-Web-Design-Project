import './timeline.css';
import { Link } from "react-router-dom";

export default function Timeline() {
  return (
    <>
      <div class="timeline">
        <ul>
          <li>
            <div class="content">
              <h3>The World Wide Web and Basic HTML</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>1991-1993</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>Introduction of HTML Tags for Structure</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>1994</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>Flash and CSS</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>1996</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>Rise of Dynamic Content and Javascript</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>2000</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>Web Standards and Semantic HTML</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>2003</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>AJAX and Web2.0</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>2005</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>The Mobile Web and Responsive Design</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>2007</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>HTML5 and CSS3</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>2010</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>The World Wide Web and Basic HTML</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>1991-1993</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>The World Wide Web and Basic HTML</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>1991-1993</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>The World Wide Web and Basic HTML</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>1991-1993</h4>
              </div>
            </Link>
          </li>

          <li>
            <div class="content">
              <h3>The World Wide Web and Basic HTML</h3>
              <p>Text. </p>
            </div>
            <Link to="/error" className="link">
              <div class="time">
                <h4>1991-1993</h4>
              </div>
            </Link>
          </li>
          {/* <div style={clear: "both"}></div> */}
        </ul>
      </div>
    </>
  );
}
