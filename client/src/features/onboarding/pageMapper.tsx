import GuessThePerson1 from "../../components/GuessTHePerson/GuessThePerson1";
import Home from "../../components/Home";
import { useNavigate } from "react-router-dom";

export const pageMapper = (page: number) => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (page < 2) {
      navigate(`/user/onboarding/${page + 1}`);
    } else {
      navigate("/user/login");
    }
  };

  if (page === 1) {
    return <Home handleNextPage={handleNextPage} />;
  }
  if (page === 2) {
    return <GuessThePerson1 handleNextPage={handleNextPage} />;
  }
  // if (page === 3) {
  //   return <MeetOthers handleNextPage={handleNextPage} />;
  // }
};
