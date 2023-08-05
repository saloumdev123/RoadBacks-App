import { PageLink, SocialLinks } from "../data";

const Footers = () => {
  return (
    <div>
      <div>
        <footer className="section footer">
          <ul className="footer-links">
            {PageLink.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className="footer-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="footer-icons">
            {SocialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">{new Date().getFullYear()}</span> all rights
            reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footers;
