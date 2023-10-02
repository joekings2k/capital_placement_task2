import CandidateList from "src/components/CandidateList";
import Filters from "src/components/Filters";
import Layout from "src/components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <div style={{ display: "flex", width: "100%" }}>
          <Filters />
          <CandidateList />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
