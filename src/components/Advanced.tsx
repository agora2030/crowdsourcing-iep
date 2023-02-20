import { ArrowFatLineLeft, ArrowFatLineRight } from "phosphor-react";
import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  createRef,
  Ref,
} from "react";
import TinderCard from "react-tinder-card";
import { entityMap, requestMap, resultMap } from "../utils/mapping";
import { RowCard } from "./RowCard";

type DirectionType = "left" | "right";

function Advanced() {
  const [questions, setQuestions] = useState<Array<string>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const canSwipe = currentIndex >= 0;

  useEffect(() => {
    const newQuestions = generateCombinations();
    setQuestions(newQuestions);
    setCurrentIndex(newQuestions.length - 1);
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;
    const keyDownHandler = (e: {key: string}) => {
      if (e.key === "ArrowLeft") swipe("left");
      if (e.key === "ArrowRight") swipe("right");
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  }, [questions, currentIndex]);

  const childRefs = useMemo(
    () =>
      Array(questions.length)
        .fill(0)
        .map(() => createRef()),
    [questions],
  ) as {
    current?: { swipe: Function; restoreCard: Function };
  }[];

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const swiped = (index: number) => {
    updateCurrentIndex(index - 1);
  };

  const swipe = async (dir: DirectionType) => {
    if (canSwipe && currentIndex < questions.length) {
      if (childRefs.length > 0) {
        await childRefs[currentIndex].current?.swipe(dir);
      }
    }
  };

  const generateCombinations = () => {
    const indexes = [
      Array.from(Array(entityMap.size).keys()),
      Array.from(Array(requestMap.size).keys()),
      Array.from(Array(resultMap.size).keys()),
    ];
    const result = indexes.reduce((a, b: any) =>
      a.reduce((r, v: any) => r.concat(b.map((w) => [].concat(v, w))), []),
    );
    return result.map((a: any) => a.join(", ")).sort(() => 0.5 - Math.random());
  };

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <h2 className="infoText" style={{ marginBottom: 0 }}>
          {questions.length - currentIndex} de {questions.length}
        </h2>
        <h2 className="infoText" style={{ marginTop: 0 }}>
          Autorizarías compartir tu información en este caso:
        </h2>
      </div>
      <div className="cardContainer">
        {questions?.map((question, index) => {
          return (
            <TinderCard
              ref={childRefs[index] as Ref<any>}
              className="swipe"
              key={question}
              onSwipe={() => swiped(index)}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{
                  backgroundColor: "white",
                  paddingTop: "10px",
                  boxShadow:
                    currentIndex === index
                      ? "0 0 20px 0 rgba(0, 0, 0, 0.5)"
                      : undefined,
                }}
                className="card"
              >
                <RowCard type="entity" question={question} />
                <RowCard type="request" question={question} />
                <RowCard type="result" question={question} />
              </div>
            </TinderCard>
          );
        })}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: canSwipe ? undefined : "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          <ArrowFatLineLeft
            style={{ marginRight: "5px" }}
            size={28}
            weight="fill"
          />
          NO autorizaría
        </button>
        <button
          style={{ backgroundColor: canSwipe ? undefined : "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          ¡Autorizaría!
          <ArrowFatLineRight
            style={{ marginLeft: "5px" }}
            size={28}
            weight="fill"
          />
        </button>
      </div>
    </div>
  );
}

export default Advanced;
