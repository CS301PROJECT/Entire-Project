export const MUSIC_SCENARIOS = [
  {
    id: "music_s1",
    title: "First Single Release",
    situation:
      "You release your first single on streaming platforms. You earn K500 in royalties this month from Boomplay, Apple Music, and Spotify. You've never filed taxes before.",
    icon: "🎵",
    choices: [
      {
        text: "Register for a TPIN and declare K500",
        subtext: "Pay K25 tax (5%)",
        outcome: "good",
        consequenceTitle: "Welcome to Formal Taxation!",
        consequenceDesc:
          "ZRA registers you as a creative professional. You receive a welcome package for small taxpayers and a Taxpayer Education booklet. Your compliance journey starts strong.",
        scoreChange: 20,
        moneyChange: -25,
      },
      {
        text: "Wait until you earn more before declaring",
        subtext: "Delaying to avoid paperwork",
        outcome: "neutral",
        consequenceTitle: "Delayed Compliance",
        consequenceDesc:
          "You save K25 today, but interest and penalties are accumulating. Small amounts can become big problems if ignored too long.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Keep it all and declare nothing",
        subtext: "Hope ZRA doesn't notice K500",
        outcome: "bad",
        consequenceTitle: "Early Red Flag!",
        consequenceDesc:
          "ZRA's system flags unreported streaming income. You receive a K100 penalty notice. What could have been K25 tax becomes K125 total cost.",
        scoreChange: -15,
        moneyChange: -100,
      },
    ],
  },
  {
    id: "music_s2",
    title: "Live Performance Cash Payment",
    situation:
      "A club owner pays you K2,500 cash for a live show. He says 'no receipt, it's between us.' No one will know, right?",
    icon: "🎤",
    choices: [
      {
        text: "Issue a receipt and declare the K2,500",
        subtext: "Pay K125 turnover tax",
        outcome: "good",
        consequenceTitle: "Professional Artist!",
        consequenceDesc:
          "The club owner respects you more for being professional. You have clean records and ZRA sees you as a compliant taxpayer. This helps with future venue bookings.",
        scoreChange: 20,
        moneyChange: -125,
      },
      {
        text: "Deposit the cash but don't declare it",
        subtext: "Hide it in a personal account",
        outcome: "neutral",
        consequenceTitle: "Ticking Time Bomb",
        consequenceDesc:
          "You saved K125 today, but the deposit appears on your bank statement. If audited, you'll pay the K125 plus a K250 penalty. The risk is real.",
        scoreChange: -8,
        moneyChange: 0,
      },
      {
        text: "Keep it all in cash and spend it",
        subtext: "No paper trail, no tax!",
        outcome: "bad",
        consequenceTitle: "Cash Evasion Caught",
        consequenceDesc:
          "ZRA cross-references club attendance records with taxpayer declarations. The club owner reported the expense. You're now facing a K750 penalty for the K2,500.",
        scoreChange: -25,
        moneyChange: -750,
      },
    ],
  },
  {
    id: "music_s3",
    title: "Home Studio Investment",
    situation:
      "You spend K15,000 on building your own home recording studio. This is a major expense. How do you handle this for tax purposes?",
    icon: "🎛️",
    choices: [
      {
        text: "Register it as a business asset",
        subtext: "Claim depreciation over 5 years",
        outcome: "good",
        consequenceTitle: "Smart Asset Management",
        consequenceDesc:
          "You can claim K3,000 as depreciation each year for 5 years. This reduces your tax bill by K150 annually. Your studio is now recognized as a business asset.",
        scoreChange: 18,
        moneyChange: 0,
      },
      {
        text: "Claim it all as an expense this year",
        subtext: "Aggressive deduction",
        outcome: "neutral",
        consequenceTitle: "Audit Trigger",
        consequenceDesc:
          "ZRA questions why you spent K15,000 on a studio in one year. You get a warning and must spread the deduction over 3 years. You have to repay K300.",
        scoreChange: -5,
        moneyChange: -300,
      },
      {
        text: "Don't record it at all",
        subtext: "Too complicated",
        outcome: "bad",
        consequenceTitle: "Missed Opportunity",
        consequenceDesc:
          "You missed K3,000 in annual tax deductions. Over 5 years, that's K750 in tax savings you lost. Your studio is an asset, and you ignored it.",
        scoreChange: -10,
        moneyChange: -750,
      },
    ],
  },
  {
    id: "music_s4",
    title: "Music Video Production",
    situation:
      "Your music video costs K8,000 to produce. You budgeted K5,000. The extra K3,000 came from a friend. How do you account for this?",
    icon: "🎬",
    choices: [
      {
        text: "Document the loan and video expenses properly",
        subtext: "Track every kwacha",
        outcome: "good",
        consequenceTitle: "Professional Record Keeping",
        consequenceDesc:
          "Your books are clean. You claim K8,000 as a business expense, saving K400 in tax. Your friend's loan is properly documented.",
        scoreChange: 15,
        moneyChange: -400,
      },
      {
        text: "Treat the extra K3,000 as a gift",
        subtext: "No tax implications",
        outcome: "neutral",
        consequenceTitle: "Wrong Classification",
        consequenceDesc:
          "You don't report the gift, but technically it's not taxable. The video is a legitimate expense, but you only claim K5,000. You missed K150 in tax savings.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Claim K8,000 without proper records",
        subtext: "No receipts, just claim it",
        outcome: "bad",
        consequenceTitle: "Fraudulent Claim",
        consequenceDesc:
          "ZRA audits you and finds no evidence of K3,000 from your friend. You face a K2,400 penalty for fraudulent expense claims.",
        scoreChange: -30,
        moneyChange: -2400,
      },
    ],
  },
  {
    id: "music_s5",
    title: "International Royalties",
    situation:
      "DistroKid deposits $300 (approx K7,000) into your bank account. It's your first international royalty payment.",
    icon: "🌍",
    choices: [
      {
        text: "Declare the full K7,000",
        subtext: "Pay K350 tax",
        outcome: "good",
        consequenceTitle: "Global Taxpayer",
        consequenceDesc:
          "You've become an international artist. ZRA records your foreign income. This builds your credibility with banks and future investors.",
        scoreChange: 20,
        moneyChange: -350,
      },
      {
        text: "Declare it only if ZRA asks",
        subtext: "Play the odds",
        outcome: "neutral",
        consequenceTitle: "Foreign Income Risk",
        consequenceDesc:
          "Your bank reports the USD deposit to ZRA. You're now in their system. The risk of being caught with unreported income is high. A K250 penalty could apply.",
        scoreChange: -8,
        moneyChange: -250,
      },
      {
        text: "Try to hide it in a separate account",
        subtext: "Open a dollar account",
        outcome: "bad",
        consequenceTitle: "Currency Monitoring",
        consequenceDesc:
          "ZRA monitors all foreign currency transactions. Your attempt to hide income is flagged. You pay a K700 penalty plus back taxes.",
        scoreChange: -25,
        moneyChange: -700,
      },
    ],
  },
  {
    id: "music_s6",
    title: "Feature Collaboration Payment",
    situation:
      "A fellow artist pays you K1,500 for a feature on their album. They're handling the project. How do you handle the payment?",
    icon: "🎙️",
    choices: [
      {
        text: "Declare it as additional income",
        subtext: "Pay K75 tax",
        outcome: "good",
        consequenceTitle: "Collaborator Compliance",
        consequenceDesc:
          "You build a reputation as a professional collaborator. Other artists trust you because you handle tax properly. Your TPIN is now associated with quality work.",
        scoreChange: 15,
        moneyChange: -75,
      },
      {
        text: "Accept it as a 'gift'",
        subtext: "Say it's a thank you",
        outcome: "neutral",
        consequenceTitle: "Gray Area",
        consequenceDesc:
          "You technically received income. If audited, you'll have to explain why a 'gift' looks exactly like a feature fee. A risky position.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Don't declare and don't issue a receipt",
        subtext: "Off-the-books arrangement",
        outcome: "bad",
        consequenceTitle: "Hidden Collaboration",
        consequenceDesc:
          "The other artist claims the expense. ZRA cross-references and discovers you didn't declare. You face a K300 penalty on the K1,500.",
        scoreChange: -20,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "music_s7",
    title: "SoundCloud Monetization",
    situation:
      "SoundCloud activates monetization on your tracks. You earn K200/month from plays. It's small, but it's coming in regularly.",
    icon: "☁️",
    choices: [
      {
        text: "Include it in your quarterly returns",
        subtext: "Pay K10 tax monthly",
        outcome: "good",
        consequenceTitle: "Small Income, Big Habit",
        consequenceDesc:
          "You're building a habit of declaring all income, no matter how small. ZRA sees you as a consistent taxpayer. Your rating improves.",
        scoreChange: 12,
        moneyChange: -30,
      },
      {
        text: "Wait until it exceeds K500",
        subtext: "Declaration threshold",
        outcome: "neutral",
        consequenceTitle: "Threshold Trap",
        consequenceDesc:
          "You're not declaring K200 monthly. After 3 months, it's K600. You've now crossed the threshold and owe back taxes plus interest.",
        scoreChange: -5,
        moneyChange: -60,
      },
      {
        text: "Ignore it completely",
        subtext: "Too small to matter",
        outcome: "bad",
        consequenceTitle: "Cumulative Risk",
        consequenceDesc:
          "After 12 months, you've earned K2,400 undeclared. ZRA can see these payments. You now owe K120 tax + K480 penalty. Small becomes big.",
        scoreChange: -18,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "music_s8",
    title: "Merchandise Sales",
    situation:
      "You sell 100 T-shirts at K100 each during a show. That's K10,000 in cash sales. You don't have a proper inventory system.",
    icon: "👕",
    choices: [
      {
        text: "Record all sales and declare K10,000",
        subtext: "Pay K500 tax",
        outcome: "good",
        consequenceTitle: "Merchant Musician",
        consequenceDesc:
          "You now have a merchandise business. You can claim the T-shirt production costs (K4,000) as expenses. Net profit: K6,000 taxable at K300.",
        scoreChange: 18,
        moneyChange: -300,
      },
      {
        text: "Report 70% of sales (K7,000)",
        subtext: "Underreport to save K150",
        outcome: "neutral",
        consequenceTitle: "Inventory Discrepancy",
        consequenceDesc:
          "You bought 100 shirts. ZRA can see you sold them all. The 30% unreported is flagged. You face a 50% penalty on K3,000.",
        scoreChange: -8,
        moneyChange: -450,
      },
      {
        text: "Report nothing about merchandise",
        subtext: "Treat it as informal sales",
        outcome: "bad",
        consequenceTitle: "Lost Opportunity",
        consequenceDesc:
          "You don't report K10,000. You also can't claim the K4,000 production cost. You've evaded tax and missed a deduction. Double loss.",
        scoreChange: -25,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "music_s9",
    title: "Brand Endorsement Deal",
    situation:
      "A beverage company offers K6,000 for a 3-month social media endorsement. They demand a formal receipt for tax purposes.",
    icon: "📱",
    choices: [
      {
        text: "Register as a sole trader and issue receipt",
        subtext: "Pay K300 tax",
        outcome: "good",
        consequenceTitle: "Brand Ambassador",
        consequenceDesc:
          "Your brand endorsement income is properly recorded. This builds your professional profile. Other brands now see you as a legitimate partner.",
        scoreChange: 20,
        moneyChange: -300,
      },
      {
        text: "Ask them to pay in installments",
        subtext: "Avoid crossing thresholds",
        outcome: "neutral",
        consequenceTitle: "Installment Tactic",
        consequenceDesc:
          "You still owe K300 tax, just spread out. This doesn't reduce your liability, it just delays it. ZRA doesn't care about installment timing.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Refuse because of tax implications",
        subtext: "Miss the K6,000",
        outcome: "bad",
        consequenceTitle: "Fear of Tax, Loss of Income",
        consequenceDesc:
          "You turned down K6,000 because you're afraid of paying K300 tax. A competitor takes the deal. They're now earning more and paying tax.",
        scoreChange: -15,
        moneyChange: -6000,
      },
    ],
  },
  {
    id: "music_s10",
    title: "ZRA Streaming Verification",
    situation:
      "ZRA sends a notice asking you to explain K12,000 in unexplained Spotify deposits. You never declared them.",
    icon: "🔍",
    choices: [
      {
        text: "File an amended return immediately",
        subtext: "Pay K600 tax + K60 penalty",
        outcome: "good",
        consequenceTitle: "Voluntary Disclosure",
        consequenceDesc:
          "ZRA notes your honesty. You pay the tax and a small penalty. Your taxpayer rating remains intact. This is the best outcome.",
        scoreChange: 18,
        moneyChange: -660,
      },
      {
        text: "Claim they were personal gifts",
        subtext: "Try to misclassify income",
        outcome: "neutral",
        consequenceTitle: "Unlikely Defense",
        consequenceDesc:
          "ZRA doesn't buy it. You pay K600 tax and a K300 penalty for misrepresentation. You've damaged your credibility.",
        scoreChange: -10,
        moneyChange: -900,
      },
      {
        text: "Ignore the notice",
        subtext: "Hope it goes away",
        outcome: "bad",
        consequenceTitle: "Enforcement Action",
        consequenceDesc:
          "ZRA imposes a K1,800 penalty (150% of tax due). Your account is flagged for intensive monitoring. This mistake will haunt you.",
        scoreChange: -30,
        moneyChange: -1800,
      },
    ],
  },
  {
    id: "music_s11",
    title: "Album Recording Loan",
    situation:
      "You borrow K20,000 from a bank to record an album. You're paying 15% interest (K3,000/year). How does this affect your tax?",
    icon: "💳",
    choices: [
      {
        text: "Claim the interest as a business expense",
        subtext: "Saves K150/year in tax",
        outcome: "good",
        consequenceTitle: "Smart Borrowing",
        consequenceDesc:
          "The K3,000 interest reduces your taxable income. Over 5 years, you save K750 in tax. This is a legitimate financial strategy.",
        scoreChange: 12,
        moneyChange: -150,
      },
      {
        text: "Don't claim the interest",
        subtext: "Avoid complications",
        outcome: "neutral",
        consequenceTitle: "Missed Deduction",
        consequenceDesc:
          "You paid K3,000 interest but didn't claim it. You lost K150 in tax savings. It was simple to claim, but you didn't.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Claim the entire K20,000 as an expense",
        subtext: "Treat loan as business expense",
        outcome: "bad",
        consequenceTitle: "Fraudulent Claim",
        consequenceDesc:
          "A loan isn't an expense, only the interest is deductible. ZRA catches this and you face a K4,000 penalty. This is fraud.",
        scoreChange: -35,
        moneyChange: -4000,
      },
    ],
  },
  {
    id: "music_s12",
    title: "International Tour Income",
    situation:
      "You perform in South Africa and earn K18,000. The money goes to your Zambian account. Is this taxable?",
    icon: "✈️",
    choices: [
      {
        text: "Declare it as foreign income",
        subtext: "Pay K900 tax",
        outcome: "good",
        consequenceTitle: "Global Artist",
        consequenceDesc:
          "You're now an international performer. Zambia taxes worldwide income. Your clean compliance opens doors to more international gigs.",
        scoreChange: 25,
        moneyChange: -900,
      },
      {
        text: "Only declare 50%",
        subtext: "Claim it's for personal expenses",
        outcome: "neutral",
        consequenceTitle: "Partial Income",
        consequenceDesc:
          "ZRA has records of the full K18,000. Your 50% declaration doesn't match. You pay K900 tax plus K450 penalty.",
        scoreChange: -10,
        moneyChange: -1350,
      },
      {
        text: "Claim it's not Zambian income",
        subtext: "Argue it's foreign-sourced",
        outcome: "bad",
        consequenceTitle: "Tax Treaty Ignorance",
        consequenceDesc:
          "Zambia taxes worldwide income for residents. Your argument fails. You pay K900 tax + K900 penalty + legal fees.",
        scoreChange: -30,
        moneyChange: -1800,
      },
    ],
  },
  {
    id: "music_s13",
    title: "Music Distribution Expenses",
    situation:
      "You pay K2,500/year to DistroKid, CD Baby, and TuneCore for distribution. Is this a business expense?",
    icon: "📡",
    choices: [
      {
        text: "Claim it as a business expense",
        subtext: "Reduces tax by K125",
        outcome: "good",
        consequenceTitle: "Smart Distribution",
        consequenceDesc:
          "Distribution costs are essential for a musician. You claim K2,500 and save K125 in tax. Your records are accurate.",
        scoreChange: 10,
        moneyChange: -125,
      },
      {
        text: "Split it between personal and business",
        subtext: "50% deduction",
        outcome: "neutral",
        consequenceTitle: "Partial Deduction",
        consequenceDesc:
          "You claim K1,250, saving K62.50. You've missed half the deduction, but you're safer from audit. A conservative approach.",
        scoreChange: 0,
        moneyChange: -62.50,
      },
      {
        text: "Ignore it completely",
        subtext: "Don't claim anything",
        outcome: "bad",
        consequenceTitle: "Lost Savings",
        consequenceDesc:
          "You're paying K125 more tax than necessary. Over 5 years, that's K625. You're losing money through inaction.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s14",
    title: "Sync Licensing Opportunity",
    situation:
      "An advertising agency wants to use your song in a TV commercial. They offer K4,000. They need a proper invoice.",
    icon: "📺",
    choices: [
      {
        text: "Issue an invoice and pay K200 tax",
        subtext: "Professional transaction",
        outcome: "good",
        consequenceTitle: "Sync Licensing Pro",
        consequenceDesc:
          "Your song is on TV! You've earned K4,000 and paid K200 tax. This exposure leads to more sync deals. Your career is growing.",
        scoreChange: 20,
        moneyChange: -200,
      },
      {
        text: "Accept cash, no invoice",
        subtext: "Off the books",
        outcome: "neutral",
        consequenceTitle: "Hidden Sync Deal",
        consequenceDesc:
          "You got K4,000 cash. You didn't declare it. The agency, however, has expense records. If ZRA audits them, you'll be exposed.",
        scoreChange: -8,
        moneyChange: 0,
      },
      {
        text: "Ask for offshore payment",
        subtext: "Try to avoid Zambian tax",
        outcome: "bad",
        consequenceTitle: "International Tax Evasion",
        consequenceDesc:
          "You've made the deal complex. ZRA monitors offshore payments. This is a red flag. You face K800 penalty and possible legal action.",
        scoreChange: -25,
        moneyChange: -800,
      },
    ],
  },
  {
    id: "music_s15",
    title: "Music Equipment Purchase",
    situation:
      "You buy a K3,000 MacBook for music production. You also use it for personal Netflix and browsing. How do you handle this?",
    icon: "💻",
    choices: [
      {
        text: "Claim 70% business use",
        subtext: "K2,100 as expense",
        outcome: "good",
        consequenceTitle: "Fair Allocation",
        consequenceDesc:
          "You claim K2,100 as a business expense. You keep a usage log. This is fair, reasonable, and ZRA accepts it. You save K105 in tax.",
        scoreChange: 12,
        moneyChange: -105,
      },
      {
        text: "Claim 100% business use",
        subtext: "Ignore personal use",
        outcome: "neutral",
        consequenceTitle: "Aggressive Claim",
        consequenceDesc:
          "ZRA asks about personal use. You adjust to 70% and pay a K30 penalty. Not a big deal, but a cautionary tale.",
        scoreChange: -5,
        moneyChange: -30,
      },
      {
        text: "Claim nothing at all",
        subtext: "Treat it as personal",
        outcome: "bad",
        consequenceTitle: "Lost Deduction",
        consequenceDesc:
          "You're missing K105 in tax savings. You use the laptop mostly for work but didn't claim anything. This is lost opportunity.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s16",
    title: "Streaming Advance",
    situation:
      "Boomplay offers you a K5,000 advance against future royalties. They'll deduct it from future payouts. Tax implications?",
    icon: "📱",
    choices: [
      {
        text: "Declare K5,000 upfront",
        subtext: "Pay K250 tax",
        outcome: "good",
        consequenceTitle: "Advance Accounting",
        consequenceDesc:
          "You declare the advance as income. When royalties are recouped, you adjust. Your accountant handles this properly. Clean records.",
        scoreChange: 12,
        moneyChange: -250,
      },
      {
        text: "Only declare when recouped",
        subtext: "Delay recognition",
        outcome: "neutral",
        consequenceTitle: "Complex Accounting",
        consequenceDesc:
          "This is technically correct but complicated. You spend K200 on accountant fees to handle this. Net effect: similar outcome but more work.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Don't declare it",
        subtext: "Hope it's not noticed",
        outcome: "bad",
        consequenceTitle: "Advance Detection",
        consequenceDesc:
          "Boomplay reports the K5,000 to ZRA. You're caught. You pay K250 tax + K500 penalty. This was easy to handle but you avoided it.",
        scoreChange: -25,
        moneyChange: -750,
      },
    ],
  },
  {
    id: "music_s17",
    title: "Co-Writing Royalties",
    situation:
      "You co-write a song with two other artists. Royalties are split 33/33/34. How do you report your share?",
    icon: "✍️",
    choices: [
      {
        text: "Report only your 33% share",
        subtext: "With a written agreement",
        outcome: "good",
        consequenceTitle: "Collaboration Clarity",
        consequenceDesc:
          "You have a clean split agreement. You report exactly K1,980 (33% of K6,000 total). ZRA accepts your share. Everyone is compliant.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Report all royalties and hope for splits",
        subtext: "Report K6,000",
        outcome: "neutral",
        consequenceTitle: "Overpayment",
        consequenceDesc:
          "You paid K300 tax instead of K99. You overpaid by K201. Your co-writers claimed their shares too. You'll need to file an amendment.",
        scoreChange: -5,
        moneyChange: -201,
      },
      {
        text: "Let others report it all",
        subtext: "Trust them to handle tax",
        outcome: "bad",
        consequenceTitle: "Tax Trust Issues",
        consequenceDesc:
          "Your co-writers report everything. ZRA sees you received royalties but didn't report. You now owe K99 tax + K300 penalty. Trust is broken.",
        scoreChange: -25,
        moneyChange: -399,
      },
    ],
  },
  {
    id: "music_s18",
    title: "Music Video Sponsorship",
    situation:
      "A tech company offers K15,000 to sponsor your music video. They want branding. This is marketing income.",
    icon: "📹",
    choices: [
      {
        text: "Declare as marketing income",
        subtext: "Pay K750 tax",
        outcome: "good",
        consequenceTitle: "Sponsored Artist",
        consequenceDesc:
          "Your music video looks professional. You've earned K15,000 and paid K750 tax. The sponsorship leads to more brand deals. Career momentum!",
        scoreChange: 20,
        moneyChange: -750,
      },
      {
        text: "Treat as 'payment in kind'",
        subtext: "Complex but possible",
        outcome: "neutral",
        consequenceTitle: "Confusing Classification",
        consequenceDesc:
          "You spend K500 on accountant fees to classify this. In the end, you pay K600 tax. You've made it more complicated than necessary.",
        scoreChange: -5,
        moneyChange: -500,
      },
      {
        text: "Keep it off the books",
        subtext: "Cash deal",
        outcome: "bad",
        consequenceTitle: "Sponsorship Detection",
        consequenceDesc:
          "The company claims the sponsorship expense. ZRA asks about your payment. You now owe K750 tax + K1,125 penalty. A bad outcome.",
        scoreChange: -30,
        moneyChange: -1875,
      },
    ],
  },
  {
    id: "music_s19",
    title: "Backlog of Unreported Royalties",
    situation:
      "You realize you haven't declared K8,000 in royalties over 2 years. ZRA hasn't noticed yet. What do you do?",
    icon: "📚",
    choices: [
      {
        text: "File voluntary disclosure",
        subtext: "Pay K400 tax + K100 penalty",
        outcome: "good",
        consequenceTitle: "Honest Clean-Up",
        consequenceDesc:
          "ZRA appreciates voluntary disclosure. You pay a reduced penalty. Your conscience is clear. This is the best path forward.",
        scoreChange: 18,
        moneyChange: -500,
      },
      {
        text: "Wait and see if ZRA notices",
        subtext: "Don't act until forced",
        outcome: "neutral",
        consequenceTitle: "Living in Fear",
        consequenceDesc:
          "You're constantly worried about being caught. Your stress levels are high. The penalty will be K1,200 if caught. This isn't peace of mind.",
        scoreChange: -8,
        moneyChange: 0,
      },
      {
        text: "Hope it's never found",
        subtext: "Do nothing",
        outcome: "bad",
        consequenceTitle: "Long-Term Problem",
        consequenceDesc:
          "ZRA has a 5-year lookback period. They will find it. You'll owe K400 tax + K2,400 penalty (300%). This is devastating.",
        scoreChange: -30,
        moneyChange: -2800,
      },
    ],
  },
  {
    id: "music_s20",
    title: "Crowdfunding Campaign",
    situation:
      "You raise K12,000 on GoFundMe for an album. Is this taxable income or a gift?",
    icon: "🤲",
    choices: [
      {
        text: "Declare as income or register as charitable",
        subtext: "Pay K600 tax",
        outcome: "good",
        consequenceTitle: "Transparent Crowdfunding",
        consequenceDesc:
          "You consult with ZRA. They advise you to treat it as income. You pay K600 tax. You now have clean records and an album funded.",
        scoreChange: 15,
        moneyChange: -600,
      },
      {
        text: "Treat them as personal gifts",
        subtext: "No tax due",
        outcome: "neutral",
        consequenceTitle: "Crowdfunding Gray Area",
        consequenceDesc:
          "You argue it's gifts. ZRA disagrees for crowdfunding for a business project. You negotiate a K300 tax payment. You avoided the worst outcome.",
        scoreChange: -5,
        moneyChange: -300,
      },
      {
        text: "Hide the funds",
        subtext: "Don't report the campaign",
        outcome: "bad",
        consequenceTitle: "Crowdfunding Detection",
        consequenceDesc:
          "GoFundMe reports transactions. ZRA finds the K12,000. You owe K600 tax + K600 penalty. You've damaged your credibility.",
        scoreChange: -25,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "music_s21",
    title: "EP Release Expenses",
    situation:
      "Your 5-track EP costs K4,000 to record, mix, and master. This is a business expense. How do you account for it?",
    icon: "💿",
    choices: [
      {
        text: "Track and claim all expenses",
        subtext: "Saves K200 in tax",
        outcome: "good",
        consequenceTitle: "Professional Recording",
        consequenceDesc:
          "Your EP is released with clean records. You claim K4,000 as an expense. Your net income is reduced legally. This is smart business.",
        scoreChange: 12,
        moneyChange: -200,
      },
      {
        text: "Claim only producer fees",
        subtext: "Partial deduction",
        outcome: "neutral",
        consequenceTitle: "Partial Claim",
        consequenceDesc:
          "You claim K2,500, missing K1,500 in deductions. You saved K75 less than you could have. You're leaving money on the table.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Claim nothing at all",
        subtext: "Don't bother",
        outcome: "bad",
        consequenceTitle: "Missed Deduction",
        consequenceDesc:
          "You spent K4,000 but claimed nothing. You lost K200 in tax savings. This is a simple expense to claim, but you ignored it.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s22",
    title: "Patreon Subscribers",
    situation:
      "50 fans subscribe to your Patreon at K20/month each (K12,000/year). This is steady income. How do you handle this?",
    icon: "❤️",
    choices: [
      {
        text: "Declare monthly subscription income",
        subtext: "Pay K600 tax",
        outcome: "good",
        consequenceTitle: "Fan-Funded Artist",
        consequenceDesc:
          "Patreon is your biggest income stream. You pay K600 tax and have consistent monthly income. This stability helps you plan your career.",
        scoreChange: 18,
        moneyChange: -600,
      },
      {
        text: "Declare quarterly",
        subtext: "Acceptable practice",
        outcome: "neutral",
        consequenceTitle: "Quarterly Filing",
        consequenceDesc:
          "You declare K12,000 quarterly. You pay K600 tax in installments. It's convenient but you're paying the same tax.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Let it accumulate undeclared",
        subtext: "Ignore it",
        outcome: "bad",
        consequenceTitle: "Patreon Audit",
        consequenceDesc:
          "ZRA can see your Patreon income. After a year, you owe K600 tax + K1,200 penalty. This is a serious mistake for a steady income.",
        scoreChange: -30,
        moneyChange: -1800,
      },
    ],
  },
  {
    id: "music_s23",
    title: "Session Musician Fee",
    situation:
      "You're hired as a session guitarist for K2,000. The producer says you're a 'contractor.' Are you an employee or independent contractor?",
    icon: "🎸",
    choices: [
      {
        text: "Issue invoice as independent contractor",
        subtext: "Pay K100 tax",
        outcome: "good",
        consequenceTitle: "Professional Session Musician",
        consequenceDesc:
          "You're building a career as a session musician. You issue an invoice, pay K100 tax, and are in control of your business.",
        scoreChange: 12,
        moneyChange: -100,
      },
      {
        text: "Have producer withhold tax (PAYE)",
        subtext: "Get refund at year-end",
        outcome: "neutral",
        consequenceTitle: "Employee Status",
        consequenceDesc:
          "The producer withholds K400. You file and get a K300 refund. This is legal but more work for a one-off gig.",
        scoreChange: 0,
        moneyChange: -400,
      },
      {
        text: "Take cash and no records",
        subtext: "No tax at all",
        outcome: "bad",
        consequenceTitle: "Undeclared Session",
        consequenceDesc:
          "The producer claims the expense. ZRA finds you didn't declare K2,000. You pay K100 tax + K200 penalty. Not worth it.",
        scoreChange: -20,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "music_s24",
    title: "Awards Ceremony Prize",
    situation:
      "You win 'Best New Artist' and receive a K5,000 cash prize. Is this taxable?",
    icon: "🏆",
    choices: [
      {
        text: "Declare as prize income",
        subtext: "Pay K250 tax",
        outcome: "good",
        consequenceTitle: "Award-Winning Taxpayer",
        consequenceDesc:
          "You declare the prize and pay K250 tax. Your award is now part of your professional record. This opens doors for more opportunities.",
        scoreChange: 15,
        moneyChange: -250,
      },
      {
        text: "Check if prizes are tax-exempt",
        subtext: "Research the law",
        outcome: "neutral",
        consequenceTitle: "Research Pays Off",
        consequenceDesc:
          "You learn that some awards are taxable. You consult ZRA and pay K250 tax. You did the right thing after checking.",
        scoreChange: 5,
        moneyChange: -250,
      },
      {
        text: "Keep and don't declare",
        subtext: "It's an award, not income",
        outcome: "bad",
        consequenceTitle: "Prize Tax Issue",
        consequenceDesc:
          "ZRA considers prize money as income. You didn't declare K5,000. You now owe K250 tax + K500 penalty.",
        scoreChange: -25,
        moneyChange: -750,
      },
    ],
  },
  {
    id: "music_s25",
    title: "Music Publishing Deal",
    situation:
      "A publisher offers a K20,000 advance. They'll collect future royalties. How do you handle the advance?",
    icon: "📄",
    choices: [
      {
        text: "Declare the K20,000 advance",
        subtext: "Pay K1,000 tax",
        outcome: "good",
        consequenceTitle: "Published Artist",
        consequenceDesc:
          "You have a publishing deal! You declare the advance, pay K1,000 tax, and your music is professionally managed. This is career growth.",
        scoreChange: 20,
        moneyChange: -1000,
      },
      {
        text: "Wait for recoupment",
        subtext: "Need expert tax advice",
        outcome: "neutral",
        consequenceTitle: "Complex Accounting",
        consequenceDesc:
          "Your accountant handles this correctly. You pay K800 tax after recoupment. It's legal but complicated. You spent K500 on professional fees.",
        scoreChange: -5,
        moneyChange: -500,
      },
      {
        text: "Treat it as a loan",
        subtext: "Not taxable",
        outcome: "bad",
        consequenceTitle: "Incorrect Classification",
        consequenceDesc:
          "This is income, not a loan. ZRA catches this. You pay K1,000 tax + K2,000 penalty. This is a serious mistake.",
        scoreChange: -30,
        moneyChange: -3000,
      },
    ],
  },
  {
    id: "music_s26",
    title: "Studio Equipment Depreciation",
    situation:
      "You buy studio monitors for K6,000. They last 5 years. How do you claim this expense?",
    icon: "🔊",
    choices: [
      {
        text: "Depreciate over 5 years",
        subtext: "K1,200/year deduction",
        outcome: "good",
        consequenceTitle: "Smart Depreciation",
        consequenceDesc:
          "You claim K1,200 each year, saving K60 annually in tax. Over 5 years, that's K300 saved. This is how assets should be treated.",
        scoreChange: 10,
        moneyChange: -60,
      },
      {
        text: "Expense fully in year 1",
        subtext: "Claim all K6,000 at once",
        outcome: "neutral",
        consequenceTitle: "Audit Trigger",
        consequenceDesc:
          "ZRA questions the large one-time expense. They allow it but issue a warning. You'll need to depreciate future equipment properly.",
        scoreChange: -5,
        moneyChange: -30,
      },
      {
        text: "Don't claim anything",
        subtext: "Treat it as personal expense",
        outcome: "bad",
        consequenceTitle: "Lost Savings",
        consequenceDesc:
          "You missed K300 in tax savings over 5 years. You use the monitors mostly for music but didn't claim them. This is lost opportunity.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s27",
    title: "Music Therapy Income",
    situation:
      "You teach music therapy at a school. You earn K3,000/month. Is this business or employment income?",
    icon: "🧠",
    choices: [
      {
        text: "Register as self-employed",
        subtext: "File quarterly returns",
        outcome: "good",
        consequenceTitle: "Business Owner",
        consequenceDesc:
          "You're a music therapy entrepreneur. You can deduct expenses like travel and materials. This is the optimal structure for your work.",
        scoreChange: 15,
        moneyChange: -180,
      },
      {
        text: "Wait for school to deduct PAYE",
        subtext: "Employee status",
        outcome: "neutral",
        consequenceTitle: "Employee Deductions",
        consequenceDesc:
          "The school deducts K300/month PAYE. You're an employee, not a business owner. Less flexibility but easier tax management.",
        scoreChange: 0,
        moneyChange: -300,
      },
      {
        text: "Keep it off the books",
        subtext: "Cash arrangement",
        outcome: "bad",
        consequenceTitle: "Hidden Income",
        consequenceDesc:
          "You earn K36,000/year undeclared. ZRA audits the school and finds you. You owe K1,800 tax + K5,400 penalty. This is career-ending.",
        scoreChange: -35,
        moneyChange: -7200,
      },
    ],
  },
  {
    id: "music_s28",
    title: "Sample Clearance Cost",
    situation:
      "You used a sample and paid K1,500 for clearance. This is a music expense. How do you record it?",
    icon: "🎶",
    choices: [
      {
        text: "Claim as business expense",
        subtext: "K75 tax saving",
        outcome: "good",
        consequenceTitle: "Legal Sample",
        consequenceDesc:
          "You have a properly cleared sample. You claim K1,500 as an expense. Your music is legally safe and tax-smart.",
        scoreChange: 10,
        moneyChange: -75,
      },
      {
        text: "Record but don't claim",
        subtext: "Keep records but not tax",
        outcome: "neutral",
        consequenceTitle: "Safe but Wasteful",
        consequenceDesc:
          "You have the receipt but don't claim it. You lose K75 in tax savings. It's safe but not financially optimal.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Don't record the expense",
        subtext: "Cash payment, no record",
        outcome: "bad",
        consequenceTitle: "Lost Deduction",
        consequenceDesc:
          "You paid K1,500 cash. No receipt, no deduction. You lost K75 in tax savings. This was avoidable with a simple receipt.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s29",
    title: "Remix Fee",
    situation:
      "A DJ pays you K2,000 for an official remix. They want a receipt. How do you handle this?",
    icon: "🔄",
    choices: [
      {
        text: "Issue receipt and declare K2,000",
        subtext: "Pay K100 tax",
        outcome: "good",
        consequenceTitle: "Remix Professional",
        consequenceDesc:
          "Your remix is released professionally. You earn K2,000 and pay K100 tax. This leads to more remix opportunities.",
        scoreChange: 12,
        moneyChange: -100,
      },
      {
        text: "Accept cash and no receipt",
        subtext: "Off-the-books deal",
        outcome: "neutral",
        consequenceTitle: "Hidden Remix",
        consequenceDesc:
          "You got K2,000 cash. The DJ claims the expense. ZRA finds you didn't declare. You pay K100 tax + K200 penalty.",
        scoreChange: -8,
        moneyChange: -300,
      },
      {
        text: "Ask for a 'gift' payment",
        subtext: "Misclassify the fee",
        outcome: "bad",
        consequenceTitle: "Suspicious Arrangement",
        consequenceDesc:
          "ZRA flags this as suspicious. You pay K100 tax + K300 penalty. This 'gift' cost you more than the tax would have.",
        scoreChange: -20,
        moneyChange: -400,
      },
    ],
  },
  {
    id: "music_s30",
    title: "Tour Bus Expenses",
    situation:
      "You rent a tour bus for K10,000 for a 5-city tour. This is a big expense. Is it deductible?",
    icon: "🚌",
    choices: [
      {
        text: "Keep receipt and claim K10,000",
        subtext: "Saves K500 in tax",
        outcome: "good",
        consequenceTitle: "Professional Touring",
        consequenceDesc:
          "Your tour is successful. You claim K10,000 as an expense. Your net profit is properly calculated. This is how touring works.",
        scoreChange: 15,
        moneyChange: -500,
      },
      {
        text: "Split with other artists",
        subtext: "Each claims their share",
        outcome: "neutral",
        consequenceTitle: "Shared Expense",
        consequenceDesc:
          "You claim K5,000 (your share). You save K250 in tax. This is fair but requires good coordination with other artists.",
        scoreChange: 0,
        moneyChange: -250,
      },
      {
        text: "Pay cash and lose receipt",
        subtext: "No documentation",
        outcome: "bad",
        consequenceTitle: "Lost Deduction",
        consequenceDesc:
          "You paid K10,000 cash and lost the receipt. You can't claim the expense. You lost K500 in tax savings. This hurts.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s31",
    title: "Distribution Advance Repayment",
    situation:
      "DistroKid gave you a K3,000 advance. They're now deducting from royalties. Is the advance still taxable?",
    icon: "🔄",
    choices: [
      {
        text: "Adjust for the recoupment",
        subtext: "Correct accounting",
        outcome: "good",
        consequenceTitle: "Accurate Adjustments",
        consequenceDesc:
          "Your accountant handles the recoupment correctly. You only pay tax on net royalties. This is the right way to handle advances.",
        scoreChange: 12,
        moneyChange: 0,
      },
      {
        text: "Ignore and overpay tax",
        subtext: "Pay tax on gross royalties",
        outcome: "neutral",
        consequenceTitle: "Double Taxation",
        consequenceDesc:
          "You're paying tax on royalties that go to DistroKid. This is double taxation. You overpaid K150. File an amendment.",
        scoreChange: -5,
        moneyChange: -150,
      },
      {
        text: "Double-count deductions",
        subtext: "Claim advance as expense",
        outcome: "bad",
        consequenceTitle: "Fraudulent Accounting",
        consequenceDesc:
          "You claimed the advance as an expense while also deducting the recoupment. ZRA catches this. You face a K600 penalty.",
        scoreChange: -30,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "music_s32",
    title: "Cultural Heritage Grant",
    situation:
      "You receive a K8,000 grant from the Ministry of Culture. Is this taxable?",
    icon: "🏛️",
    choices: [
      {
        text: "Declare as other income",
        subtext: "Pay K400 tax",
        outcome: "good",
        consequenceTitle: "Recognized Artist",
        consequenceDesc:
          "Your talent is recognized by the government. You declare K8,000 and pay K400 tax. This helps with future grant applications.",
        scoreChange: 15,
        moneyChange: -400,
      },
      {
        text: "Ask ministry for guidance",
        subtext: "Get official answer",
        outcome: "neutral",
        consequenceTitle: "Official Clarification",
        consequenceDesc:
          "The ministry confirms it's taxable. You pay K400 tax. You did the right thing by checking.",
        scoreChange: 5,
        moneyChange: -400,
      },
      {
        text: "Treat as 'free money'",
        subtext: "Don't declare",
        outcome: "bad",
        consequenceTitle: "Grant Tax Issue",
        consequenceDesc:
          "The Ministry of Culture reports payments. ZRA sees K8,000 and you haven't declared it. You owe K400 tax + K800 penalty.",
        scoreChange: -25,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "music_s33",
    title: "YouTube Monetization",
    situation:
      "Your YouTube channel earns K1,500/month from AdSense. You never declared it.",
    icon: "▶️",
    choices: [
      {
        text: "Start declaring now",
        subtext: "K75 tax/month",
        outcome: "good",
        consequenceTitle: "YouTube Creator",
        consequenceDesc:
          "You're a legitimate YouTube creator. You declare K1,500/month and pay K75 tax. Your channel is growing and your taxes are clean.",
        scoreChange: 15,
        moneyChange: -75,
      },
      {
        text: "Back-declare voluntarily",
        subtext: "Honest clean-up",
        outcome: "neutral",
        consequenceTitle: "Voluntary Disclosure",
        consequenceDesc:
          "You pay back taxes for the last 6 months (K450) plus a K100 penalty. You're now fully compliant. Good decision.",
        scoreChange: 5,
        moneyChange: -550,
      },
      {
        text: "Ignore it completely",
        subtext: "Hope AdSense isn't tracked",
        outcome: "bad",
        consequenceTitle: "YouTube Audit",
        consequenceDesc:
          "ZRA can see AdSense payments. You owe K900 tax + K1,800 penalty after 12 months. This is a serious problem.",
        scoreChange: -30,
        moneyChange: -2700,
      },
    ],
  },
  {
    id: "music_s34",
    title: "Manager Commission",
    situation:
      "Your manager takes 20% of your K40,000 income (K8,000). How do you account for manager fees?",
    icon: "💼",
    choices: [
      {
        text: "Claim manager fees as expense",
        subtext: "Saves K400 tax",
        outcome: "good",
        consequenceTitle: "Manager Relationship",
        consequenceDesc:
          "You claim K8,000 as a management expense. This is a legitimate business cost. You save K400 in tax.",
        scoreChange: 12,
        moneyChange: -400,
      },
      {
        text: "Let manager handle tax",
        subtext: "Pass responsibility",
        outcome: "neutral",
        consequenceTitle: "Unclear Tax Position",
        consequenceDesc:
          "Your manager pays tax on their fees. You pay tax on gross income. You're paying tax on money you didn't keep. This is costly.",
        scoreChange: -8,
        moneyChange: -400,
      },
      {
        text: "Ignore it and pay tax on K40,000",
        subtext: "No deduction",
        outcome: "bad",
        consequenceTitle: "Lost Deduction",
        consequenceDesc:
          "You paid K8,000 in fees but didn't claim them. You lost K400 in tax savings. You're paying more tax than necessary.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s35",
    title: "Copyright Registration",
    situation:
      "You pay K500 to ZAMCOPY to register your songs. Is this a business expense?",
    icon: "©️",
    choices: [
      {
        text: "Claim as administrative expense",
        subtext: "K25 tax saving",
        outcome: "good",
        consequenceTitle: "Protected Works",
        consequenceDesc:
          "Your songs are legally protected. You claim K500 as an expense. This is a small but important business cost.",
        scoreChange: 10,
        moneyChange: -25,
      },
      {
        text: "Record but don't claim",
        subtext: "Keep records",
        outcome: "neutral",
        consequenceTitle: "Safe but Wasteful",
        consequenceDesc:
          "You have the receipt but don't claim it. You lose K25 in tax savings. It's safe but not optimal.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Don't record the expense",
        subtext: "Lost receipt",
        outcome: "bad",
        consequenceTitle: "Lost Deduction",
        consequenceDesc:
          "You paid K500 but can't prove it. You lose the deduction. You're paying more tax than necessary.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s36",
    title: "Music TV Show Appearance",
    situation:
      "A TV show pays you K4,000 for appearing as a musical guest. They ask for your TPIN.",
    icon: "📺",
    choices: [
      {
        text: "Provide TPIN and receive payment with WHT",
        subtext: "20% withholding tax",
        outcome: "good",
        consequenceTitle: "TV Artist",
        consequenceDesc:
          "You provide your TPIN. The show withholds K800. You file and get a credit. Your presence on TV boosts your career.",
        scoreChange: 15,
        moneyChange: -800,
      },
      {
        text: "Ask for gross payment",
        subtext: "You'll owe more at year-end",
        outcome: "neutral",
        consequenceTitle: "Gross Payment",
        consequenceDesc:
          "You get K4,000 gross. You owe K200 tax at filing (since K800 was already withheld). You'll need to save for this.",
        scoreChange: 0,
        moneyChange: -200,
      },
      {
        text: "Claim you don't have a TPIN",
        subtext: "Avoid the system",
        outcome: "bad",
        consequenceTitle: "No TPIN, No Payment",
        consequenceDesc:
          "The show can't pay you without a TPIN. You lose the K4,000. You spend K200 to register a TPIN and renegotiate. This is costly and embarrassing.",
        scoreChange: -20,
        moneyChange: -4200,
      },
    ],
  },
  {
    id: "music_s37",
    title: "End-of-Year Tax Review",
    situation:
      "You earned K85,000 this year. You paid K4,250 in tax. Your friend says it's too much. What do you do?",
    icon: "📊",
    choices: [
      {
        text: "Review all deductions with an accountant",
        subtext: "Verify your tax position",
        outcome: "good",
        consequenceTitle: "Tax Efficiency",
        consequenceDesc:
          "Your accountant reviews everything. You're paying the correct tax (K4,250). You learn about new deductions for next year. This was worthwhile.",
        scoreChange: 15,
        moneyChange: -500,
      },
      {
        text: "File an amended return if needed",
        subtext: "Correct any errors",
        outcome: "neutral",
        consequenceTitle: "Amended Filing",
        consequenceDesc:
          "You found a K200 overpayment. You file an amendment and get a refund. This was a good learning experience.",
        scoreChange: 5,
        moneyChange: 200,
      },
      {
        text: "Don't check or verify",
        subtext: "Trust your friend's advice",
        outcome: "bad",
        consequenceTitle: "Trust Issues",
        consequenceDesc:
          "Your friend was wrong. You could have underpaid and face penalties. You lose confidence in your financial decisions.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "music_s38",
    title: "Collaboration Expenses",
    situation:
      "You collaborate with an artist in another country. The studio costs K6,000. Who claims the expense?",
    icon: "🤝",
    choices: [
      {
        text: "Share expenses and each claim your share",
        subtext: "Fair division",
        outcome: "good",
        consequenceTitle: "Global Collaboration",
        consequenceDesc:
          "You split the K6,000 equally (K3,000 each). You each claim your share. This is fair, transparent, and legally correct.",
        scoreChange: 12,
        moneyChange: -150,
      },
      {
        text: "Let one partner claim all",
        subtext: "Unequal deduction",
        outcome: "neutral",
        consequenceTitle: "Unbalanced Claim",
        consequenceDesc:
          "Your collaborator claims all K6,000. You can't claim your share. You lose K150 in tax savings. This isn't fair.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Don't claim anything",
        subtext: "Avoid the complexity",
        outcome: "bad",
        consequenceTitle: "Lost Savings",
        consequenceDesc:
          "You spent K3,000 on the collaboration but claimed nothing. You lost K150 in tax savings. This was avoidable.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "music_s39",
    title: "Music Retirement Fund",
    situation:
      "You want to start saving for retirement. You hear about ZRA pension deductions. How do you set this up?",
    icon: "🏦",
    choices: [
      {
        text: "Open a retirement annuity",
        subtext: "Tax-deductible contributions",
        outcome: "good",
        consequenceTitle: "Retirement Planning",
        consequenceDesc:
          "You contribute K5,000 to a retirement annuity. You save K250 in tax this year. Your future is secure. This is excellent planning.",
        scoreChange: 20,
        moneyChange: -250,
      },
      {
        text: "Just save money",
        subtext: "No tax benefit",
        outcome: "neutral",
        consequenceTitle: "Savings Without Tax",
        consequenceDesc:
          "You save K5,000 but don't get a tax deduction. You're still building savings but missing a tax advantage.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Ignore retirement planning",
        subtext: "Focus on today",
        outcome: "bad",
        consequenceTitle: "Uncertain Future",
        consequenceDesc:
          "You're not planning for retirement. You miss tax savings and don't build long-term security. This is a common but costly mistake.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "music_s40",
    title: "Posthumous Royalties Planning",
    situation:
      "Your music continues to earn royalties after you die. Your family will have tax obligations. How do you plan for this?",
    icon: "📜",
    choices: [
      {
        text: "Name a beneficiary and have them file",
        subtext: "Estate planning",
        outcome: "good",
        consequenceTitle: "Legacy Planning",
        consequenceDesc:
          "You've ensured your music continues to support your family. You've planned for the tax implications. This is responsible and caring.",
        scoreChange: 20,
        moneyChange: 0,
      },
      {
        text: "Let royalties accumulate",
        subtext: "Complex for family",
        outcome: "neutral",
        consequenceTitle: "Unclear Legacy",
        consequenceDesc:
          "Your family inherits the royalties but doesn't know about tax obligations. They'll need to hire a lawyer. This is avoidable.",
        scoreChange: -5,
        moneyChange: -2000,
      },
      {
        text: "Don't plan for this",
        subtext: "Assume it won't matter",
        outcome: "bad",
        consequenceTitle: "Legacy Problem",
        consequenceDesc:
          "Your music earns K20,000 in royalties after you die. Your family doesn't file taxes. ZRA pursues them for K1,000 tax + penalties. Your legacy includes tax problems.",
        scoreChange: -25,
        moneyChange: -3000,
      },
    ],
  },
];