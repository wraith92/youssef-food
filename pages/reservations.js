import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import ReservationsFrom from "../src/components/ReservationsFrom";
import Layout from "../src/layout/Layout";
const Reservations = () => {
  return (
    <Layout>
    <PageBanner pageName={"Reservations"} title="Réservation" />
      <section className="reservation-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="reservation-img wow fadeInLeft mb-50">
                <img src="assets/images/contact/contact-5.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
  <div className="reservation-content-box wow fadeInRight mb-50">
    <div className="section-title text-center mb-30">
      <span className="sub-title">Réservation VTC</span> {/* Titre secondaire mis à jour */}
      <h2>Effectuez une réservation</h2> {/* Titre principal mis à jour */}
    </div>
    <div className="reservation-style-four">
      <ReservationsFrom /> {/* Assurez-vous que ce composant est adapté pour les réservations de VTC */}
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
      {/*====== End Reservation Section ======*/}
      {/*====== Start Map Section ======*/}
      <section className="map-section pb-130 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map-box">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42001.29822823411!2d2.311022537232989!3d48.85666313350424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1709046494747!5m2!1sfr!2sfr"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    
    </Layout>
  );
};
export default Reservations;
