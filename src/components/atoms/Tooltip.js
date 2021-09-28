import "./Tooltip.scss";

const Tooltip = ({ children = "Added!💙", displayed = false }) => {
  return (
    <div className={`tooltip-box${displayed ? " display" : ""}`}>
      <p>{children}</p>
    </div>
  );
};

export default Tooltip;
