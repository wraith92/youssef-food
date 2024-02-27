import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";

const E404 = () => {
  return (
    <Layout>
      <PageBanner pageName={"Pages 404"} title="Page 404" />{" "}
      <section className="error-page-area pt-130 pb-130 p-r z-1">
        <div className="object object-one">
          
        </div>
        <div className="object object-two">
          
        </div>
       
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="error-content text-center wow fadeInUp">
                <img
                  src="assets/images/gallery/404.png"
                  className="mb-110"
                  alt="Image 404"
                />
                <h2>Oops ! Cette page est introuvable</h2>
                <p>
                  Désolé, cette page semble introuvable. Nous vous invitons à revenir à notre page d'accueil pour trouver ce que vous cherchez.
                </p>
                <Link legacyBehavior href="/">
                  <a className="main-btn btn-red">
                    Retourner à la page d'accueil
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};

export default E404;
