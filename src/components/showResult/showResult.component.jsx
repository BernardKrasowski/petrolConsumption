import "./showResult.styles.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
const ShowResult = ({ currentResult, clear }) => {
  const handleSaveData = () => {
    console.log("save");
  };

  return (
    <div className="container-result">
      <div className="result">
        <button className="container-btn-save">
          {<SaveIcon className="btnSave" />}
        </button>
        <h1>{currentResult}</h1>
        <button onClick={clear} className="container-btn-delete">
          <DeleteIcon className="btnDelete" />
        </button>
      </div>
    </div>
  );
};
export default ShowResult;
