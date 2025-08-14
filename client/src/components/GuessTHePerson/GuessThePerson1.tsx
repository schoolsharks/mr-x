import { useState, useEffect } from "react";
import Header from "./Header";
import { Box, Button, Typography } from "@mui/material";
import GuessThePerson1BG from "../../assets/GuessThePerson1BG.webp";
import BluredQuestionBox from "./BluredQuestionBox";
import CandidatesNameBox from "./CandidatesNameBox";
import GuessedRight from "./GuessedRight";
import TimeOut from "../TimeOut";
import { CandidateCandidatesData, Candidate } from "../../Data/CandidatesData";
import Arrow from "../../assets/Arrow.webp"; // Assuming you have an arrow image for the button
import {
  startCandidate,
  addWrongGuess,
  completeCandidate,
  timeoutCandidate,
  getCurrentCandidateData,
} from "../../utils/gameStorage";
import logGameData from "../../utils/debugGame";

type GuessThePerson1Props = {
  handleNextPage: () => void;
  candidateIndex?: number;
  strikes: number;
  onStrike: () => void;
};

function GuessThePerson1({
  handleNextPage,
  candidateIndex = 0,
  strikes,
  onStrike,
}: GuessThePerson1Props) {
  // Game state
  const [showCandidateImage, setShowCandidateImage] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Using candidate based on index with validation
  const currentCandidate = CandidateCandidatesData[candidateIndex];

  // Initialize candidate in session storage when component mounts
  useEffect(() => {
    if (currentCandidate) {
      startCandidate(candidateIndex, currentCandidate.name);
      // Debug: Log current game data (remove in production)
      logGameData();
    }
  }, [candidateIndex, currentCandidate]);

  // Timer effect - 10 second countdown
  useEffect(() => {
    if (showCandidateImage || isTimeUp) return; // Don't run timer if game is over

    const timer = setTimeout(() => {
      setIsTimeUp(true);
      // Mark candidate as timed out in storage
      timeoutCandidate(candidateIndex);
    }, 900000); // 90 seconds

    return () => clearTimeout(timer);
  }, [showCandidateImage, isTimeUp, candidateIndex]);

  // Get current candidate data from session storage
  const candidateData = getCurrentCandidateData(candidateIndex);
  const wrongGuesses = candidateData?.wrongGuesses || [];

  // If candidate doesn't exist, redirect to next page
  if (!currentCandidate) {
    handleNextPage();
    return null;
  }

  // Handle candidate selection
  const handleCandidateSelect = (selectedCandidate: Candidate) => {
    if (wrongGuesses.includes(selectedCandidate.name) || isTimeUp) {
      return; // Candidate already guessed wrong or time is up
    }

    if (selectedCandidate.name === currentCandidate.name) {
      // Correct guess - save to session storage
      completeCandidate(candidateIndex, selectedCandidate.name);
      setShowCandidateImage(true);
    } else {
      // Wrong guess - save to session storage and trigger strike
      addWrongGuess(candidateIndex, selectedCandidate.name);
      onStrike(); // This will update the global strikes
    }
  };

  const candidateHints = currentCandidate.hints;

  // Create a list that always has 3 candidates
  const displayCandidates = [...CandidateCandidatesData];

  // Add fallback candidate if we have less than 3
  while (displayCandidates.length < 3) {
    displayCandidates.push({
      name: "Dr. Kunal Shah",
      hints: [],
    });
  }

  // If time is up, show TimeOut component
  if (isTimeUp) {
    return <TimeOut handleNextPage={handleNextPage} />;
  }

  // If user guessed correctly, show GuessedRight component
  if (showCandidateImage) {
    return (
      <GuessedRight
        candidate={currentCandidate}
        handleNextPage={handleNextPage}
        currentCandidateIndex={candidateIndex}
        strikes={strikes}
      />
    );
  }

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${GuessThePerson1BG})`,
          backgroundSize: "100% 100%",
          minHeight: "1022px",
        }}
      >
        <Box>
          <Header strikes={strikes} />
        </Box>

        {/* Main Content Container */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // padding: "20px",
            gap: "30px",
          }}
        >
          {/* Candidate Image Container with Question Boxes Overlay - Full Width */}
          {currentCandidate.BlurImg && (
            <Box
              sx={{
                position: "relative",
                // width: "100%",
                height: "360px",
                backgroundImage: `url(${currentCandidate.BlurImg})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                // marginBottom: "20px",
              }}
            >
              {/* Question Boxes Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  padding: "40px 0px",
                }}
              >
                {/* First Box - Left aligned */}
                <Box sx={{ alignSelf: "flex-start" }}>
                  <BluredQuestionBox hint={candidateHints[0]} boxIndex={0} />
                </Box>

                {/* Second Box - Right aligned */}
                <Box sx={{ alignSelf: "flex-end" }}>
                  <BluredQuestionBox hint={candidateHints[1]} boxIndex={1} />
                </Box>

                {/* Third Box - Left aligned */}
                <Box sx={{ alignSelf: "flex-start" }}>
                  <BluredQuestionBox hint={candidateHints[2]} boxIndex={2} />
                </Box>
              </Box>
            </Box>
          )}

          {/* Candidates Name Boxes Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              // marginTop: "20px",
            }}
          >
            {/* Display candidate names when game is active */}
            {displayCandidates.map((candidate, index) => {
              const isWrongGuess = wrongGuesses.includes(candidate.name);
              const isClickable = !isWrongGuess && !isTimeUp;

              return (
                <Box
                  key={candidate.name}
                  onClick={() =>
                    isClickable && handleCandidateSelect(candidate)
                  }
                  sx={{
                    position: "relative",
                    cursor: isClickable ? "pointer" : "not-allowed",
                    opacity: isWrongGuess || isTimeUp ? 0.5 : 1,
                  }}
                >
                  <CandidatesNameBox
                    candidateName={candidate.name}
                    alignment={index % 2 === 0 ? "left" : "right"}
                  />

                  {/* Cross line for wrong guesses */}
                  {isWrongGuess && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "270px",
                        height: "3px",
                        backgroundColor: "#000000",
                        zIndex: 10,
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>

          {/* next Speaker */}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "left",
                textAlign: "left",
                padding: "40px 0px 0px 24px",
                //   gap: "50px",
                mt: "65px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "semi-bold",
                  color: "#000000",
                  fontFamily: "inter, sans-serif",
                  lineHeight: "40px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  mt: "5px",
                  opacity: 0.5,
                  //   pl: "10px",
                }}
              >
                Next Speaker
              </Typography>

              <Button disabled sx={{ opacity: 0.5 }}>
                <img
                  src={Arrow}
                  alt="Arrow"
                  style={{
                    width: "70px",
                    height: "70px",
                    rotate: "270deg",
                    marginTop: "-15px",
                  }}
                  onClick={handleNextPage}
                />
              </Button>
            </Box>
          </Box>
          {/* end text  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "left",
              textAlign: "left",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#000000",
                fontFamily: "inter, sans-serif",
                lineHeight: "16px",
                letterSpacing: "0%",
                verticalAlign: "middle",
                marginTop: "18px",
                maxWidth: "220px",
              }}
            >
              The quickest 10 will make the cut for a 1-on-1 with{" "}
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                }}
              >
                "The Investor"
              </Typography>
              .
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default GuessThePerson1;
