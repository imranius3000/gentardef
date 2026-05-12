import { useRef } from "react";

function FruitWatcher() {
  const branchref = useRef(null);
  const FruitCount = useRef(0);

  const addFruit = () => {
    FruitCount.current += 1;
    alert(`нафиг те это но лан ${FruitCount.current}`);
  };

  const CheckBranch = () => {
    if (branchref.current) {
      alert(`ну ты и лох а ветка : ${branchref.current.textContent}`);
    }
  };
  return (
    <div>
      <p ref={branchref} style={{ color: "orange" }}>
        ветка 1
      </p>
      <p style={{ color: "green" }}>ветка 2</p>
      <p style={{ color: "blue" }}>ветка 3</p>
      <button onClick={CheckBranch}>find branch with most feed fruits</button>
      <button onClick={addFruit}>add fruit</button>
    </div>
  );
}

export default FruitWatcher;
