import CandidateList from "src/components/CandidateList";
import Filters from "src/components/Filters";
import Layout from "src/components/Layout";
import {useState} from "react"
const Home = () => {
  const [Filter,setFilter]=useState("")
 
  return (
    <div>
      <Layout>
        <div style={{ display: "flex", width: "100%" }}>
          <Filters setFilter={setFilter} />
          <CandidateList Filter={Filter} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
