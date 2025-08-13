import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { KeyboardArrowDown, Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Register1BG from "../../assets/Register1BG.webp";
import Header from "../GuessTHePerson/Header";
import FirstWingConnect from "../../assets/FirstWingConnect.webp";
import Register1ButtonBG from "../../assets/Register1ButtonBG.webp"; // Assuming you have a button background image
import arrow from "../../assets/Arrow.webp"; // Assuming you have an arrow image for the button
const Registration1: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    startupName: "",
    startupSector: "",
    fundingStage: "",
    revenue: "",
    employees: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegisterClick = () => {
    console.log("Register button clicked, isChecked:", isChecked); // Debug log
    if (isChecked) {
      navigate("/user/registration/2");
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Register1BG})`,
          backgroundSize: "100% 100%",
          minHeight: "973px",
        }}
      >
        <Box
          sx={{
            mb: "-10px",
          }}
        >
          <Header showTimer={false} showStrikes={false} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "24px",
            mt: "-30px",
            ml: "-134px",
          }}
        >
          <img
            src={FirstWingConnect}
            alt="First Wing Connect Logo"
            style={{ height: "77px" }}
          />
        </Box>

        {/* Form Boxes */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            mt: "20px",
            px: "4%",
          }}
        >
          {/* Box 1 - Startup Name Input */}
          <Box
            sx={{
              background: "#FFFFFF85",
              boxShadow: "0px 4px 4px 0px #00000040",
              height: "70px",
              width: "92%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <TextField
              placeholder="Startup Brand Name*"
              value={formData.startupName}
              onChange={(e) => handleInputChange("startupName", e.target.value)}
              variant="standard"
              sx={{
                width: "100%",
                px: "20px",
                "& .MuiInput-underline:before": { display: "none" },
                "& .MuiInput-underline:after": { display: "none" },
                "& .MuiInputBase-input": {
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#000000",
                  "&::placeholder": {
                    color: "#000000",
                    opacity: 1,
                  },
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>

          {/* Box 2 - Startup Sector Dropdown */}
          <Box
            sx={{
              background: "#FFFFFF85",
              boxShadow: "0px 4px 4px 0px #00000040",
              height: "70px",
              width: "92%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <FormControl
              variant="standard"
              sx={{
                width: "100%",
                px: "20px",
                "& .MuiInput-underline:before": { display: "none" },
                "& .MuiInput-underline:after": { display: "none" },
              }}
            >
              <Select
                value={formData.startupSector}
                onChange={(e) =>
                  handleInputChange("startupSector", e.target.value)
                }
                displayEmpty
                IconComponent={KeyboardArrowDown}
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#000000",
                  "& .MuiSelect-select": {
                    padding: 0,
                    paddingRight: "30px !important",
                  },
                  "& .MuiSelect-icon": {
                    color: "#000000",
                    right: "0px",
                  },
                }}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          color: "#000000",
                        }}
                      >
                        Startup sector*
                      </Typography>
                    );
                  }
                  return selected;
                }}
              >
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="ecommerce">E-commerce</MenuItem>
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Box 3 - Funding Stage Dropdown */}
          <Box
            sx={{
              background: "#FFFFFF85",
              boxShadow: "0px 4px 4px 0px #00000040",
              height: "70px",
              width: "92%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <FormControl
              variant="standard"
              sx={{
                width: "100%",
                px: "20px",
                "& .MuiInput-underline:before": { display: "none" },
                "& .MuiInput-underline:after": { display: "none" },
              }}
            >
              <Select
                value={formData.fundingStage}
                onChange={(e) =>
                  handleInputChange("fundingStage", e.target.value)
                }
                displayEmpty
                IconComponent={KeyboardArrowDown}
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#000000",
                  "& .MuiSelect-select": {
                    padding: 0,
                    paddingRight: "30px !important",
                  },
                  "& .MuiSelect-icon": {
                    color: "#000000",
                    right: "0px",
                  },
                }}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          color: "#000000",
                        }}
                      >
                        Latest funding stage*
                      </Typography>
                    );
                  }
                  return selected;
                }}
              >
                <MenuItem value="pre-seed">Pre-Seed</MenuItem>
                <MenuItem value="seed">Seed</MenuItem>
                <MenuItem value="series-a">Series A</MenuItem>
                <MenuItem value="series-b">Series B</MenuItem>
                <MenuItem value="series-c">Series C</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Box 4 - Revenue Dropdown */}
          <Box
            sx={{
              background: "#FFFFFF85",
              boxShadow: "0px 4px 4px 0px #00000040",
              height: "70px",
              width: "92%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <FormControl
              variant="standard"
              sx={{
                width: "100%",
                px: "20px",
                "& .MuiInput-underline:before": { display: "none" },
                "& .MuiInput-underline:after": { display: "none" },
              }}
            >
              <Select
                value={formData.revenue}
                onChange={(e) => handleInputChange("revenue", e.target.value)}
                displayEmpty
                IconComponent={KeyboardArrowDown}
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#000000",
                  "& .MuiSelect-select": {
                    padding: 0,
                    paddingRight: "30px !important",
                  },
                  "& .MuiSelect-icon": {
                    color: "#000000",
                    right: "0px",
                  },
                }}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          color: "#000000",
                        }}
                      >
                        Revenue generated in last <br />
                        12 months(INR)*
                      </Typography>
                    );
                  }
                  return selected;
                }}
              >
                <MenuItem value="0-1L">0 - 1 Lakh</MenuItem>
                <MenuItem value="1L-10L">1 - 10 Lakhs</MenuItem>
                <MenuItem value="10L-1Cr">10 Lakhs - 1 Crore</MenuItem>
                <MenuItem value="1Cr-10Cr">1 - 10 Crores</MenuItem>
                <MenuItem value="10Cr+">10+ Crores</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Box 5 - Number of Employees Input */}
          <Box
            sx={{
              background: "#FFFFFF85",
              boxShadow: "0px 4px 4px 0px #00000040",
              height: "70px",
              width: "92%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <TextField
              placeholder="Number of employees*"
              value={formData.employees}
              onChange={(e) => handleInputChange("employees", e.target.value)}
              variant="standard"
              type="number"
              sx={{
                width: "100%",
                px: "20px",
                "& .MuiInput-underline:before": { display: "none" },
                "& .MuiInput-underline:after": { display: "none" },
                "& .MuiInputBase-input": {
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#000000",
                  "&::placeholder": {
                    color: "#000000",
                    opacity: 1,
                  },
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>

          {/* Checkbox */}
          <Box
            sx={{
              width: "92%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "12px",
              mt: "16px",
              ml: "8px",
            }}
          >
            <Box
              onClick={() => setIsChecked(!isChecked)}
              sx={{
                background: "#FFFFFF85",
                boxShadow: "0px 4px 4px 0px #00000040",
                height: "30px",
                width: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {isChecked && (
                <Check
                  sx={{
                    color: "#ffffff",
                    fontSize: "20px",
                  }}
                />
              )}
            </Box>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "25px",
                color: "#ffffff",
              }}
            >
              I agree to the{" "}
              <Box
                component="span"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "25px",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                Terms & Conditions
              </Box>
            </Typography>
          </Box>

          {/* Date Section */}
          <Box
            sx={{
              width: "92%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              mt: "24px",
              ml: "8px",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "100%",
                color: "#ffffff",
              }}
            >
              Date
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "25px",
                lineHeight: "32px",
                color: "#ffffff",
              }}
            >
              9th May, 2025
            </Typography>
          </Box>

          {/* time section  */}

          <Box
            sx={{
              width: "92%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              mt: "24px",
              gap: "8px",
              ml: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "100%",
                color: "#ffffff",
              }}
            >
              Time
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "25px",
                lineHeight: "32px",
                color: "#ffffff",
              }}
            >
              3:30pm - 5:00pm
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* register button  */}
      <Box
        onClick={handleRegisterClick}
        sx={{
          backgroundImage: `url(${Register1ButtonBG})`,
          backgroundSize: "100% 100%",
          minHeight: "132px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          cursor: isChecked ? "pointer" : "not-allowed",
          opacity: isChecked ? 1 : 0.6,
          transition: "opacity 0.3s ease",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "30px",
            lineHeight: "32px",
            color: isChecked ? "#000000" : "#666666",
            textAlign: "left",
            ml: "24px",
            transition: "color 0.3s ease",
          }}
        >
          Register Now
        </Typography>
        <img
          src={arrow}
          alt="Arrow"
          style={{
            width: "64px",
            height: "64px",
            rotate: "270deg",
            marginLeft: "24px",
            opacity: isChecked ? 1 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        />
      </Box>
    </>
  );
};

export default Registration1;
