// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { CitySkyline } from "./components/CitySkyline";
// import { ProgressBar } from "./components/ProgressBar";
// import {
//   PROFESSIONS,
//   getScenariosForProfession,
// } from "./components/Professions/export_all";
// import LoginModal from "./components/LoginModal";

// const GLASS = {
//   background: "rgba(255,255,255,0.10)",
//   backdropFilter: "blur(16px)",
//   WebkitBackdropFilter: "blur(16px)",
//   border: "1px solid rgba(255,255,255,0.18)",
// };

// const GLASS_DARK = {
//   background: "rgba(30,50,75,0.55)",
//   backdropFilter: "blur(20px)",
//   WebkitBackdropFilter: "blur(20px)",
//   border: "1px solid rgba(255,255,255,0.12)",
// };

// function StartScreen({ onNew, onLearn }) {
//   return (
//     <div
//       className="min-h-screen flex flex-col"
//       style={{
//         background:
//           "linear-gradient(160deg, #3d5266 0%, #5D6F82 50%, #4a5f72 100%)",
//         fontFamily: "Nunito, sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background decoration rings */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{ opacity: 0.06 }}
//       >
//         {[300, 500, 700, 900].map((size, i) => (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               width: size + "px",
//               height: size + "px",
//               borderRadius: "50%",
//               border: "1px solid white",
//               left: "50%",
//               top: "40%",
//               transform: "translate(-50%, -50%)",
//             }}
//           />
//         ))}
//       </div>

