export interface PracticeArea {
  slug: string;
  title: string;
  urduTitle: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  governingLaws: string[];
  keyServices: string[];
  courtsHandled: string[];
  practicalInsight: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "constitutional-petitions",
    title: "Constitutional Petitions & High Court Writs",
    urduTitle: "آئینی درخواستیں اور رٹ پٹیشنز",
    tagline: "Invoking Article 199 of the 1973 Constitution before the High Court of Sindh",
    shortDescription: "Challenging unlawful executive actions, protecting fundamental constitutional rights, and securing judicial relief against public authorities.",
    fullDescription: "When state departments, regulatory authorities, municipal bodies, or law enforcement agencies exceed their statutory authority or act without lawful mandate, the High Court of Sindh exercises extraordinary constitutional jurisdiction under Article 199 of the Constitution of Pakistan (1973). We prepare and argue writ petitions in the nature of Mandamus, Prohibition, Certiorari, Habeas Corpus, and Quo Warranto to protect citizen liberties, employment rights, and commercial interests.",
    governingLaws: [
      "Constitution of the Islamic Republic of Pakistan, 1973 (Article 199)",
      "High Court Rules and Orders (Karachi Bench)",
      "Civil Servants Act and Statutory Service Regulations",
      "Public Procurement Regulatory Authority (PPRA) Rules"
    ],
    keyServices: [
      "Writs of Certiorari to quash illegal notifications, orders, or departmental proceedings",
      "Writs of Mandamus directing public bodies to perform their mandatory statutory duties",
      "Writs of Prohibition restraining unlawful administrative overreach or demolition drives",
      "Habeas Corpus petitions for the recovery of unlawfully detained individuals",
      "Service and seniority disputes of government and autonomous institution personnel",
      "Tender challenges and arbitrary cancellation of government concessions"
    ],
    courtsHandled: [
      "High Court of Sindh (Principal Seat, Karachi)",
      "Appellate & Constitutional Division Benches",
      "Supreme Court of Pakistan (Karachi Registry / Islamabad via Advocate-on-Record)"
    ],
    practicalInsight: "Constitutional petitions require establishing that no other equally efficacious statutory remedy exists under the law, or that the impugned action was taken without jurisdiction or in violation of fundamental rights. Precision in drafting and supporting documentation is paramount.",
    faq: [
      {
        question: "How quickly can an urgent stay order be obtained in a Writ Petition?",
        answer: "If the matter involves imminent threat of demolition, illegal arrest, or irreparable economic harm, an application for urgent hearing can be placed before the High Court on the same or next judicial working day."
      },
      {
        question: "Can a private commercial dispute be taken to the High Court under Article 199?",
        answer: "Generally no. Article 199 is directed against the State, government functionaries, and public authorities performing functions in connection with the affairs of the Federation or Province, unless a public function or statutory violation is involved."
      }
    ]
  },
  {
    slug: "criminal-law",
    title: "Criminal Defense & Trial Advocacy",
    urduTitle: "فوجداری مقدمات اور ضمانتیں",
    tagline: "Rigorous defense, bail proceedings, and appellate representation before criminal courts",
    shortDescription: "Strategic defense across all stages of criminal proceedings, from pre-arrest bail to trial representation and High Court appeals.",
    fullDescription: "Facing criminal charges puts personal freedom, reputation, and livelihood in immediate jeopardy. Advocate Raheel Anis provides steadfast courtroom representation throughout Karachi's judicial hierarchy. From urgent pre-arrest and post-arrest bail hearings to complex trial advocacy, cross-examination of prosecution witnesses, and High Court criminal revisions, our chambers ensure every client receives fair procedural safeguards under the Code of Criminal Procedure.",
    governingLaws: [
      "Pakistan Penal Code, 1860 (PPC)",
      "Code of Criminal Procedure, 1898 (CrPC)",
      "Qanun-e-Shahadat Order, 1984 (Law of Evidence)",
      "Prevention of Electronic Crimes Act, 2016 (PECA - Cybercrime)",
      "Control of Narcotic Substances Act, 1997 (CNSA)"
    ],
    keyServices: [
      "Pre-arrest bail (Section 498 CrPC) and post-arrest bail (Section 497 CrPC)",
      "Quashing of false FIRs under Section 561-A CrPC before the High Court",
      "Defense advocacy in homicide, financial fraud, cybercrime, and narcotics cases",
      "Cross-examination of prosecution witnesses and technical expert witnesses",
      "Criminal appeals against conviction and suspension of sentences",
      "Filing private criminal complaints and monitoring FIR registrations"
    ],
    courtsHandled: [
      "City Courts Karachi (Judicial Magistrates & Sessions Courts)",
      "Malir District & Sessions Courts",
      "Special Anti-Terrorism & Anti-Corruption Courts",
      "High Court of Sindh (Criminal Appellate & Revisional Benches)"
    ],
    practicalInsight: "In criminal proceedings, early intervention during the initial investigation stage and bail hearings often sets the trajectory for the entire defense. Never give recorded statements without prior counsel.",
    faq: [
      {
        question: "What is the difference between pre-arrest and post-arrest bail?",
        answer: "Pre-arrest bail is sought when an arrest is imminent and motivated by ulterior motives or malice, protecting the accused from custodial interrogation. Post-arrest bail is applied for after an arrest has occurred, arguing that reasonable grounds for guilt do not exist or further inquiry is required."
      },
      {
        question: "How are false FIRs cancelled or quashed in Karachi?",
        answer: "If an FIR is registered without factual foundation or purely for harassment, an application under Section 561-A CrPC can be filed before the High Court of Sindh to prevent abuse of the process of the court."
      }
    ]
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation & Dispute Resolution",
    urduTitle: "دیوانی مقدمات اور قانونی چارہ جوئی",
    tagline: "Protecting civil rights, contractual agreements, and financial assets with precision",
    shortDescription: "Comprehensive representation in original civil suits, recovery proceedings, injunctions, declarations, and civil appeals.",
    fullDescription: "Civil disputes demand deep mastery of evidence, pleadings, and procedural timelines. Quaid-e-Azam Law Associates represents individuals, family trusts, and commercial entities in suits for declaration, permanent and temporary injunctions, specific performance of contracts, partition of co-owned estates, and damages for civil wrongs. We litigate rigorously before Senior Civil Judges, District Judges, and the original jurisdiction of the High Court of Sindh.",
    governingLaws: [
      "Code of Civil Procedure, 1908 (CPC)",
      "Specific Relief Act, 1877",
      "Contract Act, 1872",
      "Limitation Act, 1908",
      "Court Fees Act, 1870"
    ],
    keyServices: [
      "Suits for specific performance of sale agreements and commercial contracts",
      "Suits for declaration of title, ownership, and cancellation of forged deeds",
      "Temporary injunctions (Order XXXIX Rules 1 & 2 CPC) to restrain unlawful actions",
      "Partition suits for joint family properties and ancestral inheritance",
      "Recovery suits for unpaid financial dues, commercial receivables, and debt",
      "First and Second Civil Appeals before District Courts and the High Court"
    ],
    courtsHandled: [
      "City Courts Karachi (Civil Courts & District Judges)",
      "Malir District Civil Courts",
      "High Court of Sindh (Original Civil Jurisdiction for high-value suits)"
    ],
    practicalInsight: "Civil suits in Pakistan are frequently won or lost at the pleadings stage. A poorly drafted plaint or written statement cannot be repaired later through oral evidence, making initial drafting accuracy critical.",
    faq: [
      {
        question: "What is the pecuniary threshold for filing original civil suits in the Sindh High Court?",
        answer: "In Karachi, civil suits involving subject matter value exceeding PKR 6.5 Crore (65 Million) fall within the original civil jurisdiction of the High Court of Sindh, while lower-value matters originate in District Civil Courts."
      },
      {
        question: "Can an interim stay order be granted ex-parte in property matters?",
        answer: "Yes, under Order XXXIX Rule 3 CPC, if the court is satisfied that delayed notice would defeat the object of granting the injunction, an immediate ad-interim status quo order can be issued."
      }
    ]
  },
  {
    slug: "corporate-commercial",
    title: "Corporate, Commercial & Company Law",
    urduTitle: "کارپوریٹ اور تجارتی امور",
    tagline: "Corporate structuring, commercial agreements, SECP compliance, and corporate litigation",
    shortDescription: "Strategic corporate counsel for private limited companies, partnerships, sole proprietorships, and international investors.",
    fullDescription: "Karachi is Pakistan's financial engine. We assist business founders, directors, and multinational companies in navigating commercial legalities with confidence. Our corporate practice covers company incorporation with SECP, drafting complex shareholder agreements, joint venture contracts, employment manuals, regulatory approvals, and corporate dispute resolution before the Company Benches of the High Court.",
    governingLaws: [
      "Companies Act, 2017",
      "Partnership Act, 1932",
      "Competition Act, 2010",
      "Securities and Exchange Commission of Pakistan (SECP) Regulations",
      "Foreign Exchange Regulation Act, 1947"
    ],
    keyServices: [
      "Company registration, private limited incorporation, and SECP statutory filings",
      "Drafting commercial contracts, non-disclosure agreements, and SLAs",
      "Shareholders' agreements, buy-out agreements, and equity vesting terms",
      "Corporate winding up, merger schemes, and minority oppression petitions",
      "Employment contracts, executive separation terms, and workplace policies",
      "Commercial arbitration and mediation proceedings"
    ],
    courtsHandled: [
      "Company Bench, High Court of Sindh",
      "SECP Appellate Bench",
      "Commercial Arbitral Tribunals"
    ],
    practicalInsight: "Clear, unambiguous commercial drafting saves businesses millions of rupees in litigation costs. Defining dispute resolution and termination mechanisms upfront provides essential operational safety.",
    faq: [
      {
        question: "How long does private limited company registration take in Pakistan?",
        answer: "With complete digital verification through the SECP e-services portal, name reservation and incorporation certificates are typically completed within 3 to 7 business days."
      },
      {
        question: "What legal protection exists for minority shareholders facing oppression?",
        answer: "Under Sections 286 and 287 of the Companies Act 2017, minority shareholders holding at least 10% voting power can petition the High Court against prejudicial or oppressive conduct by majority directors."
      }
    ]
  },
  {
    slug: "banking-finance",
    title: "Banking & Financial Recovery Law",
    urduTitle: "بینکنگ اور فنانشل لاء",
    tagline: "Expert defense and litigation before Banking Courts and Appellate Tribunals",
    shortDescription: "Resolving complex lending disputes, defending against recovery suits, restructuring liabilities, and handling mortgage disputes.",
    fullDescription: "Banking litigation operates under a specialized summary statutory procedure. Whether defending corporate borrowers and individual guarantors against recovery suits or addressing mortgage auctions, our chambers provide rigorous defense before the Banking Courts of Karachi and the High Court. We scrutinize statement of accounts, mark-up calculations, mortgage charges, and guarantee deeds to protect client assets from unlawful execution.",
    governingLaws: [
      "Financial Institutions (Recovery of Finances) Ordinance, 2001 (FIO 2001)",
      "State Bank of Pakistan (SBP) Prudential Regulations",
      "Negotiable Instruments Act, 1881",
      "Corporate Restructuring Companies Act, 2016"
    ],
    keyServices: [
      "Filing Petitions for Leave to Defend (PLA) within the mandatory 30-day window",
      "Defense against Section 9 summary recovery suits by commercial banks",
      "Challenging arbitrary mortgage auctions under Section 15 of FIO 2001",
      "Disputing compounded mark-up, penal charges, and accounting discrepancies",
      "Negotiating structured debt settlements and out-of-court restructuring",
      "Filing Banking First Appeals before the Division Bench of the High Court"
    ],
    courtsHandled: [
      "Banking Courts I to V, Karachi",
      "High Court of Sindh (Banking Appellate Division Bench)",
      "Special Financial Crime Tribunals"
    ],
    practicalInsight: "In banking suits under FIO 2001, a borrower MUST file a petition for leave to defend within exactly 30 days of service. Missing this statutory deadline results in an automatic decree against the borrower without trial.",
    faq: [
      {
        question: "Can a bank sell mortgaged property without filing a court suit?",
        answer: "Under Section 15 of FIO 2001, financial institutions possess statutory powers to auction mortgaged property after issuing three mandatory 30-day notices. However, strict procedural compliance is required, and illegal auctions can be challenged and stayed before the High Court."
      },
      {
        question: "What must be included in a Leave to Defend petition?",
        answer: "The petition must specify the exact amount disputed, the legitimate amount admitted, and point out substantial questions of law and fact requiring evidence, supported by an affidavit and complete accounts."
      }
    ]
  },
  {
    slug: "fbr-taxation",
    title: "Taxation, FBR & SRB Advisory",
    urduTitle: "انکم ٹیکس، ایف بی آر اور سندھ ریونیو بورڈ",
    tagline: "Defending taxpayers against arbitrary audits, notices, penalties, and appellate disputes",
    shortDescription: "Strategic legal defense for individuals and corporations against FBR tax demands, audit assessments, and SRB sales tax notices.",
    fullDescription: "Tax laws in Pakistan are detailed and rapidly evolving. Quaid-e-Azam Law Associates represents taxpayers across all tiers of tax litigation, from responding to initial show-cause notices issued by the Federal Board of Revenue (FBR) and Sindh Revenue Board (SRB) to contesting assessments before Commissioners Appeals, the Appellate Tribunal Inland Revenue (ATIR), and the High Court of Sindh.",
    governingLaws: [
      "Income Tax Ordinance, 2001",
      "Sales Tax Act, 1990",
      "Sindh Sales Tax on Services Act, 2011 (SRB)",
      "Federal Excise Act, 2005",
      "Customs Act, 1969"
    ],
    keyServices: [
      "Drafting legal replies to statutory audit notices and unexplained income queries",
      "Filing appeals before the Commissioner Inland Revenue (Appeals)",
      "Arguing tax appeals before the Appellate Tribunal Inland Revenue (ATIR)",
      "Filing Tax References on substantial questions of law before the High Court of Sindh",
      "Challenging illegal bank account attachments and coercive recovery actions",
      "Advising on corporate restructuring tax consequences and withholding tax compliance"
    ],
    courtsHandled: [
      "Commissioner Inland Revenue (Appeals), Karachi",
      "Appellate Tribunal Inland Revenue (ATIR), Karachi Benches",
      "High Court of Sindh (Reference & Constitutional Jurisdiction)"
    ],
    practicalInsight: "FBR tax officers often resort to hasty bank account attachments under Section 140 before the taxpayer's appeal can be heard. Securing stay orders from the Appellate Tribunal or High Court protects working capital from arbitrary debit.",
    faq: [
      {
        question: "What should I do if FBR freezes my business bank account without notice?",
        answer: "Immediate legal recourse involves filing an urgent application before the Appellate Tribunal or a Constitutional Writ Petition before the Sindh High Court demonstrating that the recovery was coercive and carried out without due notice."
      },
      {
        question: "What is the timeline for filing an appeal against an FBR assessment order?",
        answer: "An appeal before the Commissioner (Appeals) must be filed within 30 days of the receipt of the assessment order, accompanied by proof of payment of the statutory appeal fee."
      }
    ]
  },
  {
    slug: "property-real-estate",
    title: "Property, Land Disputes & Real Estate",
    urduTitle: "جائیداد اور ریئل اسٹیٹ کے تنازعات",
    tagline: "Title verification, ownership protection, land litigation, and DHA/KDA documentation",
    shortDescription: "Protecting real estate assets in Karachi through thorough title vetting, possession suits, anti-encroachment defense, and documentation.",
    fullDescription: "Real estate in Karachi is fraught with title ambiguities, conflicting allotments, and land-grabbing risks. Advocate Raheel Anis provides seasoned counsel in verifying property documents across all development authorities (DHA Karachi, Clifton Cantonment Board, KDA, MDA, LDA, SBCA). We protect lawful owners through suits for recovery of possession, cancellation of fraudulent transfers, and restraining unauthorized municipal demolitions.",
    governingLaws: [
      "Transfer of Property Act, 1882",
      "Registration Act, 1908",
      "Sindh Building Control Ordinance, 1979 (SBCA)",
      "Land Revenue Act, 1967",
      "Cantonments Act, 1924"
    ],
    keyServices: [
      "Due diligence, title verification, and search reports across sub-registrar offices",
      "Drafting and registering irrevocable Sale Deeds, Gifts, and Lease agreements",
      "Suits for recovery of possession against unauthorized occupants and land grabbers",
      "Challenging illegal demolition notices issued by SBCA, KMC, or Cantonment Boards",
      "Resolving DHA and KDA plot allotment cancellations and transfer disputes",
      "Resolving landlord and tenant disputes under the Sindh Rented Premises Ordinance"
    ],
    courtsHandled: [
      "District Civil Courts (City Courts & Malir)",
      "Rent Controllers & Appellate District Courts",
      "High Court of Sindh (Civil Original & Writ Jurisdiction)"
    ],
    practicalInsight: "Never complete a property purchase in Karachi solely based on an open file or unverified power of attorney. Independent inspection of the revenue record and sub-registrar registers is vital before transferring payments.",
    faq: [
      {
        question: "How can I verify if a property title in Karachi is genuine?",
        answer: "A thorough title search involves inspecting registered deeds at the Sub-Registrar's office, obtaining a 30-year non-encumbrance certificate, verifying allotment records with the parent authority (DHA/KDA), and inspecting approved SBCA building plans."
      },
      {
        question: "What legal remedy exists if tenants refuse to vacate commercial or residential premises?",
        answer: "Landlords can file an ejectment application before the Rent Controller under the Sindh Rented Premises Ordinance 1979 on grounds of lease expiry, default in rent, or bona fide personal need."
      }
    ]
  },
  {
    slug: "family-law",
    title: "Family Law & Matrimonial Matters",
    urduTitle: "خاندانی قوانین، خلع اور بچوں کی تحویل",
    tagline: "Compassionate, discreet, and lawful handling of family and custody proceedings",
    shortDescription: "Protecting parental rights and financial security through Khula, maintenance, child custody, and inheritance settlement.",
    fullDescription: "Family disputes involve deep emotional strain and demand dignified, confidential handling. We represent clients before Karachi's Family Courts in matters of Khula, dissolution of marriage, recovery of dower (Mehr) and dowry articles, monthly child and spousal maintenance, and guardianship petitions for child custody. We focus on achieving lawful, decisive outcomes while minimizing emotional distress for families.",
    governingLaws: [
      "Family Courts Act, 1964",
      "Muslim Family Laws Ordinance, 1961 (MFLO)",
      "Guardians and Wards Act, 1890",
      "Dissolution of Muslim Marriages Act, 1939",
      "Dowry and Bridal Gifts (Restriction) Act, 1976"
    ],
    keyServices: [
      "Filing suits for Khula and dissolution of marriage on grounds of cruelty or non-maintenance",
      "Recovery of prompt and deferred dower (Mehr) and all dowry/household articles",
      "Securing monthly interim maintenance decrees for dependent wives and children",
      "Child custody and guardianship petitions before the Guardian Judge",
      "Negotiating structured parental visitation schedules with court approval",
      "Muslim succession, legal heir certificates, and inheritance estate division"
    ],
    courtsHandled: [
      "Family Courts of Karachi (District East, South, Central, West, Malir)",
      "Guardian Courts",
      "High Court of Sindh (Family Appellate & Writ Jurisdiction)"
    ],
    practicalInsight: "In custody matters under the Guardians and Wards Act 1890, the sole paramount consideration for the court is the welfare of the minor child, overriding mechanical claims of either parent.",
    faq: [
      {
        question: "How long does a Khula decree take to obtain in Karachi?",
        answer: "Under the amended Family Courts Act, if reconciliation efforts fail at the pre-trial stage, the court is mandated to pass a decree for dissolution of marriage by Khula expeditiously, typically within 2 to 4 months."
      },
      {
        question: "Can an overseas Pakistani father or mother seek child custody or visitation?",
        answer: "Yes, non-resident parents can institute guardianship or visitation petitions in Karachi through a lawfully executed and consular-attested Special Power of Attorney."
      }
    ]
  },
  {
    slug: "legal-consultancy",
    title: "Strategic Legal Advisory & Retainerships",
    urduTitle: "قانونی مشاورت اور ریٹینرشپ سروسز",
    tagline: "Preventative legal audits, contract vetting, and ongoing corporate advisory",
    shortDescription: "Proactive legal oversight to protect businesses, family offices, and executives from costly courtroom litigation.",
    fullDescription: "The best legal strategy is one that avoids courtroom battles altogether through foresight and tight documentation. Quaid-e-Azam Law Associates provides continuous monthly legal retainerships and bespoke advisory services to emerging enterprises, established corporations, hospitals, schools, and private investors in Karachi. We review everyday operations, negotiate critical vendor partnerships, and ensure full compliance with Pakistani statutory authorities.",
    governingLaws: [
      "General Law of Contracts & Torts",
      "Industrial Relations Act & Labor Laws",
      "Data Privacy & Consumer Protection Regulations",
      "Negotiable Instruments & Commercial Statutes"
    ],
    keyServices: [
      "Monthly corporate retainership plans for businesses and commercial ventures",
      "Pre-litigation dispute mediation, settlement negotiations, and legal notices",
      "Comprehensive legal health checks and statutory compliance audits",
      "Employment manuals, NDA drafting, and non-compete agreements",
      "Advising foreign investors on local law compliance and joint venture agreements",
      "Legal opinions on regulatory matters, permits, and risk exposure"
    ],
    courtsHandled: [
      "Karachi Chambers Direct Advisory",
      "Corporate Boardrooms & Conciliation Tables",
      "Arbitral Panels & Pre-Court Dispute Resolution"
    ],
    practicalInsight: "Routine review of standard commercial templates, lease deeds, and employment offer letters prevents 80% of common business disputes before they arise.",
    faq: [
      {
        question: "What does an ongoing legal retainership include?",
        answer: "A retainership provides your business with priority access to Advocate Raheel Anis, routine contract drafting and vetting, sending legal notices, labor law compliance, and preliminary courtroom representation at predictable fixed monthly rates."
      },
      {
        question: "Can individuals book single-session advisory consultations?",
        answer: "Yes, we offer confidential one-on-one legal assessment sessions at our DHA Phase 7 or City Court chambers, or via scheduled video conferences."
      }
    ]
  }
];
