
import React, { useState } from "react";
import "./signuppage.css";
import NotifyMePage from "./Notifymepage/notifymepage";
import FreelancerSignupPage from "./Freelance/Freelance";

const WaitlistForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [showNotifyMe, setShowNotifyMe] = useState(false);
  const [showFreelancerSignup, setShowFreelancerSignup] = useState(false);

  const handleNotifyMeClick = () => {
    setShowNotifyMe(true);
    setShowFreelancerSignup(false);
  };

  const handleFreelancerSignupClick = () => {
    setShowNotifyMe(false);
    setShowFreelancerSignup(true);
  };

  return (
    <div>
      <h2>Sign Up For The BETA to see more</h2>
      <form className="waitlist-form">
        <div className="input-group">
          <label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Enter your business name"
              required
            />
          </label>
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div className="button-group">
          <br />
          <button className="Signup" type="button" onClick={handleNotifyMeClick}>
            Notify me
          </button>
          <br />
          <button className="freelancer" type="button" onClick={handleFreelancerSignupClick}>
            Sign Up as a Freelancer
          </button>
        </div>
      </form>
      {showNotifyMe && <NotifyMePage />}
      {showFreelancerSignup && <FreelancerSignupPage />}
    </div>
  );
};

export default WaitlistForm;


