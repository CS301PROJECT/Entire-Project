import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getRandomScenariosForProfession } from "./components/Professions/export_all";
import LoginModal from "./components/LoginModal";

import {
  StartScreen,
  ProfessionScreen,
  CityScreen,
  DecisionScreen,
  ConsequenceScreen,
  EndScreen,
} from "./components/screens/export_all_Screens";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [gameState, setGameState] = useState({
    profession: null,
    scenarios: [],
    compliance: 50,
    money: 0,
    scenarioIndex: 0,
    lastChoice: null,
  });

  const handleLogin = (userData) => {
    console.log("Login attempted with:", userData);
    setIsLoginModalOpen(false);
  };

  const handleSignUp = (userData) => {
    console.log("Sign up successful:", userData);
    setIsLoginModalOpen(false);
  };

 const handleExit = () => {
  setGameState({
    profession: null,
    scenarios: [],
    compliance: 50,
    money: 0,
    scenarioIndex: 0,
    lastChoice: null,
  });
  setScreen("profession");
};

  const handleProfessionSelect = (prof) => {
    const chosenScenarios = getRandomScenariosForProfession(prof.id, 5);
    setGameState({
      profession: prof,
      scenarios: chosenScenarios,
      compliance: 50,
      money: prof.startingMoney,
      scenarioIndex: 0,
      lastChoice: null,
    });
    setScreen("city");
  };

  const handleCityNext = () => {
    const scenarios = gameState.scenarios;
    if (gameState.scenarioIndex >= scenarios.length) {
      setScreen("end");
    } else {
      setScreen("decision");
    }
  };

  const handleChoice = (choice) => {
    setGameState((prev) => ({
      ...prev,
      compliance: Math.max(
        0,
        Math.min(100, prev.compliance + choice.scoreChange),
      ),
      money: Math.max(0, prev.money + choice.moneyChange),
      scenarioIndex: prev.scenarioIndex + 1,
      lastChoice: choice,
    }));
    setScreen("consequence");
  };

  return (
    <div style={{ fontFamily: "Nunito, sans-serif", minHeight: "100vh" }}>
      <LoginModal
        isOpen={isLoginModalOpen}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <AnimatePresence mode="wait">
        {screen === "start" && (
          <motion.div
            key="start"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <StartScreen
              onNew={() => setScreen("profession")}
              onLearn={() => window.open("https://www.zra.org.zm", "_blank")}
            />
          </motion.div>
        )}

        {screen === "profession" && (
          <motion.div
            key="profession"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <ProfessionScreen onSelect={handleProfessionSelect} />
          </motion.div>
        )}

        {screen === "city" && (
          <motion.div
            key="city"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <CityScreen
              gameState={gameState}
              onNext={handleCityNext}
              onExit={handleExit}
            />
          </motion.div>
        )}

        {screen === "decision" && (
          <motion.div
            key={`decision-${gameState.scenarioIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DecisionScreen
              gameState={gameState}
              onChoice={handleChoice}
              onExit={handleExit}
            />
          </motion.div>
        )}

        {screen === "consequence" && (
          <motion.div
            key="consequence"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ConsequenceScreen
              gameState={gameState}
              onContinue={() => setScreen("city")}
              onExit={handleExit}
            />
          </motion.div>
        )}

        {screen === "end" && (
          <motion.div
            key="end"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <EndScreen
              gameState={gameState}
              onPlayAgain={() => {
                setGameState({
                  profession: null,
                  scenarios: [],
                  compliance: 50,
                  money: 0,
                  scenarioIndex: 0,
                  lastChoice: null,
                });
                setScreen("start");
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
