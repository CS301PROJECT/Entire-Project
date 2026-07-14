import { motion } from "motion/react";
import { CitySkyline } from "../CitySkyline";
import { ProgressBar } from "../ProgressBar";
import ExitButton from "./Exit_Button";

const GLASS = {
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.18)",
};

const GLASS_DARK = {
  background: "rgba(30,50,75,0.55)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.12)",
};

export default function CityScreen({ gameState, onNext, onExit }) {
  const prof = gameState.profession;
  const scenarios = gameState.scenarios;
  const remaining = scenarios.length - gameState.scenarioIndex;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #1a2d3f 0%, #2d4a60 100%)",
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
    {/* Left: Exit button + profession info */}
    <div className="flex items-center gap-3">
      <ExitButton onClick={onExit} />
      <div>
        <div
          style={{
            color: "#C9A870",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          {prof.emoji} {prof.name.toUpperCase()}
        </div>
        <div style={{ color: "#F5F7FA", fontWeight: 800, fontSize: "1rem" }}>
          Your City
        </div>
      </div>
    </div>

  {/* Right: Wallet and compliance */}
  <div className="flex gap-2">
    <div style={{ textAlign: "right" }}>
      <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>WALLET</div>
      <div style={{ color: "#5EAF6E", fontWeight: 800, fontSize: "1rem" }}>
        {gameState.money.toLocaleString()}
      </div>
    </div>
    <div style={{ textAlign: "right" }}>
      <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>COMPLIANCE</div>
      <div style={{ color: "#C9A870", fontWeight: 800, fontSize: "1rem" }}>
        {gameState.compliance}%
      </div>
    </div>
  </div>
</div>
      <div style={{ position: "relative" }}>
        <CitySkyline compliance={gameState.compliance} />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            ...GLASS_DARK,
            borderRadius: "10px",
            padding: "8px 18px",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              color: "#B8C4CF",
              fontSize: "0.75rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {gameState.compliance >= 70
              ? "✨ Your city is thriving thanks to tax revenue"
              : gameState.compliance >= 40
                ? "⚡ Your city needs better compliance to grow"
                : "⚠️ Low compliance is hurting your city"}
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ ...GLASS, borderRadius: "14px", padding: "18px" }}>
          <div className="flex flex-col gap-3">
            <ProgressBar
              value={gameState.compliance}
              max={100}
              label="Compliance Rating"
              color={
                gameState.compliance >= 60
                  ? "#5EAF6E"
                  : gameState.compliance >= 30
                    ? "#E8834A"
                    : "#D4183D"
              }
            />
            <ProgressBar
              value={gameState.scenarioIndex}
              max={scenarios.length}
              label="Scenarios Completed"
              color="#C9A870"
            />
          </div>
        </div>

        {gameState.lastChoice && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background:
                gameState.lastChoice.outcome === "good"
                  ? "rgba(94,175,110,0.15)"
                  : gameState.lastChoice.outcome === "neutral"
                    ? "rgba(232,131,74,0.15)"
                    : "rgba(212,24,61,0.15)",
              border: `1px solid ${
                gameState.lastChoice.outcome === "good"
                  ? "rgba(94,175,110,0.35)"
                  : gameState.lastChoice.outcome === "neutral"
                    ? "rgba(232,131,74,0.35)"
                    : "rgba(212,24,61,0.35)"
              }`,
              borderRadius: "12px",
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                color: "#F5F7FA",
                fontWeight: 700,
                fontSize: "0.88rem",
                marginBottom: "3px",
              }}
            >
              Last: {gameState.lastChoice.consequenceTitle}
            </div>
            <div
              style={{
                color: "#B8C4CF",
                fontSize: "0.78rem",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {gameState.lastChoice.scoreChange > 0 ? "+" : ""}
              {gameState.lastChoice.scoreChange} compliance •{" "}
              {gameState.lastChoice.moneyChange >= 0 ? "+" : ""}K
              {gameState.lastChoice.moneyChange}
            </div>
          </motion.div>
        )}

        {gameState.scenarioIndex < scenarios.length ? (
          <button
            onClick={onNext}
            style={{
              padding: "16px",
              background: "linear-gradient(135deg, #C9A870, #E8C878)",
              border: "none",
              borderRadius: "14px",
              color: "#1A1A2E",
              fontWeight: 800,
              fontSize: "1rem",
              cursor: "pointer",
              fontFamily: "Nunito, sans-serif",
              boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
              transition: "transform 0.15s",
              width: "100%",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Next Scenario ({remaining} remaining) →
          </button>
        ) : (
          <button
            onClick={onNext}
            style={{
              padding: "16px",
              background: "linear-gradient(135deg, #5EAF6E, #45956e)",
              border: "none",
              borderRadius: "14px",
              color: "white",
              fontWeight: 800,
              fontSize: "1rem",
              cursor: "pointer",
              fontFamily: "Nunito, sans-serif",
              boxShadow: "0 4px 20px rgba(94,175,110,0.35)",
              width: "100%",
            }}
          >
            🏆 View Final Results →
          </button>
        )}
      </div>
    </div>
  );
}
