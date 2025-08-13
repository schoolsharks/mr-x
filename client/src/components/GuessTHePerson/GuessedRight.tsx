import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import CandidatesNameBox from "./CandidatesNameBox";
import { Candidate, CandidateCandidatesData } from "../../Data/CandidatesData";
import GuessedRightBG from "../../assets/GussedRightBG.webp";
import FirstWingConnect from "../../assets/FirstWingConnect.webp";
import ArrowWhite from "../../assets/ArrowWhite.png";
import { completeGame } from "../../utils/gameStorage";

interface GuessedRightProps {
  candidate: Candidate;
  handleNextPage: () => void;
  currentCandidateIndex?: number;
  strikes?: number;
}

const GuessedRight: React.FC<GuessedRightProps> = ({
  candidate,
  handleNextPage,
  currentCandidateIndex = 0,
//   strikes = 0,
}) => {
  const navigate = useNavigate();
  const candidateHints = candidate.hints;
  const totalCandidates = CandidateCandidatesData.length;
  const isLastCandidate = currentCandidateIndex >= totalCandidates - 1;
  const buttonText = isLastCandidate ? "Register Now!" : "Next Speaker!";

  const handleButtonClick = () => {
    if (isLastCandidate && buttonText === "Register Now!") {
      // Complete the game and save final data
      completeGame();
      // Navigate to Registration1 page
      navigate("/user/registration/1");
    } else {
      // Continue with the original handleNextPage logic
      handleNextPage();
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${GuessedRightBG})`,
          backgroundSize: "100% 100%",
          minHeight: "1552px",
        }}
      >
        <Box
          sx={{
            mb: "-10px",
          }}
        >
          <Header showTimer={false} showStrikes={false} />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#981922",
              textAlign: "left",
              fontFamily: "Inter",
              ml: "20px",
              lineHeight: "35px",
              letterSpacing: "0%",
            }}
          >
            You guessed <br />
            it right
          </Typography>
        </Box>
        {/* Main Content Container */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          {/* Candidate Image Container - Full Width */}
          {candidate.Img && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "360px",
                backgroundImage: `url(${candidate.Img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "20px",
              }}
            />
          )}

          {/* Hint Data Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              marginTop: "0px",
            }}
          >
            {/* Show hint data in candidate name box style */}
            {candidateHints.map((hint, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                }}
              >
                <CandidatesNameBox
                  candidateName={hint}
                  alignment={index % 2 === 0 ? "left" : "right"}
                  isHint={true}
                />
              </Box>
            ))}
          </Box>
          {/* first wing logo  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "24px",
              mt: "60px",
              ml: "84px",
            }}
          >
            <img
              src={FirstWingConnect}
              alt="First Wing Connect Logo"
              style={{ height: "64px" }}
            />
          </Box>

          {/* know more about him/her section */}
          {candidate.KnowMore && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 20px",
                mt: "30px",
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600, // semi-bold
                  color: "#000000",
                  fontFamily: "Inter",
                  textAlign: "left",
                  mb: "16px",
                }}
              >
                {candidate.KnowMore.title}
              </Typography>

              {/* Data points with arrow */}
              {candidate.KnowMore.data.map((point, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500, // medium
                    color: "#000000",
                    fontFamily: "Inter",
                    lineHeight: "25px",
                    textAlign: "left",
                    mb: "8px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <span style={{ color: "#000000", marginTop: "2px" }}>
                    &gt;
                  </span>
                  <span>{point}</span>
                </Typography>
              ))}
            </Box>
          )}

          {/* Next Speaker / Register Now Button */}
          <Box
            sx={{
              //   backgroundImage: `url(${GuessedRightBG})`,
              //   backgroundSize: "100% 100%",
              //   minHeight: "131px",
              mt: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "left",
                textAlign: "left",
                padding: "40px 0px 0px 24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600", // semi-bold
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "40px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  mt: "5px",
                }}
              >
                {buttonText}
              </Typography>

              <Button onClick={handleButtonClick}>
                <img
                  src={ArrowWhite}
                  alt="Arrow"
                  style={{
                    width: "64px",
                    height: "32px",
                    rotate: "270deg",
                    marginTop: "5px",
                  }}
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
};

export default GuessedRight;
