import Button from "../button/button.component";
import "./showResult.styles.scss";

const ShowResult = ({ currentResult }) => {
  const handleSaveData = () => {
    console.log("save");
  };
  const handleDeleteData = () => {
    console.log("delete");
  };

  return (
    <div className="container-result">
      <div className="result">
        <h1>{currentResult}</h1>
      </div>
      <div className="result-btn">
        <Button buttonType="save" onClick={handleSaveData}>
          Save
        </Button>
        <Button buttonType="delete" onClick={handleDeleteData}>
          Delete
        </Button>
      </div>
    </div>
  );
};
export default ShowResult;
