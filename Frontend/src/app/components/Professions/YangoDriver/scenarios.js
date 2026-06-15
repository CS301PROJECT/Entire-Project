export const YANGO_SCENARIOS = [
  {
    id: "yango_s1",
    title: "Monthly Earnings Arrive",
    situation:
      "You've had a great month on Yango — K2,500 deposited into your Airtel Money. ZRA's system flags income above K2,000 for self-employed workers. What do you do?",
    icon: "💰",
    choices: [
      {
        text: "Declare all K2,500 to ZRA",
        subtext: "Pay K125 turnover tax (5%)",
        outcome: "good",
        consequenceTitle: "Integrity Pays Off!",
        consequenceDesc:
          "You declared your income honestly. ZRA issues you a Tax Clearance Certificate valid for 12 months. Airlines, banks, and government contracts now trust you. Your compliance rating rises.",
        scoreChange: 20,
        moneyChange: -125,
      },
      {
        text: "Declare K1,800 only",
        subtext: "Underreport to reduce tax",
        outcome: "neutral",
        consequenceTitle: "Short-term Savings, Long-term Risk",
        consequenceDesc:
          "You saved some kwacha today, but ZRA cross-references Yango's digital records. A small discrepancy flag is raised on your file. You avoid penalty this time, but the risk grows.",
        scoreChange: -5,
        moneyChange: -90,
      },
      {
        text: "Declare nothing",
        subtext: "Skip tax entirely",
        outcome: "bad",
        consequenceTitle: "Red Flag Alert!",
        consequenceDesc:
          "ZRA's digital systems match Yango's payment records to your TPIN. You receive a formal audit notice. A 30% penalty is applied plus back taxes. This costs far more than the original tax.",
        scoreChange: -25,
        moneyChange: -375,
      },
    ],
  },
  {
    id: "yango_s2",
    title: "ZRA Audit Notice Arrives",
    situation:
      "A text message from ZRA-Zambia reads: 'Your TPIN has been selected for a routine income verification. Please respond within 14 days.' Your friend says to ignore it. What do you do?",
    icon: "📋",
    choices: [
      {
        text: "Respond immediately with records",
        subtext: "Bring 3 months of Airtel Money statements",
        outcome: "good",
        consequenceTitle: "Cleared with Confidence!",
        consequenceDesc:
          "You showed up prepared. The ZRA officer was impressed by your organized records. The audit closes in your favor and a note of good standing is added to your taxpayer profile.",
        scoreChange: 25,
        moneyChange: 0,
      },
      {
        text: "Ask a tax agent to handle it",
        subtext: "Pay K200 for professional help",
        outcome: "neutral",
        consequenceTitle: "Professional Help Works",
        consequenceDesc:
          "The agent navigated the audit for you. It cost K200 but avoided errors. A good outcome, though you now realize you could have done this yourself with some knowledge.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Ignore the notice",
        subtext: "Hope it goes away",
        outcome: "bad",
        consequenceTitle: "Enforcement Action!",
        consequenceDesc:
          "Ignoring ZRA triggers an enforcement visit. Your Yango driver account is temporarily suspended pending verification. You lose 5 days of income while the case is resolved.",
        scoreChange: -30,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "yango_s3",
    title: "Tax Clearance Opportunity",
    situation:
      "Yango Zambia offers premium 'Pro Driver' status to drivers with valid ZRA Tax Clearance Certificates — unlocking K500/month bonus rides and corporate pickups. The certificate costs K50 to process.",
    icon: "⭐",
    choices: [
      {
        text: "Apply for the certificate now",
        subtext: "K50 processing fee",
        outcome: "good",
        consequenceTitle: "Pro Driver Status Unlocked!",
        consequenceDesc:
          "Your Tax Clearance Certificate opens the door to corporate clients and airport runs. Your monthly earnings jump significantly. Formal compliance created a real economic reward.",
        scoreChange: 20,
        moneyChange: 450,
      },
      {
        text: "Wait until next quarter",
        subtext: "Miss this opportunity",
        outcome: "neutral",
        consequenceTitle: "Opportunity Deferred",
        consequenceDesc:
          "You put it off. Another driver in your area nabbed the Pro status and is now earning K500 more per month. The certificate is still available, but you missed this cycle's bonuses.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Skip it — too much paperwork",
        subtext: "Stay informal",
        outcome: "bad",
        consequenceTitle: "Locked Out of Growth",
        consequenceDesc:
          "Without formal compliance, you stay in the low-tier ride pool. Over 6 months, compliant drivers earn K3,000 more. Staying informal is quietly very costly.",
        scoreChange: -15,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "yango_s4",
    title: "Windfall Week",
    situation:
      "The Lusaka Agricultural Show brought massive demand — you earned K4,800 this week alone. This crosses the quarterly threshold for mandatory PAYE registration for self-employed earners.",
    icon: "🎉",
    choices: [
      {
        text: "Register for PAYE voluntarily",
        subtext: "Become a formal taxpayer",
        outcome: "good",
        consequenceTitle: "Formal Business Status!",
        consequenceDesc:
          "Registering PAYE unlocks access to ZRA's small business support portal, bank loan pre-approval, and government tender lists. You pay K240 tax but gain far more in opportunities.",
        scoreChange: 25,
        moneyChange: -240,
      },
      {
        text: "Donate K500 to a local cause",
        subtext: "CSR deduction strategy",
        outcome: "neutral",
        consequenceTitle: "Partial Credit",
        consequenceDesc:
          "Donating to registered charities is a valid deduction. You reduce tax legally, though you still need to file. A reasonable strategy, done partially correctly.",
        scoreChange: 5,
        moneyChange: -500,
      },
      {
        text: "Split cash across family accounts",
        subtext: "Avoid registration threshold",
        outcome: "bad",
        consequenceTitle: "Structuring Detected!",
        consequenceDesc:
          "ZRA's AI flags systematic splitting as potential tax evasion. Your case is referred to the Financial Intelligence Unit. Legal fees to resolve this far exceed the original tax.",
        scoreChange: -35,
        moneyChange: -800,
      },
    ],
  },
];
