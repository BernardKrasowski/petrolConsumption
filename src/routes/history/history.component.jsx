import MileageBall from "../../components/mileageBall/mileageBall.component";
import { useSelector } from "react-redux";
import { selectCurrentData } from "../../store/data/data.selecotr";
import "./history.styles.scss";
const History = () => {
  const handleRemoveBall = (e) => {
    console.log(e.target);
    e.target.parentNode.remove();
  };

  const historyData = useSelector(selectCurrentData);
  return (
    <div className="history">
      <div className="history-mileageBall">
        {historyData.map((data) => (
          <MileageBall
            key={data.date.seconds}
            currentData={data}
            seconds={data.date.seconds}
            handleRemoveBall={handleRemoveBall}
          />
        ))}
      </div>
    </div>
  );
};
export default History;

/// redux persist  - middlewares for protect store browser refresh
