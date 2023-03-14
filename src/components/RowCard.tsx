import React, { useEffect } from "react";
import { Info } from "phosphor-react";
import { Tooltip } from "react-tooltip";
import { entityMap, requestMap, resultMap } from "../utils/mapping";

export const RowCard = ({
  type,
  question,
  index,
}: {
  type: "entity" | "request" | "result";
  question: string;
  index: number;
}) => {
  const typeMap = {
    entity: { position: 0, map: entityMap, title: "Imagina que:" },
    request: { position: 3, map: requestMap, title: "Te pide:" },
    result: { position: 6, map: resultMap, title: "para hacer:" },
  };
  const selectedType = typeMap[type];
  const rowInfo = selectedType.map.get(
    Number(question[selectedType.position]) + 1,
  );

  useEffect(() => {
    const questionSwipeItem = localStorage.getItem(`question_swipe${index}`);
    if (questionSwipeItem)
      localStorage.setItem(
        `question_swipe${index}`,
        JSON.stringify({
          ...JSON.parse(questionSwipeItem),
          [type]: rowInfo.name,
        }),
      );
    else
      localStorage.setItem(
        `question_swipe${index}`,
        JSON.stringify({ [type]: rowInfo.name }),
      );
  }, []);

  return (
    <div>
      <h3
        style={{
          margin: "0 0 0 0",
          fontFamily: "Alatsi",
          color: "#19417f",
        }}
      >
        {selectedType.title}
      </h3>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`./img/${type}/${
            Number(question[selectedType.position]) + 1
          }.png`}
          style={{
            width: "40px",
            height: "40px",
            alignSelf: "center",
          }}
          alt={type}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontWeight: "normal" }}>{rowInfo.name}</h4>
          <Info
            data-tooltip-id={`${type}-tooltip-${question}`}
            size={25}
            data-tooltip-content={rowInfo.description}
            weight="fill"
            color="#19417f"
          />
          <Tooltip
            id={`${type}-tooltip-${question}`}
            place="bottom"
            content={rowInfo.description}
            style={{
              fontFamily: "Alatsi",
              backgroundColor: "#19417f",
              color: "white",
              maxWidth: "300px",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
