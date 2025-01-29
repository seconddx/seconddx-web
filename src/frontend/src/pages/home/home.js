import React from 'react';
import './home.css'; // Keep this if you have custom styles
import aiDrivenImg from '../../assets/images/home/ai-driven.jpg';
import surveyImg from '../../assets/images/home/survey.jpg';
import supportImg from '../../assets/images/home/support.jpg';

function Home() {
  return (
    <div className="container my-5">

      {/* About Section */}
      <section className="mb-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="mb-4">
              Welcome to SecondDx: AI-Powered Second Opinion for Medical Diagnostics
            </h2>
            <h3 className="mb-4">Get a Reliable Second Opinion with Cutting-Edge AI</h3>
            <p>
              At SecondDx, we empower doctors and patients with AI-driven
              medical insights for a second opinion on diagnoses. By
              integrating anamnesis records, MRI scans, CT scans, and laboratory
              test results, our platform enhances diagnostic accuracy and
              provides comprehensive health prognostics.
            </p>
            <a href="#cta" className="btn btn-primary">
              Get Started
            </a>
          </div>
          <div className="col-md-6">
            <img src="static/images/logo-big.png" alt="logo"/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mb-5">
        <h2 className="text-center mb-4">Why Choose SecondDx?</h2>
        <div className="row g-4">

          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={aiDrivenImg} className="card-img-top" alt="Comprehensive Anamnesis & Contextual Analysis" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Comprehensive Anamnesis & Contextual Analysis
                </h5>
                <p className="card-text">
                  Our AI analyzes patient history alongside medical
                  reports to ensure accurate diagnostic insights.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={surveyImg} className="card-img-top"
                alt="Advanced AI for Medical Imaging & Reports" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Advanced AI for Medical Imaging & Reports
                </h5>
                <p className="card-text">
                  We process MRI, CT scans, and test results to detect patterns
                  and provide detailed assessments.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={supportImg} className="card-img-top"
                alt="Reliable & Transparent Second Opinions" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Reliable & Transparent Second Opinions
                </h5>
                <p className="card-text">
                  Designed to assist physicians and patients with data-driven
                  insights, reducing uncertainty in medical decisions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta">
        <h2 className="mb-4">How It Works</h2>
          <p>
            <strong>Upload Medical Reports</strong>:
            Submit your MRI, CT scans, blood tests, or other
            diagnostic files.
          </p>
          <p>
            <strong>Record Anamnesis</strong>:
            Provide relevant medical history to enrich the
            AI-driven analysis.
          </p>
          <p>
            <strong>AI-Driven Insights</strong>:
            Our AI processes the data, comparing it with
            extensive medical case studies.
          </p>
          <p>
            <strong>Specialist Review</strong>:
            Physicians verify AI-generated insights for
            a comprehensive second opinion.
          </p>
          <p>
            <strong>Receive Your Report</strong>:
            Get a detailed second opinion to make informed
            healthcare decisions.
          </p>
      </section>

      <section id="cta" className="text-center">
        <h2 className="mb-4">Who Can Benefit from SecondDx?</h2>
        <ul className="mb-4">
          <li>
            <strong>Doctors & Radiologists</strong>:
            Enhance diagnostic accuracy and streamline patient assessments.
          </li>
          <li>
            <strong>Patients Seeking a Second Opinion</strong>:
            Gain confidence in medical decisions with AI-assisted diagnostics.
          </li>
          <li>
            <strong>Hospitals & Clinics</strong>:
            Integrate AI-powered analysis into your workflow for more
            efficient diagnostics.
          </li>
          <li>
            <strong>Medical Researchers</strong>:
            Utilize AI for deeper insights into complex medical cases.
          </li>
        </ul>
      </section>

      <section id="cta" className="text-center">
        <h2 className="mb-4">The Future of AI-Driven Diagnostics is Here</h2>
        <p className="mb-4">
          SecondDx combines state-of-the-art AI with medical expertise to
          revolutionize the way second opinions are provided.
          Whether you are a patient seeking clarity or a doctor
          aiming for enhanced diagnostics, our platform is here to
          support better healthcare decisions.
        </p>
        <p className="mb-4">
          📩 Join the Future of AI in Medical Diagnostics – Contact Us Today!
        </p>
      </section>

    </div>
  );
}

export default Home;
