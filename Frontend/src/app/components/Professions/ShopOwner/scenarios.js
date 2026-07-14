// scenarios.js - Complete Shop Owner Scenarios

export const SHOPOWNER_SCENARIOS = [
  // ============================================
  // CATEGORY 1: Business Registration & TPIN (7 Scenarios)
  // ============================================
  {
    id: "shop_s1",
    category: "Business Registration",
    title: "Starting Your Grocery Shop",
    situation:
      "You've just opened a small grocery shop in your community, serving basic food items and household goods. Your monthly turnover is around K4,500. You haven't registered with ZRA yet.",
    icon: "🏪",
    choices: [
      {
        text: "Register with PACRA and obtain a TPIN from ZRA immediately",
        subtext: "Proper registration from day one",
        outcome: "good",
        consequenceTitle: "Legally Compliant Business",
        consequenceDesc:
          "Correct! All businesses earning income in Zambia must obtain a Taxpayer Identification Number (TPIN) from ZRA. There is no minimum threshold—registration is required from day one.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Wait until you're earning more before registering",
        subtext: "Delay registration",
        outcome: "neutral",
        consequenceTitle: "Risky Delay",
        consequenceDesc:
          "Not ideal. While many small businesses delay, ZRA expects registration from the start. You risk penalties for operating unregistered.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Never register—it's just a small shop",
        subtext: "Avoid registration entirely",
        outcome: "bad",
        consequenceTitle: "Serious Violation",
        consequenceDesc:
          "This is illegal. All businesses must register regardless of size. ZRA can assess tax on estimated income and impose severe penalties, including shop closure.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s2",
    category: "Business Registration",
    title: "Shop Name Registration",
    situation:
      "You've been operating your shop under a name for 3 months without registering it with PACRA. A customer asks for your business registration number.",
    icon: "📛",
    choices: [
      {
        text: "Register the business name with PACRA immediately",
        subtext: "Proper business name registration",
        outcome: "good",
        consequenceTitle: "Protected Business Identity",
        consequenceDesc:
          "Correct! Operating a business without registering the name is illegal in Zambia. Proper registration through PACRA is required for tax compliance and enforceable contracts.",
        scoreChange: 10,
        moneyChange: -250,
      },
      {
        text: "Continue operating; it doesn't matter",
        subtext: "Ignore the requirement",
        outcome: "neutral",
        consequenceTitle: "Legal Risk",
        consequenceDesc:
          "This is risky. Clients may refuse to pay invoices; ZRA may flag unregistered operations; you'll face legal issues with contracts.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Change the name to avoid registration",
        subtext: "Avoid registration by rebranding",
        outcome: "bad",
        consequenceTitle: "Temporary Solution",
        consequenceDesc:
          "Changing the name doesn't solve the problem—you still need to register any name you operate under. You'll also lose customers who know your existing name.",
        scoreChange: -5,
        moneyChange: -100,
      },
    ],
  },
  {
    id: "shop_s3",
    category: "Business Registration",
    title: "TPIN Application - Missing NRC",
    situation:
      "You're applying for a TPIN but you've lost your National Registration Card. A friend offers to let you use their NRC to apply.",
    icon: "🪪",
    choices: [
      {
        text: "Get a replacement NRC first, then apply for TPIN",
        subtext: "Proper documentation",
        outcome: "good",
        consequenceTitle: "Valid Registration",
        consequenceDesc:
          "Correct! A valid NRC is required for TPIN registration. Using false documents is fraud and a criminal offense.",
        scoreChange: 10,
        moneyChange: -150,
      },
      {
        text: "Apply using someone else's NRC",
        subtext: "Use friend's identity",
        outcome: "bad",
        consequenceTitle: "Identity Fraud",
        consequenceDesc:
          "This is serious fraud! Using someone else's identity documents is a criminal offense. You could face criminal prosecution and jail time.",
        scoreChange: -15,
        moneyChange: -1000,
      },
      {
        text: "Use a photocopy of your NRC and hope it works",
        subtext: "Submit what you have",
        outcome: "neutral",
        consequenceTitle: "Application Rejected",
        consequenceDesc:
          "ZRA requires the original NRC or a certified copy. A simple photocopy won't be accepted. Your application will be rejected.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s4",
    category: "Business Registration",
    title: "Second Shop Location",
    situation:
      "Your shop is doing well, so you've opened a second location in another area. You're unsure how to handle registration for the new shop.",
    icon: "🏬",
    choices: [
      {
        text: "Register the new location as a branch under your existing TPIN",
        subtext: "Add branch under same registration",
        outcome: "good",
        consequenceTitle: "Proper Branch Registration",
        consequenceDesc:
          "Correct! Multiple locations of the same business should be registered under one TPIN. Each branch has separate compliance obligations.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Register a completely new business",
        subtext: "Separate registration",
        outcome: "neutral",
        consequenceTitle: "Extra Administrative Burden",
        consequenceDesc:
          "This is possible but creates additional administrative burden. It's usually better to register as branches under one TPIN.",
        scoreChange: 5,
        moneyChange: -500,
      },
      {
        text: "Don't register the new shop at all",
        subtext: "Operate without registration",
        outcome: "bad",
        consequenceTitle: "Unregistered Operation",
        consequenceDesc:
          "Operating an unregistered location is illegal. ZRA will eventually discover it through customer records and supplier documents.",
        scoreChange: -10,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s5",
    category: "Business Registration",
    title: "Shop Relocation",
    situation:
      "You've moved your shop to a different neighborhood. You've been busy and haven't updated your address with ZRA.",
    icon: "📍",
    choices: [
      {
        text: "Notify ZRA of address change immediately",
        subtext: "Update registration",
        outcome: "good",
        consequenceTitle: "Accurate Records",
        consequenceDesc:
          "Correct! Keeping registration details current is required. ZRA needs to send notices and conduct audits at the correct location.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Update when you file your next return",
        subtext: "Delay update",
        outcome: "neutral",
        consequenceTitle: "Delayed Update",
        consequenceDesc:
          "This is acceptable if it's soon, but technically you should update as soon as you move. You might miss important ZRA communications.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Don't update; it's just a shop",
        subtext: "Ignore address change",
        outcome: "bad",
        consequenceTitle: "Missed Communication",
        consequenceDesc:
          "ZRA may send audit notices to your old address and penalize you for not responding. Penalties for non-receipt still apply.",
        scoreChange: -5,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "shop_s6",
    category: "Business Registration",
    title: "PACRA Annual Renewal",
    situation:
      "Your business name registration with PACRA expired last month. You've been too busy to renew it.",
    icon: "📅",
    choices: [
      {
        text: "Renew promptly and maintain active registration",
        subtext: "Immediate renewal",
        outcome: "good",
        consequenceTitle: "Active Registration",
        consequenceDesc:
          "Correct! Business names must be renewed annually through PACRA. Expired registration affects contracts and tax compliance.",
        scoreChange: 10,
        moneyChange: -400,
      },
      {
        text: "Renew only when you get new suppliers",
        subtext: "Delay renewal",
        outcome: "neutral",
        consequenceTitle: "Missed Opportunities",
        consequenceDesc:
          "This is risky. You might lose opportunities with suppliers who verify registration before dealing with you.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Don't renew; operate without active registration",
        subtext: "Let it lapse",
        outcome: "bad",
        consequenceTitle: "Business Struck Off",
        consequenceDesc:
          "Your business could be struck off the register; you'll need to re-register. Suppliers may refuse to work with you.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s7",
    category: "Business Registration",
    title: "Home-Based Shop",
    situation:
      "You run your grocery shop from your home to save costs. A neighbor asks if you're registered.",
    icon: "🏠",
    choices: [
      {
        text: "Register the home-based business properly with ZRA",
        subtext: "Proper home business registration",
        outcome: "good",
        consequenceTitle: "Compliant Home Business",
        consequenceDesc:
          "Correct! Home-based businesses are still businesses and must be registered. ZRA has been conducting compliance drives targeting home-based businesses.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Operate as a home business without registration",
        subtext: "Avoid registration",
        outcome: "neutral",
        consequenceTitle: "Risky Operation",
        consequenceDesc:
          "ZRA is increasingly targeting home-based businesses for compliance checks. You risk back taxes and penalties.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "List it as a 'hobby' to avoid tax",
        subtext: "Claim it's a hobby",
        outcome: "bad",
        consequenceTitle: "Tax Evasion",
        consequenceDesc:
          "If you're making regular sales, it's a business—not a hobby. This is fraud. ZRA can assess based on bank deposits.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },

  // ============================================
  // CATEGORY 2: Smart Invoice & E-Invoicing (8 Scenarios)
  // ============================================
  {
    id: "shop_s8",
    category: "Smart Invoice",
    title: "Smart Invoice Registration",
    situation:
      "ZRA has mandated e-invoicing through Smart Invoice for all taxpayers. You haven't registered yet, and it's now past the deadline.",
    icon: "💻",
    choices: [
      {
        text: "Register for Smart Invoice immediately through TaxOnline",
        subtext: "Register now",
        outcome: "good",
        consequenceTitle: "E-Invoicing Compliant",
        consequenceDesc:
          "Correct! E-invoicing is mandatory for all resident taxpayers in Zambia starting July 2024. Enforcement began October 1, 2024 with penalties for non-compliance.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Continue with paper receipts and claim you're exempt",
        subtext: "Use paper receipts",
        outcome: "bad",
        consequenceTitle: "Non-Compliance Penalty",
        consequenceDesc:
          "There are no exemptions. All taxpayers must use Smart Invoice. You will face penalties for non-compliance.",
        scoreChange: -10,
        moneyChange: -500,
      },
      {
        text: "Wait until you hear from ZRA",
        subtext: "Wait and see",
        outcome: "neutral",
        consequenceTitle: "Late Registration",
        consequenceDesc:
          "Waiting is risky. ZRA may not contact you before imposing penalties. It's better to register proactively.",
        scoreChange: -5,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "shop_s9",
    category: "Smart Invoice",
    title: "Issuing Smart Invoices",
    situation:
      "A customer buys K500 worth of goods and asks for a receipt. Your Smart Invoice system is working, but you're not sure how to use it properly.",
    icon: "🧾",
    choices: [
      {
        text: "Learn the Smart Invoice system and issue a proper invoice",
        subtext: "Use Smart Invoice correctly",
        outcome: "good",
        consequenceTitle: "Proper Documentation",
        consequenceDesc:
          "All taxable supplies must be invoiced through Smart Invoice. Customers have the right to demand receipts. Proper use ensures compliance.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Issue a paper receipt and hope the customer doesn't complain",
        subtext: "Use paper receipt",
        outcome: "neutral",
        consequenceTitle: "Invalid Receipt",
        consequenceDesc:
          "Paper receipts are no longer sufficient. The customer could report you, and ZRA can issue penalties.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Tell the customer you don't issue receipts",
        subtext: "Refuse receipt",
        outcome: "bad",
        consequenceTitle: "Customer Complaint",
        consequenceDesc:
          "Customers can report you for refusing to issue receipts. This is a serious compliance violation.",
        scoreChange: -10,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "shop_s10",
    category: "Smart Invoice",
    title: "Smart Invoice System Malfunction",
    situation:
      "Your Smart Invoice system is down during a busy Saturday morning. Customers are waiting in line.",
    icon: "⚠️",
    choices: [
      {
        text: "Serve customers manually but record all transactions for later entry",
        subtext: "Manual recording",
        outcome: "good",
        consequenceTitle: "Proper Downtime Procedure",
        consequenceDesc:
          "During system downtime, you must still record all transactions and enter them into Smart Invoice when the system is restored.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Serve customers and issue paper receipts",
        subtext: "Paper receipts",
        outcome: "neutral",
        consequenceTitle: "Temporary Solution",
        consequenceDesc:
          "This is acceptable during genuine downtime, but you must enter the transactions into Smart Invoice once the system is back.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Close the shop until the system is fixed",
        subtext: "Close shop",
        outcome: "neutral",
        consequenceTitle: "Lost Sales",
        consequenceDesc:
          "This avoids compliance issues but loses you money. You could have served customers and recorded manually.",
        scoreChange: 5,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s11",
    category: "Smart Invoice",
    title: "Smart Invoice Training",
    situation:
      "You're not confident using Smart Invoice because you've had no training. A friend offers to set it up for you.",
    icon: "📖",
    choices: [
      {
        text: "Attend ZRA taxpayer education workshops for hands-on training",
        subtext: "Get official training",
        outcome: "good",
        consequenceTitle: "Proper Training",
        consequenceDesc:
          "ZRA provides free taxpayer education workshops nationwide covering Smart Invoice use. Training is available for shop owners and entrepreneurs.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Ask a friend or relative who knows to help",
        subtext: "Get informal help",
        outcome: "neutral",
        consequenceTitle: "Friend's Help",
        consequenceDesc:
          "This can work, but ensure they know the system properly. Mistakes could lead to incorrect tax declarations.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Guess and hope it works",
        subtext: "DIY without training",
        outcome: "bad",
        consequenceTitle: "Errors in Filing",
        consequenceDesc:
          "Errors in Smart Invoice can lead to incorrect tax declarations and penalties. Always get proper training.",
        scoreChange: -5,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "shop_s12",
    category: "Smart Invoice",
    title: "Incomplete Smart Invoices",
    situation:
      "You've been issuing Smart Invoices but you're not including your customer's TPIN and other required details.",
    icon: "📋",
    choices: [
      {
        text: "Issue complete Smart Invoices with all required fields",
        subtext: "Complete invoices",
        outcome: "good",
        consequenceTitle: "Valid Invoices",
        consequenceDesc:
          "Smart Invoices must include complete information to be valid. Incomplete invoices may be rejected by the system.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Continue as is; customers don't ask for full details",
        subtext: "Minimal details",
        outcome: "neutral",
        consequenceTitle: "Invalid Invoices",
        consequenceDesc:
          "Incomplete invoices are not valid. You can't prove your sales; customers can't claim input VAT.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Only include details for corporate customers",
        subtext: "Selective compliance",
        outcome: "bad",
        consequenceTitle: "Inconsistent Compliance",
        consequenceDesc:
          "This is inconsistent and could be flagged in an audit. All customers deserve proper invoices.",
        scoreChange: -5,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "shop_s13",
    category: "Smart Invoice",
    title: "Supplier Without Smart Invoice",
    situation:
      "Your regular supplier doesn't use Smart Invoice and can't issue valid receipts. They offer a 10% discount on your next order.",
    icon: "📦",
    choices: [
      {
        text: "Find a compliant supplier or report the issue",
        subtext: "Switch to compliant supplier",
        outcome: "good",
        consequenceTitle: "Compliant Supply Chain",
        consequenceDesc:
          "You should only deal with compliant suppliers to avoid liability in your supply chain.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Accept the supplier and keep paper records",
        subtext: "Accept non-compliant supplier",
        outcome: "neutral",
        consequenceTitle: "Liability Risk",
        consequenceDesc:
          "You may be linked to a non-compliant supplier and face audit scrutiny. Your deductions may be questioned.",
        scoreChange: -5,
        moneyChange: 200,
      },
      {
        text: "Don't worry; it's not your problem",
        subtext: "Ignore the issue",
        outcome: "bad",
        consequenceTitle: "Supply Chain Liability",
        consequenceDesc:
          "It IS your problem. You're part of the supply chain and may face liability for dealing with non-compliant suppliers.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s14",
    category: "Smart Invoice",
    title: "Smart Invoice Record Keeping",
    situation:
      "You've been using Smart Invoice for 3 months but haven't kept any backup copies of your invoices.",
    icon: "💾",
    choices: [
      {
        text: "Use the Smart Invoice system's record storage features",
        subtext: "Use system storage",
        outcome: "good",
        consequenceTitle: "Digital Records",
        consequenceDesc:
          "Smart Invoice records transactions in real-time. While the system stores records, you should know how to retrieve them.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Print all invoices and keep physical copies",
        subtext: "Print paper copies",
        outcome: "neutral",
        consequenceTitle: "Physical Records",
        consequenceDesc:
          "This is a good backup but creates paper storage challenges. The system already stores records digitally.",
        scoreChange: 5,
        moneyChange: -100,
      },
      {
        text: "Don't worry; the system keeps records",
        subtext: "Rely solely on system",
        outcome: "neutral",
        consequenceTitle: "System Reliance",
        consequenceDesc:
          "While the system stores records, you should know how to retrieve them. Consider backing up as well.",
        scoreChange: 5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s15",
    category: "Smart Invoice",
    title: "Smart Invoice - Bulk Sales",
    situation:
      "A customer buys K5,000 worth of goods in a single transaction. You're tempted to skip issuing a Smart Invoice.",
    icon: "💰",
    choices: [
      {
        text: "Issue a single Smart Invoice for the full amount",
        subtext: "Issue proper invoice",
        outcome: "good",
        consequenceTitle: "Full Compliance",
        consequenceDesc:
          "All taxable supplies require Smart Invoices regardless of transaction size. This keeps you fully compliant.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Split the invoice into multiple smaller amounts",
        subtext: "Split invoice",
        outcome: "neutral",
        consequenceTitle: "Suspicious Practice",
        consequenceDesc:
          "Splitting invoices to avoid the system is non-compliant and may trigger audit flags.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Don't issue an invoice; it's a large transaction",
        subtext: "Skip invoice",
        outcome: "bad",
        consequenceTitle: "Missing Transaction",
        consequenceDesc:
          "Large transactions are audit flags. Skipping documentation is illegal and will be detected.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },

  // ============================================
  // CATEGORY 3: Turnover Tax (TOT) vs Income Tax (8 Scenarios)
  // ============================================
  {
    id: "shop_s16",
    category: "Turnover Tax",
    title: "Turnover Tax Qualification",
    situation:
      "Your shop's annual turnover is K350,000. You're unsure which tax regime applies to you.",
    icon: "📊",
    choices: [
      {
        text: "Register for Turnover Tax (TOT) - simplifies compliance",
        subtext: "Choose TOT",
        outcome: "good",
        consequenceTitle: "Simplified Tax",
        consequenceDesc:
          "Businesses with annual turnover below K800,000 can elect to pay Turnover Tax. It's simpler at 5% of gross revenue.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Register for Income Tax proper",
        subtext: "Choose Income Tax",
        outcome: "neutral",
        consequenceTitle: "More Complex Tax",
        consequenceDesc:
          "You can choose Income Tax, but it's more complex. Turnover Tax is usually simpler for small shops.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Pay no tax; turnover is too low",
        subtext: "Avoid tax entirely",
        outcome: "bad",
        consequenceTitle: "Illegal Tax Avoidance",
        consequenceDesc:
          "All business income is taxable. There's no turnover threshold for paying tax. This is illegal.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s17",
    category: "Turnover Tax",
    title: "Turnover Tax Filing Frequency",
    situation:
      "You're registered for Turnover Tax. You're not sure how often you need to file returns.",
    icon: "📅",
    choices: [
      {
        text: "File quarterly returns by the 14th of the following month",
        subtext: "Quarterly filing",
        outcome: "good",
        consequenceTitle: "Timely Filing",
        consequenceDesc:
          "Turnover Tax returns must be filed quarterly, by the 14th of the month following each quarter.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "File annually to save time",
        subtext: "Annual filing",
        outcome: "neutral",
        consequenceTitle: "Late Filing",
        consequenceDesc:
          "Turnover Tax requires quarterly filing. Annual filing is not acceptable and will result in penalties.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Skip filing until tax season",
        subtext: "No filing",
        outcome: "bad",
        consequenceTitle: "Non-Filing Penalties",
        consequenceDesc:
          "Not filing is illegal. Late filing penalties and interest apply. Your registration may be suspended.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s18",
    category: "Turnover Tax",
    title: "Turnover Tax Calculation",
    situation:
      "Your shop has a quarterly turnover of K25,000. Your business expenses are K20,000. How much Turnover Tax do you owe?",
    icon: "🧮",
    choices: [
      {
        text: "Pay 5% of K25,000 = K1,250",
        subtext: "Tax on turnover",
        outcome: "good",
        consequenceTitle: "Correct Calculation",
        consequenceDesc:
          "Turnover Tax is calculated on gross turnover (revenue), not profit. Expenses are NOT deducted.",
        scoreChange: 10,
        moneyChange: -1250,
      },
      {
        text: "Pay 5% of profit = K250",
        subtext: "Tax on profit",
        outcome: "bad",
        consequenceTitle: "Underpayment",
        consequenceDesc:
          "This is wrong. Turnover Tax is on gross turnover, not profit. This underpayment will be detected.",
        scoreChange: -10,
        moneyChange: 250,
      },
      {
        text: "Pay nothing because profit is low",
        subtext: "Skip payment",
        outcome: "bad",
        consequenceTitle: "Tax Evasion",
        consequenceDesc:
          "Turnover Tax is due regardless of profit. This is tax evasion with severe penalties.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s19",
    category: "Turnover Tax",
    title: "Turnover Threshold Exceeded",
    situation:
      "Your shop's annual turnover just exceeded K800,000. You're still filing Turnover Tax.",
    icon: "📈",
    choices: [
      {
        text: "Notify ZRA and transition to Income Tax regime",
        subtext: "Transition to Income Tax",
        outcome: "good",
        consequenceTitle: "Proper Transition",
        consequenceDesc:
          "Once turnover exceeds K800,000, you must move to mainstream Income Tax. The threshold is a rolling 12-month period.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Continue under Turnover Tax to avoid complexity",
        subtext: "Stay on TOT",
        outcome: "bad",
        consequenceTitle: "Underpayment Risk",
        consequenceDesc:
          "You'll be underpaying significantly; penalties and back taxes apply when discovered.",
        scoreChange: -10,
        moneyChange: -2000,
      },
      {
        text: "Split your business to stay under the threshold",
        subtext: "Split business",
        outcome: "bad",
        consequenceTitle: "Illegal Splitting",
        consequenceDesc:
          "Artificial splitting to avoid the threshold is illegal. ZRA can aggregate related businesses.",
        scoreChange: -10,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s20",
    category: "Turnover Tax",
    title: "Turnover Tax - Expenses Deduction",
    situation:
      "Your shop had high expenses this year due to repairs and new equipment. You want to deduct these from your tax.",
    icon: "🧾",
    choices: [
      {
        text: "Understand that Turnover Tax doesn't allow expense deductions",
        subtext: "Accept no deductions",
        outcome: "good",
        consequenceTitle: "Correct Understanding",
        consequenceDesc:
          "Turnover Tax doesn't allow expense deductions. It's calculated on gross revenue only.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Deduct expenses anyway and hope it passes",
        subtext: "Claim deductions",
        outcome: "bad",
        consequenceTitle: "Wrongful Deductions",
        consequenceDesc:
          "Wrongly deducted expenses = underpayment; penalties apply when discovered.",
        scoreChange: -10,
        moneyChange: 500,
      },
      {
        text: "Switch to Income Tax regime to claim deductions",
        subtext: "Switch tax regime",
        outcome: "good",
        consequenceTitle: "Better Tax Structure",
        consequenceDesc:
          "If you have significant expenses, Income Tax may be more beneficial as it taxes profit (revenue minus expenses).",
        scoreChange: 10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s21",
    category: "Turnover Tax",
    title: "Mixed Income Sources",
    situation:
      "Your shop sells groceries and airtime, and you also offer mobile money services. You want to use Turnover Tax for everything.",
    icon: "💳",
    choices: [
      {
        text: "Separate the income sources; some may be excluded from TOT",
        subtext: "Track separately",
        outcome: "good",
        consequenceTitle: "Proper Allocation",
        consequenceDesc:
          "Consultancy and professional fees are specifically excluded from Turnover Tax. You must allocate correctly.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Combine all income under Turnover Tax",
        subtext: "Combine everything",
        outcome: "neutral",
        consequenceTitle: "Risk of Exclusion",
        consequenceDesc:
          "If you include excluded income, you risk being audited and having your returns reassessed.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Only declare grocery income for Turnover Tax",
        subtext: "Hide some income",
        outcome: "bad",
        consequenceTitle: "Undeclared Income",
        consequenceDesc:
          "If discovered, all income subject to Income Tax, penalties apply. This is tax evasion.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s22",
    category: "Turnover Tax",
    title: "Turnover Tax Annual Return",
    situation:
      "You're in your second year of business. You haven't filed your Turnover Tax annual return yet.",
    icon: "📋",
    choices: [
      {
        text: "Download the ITF1 form from TaxOnline and file it",
        subtext: "File annual return",
        outcome: "good",
        consequenceTitle: "Annual Compliance",
        consequenceDesc:
          "Even with Turnover Tax, you must file an annual return (ITF1) by June 21. Quarterly payments don't replace annual filing.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Pay someone to file for you",
        subtext: "Hire consultant",
        outcome: "neutral",
        consequenceTitle: "Professional Help",
        consequenceDesc:
          "This is acceptable if you don't know how to file. Ensure they file correctly and on time.",
        scoreChange: 5,
        moneyChange: -300,
      },
      {
        text: "Ignore it—you pay quarterly anyway",
        subtext: "Skip filing",
        outcome: "bad",
        consequenceTitle: "Non-Filing Penalty",
        consequenceDesc:
          "Penalties for failure to file; inability to get Tax Clearance Certificate (TCC).",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s23",
    category: "Turnover Tax",
    title: "Provisional Tax Payments",
    situation:
      "Your business has grown and you're now under Income Tax. You must pay provisional tax quarterly.",
    icon: "💸",
    choices: [
      {
        text: "Calculate and pay the correct quarterly provisional tax",
        subtext: "Pay correct tax",
        outcome: "good",
        consequenceTitle: "Proper Provisional Payments",
        consequenceDesc:
          "Under Income Tax, provisional tax payments are required quarterly. Failure to pay leads to penalties and interest.",
        scoreChange: 10,
        moneyChange: -1000,
      },
      {
        text: "Pay minimal amounts and settle at year-end",
        subtext: "Pay minimum",
        outcome: "neutral",
        consequenceTitle: "Underpayment Risk",
        consequenceDesc:
          "Underpayment of provisional tax attracts penalties and interest when final tax is calculated.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Don't pay; final tax is still months away",
        subtext: "Skip payments",
        outcome: "bad",
        consequenceTitle: "Provisional Tax Penalty",
        consequenceDesc:
          "This is illegal. Underpayment of provisional tax attracts severe penalties and interest.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },

  // ============================================
  // CATEGORY 4: Record-Keeping (8 Scenarios)
  // ============================================
  {
    id: "shop_s24",
    category: "Record Keeping",
    title: "Lost Sales Records",
    situation:
      "You lost three months of sales records when your phone broke and you had no backup.",
    icon: "📱",
    choices: [
      {
        text: "Reconstruct records from Smart Invoice and bank statements",
        subtext: "Reconstruct records",
        outcome: "good",
        consequenceTitle: "Records Reconstructed",
        consequenceDesc:
          "Record-keeping is a legal obligation. Smart Invoice helps keep records automatically. Loss of records is not an excuse for non-compliance.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Estimate sales from memory",
        subtext: "Estimate",
        outcome: "neutral",
        consequenceTitle: "Inaccurate Records",
        consequenceDesc:
          "Estimates are risky. If your estimates are found to be inaccurate, penalties apply.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Underreport sales since records are lost",
        subtext: "Underreport",
        outcome: "bad",
        consequenceTitle: "Fraudulent Underreporting",
        consequenceDesc:
          "If discovered, underreporting is fraud; severe penalties apply. You could face criminal charges.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s25",
    category: "Record Keeping",
    title: "Mixing Personal and Business Funds",
    situation:
      "You use your personal bank account for both shop income and personal expenses.",
    icon: "🏦",
    choices: [
      {
        text: "Open a separate business bank account immediately",
        subtext: "Separate accounts",
        outcome: "good",
        consequenceTitle: "Proper Financial Management",
        consequenceDesc:
          "Mixing personal and business funds is a major compliance risk. ZRA may treat all bank deposits as business income.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Continue but manually track business transactions",
        subtext: "Manual tracking",
        outcome: "neutral",
        consequenceTitle: "Manual Tracking Risk",
        consequenceDesc:
          "This is possible but risky. Mistakes in manual tracking can lead to incorrect tax declarations.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Use the same account and estimate business income",
        subtext: "Estimate",
        outcome: "bad",
        consequenceTitle: "Bank Deposit Assessment",
        consequenceDesc:
          "Difficulty proving expenses; tax assessments on total deposits. ZRA may assume all deposits are business income.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s26",
    category: "Record Keeping",
    title: "Record-Keeping for Suppliers",
    situation:
      "You buy stock from multiple suppliers. You've lost receipts for several purchases.",
    icon: "🧾",
    choices: [
      {
        text: "Ask suppliers for duplicate receipts",
        subtext: "Get duplicates",
        outcome: "good",
        consequenceTitle: "Records Complete",
        consequenceDesc:
          "Proper record-keeping is required to support expenses and claim input tax. Without evidence, expenses may be disallowed.",
        scoreChange: 10,
        moneyChange: -50,
      },
      {
        text: "Claim the expenses without evidence",
        subtext: "Claim without evidence",
        outcome: "bad",
        consequenceTitle: "Disallowed Expenses",
        consequenceDesc:
          "If audited, expenses claimed without evidence will be disallowed with penalties. You'll owe back taxes.",
        scoreChange: -10,
        moneyChange: -300,
      },
      {
        text: "Don't claim the expenses to avoid audit risk",
        subtext: "Don't claim",
        outcome: "neutral",
        consequenceTitle: "Higher Tax Bill",
        consequenceDesc:
          "You'll pay more tax than necessary. It's better to get proper documentation and claim legitimately.",
        scoreChange: 5,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s27",
    category: "Record Keeping",
    title: "Stocktaking and Records",
    situation:
      "You've never conducted proper stocktaking for your shop. Your records don't match your actual stock.",
    icon: "📊",
    choices: [
      {
        text: "Conduct a full stocktake and update records",
        subtext: "Full stocktake",
        outcome: "good",
        consequenceTitle: "Accurate Records",
        consequenceDesc:
          "Proper stock records are required for accurate tax returns. Stock discrepancies are a common audit flag.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Estimate stock and hope the records match",
        subtext: "Estimate stock",
        outcome: "neutral",
        consequenceTitle: "Inaccurate Stock",
        consequenceDesc:
          "Estimates are risky. Inaccurate stock records can lead to incorrect tax declarations.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Don't worry; it's just a small shop",
        subtext: "Ignore stock records",
        outcome: "bad",
        consequenceTitle: "Audit Risk",
        consequenceDesc:
          "Stock discrepancies trigger audits; penalties for inaccurate records. ZRA can assess based on estimated stock.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s28",
    category: "Record Keeping",
    title: "Multiple Income Sources",
    situation:
      "Your shop sells groceries, airtime, and also offers mobile money services. You're not tracking each separately.",
    icon: "💳",
    choices: [
      {
        text: "Track each income source separately for tax purposes",
        subtext: "Separate tracking",
        outcome: "good",
        consequenceTitle: "Accurate Income Declaration",
        consequenceDesc:
          "All income sources must be declared. Mobile money and airtime may have different tax treatments.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Combine all income under groceries",
        subtext: "Combine income",
        outcome: "neutral",
        consequenceTitle: "Simplified But Risky",
        consequenceDesc:
          "This simplifies records but may hide important differences in tax treatment. An audit could reveal issues.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Only declare grocery income",
        subtext: "Hide income",
        outcome: "bad",
        consequenceTitle: "Undeclared Income",
        consequenceDesc:
          "Undeclared income = fraud; penalties apply. ZRA can detect through bank records and customer transactions.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s29",
    category: "Record Keeping",
    title: "Tax Filing Panic",
    situation:
      "You receive a ZRA SMS reminding you to file your annual return. You don't know how to file.",
    icon: "📱",
    choices: [
      {
        text: "Watch ZRA's YouTube tutorial or attend a workshop",
        subtext: "Learn to file",
        outcome: "good",
        consequenceTitle: "Confident Filing",
        consequenceDesc:
          "ZRA provides taxpayer education workshops nationwide. The annual return must be filed by June 21.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Ask a friend who filed before for help",
        subtext: "Ask friend",
        outcome: "neutral",
        consequenceTitle: "Friend's Help",
        consequenceDesc:
          "This can work, but ensure your friend knows the process correctly. Mistakes could lead to penalties.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Ignore the message",
        subtext: "Ignore",
        outcome: "bad",
        consequenceTitle: "Late Filing Penalties",
        consequenceDesc:
          "Late filing penalties; inability to get Tax Clearance Certificate (TCC). Your registration may be suspended.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s30",
    category: "Record Keeping",
    title: "Records Retention Period",
    situation:
      "You're not sure how long to keep your shop records. Your shop is small and space is limited.",
    icon: "📁",
    choices: [
      {
        text: "Keep records for the statutory period (typically 6 years)",
        subtext: "Keep 6 years",
        outcome: "good",
        consequenceTitle: "Audit-Ready",
        consequenceDesc:
          "Tax records must be retained for the statutory period for audit purposes. If audited for prior years, failure to produce records leads to default assessments.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Keep records for 1 year",
        subtext: "Keep 1 year",
        outcome: "neutral",
        consequenceTitle: "Insufficient Retention",
        consequenceDesc:
          "This is not enough. ZRA can audit up to 6 years back. You'll be unable to prove your returns.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Discard records after filing returns",
        subtext: "Discard immediately",
        outcome: "bad",
        consequenceTitle: "No Audit Defense",
        consequenceDesc:
          "Inability to prove previous returns in an audit. You'll face default assessments and penalties.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s31",
    category: "Record Keeping",
    title: "Annual Return Filing",
    situation:
      "You need to file your ITF1 annual return. You have all your documents ready.",
    icon: "📋",
    choices: [
      {
        text: "Download the form from TaxOnline and file yourself",
        subtext: "File yourself",
        outcome: "good",
        consequenceTitle: "Self-Filing Success",
        consequenceDesc:
          "Annual returns can be filed through TaxOnline. Help is available through ZRA's taxpayer education workshops.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Engage a tax consultant for assistance",
        subtext: "Hire consultant",
        outcome: "good",
        consequenceTitle: "Professional Filing",
        consequenceDesc:
          "This ensures accuracy and compliance. The cost is worth avoiding penalties.",
        scoreChange: 10,
        moneyChange: -400,
      },
      {
        text: "Ask ZRA to help you file",
        subtext: "Ask ZRA",
        outcome: "neutral",
        consequenceTitle: "Limited Help",
        consequenceDesc:
          "ZRA may not provide personalized filing assistance; deadlines still apply. Better to use official resources.",
        scoreChange: 5,
        moneyChange: 0,
      },
    ],
  },

  // ============================================
  // CATEGORY 5: VAT Registration & Compliance (9 Scenarios)
  // ============================================
  {
    id: "shop_s32",
    category: "VAT",
    title: "VAT Registration Threshold",
    situation:
      "Your shop's annual turnover has reached K900,000. You're not registered for VAT.",
    icon: "📈",
    choices: [
      {
        text: "Register for VAT immediately (within 30 days)",
        subtext: "Register now",
        outcome: "good",
        consequenceTitle: "VAT Compliant",
        consequenceDesc:
          "VAT registration is mandatory if taxable turnover exceeds K800,000 in any 12-month period. You have 30 days to register after crossing the threshold.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Delay registration until the end of the financial year",
        subtext: "Delay registration",
        outcome: "bad",
        consequenceTitle: "Backdated VAT",
        consequenceDesc:
          "Backdated VAT liabilities with penalties; input VAT cannot be claimed for the pre-registration period.",
        scoreChange: -10,
        moneyChange: -2000,
      },
      {
        text: "Avoid registration by limiting sales",
        subtext: "Limit sales",
        outcome: "bad",
        consequenceTitle: "Lost Revenue",
        consequenceDesc:
          "Limiting sales to avoid registration means losing business. It's better to register and grow.",
        scoreChange: -5,
        moneyChange: -5000,
      },
    ],
  },
  {
    id: "shop_s33",
    category: "VAT",
    title: "Charging VAT",
    situation:
      "You're now VAT-registered. A customer asks for a discount if you don't charge VAT.",
    icon: "💳",
    choices: [
      {
        text: "Refuse; VAT must be charged on all taxable supplies",
        subtext: "Charge VAT",
        outcome: "good",
        consequenceTitle: "Proper VAT Charging",
        consequenceDesc:
          "Once registered, VAT must be charged on all taxable supplies at 16%. Inconsistent charging is illegal.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Absorb the VAT cost and charge the pre-VAT price",
        subtext: "Absorb VAT",
        outcome: "neutral",
        consequenceTitle: "Higher Costs",
        consequenceDesc:
          "You'll be paying the VAT out of your margin. This reduces your profit.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Charge VAT on some customers but not others",
        subtext: "Selective VAT",
        outcome: "bad",
        consequenceTitle: "Inconsistent Charging",
        consequenceDesc:
          "ZRA audit will detect inconsistency; penalties and full VAT assessment apply.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s34",
    category: "VAT",
    title: "Input VAT Claims",
    situation:
      "You purchased new shop equipment for K5,000 including VAT. You're registered for VAT.",
    icon: "🛒",
    choices: [
      {
        text: "Claim input VAT on the equipment",
        subtext: "Claim input VAT",
        outcome: "good",
        consequenceTitle: "Proper VAT Claim",
        consequenceDesc:
          "You can claim input VAT on business purchases. This reduces your VAT liability.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Don't claim; it's too complicated",
        subtext: "Don't claim",
        outcome: "neutral",
        consequenceTitle: "Lost VAT Recovery",
        consequenceDesc:
          "You're entitled to claim input VAT. Not claiming means you're paying more tax than necessary.",
        scoreChange: 5,
        moneyChange: -800,
      },
      {
        text: "Claim VAT on all purchases, personal and business",
        subtext: "Claim all VAT",
        outcome: "bad",
        consequenceTitle: "VAT Fraud",
        consequenceDesc:
          "Claiming VAT on personal items is fraud. Input VAT claims on personal items will be disallowed with penalties.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s35",
    category: "VAT",
    title: "VAT Returns",
    situation:
      "You're VAT-registered but you haven't filed any VAT returns for 3 months because you had low sales.",
    icon: "📋",
    choices: [
      {
        text: "File a nil return for each month",
        subtext: "File nil returns",
        outcome: "good",
        consequenceTitle: "Regular Filing",
        consequenceDesc:
          "VAT returns must be filed monthly by the 18th, even if there's no business. Penalties apply for late filing.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Skip filing until you have significant sales",
        subtext: "Skip filing",
        outcome: "bad",
        consequenceTitle: "Non-Filing Penalties",
        consequenceDesc:
          "Penalties for non-filing; VAT registration may be suspended. You can't skip returns even with no sales.",
        scoreChange: -10,
        moneyChange: -500,
      },
      {
        text: "File late with explanation",
        subtext: "File late",
        outcome: "neutral",
        consequenceTitle: "Late Filing",
        consequenceDesc:
          "Late filing attracts penalties. It's better to file on time, even nil returns.",
        scoreChange: -5,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "shop_s36",
    category: "VAT",
    title: "Zero-Rated Supplies",
    situation:
      "You export some of your shop goods to customers across the border. You're VAT-registered.",
    icon: "🚚",
    choices: [
      {
        text: "Apply zero-rating with proper export documentation",
        subtext: "Zero-rate properly",
        outcome: "good",
        consequenceTitle: "Proper Zero-Rating",
        consequenceDesc:
          "Exports are zero-rated for VAT. You must maintain proper export documentation to prove zero-rating eligibility.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Charge VAT anyway and let customers handle it",
        subtext: "Charge VAT",
        outcome: "neutral",
        consequenceTitle: "Unnecessary VAT",
        consequenceDesc:
          "You're charging VAT that may not be due. Your customers may be entitled to zero-rating.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Don't charge VAT or keep records",
        subtext: "No VAT no records",
        outcome: "bad",
        consequenceTitle: "Export Evidence Missing",
        consequenceDesc:
          "Export evidence lacking = VAT assessment; penalties. You need records to prove zero-rating.",
        scoreChange: -10,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s37",
    category: "VAT",
    title: "VAT Audit",
    situation:
      "ZRA has selected your VAT returns for audit. Your records are incomplete.",
    icon: "🔍",
    choices: [
      {
        text: "Engage a tax consultant and organize records",
        subtext: "Get help",
        outcome: "good",
        consequenceTitle: "Audit Prepared",
        consequenceDesc:
          "Cooperating fully with audits minimizes penalties. Records must be available for inspection.",
        scoreChange: 10,
        moneyChange: -500,
      },
      {
        text: "Cooperate but provide partial records",
        subtext: "Partial records",
        outcome: "neutral",
        consequenceTitle: "Incomplete Audit",
        consequenceDesc:
          "Partial records may lead to default assessments. It's better to be fully prepared.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Delay and hope the audit goes away",
        subtext: "Delay",
        outcome: "bad",
        consequenceTitle: "Worse Outcome",
        consequenceDesc:
          "Default assessments, penalties, and possible criminal referral. Delays never help.",
        scoreChange: -10,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s38",
    category: "VAT",
    title: "Voluntary VAT Registration",
    situation:
      "Your shop turnover is below K800,000 but you want to register for VAT voluntarily.",
    icon: "✅",
    choices: [
      {
        text: "Apply for voluntary VAT registration",
        subtext: "Register voluntarily",
        outcome: "good",
        consequenceTitle: "Voluntary Registration",
        consequenceDesc:
          "Voluntary VAT registration is possible and can be beneficial if you purchase from VAT-registered suppliers. It comes with full compliance obligations.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Don't register; it's too complex",
        subtext: "Stay unregistered",
        outcome: "neutral",
        consequenceTitle: "Missed Opportunity",
        consequenceDesc:
          "You may be missing out on input VAT recovery. Consider the benefits before deciding.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Register and claim input VAT on recent purchases",
        subtext: "Register retroactively",
        outcome: "bad",
        consequenceTitle: "Invalid Claims",
        consequenceDesc:
          "Input VAT cannot be claimed on pre-registration purchases; penalties apply. Registration is prospective.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s39",
    category: "VAT",
    title: "Mixed Supplies",
    situation:
      "Your shop sells both VAT-taxable goods and goods that may be exempt from VAT.",
    icon: "📦",
    choices: [
      {
        text: "Identify which supplies are taxable and track them separately",
        subtext: "Track separately",
        outcome: "good",
        consequenceTitle: "Accurate VAT Treatment",
        consequenceDesc:
          "Some supplies are exempt from VAT. Taxable and exempt supplies must be tracked separately.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Assume everything is taxable and charge VAT",
        subtext: "All taxable",
        outcome: "neutral",
        consequenceTitle: "Overcharging VAT",
        consequenceDesc:
          "You may be overcharging customers on exempt items. This could lead to complaints and refunds.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Assume everything is exempt and charge no VAT",
        subtext: "All exempt",
        outcome: "bad",
        consequenceTitle: "Undercharging VAT",
        consequenceDesc:
          "Incorrect VAT treatment leads to assessment and penalties. You'll owe VAT on taxable supplies.",
        scoreChange: -10,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s40",
    category: "VAT",
    title: "VAT Refund Claim",
    situation:
      "You're owed a VAT refund from ZRA. An agent offers to expedite the refund for a 20% fee.",
    icon: "💰",
    choices: [
      {
        text: "Wait for the legitimate ZRA process",
        subtext: "Wait properly",
        outcome: "good",
        consequenceTitle: "Proper Refund Process",
        consequenceDesc:
          "Third-party refund expeditors are often linked to fraud. ZRA has a legitimate refund process.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Pay the agent to speed up the refund",
        subtext: "Pay expeditor",
        outcome: "bad",
        consequenceTitle: "Fraud Risk",
        consequenceDesc:
          "You may be part of a fraud scheme; the agent may be an authority sting. You could lose the fee and face penalties.",
        scoreChange: -10,
        moneyChange: -500,
      },
      {
        text: "File a formal complaint with ZRA about the delay",
        subtext: "Complain",
        outcome: "neutral",
        consequenceTitle: "Official Complaint",
        consequenceDesc:
          "This is the proper channel. ZRA has procedures for refund delays.",
        scoreChange: 5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s41",
    category: "VAT",
    title: "VAT Registration Requirement",
    situation:
      "ZRA has identified that you should be VAT-registered but you haven't. They send a notice.",
    icon: "📨",
    choices: [
      {
        text: "Register immediately and pay backdated VAT",
        subtext: "Register and pay",
        outcome: "good",
        consequenceTitle: "Compliant Resolution",
        consequenceDesc:
          "A supplier who is eligible to register but fails to register is liable to pay output tax they should have collected, with interest and penalties.",
        scoreChange: 10,
        moneyChange: -2000,
      },
      {
        text: "Appeal that you don't meet the threshold yet",
        subtext: "Appeal",
        outcome: "neutral",
        consequenceTitle: "Appeal Considered",
        consequenceDesc:
          "If you genuinely don't meet the threshold, you can appeal. But if you do, you must register.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Claim you didn't know",
        subtext: "Claim ignorance",
        outcome: "bad",
        consequenceTitle: "Ignorance Not Excuse",
        consequenceDesc:
          "Ignorance is not a defense; backdated liabilities apply. You'll still owe the taxes and penalties.",
        scoreChange: -5,
        moneyChange: -1500,
      },
    ],
  },

  // ============================================
  // CATEGORY 6: Penalties & Enforcement (9 Scenarios)
  // ============================================
  {
    id: "shop_s42",
    category: "Penalties",
    title: "Late Filing Penalty",
    situation:
      "You receive a penalty notice for late filing of your Turnover Tax return.",
    icon: "💸",
    choices: [
      {
        text: "Pay the penalty and file the return late",
        subtext: "Pay and file",
        outcome: "good",
        consequenceTitle: "Penalty Paid",
        consequenceDesc:
          "Penalties for late filing apply. Paying and filing is the right approach. You'll avoid further penalties.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Appeal the penalty if you have a valid reason",
        subtext: "Appeal",
        outcome: "good",
        consequenceTitle: "Appeal Considered",
        consequenceDesc:
          "You can appeal if you have a valid reason and can prove it. The penalty may be waived.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Ignore the penalty notice",
        subtext: "Ignore",
        outcome: "bad",
        consequenceTitle: "Penalty Increases",
        consequenceDesc:
          "Ignoring penalties leads to more serious consequences. Penalties compound and lead to enforcement action.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s43",
    category: "Penalties",
    title: "Underpayment Assessment",
    situation:
      "ZRA assesses additional tax based on what they believe your shop's income should be.",
    icon: "📊",
    choices: [
      {
        text: "Provide documentation to prove your actual income",
        subtext: "Provide proof",
        outcome: "good",
        consequenceTitle: "Assessment Reduced",
        consequenceDesc:
          "Default assessments can be challenged with proper documentation. Providing evidence can reduce or eliminate the assessment.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Accept the assessment without challenge",
        subtext: "Accept assessment",
        outcome: "neutral",
        consequenceTitle: "Assessment Accepted",
        consequenceDesc:
          "Accepting is valid if the assessment is correct. But if it's wrong, you'll pay too much tax.",
        scoreChange: 5,
        moneyChange: -500,
      },
      {
        text: "Appeal the assessment with strong evidence",
        subtext: "Appeal",
        outcome: "good",
        consequenceTitle: "Appeal Filed",
        consequenceDesc:
          "Appealing with strong evidence is the right approach if the assessment is wrong. You must have good records.",
        scoreChange: 10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s44",
    category: "Penalties",
    title: "Tax Clearance Certificate Application",
    situation:
      "You need a Tax Clearance Certificate for a government tender. Your taxes are filed but not fully paid.",
    icon: "📄",
    choices: [
      {
        text: "Pay all outstanding taxes before applying",
        subtext: "Pay first",
        outcome: "good",
        consequenceTitle: "Certificate Approved",
        consequenceDesc:
          "A Tax Clearance Certificate is required for tenders, loans, and government contracts. It is only issued if you are fully tax-compliant.",
        scoreChange: 10,
        moneyChange: -1000,
      },
      {
        text: "Apply anyway; maybe they won't check",
        subtext: "Apply anyway",
        outcome: "bad",
        consequenceTitle: "Application Rejected",
        consequenceDesc:
          "Application rejected; you may be placed on a blacklist. This affects future applications.",
        scoreChange: -10,
        moneyChange: 0,
      },
      {
        text: "Delay the application until you have funds",
        subtext: "Delay",
        outcome: "neutral",
        consequenceTitle: "Missed Opportunity",
        consequenceDesc:
          "You'll lose the tender opportunity. It's better to arrange funds and pay.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s45",
    category: "Penalties",
    title: "Tax Evasion Investigation",
    situation:
      "You're notified that ZRA is investigating your tax compliance due to suspicious transactions.",
    icon: "🔍",
    choices: [
      {
        text: "Cooperate fully and provide all requested documentation",
        subtext: "Cooperate",
        outcome: "good",
        consequenceTitle: "Investigation Concluded",
        consequenceDesc:
          "Cooperating fully minimizes penalties. Providing documentation shows good faith.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Destroy incriminating records",
        subtext: "Destroy records",
        outcome: "bad",
        consequenceTitle: "Criminal Charges",
        consequenceDesc:
          "Destruction of evidence is a serious crime. Criminal prosecution for obstruction of justice.",
        scoreChange: -20,
        moneyChange: -5000,
      },
      {
        text: "Ignore the investigation",
        subtext: "Ignore",
        outcome: "bad",
        consequenceTitle: "Enforcement Action",
        consequenceDesc:
          "Ignoring an investigation leads to default assessments, asset seizures, and criminal prosecution.",
        scoreChange: -15,
        moneyChange: -3000,
      },
    ],
  },
  {
    id: "shop_s46",
    category: "Penalties",
    title: "Garnishing of Bank Account",
    situation:
      "ZRA has initiated garnishing of your bank account for unpaid taxes.",
    icon: "🏦",
    choices: [
      {
        text: "Settle the outstanding taxes immediately",
        subtext: "Settle",
        outcome: "good",
        consequenceTitle: "Garnishing Stopped",
        consequenceDesc:
          "Settling the outstanding taxes stops the garnishing. This prevents further penalties.",
        scoreChange: 10,
        moneyChange: -2000,
      },
      {
        text: "Challenge the garnishing through legal channels",
        subtext: "Challenge",
        outcome: "neutral",
        consequenceTitle: "Legal Challenge",
        consequenceDesc:
          "You can challenge if the garnishing is unlawful. But if the taxes are owed, it's valid.",
        scoreChange: 5,
        moneyChange: -500,
      },
      {
        text: "Move your money to another account",
        subtext: "Hide money",
        outcome: "bad",
        consequenceTitle: "Criminal Prosecution",
        consequenceDesc:
          "Criminal prosecution for attempting to evade collection. This makes the situation much worse.",
        scoreChange: -20,
        moneyChange: -5000,
      },
    ],
  },
  {
    id: "shop_s47",
    category: "Penalties",
    title: "Late Filing Penalty from ZRA",
    situation:
      "You filed your annual return a week late. ZRA imposes a penalty.",
    icon: "💸",
    choices: [
      {
        text: "Pay the penalty and learn for next time",
        subtext: "Pay",
        outcome: "good",
        consequenceTitle: "Penalty Paid",
        consequenceDesc:
          "Penalties for late filing apply under Section 17 of the VAT Act. Paying shows good faith.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Appeal the penalty on genuine grounds",
        subtext: "Appeal",
        outcome: "good",
        consequenceTitle: "Penalty Considered",
        consequenceDesc:
          "If you have genuine grounds (e.g., illness, emergency), the penalty may be waived.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Ignore it; it's only a small amount",
        subtext: "Ignore",
        outcome: "bad",
        consequenceTitle: "Penalty Grows",
        consequenceDesc:
          "Even small penalties compound with interest. Ignoring them leads to enforcement action.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s48",
    category: "Penalties",
    title: "Compliance Burden Challenge",
    situation:
      "You have to pay fire licence, health certificate, and other fees totaling K26,000 per year for your shop.",
    icon: "📋",
    choices: [
      {
        text: "Pay all fees and keep proper records",
        subtext: "Pay all",
        outcome: "good",
        consequenceTitle: "Full Compliance",
        consequenceDesc:
          "Businesses face multiple compliance requirements beyond tax. Fees include Fire Licence, Health Certificate, Business Permit, and Sector Licence.",
        scoreChange: 10,
        moneyChange: -26000,
      },
      {
        text: "Pay some fees and skip others to save money",
        subtext: "Pay some",
        outcome: "bad",
        consequenceTitle: "Licenses Revoked",
        consequenceDesc:
          "Licenses may be revoked; business closure. All fees are required to operate legally.",
        scoreChange: -10,
        moneyChange: -5000,
      },
      {
        text: "Complain to the authorities about the burden",
        subtext: "Complain",
        outcome: "neutral",
        consequenceTitle: "Complaint Noted",
        consequenceDesc:
          "Complaints may be noted but fees remain required. You need to comply regardless.",
        scoreChange: 5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s49",
    category: "Penalties",
    title: "Withholding Tax Confusion",
    situation:
      "A corporate customer makes a large purchase from your shop and asks about withholding tax.",
    icon: "💳",
    choices: [
      {
        text: "Understand that WHT applies to services, not goods",
        subtext: "Explain correctly",
        outcome: "good",
        consequenceTitle: "Correct WHT Treatment",
        consequenceDesc:
          "Withholding Tax (WHT) applies differently to goods and services. For goods, there is a Withholding TOT mechanism. Consultancy services are subject to 15% WHT.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Allow them to deduct WHT on all purchases",
        subtext: "Allow deduction",
        outcome: "bad",
        consequenceTitle: "Incorrect Deduction",
        consequenceDesc:
          "Incorrect WHT deduction impacts your compliance; certificate issues. This affects your tax credits.",
        scoreChange: -10,
        moneyChange: -500,
      },
      {
        text: "Refuse to accept WHT deduction",
        subtext: "Refuse",
        outcome: "neutral",
        consequenceTitle: "Customer Dispute",
        consequenceDesc:
          "Refusing WHT deduction may cause disputes with corporate customers. They have legal obligations.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s50",
    category: "Penalties",
    title: "Compliance Education",
    situation:
      "You hear about ZRA's taxpayer education workshops. You've never attended one.",
    icon: "📖",
    choices: [
      {
        text: "Attend the next workshop to learn about compliance",
        subtext: "Attend",
        outcome: "good",
        consequenceTitle: "Educated Taxpayer",
        consequenceDesc:
          "ZRA conducts regular taxpayer education sensitization workshops nationwide. Topics include Smart Invoice, tax compliance, and filing returns.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Ask someone who attended for notes",
        subtext: "Ask for notes",
        outcome: "neutral",
        consequenceTitle: "Second-Hand Knowledge",
        consequenceDesc:
          "This helps but you may miss important details. Attendance is better.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Skip it; you don't need training",
        subtext: "Skip",
        outcome: "bad",
        consequenceTitle: "Missed Learning",
        consequenceDesc:
          "You miss opportunities to learn about changes and avoid penalties. Tax laws change frequently.",
        scoreChange: -5,
        moneyChange: -500,
      },
    ],
  },
];

// Export for use in other files
export default SHOPOWNER_SCENARIOS;