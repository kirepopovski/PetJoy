import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUsPage.css";
import ceo from "../assets/ceo.jpg";
import jane from "../assets/jane.jpeg";
import michael from "../assets/michael.jpg";
import pets from "../assets/pets.jpg";

function AboutUsPage() {
  return (
    <div className="about-us-container">
      <div className="container py-5">
        <h1 className="modern-heading text-center mb-5">About Us</h1>

        {}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={pets}
              alt="Company History"
              className="img-fluid history-image shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h2 className="modern-subheading">Our History</h2>
            <p className="modern-text">
              Founded in 2010, PetJoy began with a mission to provide
              high-quality pet products and services to pet lovers worldwide.
              Over the past decade, we’ve expanded our offerings and have become
              a trusted name in the industry.
            </p>
            <p className="modern-text">
              What started as a small store has grown into a global company,
              thanks to our dedication and your trust. At PetJoy, we believe
              every pet deserves joy and we're committed to improving the lives
              of pets everywhere.
            </p>
          </div>
        </div>

        {}
        <div className="row mb-5">
          <h2 className="modern-subheading text-center mb-4">Meet the Team</h2>
          <div className="col-md-4">
            <div className="team-card text-center shadow-lg">
              <img src={ceo} alt="CEO" className="rounded-circle team-photo" />
              <div className="card-body">
                <h5 className="team-name">John Doe</h5>
                <p className="team-role">Chief Executive Officer</p>
                <p className="modern-text">
                  John has over 20 years of experience in the pet industry, and
                  his leadership and vision have been instrumental in PetJoy's
                  growth and success.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card text-center shadow-lg">
              <img
                src={jane}
                alt="Product Head"
                className="rounded-circle team-photo"
              />
              <div className="card-body">
                <h5 className="team-name">Jane Smith</h5>
                <p className="team-role">Head of Product Development</p>
                <p className="modern-text">
                  Jane ensures that every product we release is of the highest
                  quality. She’s passionate about innovation and making pets'
                  lives better.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card text-center shadow-lg">
              <img
                src={michael}
                alt="Marketing Head"
                className="rounded-circle team-photo"
              />
              <div className="card-body">
                <h5 className="team-name">Michael Johnson</h5>
                <p className="team-role">Chief Marketing Officer</p>
                <p className="modern-text">
                  Michael has helped PetJoy connect with pet owners around the
                  globe through his innovative marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="row text-center mb-5">
          <div className="col-md-12">
            <h2 className="modern-subheading">Our Mission</h2>
            <p className="modern-text">
              At PetJoy, our mission is simple: to bring joy to pets and their
              owners. We are dedicated to providing top-quality products,
              services, and experiences for pets worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
