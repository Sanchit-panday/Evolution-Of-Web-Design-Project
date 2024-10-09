import "./header.css";

// Assets import
import { CiGlobe } from "react-icons/ci";

export function Header() {
  return (
    <>
      <div>
        This is header
        <CiGlobe />
        <div id="web">
          <header>
            <nav aria-label="Global">
              {/* <!-- Logo Section --> */}
              <div class="logo">
                <a href="#" class="logo">
                  <span>Evolution of Web Design</span>
                </a>
              </div>

              <div class="desktop-menu">
                <a href="#" class="axa1">
                  Features
                </a>
                <a href="#" class="axa2">
                  About Us
                </a>
                <a href="#" class="axa3">
                  Contact Us
                </a>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}
