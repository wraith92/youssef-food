import Link from "next/link";
import Slider from "react-slick";
import Partners from "../src/components/Partners";
import QichenCounter from "../src/components/QichenCounter";
import ReservationsFrom from "../src/components/ReservationsFrom";
import Hero3Slider from "../src/components/slider/Hero3Slider";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import Layout from "../src/layout/Layout";
import { testimonialSliderOne } from "../src/sliderProps";
const home = () => {
  return (
    <Layout header={3}>
      <section className="banner-three p-r">
        <Hero3Slider />
      </section>
      {/*=== End Banner Section ===*/}
      {/*=== Start About Section ===*/}
      <section className="about-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-two_image-box text-md-end mb-20 p-r z-1">
                <div className="shape shape-one">
                  <span />
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6">
                    <img
                      src="assets/images/about/image-4.jpg"
                      style={{ width: "100%" }}
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <img
                      src="assets/images/about/image-5.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content-box content-box-gap pl-lg-40">
                <div className="section-title mb-30 wow fadeInDown">
                  <span className="sub-title">À propos de notre service VTC</span>
                  <h2>Nous proposons des trajets confortables et sûrs à travers la ville</h2>
                </div>
                <p className="wow fadeInUp">
                  Je suis Abderrahman Ben Salah,  développeur passionné de 27 ans qui combine mes compétences techniques avec une passion pour le service en tant que chauffeur.
                  En tant que chauffeur, je m'efforce de fournir une expérience de voyage exceptionnelle à mes passagers. Avec ma Ford Mondeo Confort,
                  je propose un service de transport de qualité, sûr et confortable.
                </p>
                <div className="about-button mb-45 wow fadeInDown">
                  <a href="/reservations" className="main-btn btn-red">
                    Réservez dès maintenant
                    <i className="far fa-arrow-right" />
                  </a>
                  <a href="tel:000(123)45689" className="call-button">
                    <div className="icon">
                      <i className="fas fa-headset" />
                    </div>
                    <div className="text">
                      <span>Appelez pour réserver</span>
                      <h5>07 53 34 43 06</h5>
                    </div>
                  </a>
                </div>
                <ul className="check-style-one check-style-50 wow fadeInUp">
                  <li>Chauffeurs professionnels</li>
                  <li>Véhicules confortables</li>
                  <li>Disponible 24/7</li>
                  <li>Service de qualité</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=== End About Section ===*/}
      {/*=== Start Features Section ===*/}

      <section
        className="fact-section fact-bg-image dark-red-bg bg_cover pt-75 pb-35"
        style={{ backgroundImage: "url(assets/images/bg/fact-bg-one.jpg)" }}
      >
        <div className="container">
          <QichenCounter />
        </div>
      </section>

      <section className="reservation-section light-red-bg pt-100 pb-50">
        <div className="container">
          <div className="reservation-wrapper-one p-r z-1">
            <div className="reservation-after-img wow fadeInRight">

            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="reservation-two_image-box wow fadeInLeft mb-50">
                  <img
                    src="assets/images/contact/contact-2.jpg"
                    alt="Image Contact"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="reservation-content-box mb-50 wow fadeInUp">
                  <div className="section-title section-title-left mb-35">
                    <span className="sub-title">Réserver un VTC</span>
                    <h2>Faites Votre Réservation</h2>
                  </div>
                  <div className="reservation-style-three">
                    <ReservationsFrom btnLeft />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      
    </Layout>
  );
};
export default home;
