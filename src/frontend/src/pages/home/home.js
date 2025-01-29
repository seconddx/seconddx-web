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
              integrating anamnesis records, MRI scans, CT scans, and
              laboratory test results, our platform enhances diagnostic
              accuracy and provides comprehensive health prognostics.
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
        <h2 className="text-center mb-4">Overview</h2>
        <div className="row g-4">

          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={aiDrivenImg}
                className="card-img-top"
                alt="Why Choose SecondDx?" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Why Choose SecondDx?
                </h5>
                <p className="card-text">
                  SecondDx offers a unique approach to medical diagnostics
                  by combining advanced AI with patient anamnesis and
                  medical imaging analysis. Our platform ensures accurate
                  diagnostic insights by analyzing patient history alongside
                  medical reports. With state-of-the-art AI processing, we
                  can detect patterns in MRI and CT scans, as well as
                  interpret test results, leading to more reliable and
                  transparent second opinions. Designed to assist both
                  physicians and patients, SecondDx provides data-driven
                  insights that reduce uncertainty in medical decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={surveyImg}
                className="card-img-top"
                alt="How It Works" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  How It Works
                </h5>
                <p className="card-text">
                  The process begins with uploading medical reports, including
                  MRI, CT scans, blood tests, or other diagnostic files.
                  Patients or physicians then provide relevant medical
                  history to enrich the AI-driven analysis. Our AI processes
                  the data, comparing it with extensive medical case studies
                  and providing insights that are reviewed by specialists
                  for added accuracy. Once the review is complete, a detailed
                  second opinion report is generated, equipping users with
                  the information needed to make informed healthcare decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={supportImg} className="card-img-top"
                alt="Who Can Benefit from SecondDx?" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Who Can Benefit from SecondDx?
                </h5>
                <p className="card-text">
                  Doctors and radiologists can enhance diagnostic accuracy
                  and streamline patient assessments, while patients seeking
                  a second opinion gain confidence in medical decisions
                  with AI-assisted diagnostics. Hospitals and clinics benefit
                  from integrating AI-powered analysis into their workflow,
                  improving diagnostic efficiency. Additionally, medical
                  researchers can utilize AI to derive deeper insights into
                  complex medical cases, supporting innovation in healthcare
                  diagnostics.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="cta" className="text-center">
        <h2 className="mb-4">The Future of AI-Driven Diagnostics is Here</h2>
        <p className="mb-4">
          SecondDx is at the forefront of AI-enhanced medical diagnostics,
          providing accurate and reliable second opinions. Whether you are
          a patient seeking clarity or a doctor looking for enhanced
          diagnostic tools, our platform is designed to support better
          healthcare decisions. Contact us today and be part of the future
          of AI-powered medical diagnostics.
        </p>
      </section>

    </div>
  );
}

export default Home;
