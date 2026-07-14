import { motion } from "motion/react";
import { PROFESSIONS } from "../Professions/export_all";

const GLASS = {
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.18)",
};

export default function StartScreen({ onNew, onLearn }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #3d5266 0%, #5D6F82 50%, #4a5f72 100%)",
        fontFamily: "Nunito, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration rings */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        {[300, 500, 700, 900].map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size + "px",
              height: size + "px",
              borderRadius: "50%",
              border: "1px solid white",
              left: "50%",
              top: "40%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(201,168,112,0.15)",
            border: "1px solid rgba(201,168,112,0.5)",
            borderRadius: "999px",
            padding: "6px 20px",
            color: "#C9A870",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: "20px",
          }}
        >
          🏛️ ZED CIVIC EDUCATION PLATFORM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(3rem, 10vw, 5rem)",
            fontWeight: 900,
            color: "#F5F7FA",
            textAlign: "center",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }}
        >
          The
          <br />
          <span style={{ color: "#C9A870" }}>Tax Trail</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            color: "#B8C4CF",
            fontSize: "1rem",
            textAlign: "center",
            maxWidth: "320px",
            lineHeight: 1.6,
            fontFamily: "Inter, sans-serif",
            marginBottom: "40px",
          }}
        >
          Experience real tax decisions faced by workers. Build your city. Earn
          compliance points. Learn by doing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mb-10"
        >
        {[
          {
            value: PROFESSIONS.reduce((total, p) => total + p.scenarios.length, 0),
            label: "Scenarios"
          },
          {
            value: PROFESSIONS.length,
            label: "Professions"
          },
          {
            value: "K",
            label: "Kwacha"
          },
        ].map(({ value, label }) => (
            <div
              key={label}
              style={{
                ...GLASS,
                borderRadius: "12px",
                padding: "14px 22px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#C9A870",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  color: "#B8C4CF",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={onNew}
            style={{
              padding: "16px",
              background: "linear-gradient(135deg, #C9A870, #E8C878)",
              border: "none",
              borderRadius: "14px",
              color: "#1A1A2E",
              fontWeight: 800,
              fontSize: "1.05rem",
              cursor: "pointer",
              fontFamily: "Nunito, sans-serif",
              boxShadow: "0 6px 24px rgba(201,168,112,0.4)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 10px 32px rgba(201,168,112,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(201,168,112,0.4)";
            }}
          >
            🎮 Start New Game
          </button>
          <button
            onClick={onLearn}
            style={{
              padding: "16px",
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: "14px",
              color: "#F5F7FA",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              fontFamily: "Nunito, sans-serif",
              transition: "border-color 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            📚 Tax Education Guide
          </button>
        </motion.div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "16px",
          color: "#7A8EA0",
          fontSize: "0.72rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        For educational purposes
      </div>
    </div>
  );
}
