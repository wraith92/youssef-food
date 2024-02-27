import Link from "next/link";

const Footer1 = () => {
  return (
    <footer className="footer-default light-red-bg p-r z-1 pt-80">
      <div
        className="dot-bg bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
      />
      {/*=== Footer Widget Area ===*/}
      <div className="footer-widget-area pb-10 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget pr-lg-30 mb-40 wow fadeInUp">
                <div className="footer-content">
                  <Link legacyBehavior href="/">
                    <a className="footer-logo mb-30">
                      <img
                        src="assets/images/logo/logo-white.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                  <p>
                    Offrant des services VTC fiables et confortables pour tous vos déplacements.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-arrow-right" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        value="bensalahabdelrrahman@gmail.com" // Pré-rempli avec votre email, modifiable par l'utilisateur si nécessaire
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-nav-widget pl-lg-30 mb-40 wow fadeInDown">
                <h4 className="widget-title">Services VTC</h4>
                <div className="footer-nav-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Accueil</a>
                    </li>
                    <li>
                      <a href="#">Nos Services</a>
                    </li>
                    <li>
                      <a href="#">Réservation</a>
                    </li>
                    <li>
                      <a href="#">Tarifs</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget contact-info-widget pl-lg-70 mb-40 wow fadeInDown">
                <div className="contact-info-box mb-20">
                  <span className="title">Appel pour réservation:</span>
                  <h3>
                    <a href="tel:+0753344306">+07 53 34 43 06</a>
                  </h3>
                  <p>
                    <a href="mailto:bensalahabdelrrahman@gmail.com">bensalahabdelrrahman@gmail.com</a>
                  </p>
                </div>
                <div className="contact-info-box mb-20">
                  <span className="title">Emplacement :</span>
                  <p>184 Grand Rue, 92310 Sèvres, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Copyright Area ===*/}
      <div className="copyright-area border-top-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Copyright Text ===*/}
              <div className="copyright-text">
                <p>© 2024 VTC Services, Tous droits réservés</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Copyright Nav ===*/}
              <div className="copyright-nav float-lg-end">
                <ul>
                  <li>
                    <a href="#">Paramètres &amp; Confidentialité</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Mentions légales</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
