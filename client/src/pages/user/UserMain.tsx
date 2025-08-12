import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AnimatedPage from "../../components/layout/AnimatedPage";
import OnboardingPage from "./OnboardingPage";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";

const UserMain = () => {
  const location = useLocation();
  const hasInitializedRef = useRef(false);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            index
            path="/onboarding/:page"
            element={
              <AnimatedPage>
                <OnboardingPage />
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
