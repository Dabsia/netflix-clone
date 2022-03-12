import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="form__field">
      <input
        className="form__input"
        type="email"
        name="email"
        placeholder="Email or Phone Number"
      />
      <input
        className="form__input last__input"
        type="password"
        name="password"
        placeholder="Password"
      />
      <button className="btn__submit" type="submit">
        Sign In
      </button>
      <div className="check__div">
        <div className="check__div-inner">
          <input
            className="check"
            type="checkbox"
            name="remember"
            id="remember"
          />{" "}
          <label htmlFor="remember" className="remember">
            Remember Me
          </label>
        </div>
        <Link className="help" to="/">
          Need Help?
        </Link>
      </div>
    </form>
  );
};

export default Form;
