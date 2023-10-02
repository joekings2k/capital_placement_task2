import React from 'react'
import {Checkbox} from "antd"
import Avater from './Avater'
import { cadidiate } from 'src/utilities/constant/types'
import { Color } from 'src/utilities/constant'
interface props {
  candidate:cadidiate|undefined
}
const Candidate = ({candidate}:props) => {
  return (
    <div style={{ display: "flex",gap:"1rem" }}>
      <Checkbox defaultChecked={false} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avater
          firstname={candidate?.firstname}
          lastname={candidate?.lastname}
        />
      </div>
      <div>
        <h3 style={{ fontSize: "0.75rem", fontWeight: 600, marginBottom: "0" }}>
          {`${candidate?.firstname} ${candidate?.lastname}`}
        </h3>
        <p style={{ fontSize: "0.55rem", fontWeight: 600, marginBottom: "0" }}>
          {candidate?.location}
        </p>
        <p
          style={{
            fontSize: "0.55rem",
            fontWeight: 300,
            marginTop: "0.3rem",
            marginBottom: "0",
          }}
        >
          {candidate?.degree}
        </p>
        <p
          style={{
            fontSize: "0.5rem",
            fontWeight: 300,
            color: Color.blue,
            marginTop: "0.3rem",
            marginBottom: "0",
          }}
        >
          #top_candidate
        </p>
        <div style={{ display: "flex", marginTop: "0" }}>
          {candidate?.fin.map((fin) => (
            <p
              style={{
                backgroundColor: Color.backgroundColor,
                color: "#037092",
                fontSize: "0.5rem",
                fontWeight: 300,
                padding: "0.3rem 0.6rem",
                height: "0.7rem",
                borderRadius: "1rem",
                marginLeft:"0.5rem"
              }}
            >
              {fin}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Candidate