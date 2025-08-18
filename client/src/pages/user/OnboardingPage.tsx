import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pageMapper } from "../../features/onboarding/pageMapper";
import {
  getGameData,
  initializeGameData,
  addStrike,
} from "../../utils/gameStorage";
// import useNavigateWithSound from "../../features/sound/hooks/useNavigateWithSound";

const OnboardingPage = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState(() => getGameData());

  // Initialize game data on first load
  useEffect(() => {
    const currentPage = Number(page);

    // If on page 1 (home), initialize fresh game data
    if (currentPage === 1) {
      const freshData = initializeGameData();
      setGameData(freshData);
    } else {
      // Load existing game data for other pages
      const existingData = getGameData();
      setGameData(existingData);
    }
  }, [page]);

  useEffect(() => {
    if (!page) {
      navigate("/user/onboarding/1");
    }
  }, [page, navigate]);

  const handleStrike = () => {
    const updatedData = addStrike();
    setGameData(updatedData);

    // Game over logic
    if (updatedData.strikes >= 3) {
      console.log("Game Over! All strikes used.");
      navigate("/user/game-over");
    }
  };

  return (
    <Box>
      {pageMapper(Number(page), gameData.strikes, handleStrike, navigate)}
    </Box>
  );
};

export default OnboardingPage;
