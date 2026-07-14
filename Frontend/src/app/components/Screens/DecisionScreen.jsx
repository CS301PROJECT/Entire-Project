import { useState } from "react";
import { motion } from "motion/react";
import ExitButton from "./Exit_Button";

const GLASS_DARK = {
  background: "rgba(30,50,75,0.55)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.12)",
};

export default function DecisionScreen({ gameState, onChoice, onExit }) {
  const scenarios = gameState.scenarios;
  const scenario = scenarios[gameState.scenarioIndex];
  const [hovered, setHovered] = useState(null);

  // Shuffle choices once when the scenario loads so the best answer isn't always first
  const [shuffledChoices] = useState(() =>
    [...scenario.choices].sort(() => Math.random() - 0.5)
  );

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(160deg, #3d5266 0%, #5D6F82 100%)",
        fontFamily: "Nunito, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          ...GLASS_DARK,
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Exit button on the left */}
        <ExitButton onClick={onExit} />

        {/* Scenario counter in the middle — no total revealed */}
        <div
          style={{
            color: "#C9A870",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
          }}
        >
          SCENARIO {gameState.scenarioIndex + 1}
        </div>

        {/* Wallet and compliance on the right */}
        <div className="flex gap-4">
          <span style={{ color: "#5EAF6E", fontWeight: 700 }}>
            K{gameState.money.toLocaleString()}
          </span>
          <span style={{ color: "#C9A870", fontWeight: 700 }}>
            {gameState.compliance}% ✓
          </span>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "14px",
          maxWidth: "480px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ ...GLASS_DARK, borderRadius: "16px", padding: "22px" }}
        >
          <div style={{ fontSize: "2.2rem", marginBottom: "10px" }}>
            {scenario.icon}
          </div>
          <div
            style={{
              color: "#C9A870",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              marginBottom: "6px",
            }}
          >
            SITUATION
          </div>
          <h2
            style={{
              color: "#F5F7FA",
              fontSize: "1.15rem",
              fontWeight: 800,
              marginBottom: "10px",
            }}
          >
            {scenario.title}
          </h2>
          <p
            style={{
              color: "#B8C4CF",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {scenario.situation}
          </p>
        </motion.div>

        <div
          style={{
            color: "#B8C4CF",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          WHAT DO YOU DO?
        </div>

        <div className="flex flex-col gap-3">
          {shuffledChoices.map((choice, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              onClick={() => onChoice(choice)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background:
                  hovered === i
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "14px",
                padding: "16px 18px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                transform: hovered === i ? "translateX(4px)" : "translateX(0)",
                width: "100%",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#F5F7FA",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "4px",
                  }}
                >
                  {choice.text}
                </div>
                {choice.subtext && (
                  <div
                    style={{
                      color: "#B8C4CF",
                      fontSize: "0.8rem",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {choice.subtext}
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}