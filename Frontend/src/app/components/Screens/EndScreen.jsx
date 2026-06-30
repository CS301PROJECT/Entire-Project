import { motion } from "motion/react";
import { CitySkyline } from "../CitySkyline";
import { ProgressBar } from "../ProgressBar";

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

export default function EndScreen({ gameState, onPlayAgain }) {
  const prof = gameState.profession;
  const { compliance, money } = gameState;
  const scenarios = gameState.scenarios;

  const grade =
    compliance >= 80
      ? { label: "Tax Champion", emoji: "🏆", color: "#C9A870" }
      : compliance >= 60
        ? { label: "Compliant Citizen", emoji: "✅", color: "#5EAF6E" }
        : compliance >= 40
          ? { label: "Needs Improvement", emoji: "⚡", color: "#E8834A" }
          : { label: "Non-Compliant", emoji: "⚠️", color: "#D4183D" };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(160deg, #3d5266 0%, #5D6F82 100%)",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      <div style={{ opacity: 0.75 }}>
        <CitySkyline compliance={compliance} />
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            ...GLASS_DARK,
            borderRadius: "20px",
            padding: "28px",
            textAlign: "center",
            borderTop: `4px solid ${grade.color}`,
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "8px" }}>
            {grade.emoji}
          </div>
          <div
            style={{
              color: "#7A8EA0",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              marginBottom: "6px",
            }}
          >
            FINAL RATING
          </div>
          <h2
            style={{
              color: grade.color,
              fontSize: "1.7rem",
              fontWeight: 900,
              marginBottom: "4px",
            }}
          >
            {grade.label}
          </h2>
          <div
            style={{
              color: "#B8C4CF",
              fontSize: "0.84rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            as a {prof.name} in Lusaka
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          {[
            {
              label: "COMPLIANCE",
              value: `${compliance}%`,
              color: grade.color,
            },
            {
              label: "WALLET",
              value: `K${money.toLocaleString()}`,
              color: "#5EAF6E",
            },
            {
              label: "COMPLETED",
              value: `${scenarios.length}/${scenarios.length}`,
              color: "#C9A870",
            },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              style={{
                ...GLASS,
                borderRadius: "12px",
                padding: "14px 8px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#7A8EA0",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  marginBottom: "5px",
                }}
              >
                {label}
              </div>
              <div style={{ color, fontWeight: 800, fontSize: "1rem" }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...GLASS, borderRadius: "14px", padding: "18px" }}>
          <ProgressBar
            value={compliance}
            max={100}
            label="Overall Compliance Rating"
            color={grade.color}
          />
          <div
            style={{
              marginTop: "10px",
              color: "#B8C4CF",
              fontSize: "0.82rem",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.6,
            }}
          >
            {compliance >= 80
              ? "Outstanding Tax compliance builds trust, unlocks opportunities, and grows public revenue for everyone."
              : compliance >= 60
                ? "Good work Consistent compliance is what drives national development and community services."
                : compliance >= 40
                  ? "Mixed results. Each shortcut costs more in the long run. "
                  : "This path leads to audits and penalties. Tax revenue funds schools, clinics, and roads — every kwacha matters."}
          </div>
        </div>

        <div
          style={{
            background: "rgba(201,168,112,0.12)",
            border: "1px solid rgba(201,168,112,0.3)",
            borderRadius: "12px",
            padding: "14px 16px",
          }}
        >
          <div
            style={{
              color: "#C9A870",
              fontSize: "0.72rem",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            🏛️ DID YOU KNOW?
          </div>
          <div
            style={{
              color: "#B8C4CF",
              fontSize: "0.82rem",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.5,
            }}
          >
            an estimated amount collected was K82.6 billion in 2023, funding
            education, healthcare, and infrastructure across all provinces.
            Every kwacha declared matters.
          </div>
        </div>

        <button
          onClick={onPlayAgain}
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
          🔄 Play Again
        </button>

        <div
          style={{
            textAlign: "center",
            color: "#7A8EA0",
            fontSize: "0.75rem",
            fontFamily: "Inter, sans-serif",
            paddingBottom: "8px",
          }}
        >
          Visit <span style={{ color: "#C9A870" }}>zra.org.zm</span> to register
          your TPIN and file taxes online
        </div>
      </div>
    </div>
  );
}
