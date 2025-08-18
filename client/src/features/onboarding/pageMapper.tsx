import GuessThePerson1 from "../../components/GuessTHePerson/GuessThePerson1";
import Home from "../../components/Home";
import { NavigateFunction } from "react-router-dom";
import { CandidateCandidatesData } from "../../Data/CandidatesData";

export const pageMapper = (
  page: number,
  globalStrikes: number,
  handleStrike: () => void,
  navigate: NavigateFunction
) => {
  const totalCandidates = CandidateCandidatesData.length;
  const maxGamePages = totalCandidates + 1; // +1 for the home page

  const handleNextPage = () => {
    if (page < maxGamePages) {
      navigate(`/user/onboarding/${page + 1}`);
    } else {
      navigate("/user/login");
    }
  };

  const handleGameOver = () => {
    navigate("/user/game-over"); // Navigate to dedicated GameOver page
  };

  if (page === 1) {
    return <Home handleNextPage={handleNextPage} />;
  }

  // Dynamic candidate pages based on available data
  const candidateIndex = page - 2; // page 2 = candidateIndex 0, page 3 = candidateIndex 1, etc.

  if (candidateIndex >= 0 && candidateIndex < totalCandidates) {
    return (
      <GuessThePerson1
        handleNextPage={handleNextPage}
        candidateIndex={candidateIndex}
        strikes={globalStrikes}
        onStrike={handleStrike}
        onGameOver={handleGameOver}
      />
    );
  }

  // If page doesn't exist, redirect to home
  return <Home handleNextPage={handleNextPage} />;
};
