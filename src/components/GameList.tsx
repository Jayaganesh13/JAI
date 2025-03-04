import React from "react";
import spiderman from "../assets/spiderman.jpg";
import godOfWar from "../assets/gow.jpg";
import cyberpunk from "../assets/cyberpunk.jpg";
import eldenRing from "../assets/eldenring.jpg";
import horizon from "../assets/horizon.jpg";
import ac from "../assets/ac.jpg";
import cod from "../assets/cod.jpg";
import wuthering from "../assets/wuthering.jpg";
import "./GameList.css";

interface Game {
  id: number;
  name: string;
  image: string;
}

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  // Replace string image paths with imported images
  const gameImages: Record<string, string> = {
    "Spider-Man": spiderman,
    "God of War": godOfWar,
    "Cyberpunk 2077": cyberpunk,
    "Elden Ring": eldenRing,
    "Horizon Zero Dawn": horizon,
    "Assassin's Creed": ac,
    "Call Of Duty": cod,
    "Wuthering Waves": wuthering,
  };

  return (
    <div className="game-list">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <img src={gameImages[game.name] || game.image} alt={game.name} />
          <h3>{game.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GameList;
