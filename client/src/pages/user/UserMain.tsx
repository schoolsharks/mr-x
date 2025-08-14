import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AnimatedPage from "../../components/layout/AnimatedPage";
import OnboardingPage from "./OnboardingPage";
import RegistrationPage from "./RegistrationPage";
import ScrollToTop from "../../components/utility/ScrollToTop";
import { AnimatePresence } from "framer-motion";

const UserMain = () => {
  const location = useLocation();

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/onboarding/:page"
            element={
              <AnimatedPage>
                <OnboardingPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/registration/:step"
            element={
              <AnimatedPage>
                <RegistrationPage />
              </AnimatedPage>
            }
          />
          <Route path="*" element={<Navigate to="/user/onboarding/1" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default UserMain;
