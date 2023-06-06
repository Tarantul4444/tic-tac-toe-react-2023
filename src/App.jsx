import { useState, useEffect  } from "react";
import MainLayout from "./layouts/MainLayout";
import Grid from "./components/Grid";
import Winner from "./components/Winner";

function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтальные комбинации
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикальные комбинации
    [0, 4, 8], [2, 4, 6] // Диагональные комбинации
  ];
  const [user, setUser] = useState(true);
  const [winner, setWinner] = useState(0);

  useEffect(() => {
    checkToWin();
  }, [grid]);

  function checkToWin() {
    const player = !user ? "X" : "O";
    for(let [a, b, c] of winningCombinations) {
      if(grid[a].text === grid[b].text && grid[b].text == grid[c].text && grid[a].text == player) {
        setWinner(user + 1);
        return;
      }
    }
    const filteredGrid = grid.filter(
      element => element.text === ""
    );
    if(!filteredGrid.length) setWinner(-1);
  }

  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice  filter find some
    if(winner) return;
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        setUser(!user);
        return { ...item, text: user ? "X" : "O" };
      }
      return item;
    });
    setGrid(newGrid);
  }

  return (
    <MainLayout>
      <Winner winner={winner} />
      <Grid grid={grid} handlePlay={handlePlay} />
    </MainLayout>
  );
}

export default App;
