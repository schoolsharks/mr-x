import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GameOver from "../../components/GameOver";

const GameOverPage = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    // Navigate to registration after game over
    navigate("/user/registration/1");
  };

  return (
    <Box>
      <GameOver handleNextPage={handleNextPage} />
    </Box>
  );
};

export default GameOverPage;
