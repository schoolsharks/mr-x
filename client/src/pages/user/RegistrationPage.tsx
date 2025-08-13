import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Registration1 from "../../components/Registration/Registration1";
import Registration2 from "../../components/Registration/Registration2";

const RegistrationPage = () => {
  const { step } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!step) {
      navigate("/user/registration/1");
    }
  }, [step, navigate]);

  const getRegistrationComponent = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <Registration1 />;
      case 2:
        return <Registration2 />;
      default:
        return <Registration1 />;
    }
  };

  return <Box>{getRegistrationComponent(Number(step))}</Box>;
};

export default RegistrationPage;
