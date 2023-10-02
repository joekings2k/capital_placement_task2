
import {Checkbox} from "antd"
import { Color, fakeData } from 'src/utilities/constant';
import Candidate from "./Candidate";
interface props{
  Filter:string;
}
const CandidateList = ({Filter}:props) => {
  const styles = {
    circleNumber: {
      backgroundColor: Color.backgroundColor,
      padding: "0.3rem 0.4rem",
      borderRadius: "50%",
      marginLeft: "0.4rem ",
    },
    containFlex:{
      display:"flex",
      alignItems:"center"
    },
    containFlexBetween:{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
    }
  };
  return (
    <div
      style={{
        backgroundColor: Color.white,
        width: "63%",
        marginLeft: "3%",
        padding: "0.5rem 1rem",
      }}
    >
      <header style={styles.containFlexBetween}>
        <div
          style={{
            fontSize: "0.65rem",
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
          }}
        >
          <Checkbox style={{ width: "1rem", height: "1rem" }} />{" "}
          <p>247 Candidates</p>
        </div>

        <div
          style={{
            fontSize: "0.65rem",
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
          }}
        >
          <p>Qualified</p>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              padding: "0 0.5rem",
            }}
          >
            <span className="task-list" style={styles.containFlex}>
              <p>Task</p> <p style={styles.circleNumber}>25</p>
            </span>
          </div>
          <span style={styles.containFlex}>
            <p>Disqualified</p> <p style={styles.circleNumber}>78</p>
          </span>
        </div>
      </header>
      {fakeData.map((candidate, index) => (
        <div style={{display:candidate.firstname.toLowerCase().startsWith(Filter)?"":"none"}}>
          <Candidate key={index} candidate={candidate} />
        </div>
      ))}
    </div>
  );
}

export default CandidateList