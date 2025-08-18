import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import BlubIcon from "../../assets/BlubIcon.png";

interface BluredQuestionBoxProps {
  hint: string;
  boxIndex: number; // 0, 1, 2 for the three boxes
}

const BluredQuestionBox: React.FC<BluredQuestionBoxProps> = ({
  hint,
  boxIndex,
}) => {
  const [isHintVisible, setIsHintVisible] = useState(false); // All hints start hidden

  const handleBoxClick = () => {
    setIsHintVisible(true);
  };

  // Determine alignment and flip based on box index
  const isLeftAligned = boxIndex === 0 || boxIndex === 2; // First and third box left aligned
  const isFlipped = boxIndex === 1; // Second box is flipped
  const showBulbIcon = boxIndex !== -1; // Only forced reveal boxes don't show bulb icon
  const forceShowHint = boxIndex === -1; // Force show hint when boxIndex is -1

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
        onClick={!isHintVisible && !forceShowHint ? handleBoxClick : undefined}
        sx={{
          position: "relative",
          transform: isFlipped ? "scaleX(-1)" : "none",
          backgroundColor:"#d9d9d940",
          backdropFilter: "blur(8px)",
          backgroundSize: "100% 100%",
          boxShadow:"0px 4px 4px 0px #00000040",
          border:"1px solid #d9d9d940",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "327px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: !isHintVisible && !forceShowHint ? "pointer" : "default",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          "&:active": {
            transform: isFlipped ? "scaleX(-1)" : "none",
          },
          "&:focus": {
            outline: "none",
          },
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
            // px: 3,
            // py: 1.7,
            transform: isFlipped ? "scaleX(-1)" : "none",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#000000",
              fontWeight: 500,
              mb: "7px ",
              textAlign: "left",
              // textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              // maxWidth: "200px",
              wordWrap: "break-word",
              fontSize: "16px",
              lineHeight: "36px",
              opacity: isHintVisible || forceShowHint ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {isHintVisible || forceShowHint ? hint : ""}
          </Typography>
        </Box>

        {/* Bulb Icon */}
        {showBulbIcon && !isHintVisible && !forceShowHint && (
          <IconButton
            sx={{
              position: "absolute",
              // For flipped box (boxIndex 1): use right positioning so it appears on left after flip
              // For normal boxes (boxIndex 2): use right positioning
              left: "auto",
              right: "16px",
              top: "50%",
              transform: `translateY(-50%) ${isFlipped ? "scaleX(-1)" : ""}`,
              zIndex: 10,
              padding: 1,
              pointerEvents: "none", // Disable pointer events so box click works
            }}
          >
            <Box
              component="img"
              src={BlubIcon}
              alt="Click to reveal hint"
              sx={{
                width: 32,
                height: 32,
                filter:"drop-shadow(0 0 4px rgba(0, 0, 0, 0.4))"
              }}
            />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default BluredQuestionBox;
