import React from "react";
// import "./footer/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__outer-container">
        <div className="footer__inner-container">
          {/* Footer Icons */}
          <div className="footer__icons">
            <a
              href="https://www.facebook.com/netflix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="footer__icon" />
            </a>
            <a
              href="https://www.instagram.com/netflix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="footer__icon" />
            </a>
            <a
              href="https://twitter.com/netflix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="footer__icon" />
            </a>
            <a
              href="https://www.youtube.com/user/Netflix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="footer__icon" />
            </a>
          </div>

          {/* Footer Links in Columns */}
          <div className="footer__data">
            <div className="footer__data-group">
              <ul>
                <li>
                  <a href="https://www.netflix.com/browse/subtitles">
                    Audio and Subtitles
                  </a>
                </li>
                <li>
                  <a href="https://media.netflix.com/">Media Center</a>
                </li>
                <li>
                  <a href="https://www.netflix.com/privacy">Privacy</a>
                </li>
                <li>
                  <a href="https://help.netflix.com/contactus">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer__data-group">
              <ul>
                <li>
                  <a href="https://help.netflix.com/">Help Center</a>
                </li>
                <li>
                  <a href="https://ir.netflix.net/">Investor Relations</a>
                </li>
                <li>
                  <a href="https://help.netflix.com/legal">Legal Notices</a>
                </li>
              </ul>
            </div>
            <div className="footer__data-group">
              <ul>
                <li>
                  <a href="https://www.netflix.com/gift-cards">Gift Cards</a>
                </li>
                <li>
                  <a href="https://jobs.netflix.com/">Jobs</a>
                </li>
                <li>
                  <a href="https://www.netflix.com/Cookies">
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__data-group">
              <ul>
                <li>
                  <a href="https://www.netflix.com/TermsOfUse">Terms of Use</a>
                </li>
                <li>
                  <a href="https://help.netflix.com/legal/corpinfo">
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Language Select Button (Placeholder) */}
          <div className="footer__language">
            <button>English</button>
          </div>

          {/* Footer Copyright */}
          <div className="footer__copyright">
            <p>© 2024 Netflix Clone By Rashida Jabir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
