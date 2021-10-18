import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src="https://cdn-icons-png.flaticon.com/128/1829/1829191.png" alt="" className="t-icon" />
      <img src="https://cdn-icons.flaticon.com/png/128/2550/premium/2550398.png?token=exp=1634462801~hmac=e9612844c4e026c0ab39bd159b6b25c8" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
