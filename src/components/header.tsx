const pages = ["My Accounts", "Products", "Help & More"];

interface HeaderProps {
  page: string;
  setPage: (page: string) => void;
}
export const Header = ({ page, setPage }: HeaderProps) => {
  return (
    <>
      <nav
        id="topNav"
        className="navbar nav"
      >
        <div className="container topSection">
          <a
            className="navbar-brand"
            href="#"
          >
            <img
              src="https://i.pinimg.com/originals/92/1c/c7/921cc7b0a1f51a7f46ea06f1ede3ccf5.jpg"
              alt="project logo"
            />
          </a>
          <div className="header">
            <div className="left flex-column">
              <div className="greeting">
                <p>
                  Hi, <span>Zhiheng</span>
                </p>
              </div>
              <div>
                <ul className="navbar-nav">
                  {pages.map((p) => (
                    <li
                      key={p}
                      className={p == page ? "active nav-link" : "nav-link"}
                      onClick={() => setPage(p)}
                    >
                      <a>
                        <span>{p}</span>
                        <span>
                          <i className="fa-sharp fa-solid fa-play fa-rotate-90"></i>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right flex-column">
              <div>
                <a>Open Ancount</a>
                <span>|</span>
                <a>Sign Out</a>
              </div>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="search"
                />
                <i className="fas fa-search search-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
