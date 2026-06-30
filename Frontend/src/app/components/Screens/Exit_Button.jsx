// export default function ExitButton({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         position: "absolute",
//         top: "16px",
//         right: "16px",
//         zIndex: 50,
//         background: "rgba(255,255,255,0.1)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//         border: "1px solid rgba(255,255,255,0.2)",
//         borderRadius: "50%",
//         width: "44px",
//         height: "44px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         cursor: "pointer",
//         color: "#F5F7FA",
//         fontSize: "1.2rem",
//         transition: "all 0.2s ease",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.background = "rgba(255,255,255,0.2)";
//         e.currentTarget.style.transform = "scale(1.1)";
//         e.currentTarget.style.borderColor = "rgba(201,168,112,0.6)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//         e.currentTarget.style.transform = "scale(1)";
//         e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
//       }}
//       title="Exit to profession selection"
//     >
//       ✕
//     </button>
//   );
// }

// components/screens/ExitButton.jsx

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
        fontSize: "0.7rem",
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
      ✕ Exit
    </button>
  );
}
