export default function ExitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "6px",
        padding: "4px 10px",
        cursor: "pointer",
        color: "#B8C4CF",
        fontSize: "1rem",
        fontWeight: "bold",
        fontFamily: "Nunito, sans-serif",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        e.currentTarget.style.color = "#F5F7FA";
        e.currentTarget.style.borderColor = "rgba(201,168,112,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.color = "#B8C4CF";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
      }}
      title="Exit to profession selection"
    >
    ←
    </button>
  );
}
