export const LandingPage = () => {
  return (
    <>
      <section className="cb-header container">
        <ul className="inquiry">
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Locations</li>
        </ul>
        <nav className="cb-nav">
          <img
            src="https://mma.prnewswire.com/media/1732600/Cadence_Bank.jpg?p=twitter"
            alt="Cadence Bank logo"
            className="cb-logo"
          />
          <ul className="navs">
            <li>
              Personal<i className="fa-solid fa-less-than fa-rotate-270"></i>
            </li>
            <li>
              Business<i className="fa-solid fa-less-than fa-rotate-270"></i>
            </li>
            <li>
              Commercial<i className="fa-solid fa-less-than fa-rotate-270"></i>
            </li>
            <li>
              Wealth<i className="fa-solid fa-less-than fa-rotate-270"></i>
            </li>
            <li>
              Insurance<i className="fa-solid fa-less-than fa-rotate-270"></i>
            </li>
            <li>
              Resources<i className="fa-solid fa-less-than fa-rotate-270"></i>
            </li>
          </ul>
          <div className="buttons">
            <button className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="login">
              <i className="fa-solid fa-circle-user"></i>
              Login
            </button>
          </div>
        </nav>
      </section>
      <section className="hero">
        <div>
          <p>5.25%APY*</p>
          <p>8-month CD</p>
          <p>
            Want a steady and secure way to grow your money?Earn a 5.25% Annual
            Percentage Yield* when you open a new CD with $25000 or more in
            non-Cadence funds.
          </p>
          <button className="started">Gey started today</button>
        </div>
      </section>
    </>
  );
};
