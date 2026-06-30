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

  const outcomeColor = (outcome) => {
    if (outcome === "good") return "#5EAF6E";
    if (outcome === "neutral") return "#E8834A";
    return "#D4183D";
  };

  const outcomeLabel = (outcome) => {
    if (outcome === "good") return "✓ Compliant";
    if (outcome === "neutral") return "⚡ Risky";
    return "✗ Evasion";
  };

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
        <div
          style={{
            color: "#C9A870",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
          }}
        >
          SCENARIO {gameState.scenarioIndex + 1} OF {scenarios.length}
        </div>
        <ExitButton onClick={onExit} />
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
          {scenario.choices.map((choice, i) => (
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
                    ? choice.outcome === "good"
                      ? "rgba(94,175,110,0.22)"
                      : choice.outcome === "neutral"
                        ? "rgba(232,131,74,0.22)"
                        : "rgba(212,24,61,0.18)"
                    : choice.outcome === "good"
                      ? "rgba(94,175,110,0.10)"
                      : choice.outcome === "neutral"
                        ? "rgba(232,131,74,0.10)"
                        : "rgba(212,24,61,0.08)",
                border: `2px solid ${outcomeColor(choice.outcome)}${hovered === i ? "88" : "44"}`,
                borderRadius: "14px",
                padding: "16px 18px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                transform: hovered === i ? "translateX(4px)" : "translateX(0)",
                width: "100%",
              }}
            >
              <div className="flex items-start justify-between gap-3">
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
                <div
                  style={{
                    color: outcomeColor(choice.outcome),
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    border: `1px solid ${outcomeColor(choice.outcome)}55`,
                    borderRadius: "6px",
                    padding: "3px 8px",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {outcomeLabel(choice.outcome)}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
