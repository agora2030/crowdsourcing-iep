import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

export const QuestionOptions = ({
  index,
  title,
  desc,
  options,
  orientation = "horizontal",
  type,
  refreshAnswers,
}: {
  index: string;
  title: string;
  desc?: string;
  options: Array<string>;
  orientation?: "horizontal" | "vertical";
  type: "risk" | "benefit" | "profile";
  refreshAnswers: () => void;
}) => {
  const [question, setQuestion] = useState<number>();

  const updateQuestion = (value: string, pos: number) => {
    setQuestion(pos);
    localStorage.setItem(
      `question_${type}${index}`,
      JSON.stringify({ title, type, answer: value }),
    );
    refreshAnswers();
  };

  return (
    <div>
      <p className="title" style={{ textAlign: "center", color: desc ? undefined : 'black' }}>
        {title}
      </p>
      {desc && (
        <p
          className="normal"
          style={{ textAlign: "center", marginTop: "15px" }}
        >
          {desc}
        </p>
      )}
      <ButtonGroup
        style={{ marginTop: "15px" }}
        variant="outlined"
        aria-label="outlined button group"
        orientation={orientation}
      >
        {options.map((option, pos) => {
          return (
            <Button
              key={pos}
              style={{
                borderColor: "#19417f",
                fontFamily: "Alatsi",
                color: question === pos ? "white" : "#19417f",
                backgroundColor: question === pos ? "#19417f" : "white",
              }}
              onClick={() => updateQuestion(option, pos)}
            >
              {option}
            </Button>
          );
        })}
      </ButtonGroup>
      {JSON.stringify(options) ===
        JSON.stringify(["1", "2", "3", "4", "5"]) && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            className="normal"
            style={{ textAlign: "center", color: "#19417f" }}
          >
            Definitivamente NO
          </p>
          <p
            className="normal"
            style={{ textAlign: "center", color: "#19417f" }}
          >
            Definitivamente
          </p>
        </div>
      )}
    </div>
  );
};
