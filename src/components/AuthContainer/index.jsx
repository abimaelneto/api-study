import "./auth.css";

export const AuthContainer = ({ children }) => {
  return (
    <div className="container-login" data-aos="flip-left">
      <div className="div-lubi">
        <div className="wrappr-login">{children}</div>
      </div>
    </div>
  );
};
