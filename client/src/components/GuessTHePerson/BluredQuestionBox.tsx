import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import QuestionBluredBox from "../../assets/QuestionBluredBox.png";
import BlubIcon from "../../assets/BlubIcon.png";

interface BluredQuestionBoxProps {
  hint: string;
  boxIndex: number; // 0, 1, 2 for the three boxes
}

const BluredQuestionBox: React.FC<BluredQuestionBoxProps> = ({
  hint,
  boxIndex,
}) => {
  const [isHintVisible, setIsHintVisible] = useState(boxIndex === 0); // First box shows hint initially

  const handleBulbClick = () => {
    setIsHintVisible(true);
  };

  // Determine alignment and flip based on box index
  const isLeftAligned = boxIndex === 0 || boxIndex === 2; // First and third box left aligned
  const isFlipped = boxIndex === 1; // Second box is flipped
  const showBulbIcon = boxIndex !== 0; // First box doesn't show bulb icon

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto 24px auto",
        alignSelf: isLeftAligned ? "flex-start" : "flex-end",
        marginLeft: isLeftAligned ? 0 : "auto",
        marginRight: isLeftAligned ? "auto" : 0,
      }}
    >
      {/* Question Box Container */}
      <Box
        sx={{
          position: "relative",
          transform: isFlipped ? "scaleX(-1)" : "none",
          backgroundImage: `url(${QuestionBluredBox})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "300px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Hint Text */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
            py: 2,
            transform: isFlipped ? "scaleX(-1)" : "none",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              maxWidth: "200px",
              wordWrap: "break-word",
              opacity: isHintVisible ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {isHintVisible ? hint : ""}
          </Typography>
        </Box>

        {/* Bulb Icon */}
        {showBulbIcon && !isHintVisible && (
          <IconButton
            onClick={handleBulbClick}
            sx={{
              position: "absolute",
              left: isFlipped && boxIndex === 1 ? "16px" : "auto",
              right: !isFlipped || boxIndex !== 1 ? "16px" : "auto",
              top: "50%",
              transform: `translateY(-50%) ${isFlipped ? "scaleX(-1)" : ""}`,
              zIndex: 10,
              "&:hover": {
                transform: `translateY(-50%) scale(1.1) ${
                  isFlipped ? "scaleX(-1)" : ""
                }`,
              },
              transition: "transform 0.2s ease-in-out",
              padding: 1,
            }}
          >
            <Box
              component="img"
              src={BlubIcon}
              alt="Click to reveal hint"
              sx={{
                width: 32,
                height: 32,
                cursor: "pointer",
              }}
            />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default BluredQuestionBox;
