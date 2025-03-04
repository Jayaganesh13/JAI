import ButtonComp from "./components/ButtonComp";
import NavBar from "./components/NavBar";
import { Fragment } from "react/jsx-runtime";
import Toggle from "./Toggle";
import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import GameCard from "./components/GameCard";
import { useState } from 'react';
import GameList from "./components/GameList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm]= useState("");
  const[currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 6;

  const games = [
    { id: 1, name: "Spider-Man", image: "spiderman.jpg" },
    { id: 2, name: "God of War", image: "gow.jpg" },
    { id: 3, name: "Cyberpunk 2077", image: "cyberpunk.jpg" },
    { id: 4, name: "Elden Ring", image: "eldenring.jpg" },
    { id: 5, name: "Horizon Zero Dawn", image: "horizon.jpg" },
    { id: 6, name: "Assassin's Creed", image: "ac.jpg" },
    { id: 7, name: "Call of Duty", image: "cod.jpg" },
    { id: 8, name: "Wuthering Waves", image: "wuthering.jpg" },
  ];

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);


  return (
    <>
      <Grid templateAreas={`"nav nav" "side main"`}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={"250px 1fr"}
      gap={4}>

        <GridItem area={"nav"} bg={"red"}>
        <NavBar />

        <GridItem area={"main"} bg={"green"} p={4}>
          <SearchBar setSearchTerm={setSearchTerm} />
          <GameList games={currentGames} />
          <Pagination
          totalGames={filteredGames.length}
          gamesPerPage={gamesPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} />
          </GridItem>
          
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
