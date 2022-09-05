import MileageBall from "../../components/mileageBall/mileageBall.component";
import { useSelector } from "react-redux";
import { selectCurrentData } from "../../store/data/data.selecotr";
import { useEffect, useState } from "react";

const History = () => {
  const [hisDat, setHisDat] = useState();
  const historyData = useSelector(selectCurrentData);
  useEffect(() => {
    setHisDat(historyData);
  }, [historyData]);

  return (
    <div className="history">
      {/* {hisDat ? hisDat.map((data) => <MileageBall currentData={data} />) : null} */}
    </div>
  );
};
export default History;

/// redux persist and redux storage  - middlewares for protect store browser refresh
