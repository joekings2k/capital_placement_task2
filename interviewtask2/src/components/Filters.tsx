
import {  Input } from "antd";
import { Color } from "src/utilities/constant";
import { FileTextOutlined,DownOutlined } from "@ant-design/icons";
const filterContent: string[] = [
  "Personal Information",
  "Education",
  "Work Experience",
  "Activity Filter",
  "Advanced Filter"
];
interface props {
  setFilter:(value:string)=>void
}
const Filters = ({setFilter}:props) => {
  return (
    <div style={{ width: "32.5%" }}>
      <div>
        <Input
          className="filter-input"
          placeholder="Serach by name, edu, exp or #tag"
          style={{ height: "3rem", border: "1px solid #F3F3F3 " }}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          backgroundColor: Color.white,
          borderRadius: "0.5rem",
          padding: "1rem",
        }}
      >
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.87rem" }}>Filters </p>
          <p style={{ fontSize: "0.87rem" }}>0 selected</p>
        </header>
        <div>
          {filterContent.map((contetnt: string, index: number) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.8rem 0",
                borderTop: "1px solid #F2F2F2 ",
              }}
            >
              <div style={{ fontSize: "0.87rem" }}>
                <span style={{ marginRight: "0.3rem" }}>
                  <FileTextOutlined />
                </span>
                {contetnt}
              </div>
              {filterContent.length - 1 === index ? (
                ""
              ) : (
                <DownOutlined
                  style={{ color: Color.blue, fontSize: "0.87rem" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