//       <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           style={{
//             background: "rgba(201,168,112,0.15)",
//             border: "1px solid rgba(201,168,112,0.5)",
//             borderRadius: "999px",
//             padding: "6px 20px",
//             color: "#C9A870",
//             fontSize: "0.78rem",
//             fontWeight: 700,
//             letterSpacing: "0.12em",
//             marginBottom: "20px",
//           }}
//         >
//           🏛️ ZED CIVIC EDUCATION PLATFORM
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           style={{
//             fontSize: "clamp(3rem, 10vw, 5rem)",
//             fontWeight: 900,
//             color: "#F5F7FA",
//             textAlign: "center",
//             lineHeight: 1.0,
//             letterSpacing: "-0.03em",
//             marginBottom: "12px",
//             textShadow: "0 4px 30px rgba(0,0,0,0.3)",
//           }}
//         >
//           The
//           <br />
//           <span style={{ color: "#C9A870" }}>Tax Trail</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           style={{
//             color: "#B8C4CF",
//             fontSize: "1rem",
//             textAlign: "center",
//             maxWidth: "320px",
//             lineHeight: 1.6,
//             fontFamily: "Inter, sans-serif",
//             marginBottom: "40px",
//           }}
//         >
//           Experience real tax decisions faced by workers. Build your city. Earn
//           compliance points. Learn by doing.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex gap-4 mb-10"
//         >
//           {[
//             { value: "4", label: "Scenarios" },
//             { value: "3", label: "Professions" },
//             { value: "K", label: "Kwacha" },
//           ].map(({ value, label }) => (
//             <div
//               key={label}
//               style={{
//                 ...GLASS,
//                 borderRadius: "12px",
//                 padding: "14px 22px",
//                 textAlign: "center",
//               }}
//             >
//               <div
//                 style={{
//                   color: "#C9A870",
//                   fontSize: "1.5rem",
//                   fontWeight: 900,
//                 }}
//               >
//                 {value}
//               </div>
//               <div
//                 style={{
//                   color: "#B8C4CF",
//                   fontSize: "0.68rem",
//                   fontWeight: 700,
//                   letterSpacing: "0.06em",
//                 }}
//               >
//                 {label}
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="flex flex-col gap-3 w-full max-w-xs"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <button
//             onClick={onNew}
//             style={{
//               padding: "16px",
//               background: "linear-gradient(135deg, #C9A870, #E8C878)",
//               border: "none",
//               borderRadius: "14px",
//               color: "#1A1A2E",
//               fontWeight: 800,
//               fontSize: "1.05rem",
//               cursor: "pointer",
//               fontFamily: "Nunito, sans-serif",
//               boxShadow: "0 6px 24px rgba(201,168,112,0.4)",
//               transition: "transform 0.15s, box-shadow 0.15s",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-3px)";
//               e.currentTarget.style.boxShadow =
//                 "0 10px 32px rgba(201,168,112,0.55)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow =
//                 "0 6px 24px rgba(201,168,112,0.4)";
//             }}
//           >
//             🎮 Start New Game
//           </button>
//           <button
//             onClick={onLearn}
//             style={{
//               padding: "16px",
//               background: "transparent",
//               border: "2px solid rgba(255,255,255,0.25)",
//               borderRadius: "14px",
//               color: "#F5F7FA",
//               fontWeight: 700,
//               fontSize: "1rem",
//               cursor: "pointer",
//               fontFamily: "Nunito, sans-serif",
//               transition: "border-color 0.15s, background 0.15s",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
//               e.currentTarget.style.background = "rgba(255,255,255,0.07)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
//               e.currentTarget.style.background = "transparent";
//             }}
//           >
//             📚 Tax Education Guide
//           </button>
//         </motion.div>
//       </div>

//       <div
//         style={{
//           textAlign: "center",
//           padding: "16px",
//           color: "#7A8EA0",
//           fontSize: "0.72rem",
//           fontFamily: "Inter, sans-serif",
//         }}
//       >
//         For educational purposes
//       </div>
//     </div>
//   );
// }

// function ProfessionScreen({ onSelect }) {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div
//       className="min-h-screen flex flex-col"
//       style={{
//         background: "linear-gradient(160deg, #3d5266 0%, #5D6F82 100%)",
//         fontFamily: "Nunito, sans-serif",
//         padding: "0 16px",
//       }}
//     >
//       <div className="flex flex-col items-center pt-14 pb-6">
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           style={{
//             color: "#C9A870",
//             fontSize: "0.75rem",
//             fontWeight: 700,
//             letterSpacing: "0.1em",
//             marginBottom: "10px",
//           }}
//         >
//           STEP 1 OF 2
//         </motion.div>
//         <motion.h2
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           style={{
//             color: "#F5F7FA",
//             fontSize: "1.8rem",
//             fontWeight: 900,
//             textAlign: "center",
//             marginBottom: "8px",
//           }}
//         >
//           Choose Your Profession
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           style={{
//             color: "#B8C4CF",
//             fontSize: "0.88rem",
//             textAlign: "center",
//             maxWidth: "300px",
//             fontFamily: "Inter, sans-serif",
//           }}
//         >
//           Each profession faces unique tax situations
//         </motion.p>
//       </div>

//       <div className="flex flex-col gap-4 max-w-md mx-auto w-full pb-12">
//         {PROFESSIONS.map((prof, i) => (
//           <motion.div
//             key={prof.id}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 + i * 0.1 }}
//             onClick={() => onSelect(prof)}
//             onMouseEnter={() => setHovered(prof.id)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               ...GLASS,
//               borderRadius: "16px",
//               padding: "20px",
//               cursor: "pointer",
//               transform:
//                 hovered === prof.id ? "translateX(6px)" : "translateX(0)",
//               transition: "all 0.2s ease",
//               background:
//                 hovered === prof.id
//                   ? "rgba(255,255,255,0.16)"
//                   : "rgba(255,255,255,0.10)",
//               borderLeft: `4px solid ${prof.color}`,
//             }}
//           >
//             <div className="flex items-center gap-4">
//               <div
//                 style={{
//                   width: "56px",
//                   height: "56px",
//                   borderRadius: "14px",
//                   background: `${prof.color}22`,
//                   border: `2px solid ${prof.color}55`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "1.8rem",
//                   flexShrink: 0,
//                 }}
//               >
//                 {prof.emoji}
//               </div>
//               <div className="flex-1">
//                 <div
//                   style={{
//                     color: "#F5F7FA",
//                     fontWeight: 800,
//                     fontSize: "1.1rem",
//                     marginBottom: "4px",
//                   }}
//                 >
//                   {prof.name}
//                 </div>
//                 <div
//                   style={{
//                     color: "#B8C4CF",
//                     fontSize: "0.82rem",
//                     lineHeight: 1.4,
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   {prof.description}
//                 </div>
//               </div>
//               <div
//                 style={{
//                   color: "#5EAF6E",
//                   fontWeight: 700,
//                   fontSize: "0.82rem",
//                   textAlign: "right",
//                   flexShrink: 0,
//                 }}
//               >
//                 <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>
//                   START
//                 </div>
//                 K{prof.startingMoney.toLocaleString()}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function CityScreen({ gameState, onNext }) {
//   const prof = gameState.profession;
//   const scenarios = getScenariosForProfession(prof.id);
//   const remaining = scenarios.length - gameState.scenarioIndex;

//   return (
//     <div
//       className="min-h-screen flex flex-col"
//       style={{
//         background: "linear-gradient(180deg, #1a2d3f 0%, #2d4a60 100%)",
//         fontFamily: "Nunito, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           ...GLASS_DARK,
//           padding: "14px 20px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           <div
//             style={{
//               color: "#C9A870",
//               fontSize: "0.72rem",
//               fontWeight: 700,
//               letterSpacing: "0.08em",
//             }}
//           >
//             {prof.emoji} {prof.name.toUpperCase()}
//           </div>
//           <div style={{ color: "#F5F7FA", fontWeight: 800, fontSize: "1rem" }}>
//             Your City
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <div style={{ textAlign: "right" }}>
//             <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>WALLET</div>
//             <div
//               style={{ color: "#5EAF6E", fontWeight: 800, fontSize: "1rem" }}
//             >
//               K{gameState.money.toLocaleString()}
//             </div>
//           </div>
//           <div style={{ textAlign: "right" }}>
//             <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>
//               COMPLIANCE
//             </div>
//             <div
//               style={{ color: "#C9A870", fontWeight: 800, fontSize: "1rem" }}
//             >
//               {gameState.compliance}%
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ position: "relative" }}>
//         <CitySkyline compliance={gameState.compliance} />
//         <div
//           style={{
//             position: "absolute",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             ...GLASS_DARK,
//             borderRadius: "10px",
//             padding: "8px 18px",
//             textAlign: "center",
//             whiteSpace: "nowrap",
//           }}
//         >
//           <div
//             style={{
//               color: "#B8C4CF",
//               fontSize: "0.75rem",
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             {gameState.compliance >= 70
//               ? "✨ Your city is thriving thanks to tax revenue"
//               : gameState.compliance >= 40
//                 ? "⚡ Your city needs better compliance to grow"
//                 : "⚠️ Low compliance is hurting your city"}
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "12px",
//         }}
//       >
//         <div style={{ ...GLASS, borderRadius: "14px", padding: "18px" }}>
//           <div className="flex flex-col gap-3">
//             <ProgressBar
//               value={gameState.compliance}
//               max={100}
//               label="Compliance Rating"
//               color={
//                 gameState.compliance >= 60
//                   ? "#5EAF6E"
//                   : gameState.compliance >= 30
//                     ? "#E8834A"
//                     : "#D4183D"
//               }
//             />
//             <ProgressBar
//               value={gameState.scenarioIndex}
//               max={scenarios.length}
//               label="Scenarios Completed"
//               color="#C9A870"
//             />
//           </div>
//         </div>

//         {gameState.lastChoice && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             style={{
//               background:
//                 gameState.lastChoice.outcome === "good"
//                   ? "rgba(94,175,110,0.15)"
//                   : gameState.lastChoice.outcome === "neutral"
//                     ? "rgba(232,131,74,0.15)"
//                     : "rgba(212,24,61,0.15)",
//               border: `1px solid ${
//                 gameState.lastChoice.outcome === "good"
//                   ? "rgba(94,175,110,0.35)"
//                   : gameState.lastChoice.outcome === "neutral"
//                     ? "rgba(232,131,74,0.35)"
//                     : "rgba(212,24,61,0.35)"
//               }`,
//               borderRadius: "12px",
//               padding: "14px 16px",
//             }}
//           >
//             <div
//               style={{
//                 color: "#F5F7FA",
//                 fontWeight: 700,
//                 fontSize: "0.88rem",
//                 marginBottom: "3px",
//               }}
//             >
//               Last: {gameState.lastChoice.consequenceTitle}
//             </div>
//             <div
//               style={{
//                 color: "#B8C4CF",
//                 fontSize: "0.78rem",
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               {gameState.lastChoice.scoreChange > 0 ? "+" : ""}
//               {gameState.lastChoice.scoreChange} compliance •{" "}
//               {gameState.lastChoice.moneyChange >= 0 ? "+" : ""}K
//               {gameState.lastChoice.moneyChange}
//             </div>
//           </motion.div>
//         )}

//         {remaining > 0 ? (
//           <button
//             onClick={onNext}
//             style={{
//               padding: "16px",
//               background: "linear-gradient(135deg, #C9A870, #E8C878)",
//               border: "none",
//               borderRadius: "14px",
//               color: "#1A1A2E",
//               fontWeight: 800,
//               fontSize: "1rem",
//               cursor: "pointer",
//               fontFamily: "Nunito, sans-serif",
//               boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
//               transition: "transform 0.15s",
//               width: "100%",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "translateY(-2px)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "translateY(0)")
//             }
//           >
//             Next Scenario ({remaining} remaining) →
//           </button>
//         ) : (
//           <button
//             onClick={onNext}
//             style={{
//               padding: "16px",
//               background: "linear-gradient(135deg, #5EAF6E, #45956e)",
//               border: "none",
//               borderRadius: "14px",
//               color: "white",
//               fontWeight: 800,
//               fontSize: "1rem",
//               cursor: "pointer",
//               fontFamily: "Nunito, sans-serif",
//               boxShadow: "0 4px 20px rgba(94,175,110,0.35)",
//               width: "100%",
//             }}
//           >
//             🏆 View Final Results →
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// function DecisionScreen({ gameState, onChoice }) {
//   const prof = gameState.profession;
//   const scenarios = getScenariosForProfession(prof.id);
//   const scenario = scenarios[gameState.scenarioIndex];
//   const [hovered, setHovered] = useState(null);

//   const outcomeColor = (outcome) => {
//     if (outcome === "good") return "#5EAF6E";
//     if (outcome === "neutral") return "#E8834A";
//     return "#D4183D";
//   };

//   const outcomeLabel = (outcome) => {
//     if (outcome === "good") return "✓ Compliant";
//     if (outcome === "neutral") return "⚡ Risky";
//     return "✗ Evasion";
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col"
//       style={{
//         background: "linear-gradient(160deg, #3d5266 0%, #5D6F82 100%)",
//         fontFamily: "Nunito, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           ...GLASS_DARK,
//           padding: "14px 20px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div
//           style={{
//             color: "#C9A870",
//             fontWeight: 700,
//             fontSize: "0.78rem",
//             letterSpacing: "0.08em",
//           }}
//         >
//           SCENARIO {gameState.scenarioIndex + 1} OF {scenarios.length}
//         </div>
//         <div className="flex gap-4">
//           <span style={{ color: "#5EAF6E", fontWeight: 700 }}>
//             K{gameState.money.toLocaleString()}
//           </span>
//           <span style={{ color: "#C9A870", fontWeight: 700 }}>
//             {gameState.compliance}% ✓
//           </span>
//         </div>
//       </div>

//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           padding: "20px",
//           gap: "14px",
//           maxWidth: "480px",
//           margin: "0 auto",
//           width: "100%",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           style={{ ...GLASS_DARK, borderRadius: "16px", padding: "22px" }}
//         >
//           <div style={{ fontSize: "2.2rem", marginBottom: "10px" }}>
//             {scenario.icon}
//           </div>
//           <div
//             style={{
//               color: "#C9A870",
//               fontSize: "0.72rem",
//               fontWeight: 700,
//               letterSpacing: "0.1em",
//               marginBottom: "6px",
//             }}
//           >
//             SITUATION
//           </div>
//           <h2
//             style={{
//               color: "#F5F7FA",
//               fontSize: "1.15rem",
//               fontWeight: 800,
//               marginBottom: "10px",
//             }}
//           >
//             {scenario.title}
//           </h2>
//           <p
//             style={{
//               color: "#B8C4CF",
//               fontSize: "0.88rem",
//               lineHeight: 1.6,
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             {scenario.situation}
//           </p>
//         </motion.div>

//         <div
//           style={{
//             color: "#B8C4CF",
//             fontSize: "0.72rem",
//             fontWeight: 700,
//             letterSpacing: "0.1em",
//           }}
//         >
//           WHAT DO YOU DO?
//         </div>

//         <div className="flex flex-col gap-3">
//           {scenario.choices.map((choice, i) => (
//             <motion.button
//               key={i}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 + i * 0.08 }}
//               onClick={() => onChoice(choice)}
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => setHovered(null)}
//               style={{
//                 background:
//                   hovered === i
//                     ? choice.outcome === "good"
//                       ? "rgba(94,175,110,0.22)"
//                       : choice.outcome === "neutral"
//                         ? "rgba(232,131,74,0.22)"
//                         : "rgba(212,24,61,0.18)"
//                     : choice.outcome === "good"
//                       ? "rgba(94,175,110,0.10)"
//                       : choice.outcome === "neutral"
//                         ? "rgba(232,131,74,0.10)"
//                         : "rgba(212,24,61,0.08)",
//                 border: `2px solid ${outcomeColor(choice.outcome)}${hovered === i ? "88" : "44"}`,
//                 borderRadius: "14px",
//                 padding: "16px 18px",
//                 cursor: "pointer",
//                 textAlign: "left",
//                 transition: "all 0.2s ease",
//                 transform: hovered === i ? "translateX(4px)" : "translateX(0)",
//                 width: "100%",
//               }}
//             >
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <div
//                     style={{
//                       color: "#F5F7FA",
//                       fontWeight: 700,
//                       fontSize: "0.95rem",
//                       marginBottom: "4px",
//                     }}
//                   >
//                     {choice.text}
//                   </div>
//                   {choice.subtext && (
//                     <div
//                       style={{
//                         color: "#B8C4CF",
//                         fontSize: "0.8rem",
//                         fontFamily: "Inter, sans-serif",
//                       }}
//                     >
//                       {choice.subtext}
//                     </div>
//                   )}
//                 </div>
//                 <div
//                   style={{
//                     color: outcomeColor(choice.outcome),
//                     fontSize: "0.68rem",
//                     fontWeight: 700,
//                     border: `1px solid ${outcomeColor(choice.outcome)}55`,
//                     borderRadius: "6px",
//                     padding: "3px 8px",
//                     flexShrink: 0,
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {outcomeLabel(choice.outcome)}
//                 </div>
//               </div>
//             </motion.button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ConsequenceScreen({ gameState, onContinue }) {
//   const choice = gameState.lastChoice;
//   const isGood = choice.outcome === "good";
//   const isBad = choice.outcome === "bad";

//   const bgGrad = isGood
//     ? "linear-gradient(160deg, #1a3d2e 0%, #2d6647 50%, #5D6F82 100%)"
//     : !isBad
//       ? "linear-gradient(160deg, #3d2e1a 0%, #6b4f20 50%, #5D6F82 100%)"
//       : "linear-gradient(160deg, #3d1a1a 0%, #6b2020 50%, #5D6F82 100%)";

//   const accentColor = isGood ? "#5EAF6E" : !isBad ? "#E8834A" : "#D4183D";

//   return (
//     <div
//       className="min-h-screen flex flex-col"
//       style={{ background: bgGrad, fontFamily: "Nunito, sans-serif" }}
//     >
//       {/* Split city visual */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           height: "200px",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             background: "linear-gradient(160deg, #1a4a30, #2d7a4a)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "16px",
//             position: "relative",
//           }}
//         >
//           <div style={{ fontSize: "2.8rem" }}>🏙️</div>
//           <div
//             style={{
//               color: "#5EAF6E",
//               fontWeight: 800,
//               fontSize: "0.82rem",
//               textAlign: "center",
//               marginTop: "6px",
//             }}
//           >
//             Compliant Path
//           </div>
//           <div
//             style={{
//               color: "#8FCFA0",
//               fontSize: "0.7rem",
//               textAlign: "center",
//               marginTop: "3px",
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             Thriving city
//           </div>
//           {isGood && (
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 border: "3px solid #5EAF6E",
//                 pointerEvents: "none",
//               }}
//             />
//           )}
//         </div>

//         <div
//           style={{
//             background: "linear-gradient(160deg, #4a1a1a, #7a2020)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "16px",
//             position: "relative",
//           }}
//         >
//           <div style={{ fontSize: "2.8rem" }}>🏚️</div>
//           <div
//             style={{
//               color: "#D4183D",
//               fontWeight: 800,
//               fontSize: "0.82rem",
//               textAlign: "center",
//               marginTop: "6px",
//             }}
//           >
//             Non-Compliant
//           </div>
//           <div
//             style={{
//               color: "#CF8A8A",
//               fontSize: "0.7rem",
//               textAlign: "center",
//               marginTop: "3px",
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             City in decay
//           </div>
//           {isBad && (
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 border: "3px solid #D4183D",
//                 pointerEvents: "none",
//               }}
//             />
//           )}
//         </div>

//         {/* Center pin */}
//         <div
//           style={{
//             position: "absolute",
//             left: "50%",
//             top: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "42px",
//             height: "42px",
//             borderRadius: "50%",
//             background: "#5D6F82",
//             border: "2px solid rgba(255,255,255,0.3)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "1.2rem",
//           }}
//         >
//           {isGood ? "✅" : !isBad ? "⚡" : "🚨"}
//         </div>
//       </div>

//       <div
//         style={{
//           flex: 1,
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "12px",
//           maxWidth: "480px",
//           margin: "0 auto",
//           width: "100%",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           style={{
//             ...GLASS_DARK,
//             borderRadius: "16px",
//             padding: "22px",
//             borderLeft: `4px solid ${accentColor}`,
//           }}
//         >
//           <div
//             style={{
//               color: accentColor,
//               fontSize: "0.72rem",
//               fontWeight: 700,
//               letterSpacing: "0.1em",
//               marginBottom: "6px",
//             }}
//           >
//             OUTCOME
//           </div>
//           <h2
//             style={{
//               color: "#F5F7FA",
//               fontSize: "1.2rem",
//               fontWeight: 900,
//               marginBottom: "10px",
//             }}
//           >
//             {choice.consequenceTitle}
//           </h2>
//           <p
//             style={{
//               color: "#B8C4CF",
//               fontSize: "0.88rem",
//               lineHeight: 1.6,
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             {choice.consequenceDesc}
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "10px",
//           }}
//         >
//           {[
//             {
//               label: "COMPLIANCE",
//               value: `${choice.scoreChange > 0 ? "+" : ""}${choice.scoreChange}`,
//               positive: choice.scoreChange >= 0,
//             },
//             {
//               label: "WALLET",
//               value: `${choice.moneyChange >= 0 ? "+" : ""}K${choice.moneyChange}`,
//               positive: choice.moneyChange >= 0,
//             },
//           ].map(({ label, value, positive }) => (
//             <div
//               key={label}
//               style={{
//                 ...GLASS,
//                 borderRadius: "12px",
//                 padding: "14px",
//                 textAlign: "center",
//                 borderTop: `3px solid ${positive ? "#5EAF6E" : "#D4183D"}`,
//               }}
//             >
//               <div
//                 style={{
//                   color: "#7A8EA0",
//                   fontSize: "0.68rem",
//                   marginBottom: "4px",
//                 }}
//               >
//                 {label}
//               </div>
//               <div
//                 style={{
//                   color: positive ? "#5EAF6E" : "#D4183D",
//                   fontWeight: 800,
//                   fontSize: "1.4rem",
//                 }}
//               >
//                 {value}
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           style={{
//             background: "rgba(201,168,112,0.12)",
//             border: "1px solid rgba(201,168,112,0.3)",
//             borderRadius: "12px",
//             padding: "14px 16px",
//             display: "flex",
//             gap: "10px",
//           }}
//         >
//           <span style={{ fontSize: "1.1rem" }}>💡</span>
//           <div>
//             <div
//               style={{
//                 color: "#C9A870",
//                 fontSize: "0.72rem",
//                 fontWeight: 700,
//                 marginBottom: "3px",
//               }}
//             >
//               TAX TIP
//             </div>
//             <div
//               style={{
//                 color: "#B8C4CF",
//                 fontSize: "0.8rem",
//                 fontFamily: "Inter, sans-serif",
//                 lineHeight: 1.5,
//               }}
//             >
//               {isGood
//                 ? "Voluntary compliance builds trust and unlocks formal business growth opportunities."
//                 : !isBad
//                   ? "Partial compliance carries real risk. "
//                   : "Tax evasion penalties can be 3-5× the original tax owed, plus potential criminal liability."}
//             </div>
//           </div>
//         </motion.div>

//         <button
//           onClick={onContinue}
//           style={{
//             padding: "16px",
//             background: "linear-gradient(135deg, #C9A870, #E8C878)",
//             border: "none",
//             borderRadius: "14px",
//             color: "#1A1A2E",
//             fontWeight: 800,
//             fontSize: "1rem",
//             cursor: "pointer",
//             fontFamily: "Nunito, sans-serif",
//             boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
//             transition: "transform 0.15s",
//             width: "100%",
//           }}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.transform = "translateY(-2px)")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.transform = "translateY(0)")
//           }
//         >
//           View Your City →
//         </button>
//       </div>
//     </div>
//   );
// }

// function EndScreen({ gameState, onPlayAgain }) {
//   const prof = gameState.profession;
//   const { compliance, money } = gameState;
//   const scenarios = getScenariosForProfession(prof.id);

//   const grade =
//     compliance >= 80
//       ? { label: "Tax Champion", emoji: "🏆", color: "#C9A870" }
//       : compliance >= 60
//         ? { label: "Compliant Citizen", emoji: "✅", color: "#5EAF6E" }
//         : compliance >= 40
//           ? { label: "Needs Improvement", emoji: "⚡", color: "#E8834A" }
//           : { label: "Non-Compliant", emoji: "⚠️", color: "#D4183D" };

//   return (
//     <div
//       className="min-h-screen flex flex-col"
//       style={{
//         background: "linear-gradient(160deg, #3d5266 0%, #5D6F82 100%)",
//         fontFamily: "Nunito, sans-serif",
//       }}
//     >
//       <div style={{ opacity: 0.75 }}>
//         <CitySkyline compliance={compliance} />
//       </div>

//       <div
//         style={{
//           flex: 1,
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "12px",
//           maxWidth: "480px",
//           margin: "0 auto",
//           width: "100%",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           style={{
//             ...GLASS_DARK,
//             borderRadius: "20px",
//             padding: "28px",
//             textAlign: "center",
//             borderTop: `4px solid ${grade.color}`,
//           }}
//         >
//           <div style={{ fontSize: "3rem", marginBottom: "8px" }}>
//             {grade.emoji}
//           </div>
//           <div
//             style={{
//               color: "#7A8EA0",
//               fontSize: "0.72rem",
//               fontWeight: 700,
//               letterSpacing: "0.1em",
//               marginBottom: "6px",
//             }}
//           >
//             FINAL RATING
//           </div>
//           <h2
//             style={{
//               color: grade.color,
//               fontSize: "1.7rem",
//               fontWeight: 900,
//               marginBottom: "4px",
//             }}
//           >
//             {grade.label}
//           </h2>
//           <div
//             style={{
//               color: "#B8C4CF",
//               fontSize: "0.84rem",
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             as a {prof.name} in Lusaka
//           </div>
//         </motion.div>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr 1fr",
//             gap: "10px",
//           }}
//         >
//           {[
//             {
//               label: "COMPLIANCE",
//               value: `${compliance}%`,
//               color: grade.color,
//             },
//             {
//               label: "WALLET",
//               value: `K${money.toLocaleString()}`,
//               color: "#5EAF6E",
//             },
//             {
//               label: "COMPLETED",
//               value: `${scenarios.length}/${scenarios.length}`,
//               color: "#C9A870",
//             },
//           ].map(({ label, value, color }) => (
//             <div
//               key={label}
//               style={{
//                 ...GLASS,
//                 borderRadius: "12px",
//                 padding: "14px 8px",
//                 textAlign: "center",
//               }}
//             >
//               <div
//                 style={{
//                   color: "#7A8EA0",
//                   fontSize: "0.62rem",
//                   fontWeight: 700,
//                   marginBottom: "5px",
//                 }}
//               >
//                 {label}
//               </div>
//               <div style={{ color, fontWeight: 800, fontSize: "1rem" }}>
//                 {value}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div style={{ ...GLASS, borderRadius: "14px", padding: "18px" }}>
//           <ProgressBar
//             value={compliance}
//             max={100}
//             label="Overall Compliance Rating"
//             color={grade.color}
//           />
//           <div
//             style={{
//               marginTop: "10px",
//               color: "#B8C4CF",
//               fontSize: "0.82rem",
//               fontFamily: "Inter, sans-serif",
//               lineHeight: 1.6,
//             }}
//           >
//             {compliance >= 80
//               ? "Outstanding Tax compliance builds trust, unlocks opportunities, and grows public revenue for everyone."
//               : compliance >= 60
//                 ? "Good work Consistent compliance is what drives national development and community services."
//                 : compliance >= 40
//                   ? "Mixed results. Each shortcut costs more in the long run. "
//                   : "This path leads to audits and penalties. Tax revenue funds schools, clinics, and roads — every kwacha matters."}
//           </div>
//         </div>

//         <div
//           style={{
//             background: "rgba(201,168,112,0.12)",
//             border: "1px solid rgba(201,168,112,0.3)",
//             borderRadius: "12px",
//             padding: "14px 16px",
//           }}
//         >
//           <div
//             style={{
//               color: "#C9A870",
//               fontSize: "0.72rem",
//               fontWeight: 700,
//               marginBottom: "6px",
//             }}
//           >
//             🏛️ DID YOU KNOW?
//           </div>
//           <div
//             style={{
//               color: "#B8C4CF",
//               fontSize: "0.82rem",
//               fontFamily: "Inter, sans-serif",
//               lineHeight: 1.5,
//             }}
//           >
//             an estimated amount collected was K82.6 billion in 2023, funding
//             education, healthcare, and infrastructure across all provinces.
//             Every kwacha declared matters.
//           </div>
//         </div>

//         <button
//           onClick={onPlayAgain}
//           style={{
//             padding: "16px",
//             background: "linear-gradient(135deg, #C9A870, #E8C878)",
//             border: "none",
//             borderRadius: "14px",
//             color: "#1A1A2E",
//             fontWeight: 800,
//             fontSize: "1rem",
//             cursor: "pointer",
//             fontFamily: "Nunito, sans-serif",
//             boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
//             transition: "transform 0.15s",
//             width: "100%",
//           }}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.transform = "translateY(-2px)")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.transform = "translateY(0)")
//           }
//         >
//           🔄 Play Again
//         </button>

//         <div
//           style={{
//             textAlign: "center",
//             color: "#7A8EA0",
//             fontSize: "0.75rem",
//             fontFamily: "Inter, sans-serif",
//             paddingBottom: "8px",
//           }}
//         >
//           Visit <span style={{ color: "#C9A870" }}>zra.org.zm</span> to register
//           your TPIN and file taxes online
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   const [screen, setScreen] = useState("start");
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
//   const [gameState, setGameState] = useState({
//     profession: null,
//     compliance: 50,
//     money: 0,
//     scenarioIndex: 0,
//     lastChoice: null,
//   });

//   const handleLogin = (userData) => {
//     console.log("Login attempted with:", userData);
//     setIsLoginModalOpen(false);
//   };
//   const handleSignUp = (userData) => {
//     console.log("Sign up successful:", userData);
//     setIsLoginModalOpen(false);
//   };

//   const handleProfessionSelect = (prof) => {
//     setGameState({
//       profession: prof,
//       compliance: 50,
//       money: prof.startingMoney,
//       scenarioIndex: 0,
//       lastChoice: null,
//     });
//     setScreen("city");
//   };

//   const handleCityNext = () => {
//     const scenarios = getScenariosForProfession(gameState.profession?.id);
//     if (gameState.scenarioIndex >= scenarios.length) {
//       setScreen("end");
//     } else {
//       setScreen("decision");
//     }
//   };

//   const handleChoice = (choice) => {
//     setGameState((prev) => ({
//       ...prev,
//       compliance: Math.max(
//         0,
//         Math.min(100, prev.compliance + choice.scoreChange),
//       ),
//       money: Math.max(0, prev.money + choice.moneyChange),
//       scenarioIndex: prev.scenarioIndex + 1,
//       lastChoice: choice,
//     }));
//     setScreen("consequence");
//   };

//   return (
//     <div style={{ fontFamily: "Nunito, sans-serif", minHeight: "100vh" }}>
//       {/* Login Modal */}
//       <LoginModal
//         isOpen={isLoginModalOpen}
//         onLogin={handleLogin}
//         onSignUp={handleSignUp}
//         onClose={() => setIsLoginModalOpen(false)}
//       />

//       {/* Main Game Content */}
//       <AnimatePresence mode="wait">
//         {screen === "start" && (
//           <motion.div
//             key="start"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.35 }}
//           >
//             <StartScreen
//               onNew={() => setScreen("profession")}
//               onLearn={() => window.open("https://www.zra.org.zm", "_blank")}
//             />
//           </motion.div>
//         )}
//         {screen === "profession" && (
//           <motion.div
//             key="profession"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.35 }}
//           >
//             <ProfessionScreen onSelect={handleProfessionSelect} />
//           </motion.div>
//         )}
//         {screen === "city" && (
//           <motion.div
//             key="city"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.35 }}
//           >
//             <CityScreen gameState={gameState} onNext={handleCityNext} />
//           </motion.div>
//         )}
//         {screen === "decision" && (
//           <motion.div
//             key={`decision-${gameState.scenarioIndex}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <DecisionScreen gameState={gameState} onChoice={handleChoice} />
//           </motion.div>
//         )}
//         {screen === "consequence" && (
//           <motion.div
//             key="consequence"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ConsequenceScreen
//               gameState={gameState}
//               onContinue={() => setScreen("city")}
//             />
//           </motion.div>
//         )}
//         {screen === "end" && (
//           <motion.div
//             key="end"
//             initial={{ opacity: 0, scale: 0.97 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <EndScreen
//               gameState={gameState}
//               onPlayAgain={() => {
//                 setGameState({
//                   profession: null,
//                   compliance: 50,
//                   money: 0,
//                   scenarioIndex: 0,
//                   lastChoice: null,
//                 });
//                 setScreen("start");
//               }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CitySkyline } from "./components/CitySkyline";
import { ProgressBar } from "./components/ProgressBar";
import {
  PROFESSIONS,
  getRandomScenariosForProfession,
} from "./components/Professions/export_all";
import LoginModal from "./components/LoginModal";

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

function StartScreen({ onNew, onLearn }) {
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
            { value: "4", label: "Scenarios" },
            { value: "3", label: "Professions" },
            { value: "K", label: "Kwacha" },
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

function ProfessionScreen({ onSelect }) {
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

function CityScreen({ gameState, onNext }) {
  const prof = gameState.profession;
  const scenarios = gameState.scenarios;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #1a2d3f 0%, #2d4a60 100%)",
        fontFamily: "Nunito, sans-serif",
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
        <div className="flex gap-4">
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>WALLET</div>
            <div
              style={{ color: "#5EAF6E", fontWeight: 800, fontSize: "1rem" }}
            >
              K{gameState.money.toLocaleString()}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#7A8EA0", fontSize: "0.68rem" }}>
              COMPLIANCE
            </div>
            <div
              style={{ color: "#C9A870", fontWeight: 800, fontSize: "1rem" }}
            >
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
            Next Scenario →
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

function DecisionScreen({ gameState, onChoice }) {
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

function ConsequenceScreen({ gameState, onContinue }) {
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
      style={{ background: bgGrad, fontFamily: "Nunito, sans-serif" }}
    >
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

function EndScreen({ gameState, onPlayAgain }) {
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
    // You can add actual authentication logic here
    // For now, just close the modal and stay on start screen
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
            <CityScreen gameState={gameState} onNext={handleCityNext} />
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
            <DecisionScreen gameState={gameState} onChoice={handleChoice} />
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
