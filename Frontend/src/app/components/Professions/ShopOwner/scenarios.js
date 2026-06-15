export const SHOPOWNER_SCENARIOS = [
  {
    id: "shop_s1",
    title: "Supplier Invoice",
    situation:
      "A new wholesale supplier offers you goods at 15% lower prices - but they won't issue an invoice or receipt. Your current supplier provides full documentation. What do you do?",
    icon: "📦",
    choices: [
      {
        text: "Stay with documented supplier",
        subtext: "Higher cost but proper records",
        outcome: "good",
        consequenceTitle: "Audit-Ready Business",
        consequenceDesc:
          "Your proper documentation builds trust with ZRA. When an audit happens, you're prepared. The small extra cost is insurance against penalties.",
        scoreChange: 20,
        moneyChange: -300,
      },
      {
        text: "Take cheaper, no receipt option",
        subtext: "Save money now",
        outcome: "neutral",
        consequenceTitle: "Hidden Risk",
        consequenceDesc:
          "You saved K300 this month, but ZRA can disallow all undocumented purchases. If audited, you'll pay tax on gross sales with no deductions.",
        scoreChange: -15,
        moneyChange: 300,
      },
      // Add more choices...
    ],
  },
  // Add more shop scenarios...
];
