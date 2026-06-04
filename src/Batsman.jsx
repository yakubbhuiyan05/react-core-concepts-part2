import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [wides, setWides] = useState(0);
  const [singles, setSingles] = useState(0);
  const [doubles, setDoubles] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleWide = () => {
    const updatedRuns = runs + 1;
    const updatedWide = wides + 1;
    setWides(updatedWide);
    setRuns(updatedRuns);
  };
  const handleSingles = () => {
    const updatesRuns = runs + 1;
    const updatedSingles = singles + 1;
    setSingles(updatedSingles);
    setRuns(updatesRuns);
  };
  const handleDoubles = () => {
    const updatedRuns = runs + 2;
    const updatedDoubles = doubles + 1;
    setDoubles(updatedDoubles);
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    const updatedFours = fours + 1;
    setFours(updatedFours);
    setRuns(updatedRuns);
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updatedRuns);
  };
  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <p>
        <small>Wide: {wides}</small>
      </p>
      <p>
        <small>Singles: {singles}</small>
      </p>
      <p>
        <small>Doubles: {doubles}</small>
      </p>
      <p>
        <small>Four: {fours}</small>
      </p>
      <p>
        <small>Six: {sixes}</small>
      </p>
      {runs > 50 && <p>Your Score: 50</p>}
      <h1>Score: {runs}</h1>
      <button onClick={handleWide}>Wide</button>
      <button onClick={handleSingles}>Singles</button>
      <button onClick={handleDoubles}>Doubles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
