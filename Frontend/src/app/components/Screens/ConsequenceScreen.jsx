import { motion } from "motion/react";
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

export default function ConsequenceScreen({ gameState, onContinue, onExit }) {
  const choice = gameState.lastChoice;
  const isGood = choice.outcome === "good";
  const isBad = choice.outcome === "bad";

  const bgGrad = isGood
    ? "linear-gradient(160deg, #1a3d2e 0%, #2d6647 50%, #5D6F82 100%)"
    : !isBad
      ? "linear-gradient(160deg, #3d2e1a 0%, #6b4f20 50%, #5D6F82 100%)"
      : "linear-gradient(160deg, #3d1a1a 0%, #6b2020 50%, #5D6F82 100%)";

  const accentColor = isGood ? "#5EAF6E" : !isBad ? "#E8834A" : "#D4183D";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: bgGrad,
        fontFamily: "Nunito, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{ position: "absolute", top: "16px", left: "16px", zIndex: 50 }}
      >
        <ExitButton onClick={onExit} /> {/* ← Reusable component! */}
      </div>
      {/* Split city visual */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(160deg, #1a4a30, #2d7a4a)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "2.8rem" }}>🏙️</div>
          <div
            style={{
              color: "#5EAF6E",
              fontWeight: 800,
              fontSize: "0.82rem",
              textAlign: "center",
              marginTop: "6px",
            }}
          >
            Compliant Path
          </div>
          <div
            style={{
              color: "#8FCFA0",
              fontSize: "0.7rem",
              textAlign: "center",
              marginTop: "3px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Thriving city
          </div>
          {isGood && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "3px solid #5EAF6E",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        <div
          style={{
            background: "linear-gradient(160deg, #4a1a1a, #7a2020)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "2.8rem" }}>🏚️</div>
          <div
            style={{
              color: "#D4183D",
              fontWeight: 800,
              fontSize: "0.82rem",
              textAlign: "center",
              marginTop: "6px",
            }}
          >
            Non-Compliant
          </div>
          <div
            style={{
              color: "#CF8A8A",
              fontSize: "0.7rem",
              textAlign: "center",
              marginTop: "3px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            City in decay
          </div>
          {isBad && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "3px solid #D4183D",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* Center pin */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "#5D6F82",
            border: "2px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          {isGood ? "✅" : !isBad ? "⚡" : "🚨"}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "480px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            ...GLASS_DARK,
            borderRadius: "16px",
            padding: "22px",
            borderLeft: `4px solid ${accentColor}`,
          }}
        >
          <div
            style={{
              color: accentColor,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              marginBottom: "6px",
            }}
          >
            OUTCOME
          </div>
          <h2
            style={{
              color: "#F5F7FA",
              fontSize: "1.2rem",
              fontWeight: 900,
              marginBottom: "10px",
            }}
          >
            {choice.consequenceTitle}
          </h2>
          <p
            style={{
              color: "#B8C4CF",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {choice.consequenceDesc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {[
            {
              label: "COMPLIANCE",
              value: `${choice.scoreChange > 0 ? "+" : ""}${choice.scoreChange}`,
              positive: choice.scoreChange >= 0,
            },
            {
              label: "WALLET",
              value: `${choice.moneyChange >= 0 ? "+" : ""}K${choice.moneyChange}`,
              positive: choice.moneyChange >= 0,
            },
          ].map(({ label, value, positive }) => (
            <div
              key={label}
              style={{
                ...GLASS,
                borderRadius: "12px",
                padding: "14px",
                textAlign: "center",
                borderTop: `3px solid ${positive ? "#5EAF6E" : "#D4183D"}`,
              }}
            >
              <div
                style={{
                  color: "#7A8EA0",
                  fontSize: "0.68rem",
                  marginBottom: "4px",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: positive ? "#5EAF6E" : "#D4183D",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            background: "rgba(201,168,112,0.12)",
            border: "1px solid rgba(201,168,112,0.3)",
            borderRadius: "12px",
            padding: "14px 16px",
            display: "flex",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>💡</span>
          <div>
            <div
              style={{
                color: "#C9A870",
                fontSize: "0.72rem",
                fontWeight: 700,
                marginBottom: "3px",
              }}
            >
              TAX TIP
            </div>
            <div
              style={{
                color: "#B8C4CF",
                fontSize: "0.8rem",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.5,
              }}
            >
              {isGood
                ? "Voluntary compliance builds trust and unlocks formal business growth opportunities."
                : !isBad
                  ? "Partial compliance carries real risk. "
                  : "Tax evasion penalties can be 3-5× the original tax owed, plus potential criminal liability."}
            </div>
          </div>
        </motion.div>

        <button
          onClick={onContinue}
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
          View Your City →
        </button>
      </div>
    </div>
  );
}
