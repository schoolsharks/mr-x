import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Candidate, CandidateCandidatesData } from "../../Data/CandidatesData";
import FirstWingConnect from "../../assets/FirstWingConnect.webp";
import ArrowWhite from "../../assets/ArrowWhite.png";
import { completeGame } from "../../utils/gameStorage";
import ScrollToTop from "../utility/ScrollToTop";
import GuessedRight2 from "../../assets/GussedRIght2.webp";
import ButtonBg1 from "../../assets/ButtonBg1.png";

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
      <ScrollToTop behavior="smooth" />
      <Box
        sx={{
          backgroundImage: `url(${GuessedRight2})`,
          backgroundSize: "100% 100%",
          minHeight: "1321px",
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
            // gap: "30px",
          }}
        >
          {/* Candidate Image Container - Full Width */}
          {candidate.Img && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "280px",
                backgroundImage: `url(${candidate.Img})`,
                // backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                // marginBottom: "20px",
              }}
            />
          )}
          {/* Candidate Name */}
          <Box
            sx={{
              height: "73px",
              width: "100%",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#000000",
                textAlign: "center",
                // mt: "-56px",
              }}
            >
              {candidate.name}
            </Typography>
          </Box>

          {/* Hint Data Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              marginTop: "30px",
            }}
          >
            {/* Show hint data in custom styled boxes */}
            {candidateHints.map((hint, index) => (
              <Box
                key={index}
                sx={{
                  width: "327px",
                  height: "51px",
                  opacity: 1,
                  background: "#FFFFFF85",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  display: "flex",
                  backdropFilter: "blur(10px)",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "#981922",
                    opacity: 0.1,
                    // borderRadius: "8px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#000000",
                    fontFamily: "Inter",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {hint}
                </Typography>
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
              ml: "124px",
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
                mt: "70px",
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
                  ml: "18px",
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
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${ButtonBg1})`,
            backgroundSize: "100% 100%",
            minHeight: "132px",
          }}
        >
          {/* Next Speaker / Register Now Button */}
          <Box
            onClick={handleButtonClick}
            sx={
              {
                // backgroundImage: `url(${GuessedRightBG})`,
                // backgroundSize: "100% 100%",
                // minHeight: "131px",
                // mt: "60px",
              }
            }
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
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "left",
              textAlign: "left",
              padding: "24px",
              backgroundColor: "#ffffff",
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
