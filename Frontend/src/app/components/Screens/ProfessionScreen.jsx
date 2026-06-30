import { useState } from "react";
import { motion } from "motion/react";
import { PROFESSIONS } from "../Professions/export_all";

const GLASS = {
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.18)",
};

export default function ProfessionScreen({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(160deg, #3d5266 0%, #5D6F82 100%)",
        fontFamily: "Nunito, sans-serif",
        padding: "0 16px",
      }}
    >
      <div className="flex flex-col items-center pt-14 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            color: "#C9A870",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginBottom: "10px",
          }}
        >
          STEP 1 OF 2
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            color: "#F5F7FA",
            fontSize: "1.8rem",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Choose Your Profession
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "#B8C4CF",
            fontSize: "0.88rem",
            textAlign: "center",
            maxWidth: "300px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Each profession faces unique tax situations
        </motion.p>
      </div>

      <div className="flex flex-col gap-4 max-w-md mx-auto w-full pb-12">
        {PROFESSIONS.map((prof, i) => (
          <motion.div
            key={prof.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            onClick={() => onSelect(prof)}
            onMouseEnter={() => setHovered(prof.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...GLASS,
              borderRadius: "16px",
              padding: "20px",
              cursor: "pointer",
              transform:
                hovered === prof.id ? "translateX(6px)" : "translateX(0)",
              transition: "all 0.2s ease",
              background:
                hovered === prof.id
                  ? "rgba(255,255,255,0.16)"
                  : "rgba(255,255,255,0.10)",
              borderLeft: `4px solid ${prof.color}`,
            }}
          >
            <div className="flex items-center gap-4">
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: `${prof.color}22`,
                  border: `2px solid ${prof.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  flexShrink: 0,
                }}
              >
                {prof.emoji}
              </div>
              <div className="flex-1">
                <div
                  style={{
                    color: "#F5F7FA",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    marginBottom: "4px",
                  }}
                >
                  {prof.name}
                </div>
                <div
                  style={{
                    color: "#B8C4CF",
                    fontSize: "0.82rem",
                    lineHeight: 1.4,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {prof.description}
                </div>
              </div>
              <div
                style={{
                  color: "#5EAF6E",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>
                  START
                </div>
                K{prof.startingMoney.toLocaleString()}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
