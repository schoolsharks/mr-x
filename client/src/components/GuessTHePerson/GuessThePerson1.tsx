import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import GuessThePerson1BG from "../../assets/GuessThePerson21BG.webp";
import BluredQuestionBox from "./BluredQuestionBox";
import { CandidateCandidatesData } from "../../Data/CandidatesData";

type GuessThePerson1Props = {
  handleNextPage: () => void;
};

function GuessThePerson1({ handleNextPage: _ }: GuessThePerson1Props) {
  // Using the first candidate's hints for demonstration
  const candidateHints = CandidateCandidatesData[0].hints;

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${GuessThePerson1BG})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Header />
        </Box>

        {/* Question Boxes Container */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            padding: "20px",
            gap: "20px",
            maxWidth: "100%",
          }}
        >
          {/* First Box - Left aligned, hint visible initially, no bulb icon */}
          <BluredQuestionBox hint={candidateHints[0]} boxIndex={0} />

          {/* Second Box - Right aligned, flipped, bulb icon on left */}
          <BluredQuestionBox hint={candidateHints[1]} boxIndex={1} />

          {/* Third Box - Left aligned, bulb icon on right */}
          <BluredQuestionBox hint={candidateHints[2]} boxIndex={2} />
        </Box>
      </Box>
    </>
  );
}

export default GuessThePerson1;
