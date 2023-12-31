import  { useState, useEffect } from "react";
import { Select } from "antd";
import { Color } from "src/utilities/constant";

const { Option } = Select;

const DropdownSelect = () => {
  const items = [
    {
      name: "Applied",
      number: 17645,
    },
    { name: "Shortlisted", number: 453 },
    { name: "Technical Interview", number: 123 },
    { name: "Opportunity Browsing", number: 243 },
    { name: "Video Interview I", number: 25 },
    { name: "Video Interview II", number: 25 },
    { name: "Video Interview III", number: 25 },
  ];
const [activeindex,setActiveIndex]=useState(0)
  const [selectedValue, setSelectedValue] = useState(items[activeindex].name);
  

  const handleSelectChange = (value:any) => {
    setSelectedValue(value);
  };

 

  useEffect(() => {
    if (!selectedValue && items.length > 0) {
      setSelectedValue(items[activeindex].name);
    }
  }, [items, selectedValue]);

  return (
    <Select
      allowClear
      style={{ width: "20rem", borderRadius: 70 }}
      placeholder="Custom dropdown render"
      defaultActiveFirstOption
      className="dropdown-select"
      onChange={handleSelectChange}
      value={selectedValue}
    >
      {items.map((item, index) => (
        <Option
          key={item.name}
          value={item.name}
          style={{
            backgroundColor:
              selectedValue === item.name ? "#EDF2FF" : "transparent",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <span
              style={{
                color: selectedValue === item.name ? Color.blue : "",
                fontSize: "1rem",
              }}
            >
              {item.name}
            </span>

            <div
              style={{
                backgroundColor:
                  selectedValue === item.name ? "#D1DDFF" : "#F8F8F8",
                padding: "2px 6px",
                borderRadius: "40%",
                color: selectedValue === item.name ? Color.blue:"",
                fontSize: "0.8rem",
              }}
            >
              {item.number}
            </div>
          </div>
        </Option>
      ))}
    </Select>
  );
};

export default DropdownSelect;
