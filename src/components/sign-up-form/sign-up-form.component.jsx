import { useState } from "react";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <div>
      <h1>sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={formFields.displayName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={formFields.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={formFields.password}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={formFields.confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
