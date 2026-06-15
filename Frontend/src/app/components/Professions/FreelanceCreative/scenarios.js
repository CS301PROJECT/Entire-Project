export const CREATIVE_SCENARIOS = [
  {
    id: "creative_s1",
    title: "First Big Client Payment",
    situation:
      "You completed a K5,000 logo design for a Lusaka-based company. They paid via mobile money. This is your first significant income this quarter. How do you handle it?",
    icon: "💼",
    choices: [
      {
        text: "Issue a proper invoice and declare full amount",
        subtext: "Include 5% withholding tax",
        outcome: "good",
        consequenceTitle: "Professional Reputation Grows!",
        consequenceDesc:
          "Your client appreciates the formal invoice. They refer two other businesses to you. Your professional network expands through proper documentation.",
        scoreChange: 20,
        moneyChange: -250,
      },
      {
        text: "Declare half, keep half off-record",
        subtext: "Split the payment",
        outcome: "neutral",
        consequenceTitle: "Walking a Fine Line",
        consequenceDesc:
          "You saved some tax today, but your client's records show the full payment. If audited, the mismatch will be visible. ZRA is increasingly connecting digital payment trails.",
        scoreChange: -10,
        moneyChange: -125,
      },
      {
        text: "No invoice, no declaration",
        subtext: "Keep everything off the books",
        outcome: "bad",
        consequenceTitle: "Missed Opportunity",
        consequenceDesc:
          "You saved short-term tax but lost a formal business reference. The client won't work with you again without proper documentation. No paper trail means no legal recourse if unpaid.",
        scoreChange: -20,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "creative_s2",
    title: "Equipment Upgrade",
    situation:
      "Your laptop is failing. A new one costs K8,000. You need it for client work. How do you finance it?",
    icon: "💻",
    choices: [
      {
        text: "Save receipts and claim capital allowance",
        subtext: "Formal depreciation claim",
        outcome: "good",
        consequenceTitle: "Tax Smart Purchase!",
        consequenceDesc:
          "Your equipment purchase qualifies for capital allowance. You reduce taxable income by 25% of the cost over two years. Smart tax planning builds sustainable business.",
        scoreChange: 15,
        moneyChange: -8000,
      },
      {
        text: "Buy second-hand, no receipt",
        subtext: "Informal purchase",
        outcome: "neutral",
        consequenceTitle: "Functional but No Tax Benefit",
        consequenceDesc:
          "The laptop works, but without proper documentation, you can't claim any tax deduction. Missing out on legitimate savings.",
        scoreChange: 0,
        moneyChange: -4000,
      },
      {
        text: "Borrow from emergency fund",
        subtext: "No paper trail",
        outcome: "bad",
        consequenceTitle: "No Documentation, No Deduction",
        consequenceDesc:
          "You have the equipment but zero tax benefit. An audit would find a laptop with no paper trail - potentially flagged as unexplained asset.",
        scoreChange: -10,
        moneyChange: -8000,
      },
    ],
  },
  // Add more creative scenarios...
];
