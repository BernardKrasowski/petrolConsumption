import "./mileageBall.styles.scss";

const MileageBall = ({ currentData, seconds, handleRemoveBall }) => {
  const { rate } = currentData;
  const fullDate = new Date(seconds * 1000);
  const date = `${fullDate.getDay()}/${fullDate.getMonth()}/${fullDate.getFullYear()}`;

  return (
    <div className="mileageBall-container" onClick={handleRemoveBall}>
      <div className={`spans ${rate > 6 ? "" : "low"}`}>
        <span>{rate}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};
export default MileageBall;
