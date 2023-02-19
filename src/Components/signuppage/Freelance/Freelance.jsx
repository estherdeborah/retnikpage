import React, { useState, useEffect } from "react";
import "./Freelance.css"

const FreelancerSignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting freelancer signup form...");
    // TODO: Implement form submission logic
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        window.location.href = "/signup-confirmation";
      }, 1000);
    }
  }, [isSubmitted]);

  return (
    <div>
      <h2>Sign up as a Freelancer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => window.history.back()}>Go back</button>
      {isSubmitted && <div className="confirmation-page">Confirmation Page</div>}
    </div>
  );
};

export default FreelancerSignupPage;
