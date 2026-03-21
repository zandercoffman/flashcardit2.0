import { Resources } from "@/lib/AllSets";

export interface FBLAResourceEntry {
    id: string;
    resources: Resources;
}

export const FBLAResources: FBLAResourceEntry[] = [
    {
        id: "accounting-objective-test",
        resources: {
            title: "Accounting Objective Test Resources",
            links: [
                {
                    title: "Khan Academy – Introduction to Financial Accounting",
                    url: "https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-stateme"
                },
                {
                    title: "Investopedia – Accounting Basics",
                    url: "https://www.investopedia.com/accounting-basics-4689743"
                },
                {
                    title: "AccountingCoach – Accounting Basics (Free)",
                    url: "https://www.accountingcoach.com/accounting-basics/explanation"
                },
                {
                    title: "Coursera – Introduction to Financial Accounting (University of Pennsylvania)",
                    url: "https://www.coursera.org/learn/wharton-accounting"
                },
                {
                    title: "Edspira – Financial Accounting YouTube Playlist",
                    url: "https://www.youtube.com/playlist?list=PLxP0KZzCGFYPXGf6c4XQF5u1f5zK4wF2T"
                },
                {
                    title: "Principles of Accounting – Open Textbook (OpenStax)",
                    url: "https://openstax.org/details/books/principles-financial-accounting"
                },
                {
                    title: "Investopedia – Financial Statements Overview",
                    url: "https://www.investopedia.com/terms/f/financial-statements.asp"
                },
                {
                    title: "AccountingCoach – Adjusting Entries Explanation",
                    url: "https://www.accountingcoach.com/adjusting-entries/explanation"
                },
                {
                    title: "Khan Academy – Balance Sheets and Income Statements",
                    url: "https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-stateme/balance-sheet-tutorial"
                },
                {
                    title: "Investopedia – Debits vs Credits",
                    url: "https://www.investopedia.com/terms/d/debit.asp"
                },
                {
                    title: "AccountingCoach – Trial Balance Explanation",
                    url: "https://www.accountingcoach.com/trial-balance/explanation"
                },
                {
                    title: "CFI – Accounting Cycle Overview",
                    url: "https://corporatefinanceinstitute.com/resources/accounting/accounting-cycle/"
                },
                {
                    title: "CFI – Financial Ratios Guide",
                    url: "https://corporatefinanceinstitute.com/resources/accounting/financial-ratios/"
                },
                {
                    title: "Investopedia – Accrual Accounting",
                    url: "https://www.investopedia.com/terms/a/accrualaccounting.asp"
                },
                {
                    title: "AccountingCoach – Bank Reconciliation",
                    url: "https://www.accountingcoach.com/bank-reconciliation/explanation"
                },
                {
                    title: "Khan Academy – Depreciation and Amortization",
                    url: "https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-stateme/depreciation-tutorial"
                },
                {
                    title: "Investopedia – Inventory Accounting",
                    url: "https://www.investopedia.com/terms/i/inventory.asp"
                },
                {
                    title: "CFI – Cost Accounting Guide",
                    url: "https://corporatefinanceinstitute.com/resources/accounting/cost-accounting/"
                },
                {
                    title: "AccountingCoach – Financial Statements Explanation",
                    url: "https://www.accountingcoach.com/financial-statements/explanation"
                },
                {
                    title: "GAAP Overview – FASB",
                    url: "https://www.fasb.org/page/PageContent?pageId=/standards/accounting-standards-overview.html"
                },
                {
                    title: "Quizlet – Accounting Basics Flashcards",
                    url: "https://quizlet.com/subject/accounting-basics-fbla/"
                },
                {
                    title: "Quizlet – Financial Accounting Terms",
                    url: "https://quizlet.com/subject/financial-accounting-fbla/"
                },
                {
                    title: "Quizlet – Accounting Cycle Flashcards",
                    url: "https://quizlet.com/subject/accounting-cycle-fbla/"
                },
                {
                    title: "Quizlet – Debits and Credits Practice",
                    url: "https://quizlet.com/subject/debits-and-credits-fbla/"
                },
                {
                    title: "Quizlet – Financial Statements Flashcards",
                    url: "https://quizlet.com/subject/financial-statements-fbla/"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length FBLA Accounting Practice Test",
                    prompt: "Create a realistic FBLA Accounting Objective Test practice exam with 40 multiple-choice questions. Cover topics including the accounting cycle, journal entries, adjusting entries, financial statements, GAAP principles, depreciation, inventory methods (FIFO/LIFO), payroll accounting, internal controls, and financial ratios. Each question must include 4 answer choices, the correct answer index, and a clear explanation. Mix difficulty levels (easy, medium, hard) and ensure questions reflect real FBLA-style wording and scenarios."
                },
                {
                    title: "Adaptive Accounting Weakness Coach",
                    prompt: "Act as an FBLA Accounting coach. Ask me 5 diagnostic multiple-choice questions across topics like debits/credits, financial statements, adjusting entries, and ratios. Based on my answers, identify my weak areas and create a personalized study plan. Then generate 10 targeted practice questions focused only on my weak topics, with explanations and tips to improve accuracy and speed for FBLA competitions."
                }
            ]
        }
    },
    {
        id: "advanced-accounting-objective-test",
        resources: {
            title: "advanced-accounting-objective-test Resources",
            links: [
                {
                    title: "FASB Accounting Standards Codification (ASC)",
                    url: "[https://asc.fasb.org](https://asc.fasb.org)"
                },
                {
                    title: "Investopedia: Advanced Financial Accounting",
                    url: "[https://www.investopedia.com/terms/a/advanced-accounting.asp](https://www.investopedia.com/terms/a/advanced-accounting.asp)"
                },
                {
                    title: "Khan Academy: Accounting and Financial Statements",
                    url: "[https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-stateme](https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-stateme)"
                },
                {
                    title: "Coursera: Introduction to Financial Accounting (UPenn)",
                    url: "[https://www.coursera.org/learn/wharton-accounting](https://www.coursera.org/learn/wharton-accounting)"
                },
                {
                    title: "MIT OpenCourseWare: Financial Accounting",
                    url: "[https://ocw.mit.edu/courses/15-511-financial-accounting-fall-2004/](https://ocw.mit.edu/courses/15-511-financial-accounting-fall-2004/)"
                },
                {
                    title: "AccountingCoach: Consolidation Accounting",
                    url: "[https://www.accountingcoach.com/consolidation/explanation](https://www.accountingcoach.com/consolidation/explanation)"
                },
                {
                    title: "Investopedia: Consolidated Financial Statements",
                    url: "[https://www.investopedia.com/terms/c/consolidatedfinancialstatement.asp](https://www.investopedia.com/terms/c/consolidatedfinancialstatement.asp)"
                },
                {
                    title: "AccountingTools: Foreign Currency Accounting",
                    url: "[https://www.accountingtools.com/articles/foreign-currency-accounting](https://www.accountingtools.com/articles/foreign-currency-accounting)"
                },
                {
                    title: "Investopedia: Foreign Currency Translation",
                    url: "[https://www.investopedia.com/terms/f/foreign-currency-translation.asp](https://www.investopedia.com/terms/f/foreign-currency-translation.asp)"
                },
                {
                    title: "AccountingCoach: Leases (ASC 842)",
                    url: "[https://www.accountingcoach.com/leases/explanation](https://www.accountingcoach.com/leases/explanation)"
                },
                {
                    title: "FASB Lease Accounting Overview (ASC 842)",
                    url: "[https://www.fasb.org/page/PageContent?pageId=/standards/accounting-standards-updates.html](https://www.fasb.org/page/PageContent?pageId=/standards/accounting-standards-updates.html)"
                },
                {
                    title: "Investopedia: Deferred Tax Liability",
                    url: "[https://www.investopedia.com/terms/d/deferredtaxliability.asp](https://www.investopedia.com/terms/d/deferredtaxliability.asp)"
                },
                {
                    title: "AccountingTools: Deferred Tax Accounting",
                    url: "[https://www.accountingtools.com/articles/deferred-tax](https://www.accountingtools.com/articles/deferred-tax)"
                },
                {
                    title: "Investopedia: Pension Accounting",
                    url: "[https://www.investopedia.com/terms/p/pensionaccounting.asp](https://www.investopedia.com/terms/p/pensionaccounting.asp)"
                },
                {
                    title: "AccountingCoach: Bonds Payable",
                    url: "[https://www.accountingcoach.com/bonds-payable/explanation](https://www.accountingcoach.com/bonds-payable/explanation)"
                },
                {
                    title: "Investopedia: Goodwill Impairment",
                    url: "[https://www.investopedia.com/terms/g/goodwill-impairment.asp](https://www.investopedia.com/terms/g/goodwill-impairment.asp)"
                },
                {
                    title: "AccountingTools: Business Combinations",
                    url: "[https://www.accountingtools.com/articles/business-combination](https://www.accountingtools.com/articles/business-combination)"
                },
                {
                    title: "SEC: Beginners Guide to Financial Statements",
                    url: "[https://www.sec.gov/reportspubs/investor-publications/investorpubsbegfinstmtguidehtm.html](https://www.sec.gov/reportspubs/investor-publications/investorpubsbegfinstmtguidehtm.html)"
                },
                {
                    title: "IASB IFRS Standards Overview",
                    url: "[https://www.ifrs.org/issued-standards/list-of-standards/](https://www.ifrs.org/issued-standards/list-of-standards/)"
                },
                {
                    title: "Investopedia: Statement of Cash Flows",
                    url: "[https://www.investopedia.com/terms/s/statementcashflow.asp](https://www.investopedia.com/terms/s/statementcashflow.asp)"
                },
                {
                    title: "Quizlet: FBLA Advanced Accounting Practice",
                    url: "[https://quizlet.com/search?query=fbla%20advanced%20accounting](https://quizlet.com/search?query=fbla%20advanced%20accounting)"
                },
                {
                    title: "Quizlet: Consolidation Accounting Flashcards",
                    url: "[https://quizlet.com/search?query=fbla%20consolidation%20accounting](https://quizlet.com/search?query=fbla%20consolidation%20accounting)"
                },
                {
                    title: "Quizlet: Foreign Currency Accounting FBLA",
                    url: "[https://quizlet.com/search?query=fbla%20foreign%20currency%20accounting](https://quizlet.com/search?query=fbla%20foreign%20currency%20accounting)"
                },
                {
                    title: "Quizlet: Lease Accounting ASC 842 FBLA",
                    url: "[https://quizlet.com/search?query=fbla%20lease%20accounting%20ASC%20842](https://quizlet.com/search?query=fbla%20lease%20accounting%20ASC%20842)"
                },
                {
                    title: "Quizlet: Deferred Taxes FBLA Accounting",
                    url: "[https://quizlet.com/search?query=fbla%20deferred%20tax%20accounting](https://quizlet.com/search?query=fbla%20deferred%20tax%20accounting)"
                },
                {
                    title: "Quizlet: Business Combinations FBLA",
                    url: "[https://quizlet.com/search?query=fbla%20business%20combinations%20accounting](https://quizlet.com/search?query=fbla%20business%20combinations%20accounting)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Advanced Accounting Practice Test",
                    prompt: "Create a 40-question multiple-choice FBLA Advanced Accounting Objective Test. Cover topics including consolidation accounting, intercompany transactions, foreign currency translation, deferred taxes, lease accounting (ASC 842), pensions, bonds, goodwill impairment, and business combinations. Each question must have 4 answer choices (A–D), clearly indicate the correct answer, and include a brief explanation. Ensure questions vary in difficulty and reflect realistic FBLA competition style."
                },
                {
                    title: "Adaptive Weakness-Based Accounting Coach",
                    prompt: "Act as an FBLA Advanced Accounting coach. First, ask me 5 diagnostic multiple-choice questions across topics like consolidations, deferred taxes, leases, and foreign currency accounting. Based on my answers, identify my weakest areas. Then create a personalized study plan, explain those weak concepts clearly, and give me targeted practice questions with explanations. Continue adapting difficulty and focus areas as I improve."
                }
            ]
        },

    },
    {
        id: "advertising-objective-test",
        resources: {
            title: "advertising-objective-test Resources",
            links: [
                {
                    title: "Khan Academy - Advertising, Marketing, and Sales",
                    url: "[https://www.khanacademy.org/economics-finance-domain/core-finance/marketing](https://www.khanacademy.org/economics-finance-domain/core-finance/marketing)"
                },
                {
                    title: "Investopedia - Advertising Definition",
                    url: "[https://www.investopedia.com/terms/a/advertising.asp](https://www.investopedia.com/terms/a/advertising.asp)"
                },
                {
                    title: "Investopedia - Marketing Strategy",
                    url: "[https://www.investopedia.com/terms/m/marketing-strategy.asp](https://www.investopedia.com/terms/m/marketing-strategy.asp)"
                },
                {
                    title: "HubSpot - What is Advertising?",
                    url: "[https://blog.hubspot.com/marketing/advertising](https://blog.hubspot.com/marketing/advertising)"
                },
                {
                    title: "HubSpot - Advertising Strategies Guide",
                    url: "[https://blog.hubspot.com/marketing/advertising-strategy](https://blog.hubspot.com/marketing/advertising-strategy)"
                },
                {
                    title: "Google Digital Garage - Fundamentals of Digital Marketing",
                    url: "[https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing](https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing)"
                },
                {
                    title: "Coursera - Introduction to Marketing (Wharton)",
                    url: "[https://www.coursera.org/learn/wharton-marketing](https://www.coursera.org/learn/wharton-marketing)"
                },
                {
                    title: "American Marketing Association - Advertising Overview",
                    url: "[https://www.ama.org/topics/advertising/](https://www.ama.org/topics/advertising/)"
                },
                {
                    title: "Federal Trade Commission - Truth in Advertising",
                    url: "[https://www.ftc.gov/business-guidance/advertising-marketing](https://www.ftc.gov/business-guidance/advertising-marketing)"
                },
                {
                    title: "Think with Google - Marketing Insights",
                    url: "[https://www.thinkwithgoogle.com/marketing-strategies/](https://www.thinkwithgoogle.com/marketing-strategies/)"
                },
                {
                    title: "Meta Blueprint - Digital Advertising Fundamentals",
                    url: "[https://www.facebook.com/business/learn](https://www.facebook.com/business/learn)"
                },
                {
                    title: "Hootsuite - Social Media Advertising Guide",
                    url: "[https://blog.hootsuite.com/social-media-advertising/](https://blog.hootsuite.com/social-media-advertising/)"
                },
                {
                    title: "WordStream - Online Advertising Guide",
                    url: "[https://www.wordstream.com/online-advertising](https://www.wordstream.com/online-advertising)"
                },
                {
                    title: "Neil Patel - Digital Marketing Guide",
                    url: "[https://neilpatel.com/what-is-digital-marketing/](https://neilpatel.com/what-is-digital-marketing/)"
                },
                {
                    title: "Smart Insights - Marketing Planning Guide",
                    url: "[https://www.smartinsights.com/marketing-planning/](https://www.smartinsights.com/marketing-planning/)"
                },
                {
                    title: "Principles of Marketing (OpenStax)",
                    url: "[https://openstax.org/details/books/principles-marketing](https://openstax.org/details/books/principles-marketing)"
                },
                {
                    title: "SBA - Market Research and Competitive Analysis",
                    url: "[https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis](https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis)"
                },
                {
                    title: "Canva - Advertising Design Basics",
                    url: "[https://www.canva.com/learn/advertising-design/](https://www.canva.com/learn/advertising-design/)"
                },
                {
                    title: "AdAge - Advertising Industry News and Insights",
                    url: "[https://adage.com/](https://adage.com/)"
                },
                {
                    title: "eMarketer - Digital Advertising Trends",
                    url: "[https://www.emarketer.com/topics/topic/digital-advertising](https://www.emarketer.com/topics/topic/digital-advertising)"
                },
                {
                    title: "Quizlet - FBLA Advertising Objective Test",
                    url: "[https://quizlet.com/search?query=fbla%20advertising%20objective%20test&type=sets](https://quizlet.com/search?query=fbla%20advertising%20objective%20test&type=sets)"
                },
                {
                    title: "Quizlet - Advertising and Marketing Terms",
                    url: "[https://quizlet.com/search?query=fbla%20advertising%20marketing%20terms&type=sets](https://quizlet.com/search?query=fbla%20advertising%20marketing%20terms&type=sets)"
                },
                {
                    title: "Quizlet - Promotion and Advertising Concepts",
                    url: "[https://quizlet.com/search?query=fbla%20promotion%20advertising&type=sets](https://quizlet.com/search?query=fbla%20promotion%20advertising&type=sets)"
                },
                {
                    title: "Quizlet - Digital Advertising FBLA Study Sets",
                    url: "[https://quizlet.com/search?query=fbla%20digital%20advertising&type=sets](https://quizlet.com/search?query=fbla%20digital%20advertising&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Advertising Objective Test Practice Exam",
                    prompt: "Create a 40-question multiple-choice practice test for the FBLA Advertising Objective Test. Cover topics such as advertising media types (print, broadcast, digital), target audience segmentation, branding, AIDA model, advertising regulations (FTC guidelines), digital marketing (SEO, PPC, social media ads), budgeting methods, metrics (CTR, impressions, conversions), ethics in advertising, and campaign evaluation. Each question must have 4 answer choices (A–D), only one correct answer, and include a detailed explanation for why the correct answer is right and why the others are wrong. Format clearly and group questions by topic areas similar to FBLA standards."
                },
                {
                    title: "Adaptive Advertising Weakness Coach",
                    prompt: "Act as an FBLA Advertising Objective Test coach. First, ask me 10 diagnostic multiple-choice questions covering different areas: advertising strategies, digital marketing, branding, legal regulations, and metrics. After I answer, analyze my performance to identify weak areas. Then create a personalized study plan with targeted explanations, mini-lessons, and 2–3 practice questions per weak topic. Focus on improving understanding of concepts like AIDA, CPM vs CPC, market segmentation, ad copy techniques, and ethical/legal advertising standards. Continue adapting difficulty as I improve."
                }
            ]
        },

    },
    {
        id: "agribusiness-objective-test",
        resources: {
            title: "agribusiness-objective-test Resources",
            links: [
                {
                    title: "USDA Economic Research Service – Agribusiness and Food Industries",
                    url: "[https://www.ers.usda.gov/topics/food-markets-prices/agribusiness-and-food-industries/](https://www.ers.usda.gov/topics/food-markets-prices/agribusiness-and-food-industries/)"
                },
                {
                    title: "Investopedia – Agribusiness Definition",
                    url: "[https://www.investopedia.com/terms/a/agribusiness.asp](https://www.investopedia.com/terms/a/agribusiness.asp)"
                },
                {
                    title: "FAO – Agribusiness and Value Chains",
                    url: "[https://www.fao.org/in-action/value-chains/en/](https://www.fao.org/in-action/value-chains/en/)"
                },
                {
                    title: "National FFA – Agribusiness Career Pathways",
                    url: "[https://www.ffa.org/careers/agribusiness/](https://www.ffa.org/careers/agribusiness/)"
                },
                {
                    title: "Khan Academy – Supply and Demand",
                    url: "[https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium](https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium)"
                },
                {
                    title: "Khan Academy – Elasticity",
                    url: "[https://www.khanacademy.org/economics-finance-domain/microeconomics/elasticity-tutorial](https://www.khanacademy.org/economics-finance-domain/microeconomics/elasticity-tutorial)"
                },
                {
                    title: "USDA – Agricultural Marketing Service",
                    url: "[https://www.ams.usda.gov/](https://www.ams.usda.gov/)"
                },
                {
                    title: "FAO – Agricultural Marketing Basics",
                    url: "[https://www.fao.org/3/x5490e/x5490e0a.htm](https://www.fao.org/3/x5490e/x5490e0a.htm)"
                },
                {
                    title: "Coursera – Agriculture, Economics and Nature",
                    url: "[https://www.coursera.org/learn/agriculture-economics-nature](https://www.coursera.org/learn/agriculture-economics-nature)"
                },
                {
                    title: "edX – Sustainable Agribusiness (Wageningen University)",
                    url: "[https://www.edx.org/course/sustainable-agribusiness](https://www.edx.org/course/sustainable-agribusiness)"
                },
                {
                    title: "USDA – Farm Income and Wealth Statistics",
                    url: "[https://www.ers.usda.gov/data-products/farm-income-and-wealth-statistics/](https://www.ers.usda.gov/data-products/farm-income-and-wealth-statistics/)"
                },
                {
                    title: "Investopedia – Economies of Scale",
                    url: "[https://www.investopedia.com/terms/e/economiesofscale.asp](https://www.investopedia.com/terms/e/economiesofscale.asp)"
                },
                {
                    title: "Investopedia – Vertical Integration",
                    url: "[https://www.investopedia.com/terms/v/verticalintegration.asp](https://www.investopedia.com/terms/v/verticalintegration.asp)"
                },
                {
                    title: "EPA – Agriculture and Sustainability",
                    url: "[https://www.epa.gov/agriculture](https://www.epa.gov/agriculture)"
                },
                {
                    title: "USDA – Risk Management in Agriculture",
                    url: "[https://www.rma.usda.gov/](https://www.rma.usda.gov/)"
                },
                {
                    title: "FAO – Food Supply Chain Overview",
                    url: "[https://www.fao.org/3/i3128e/i3128e.pdf](https://www.fao.org/3/i3128e/i3128e.pdf)"
                },
                {
                    title: "Khan Academy – Production Possibilities Frontier",
                    url: "[https://www.khanacademy.org/economics-finance-domain/microeconomics/production-possibilities-frontier](https://www.khanacademy.org/economics-finance-domain/microeconomics/production-possibilities-frontier)"
                },
                {
                    title: "USDA – Agricultural Trade Data",
                    url: "[https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/international-trade/](https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/international-trade/)"
                },
                {
                    title: "World Bank – Agriculture Overview",
                    url: "[https://www.worldbank.org/en/topic/agriculture/overview](https://www.worldbank.org/en/topic/agriculture/overview)"
                },
                {
                    title: "Investopedia – Supply Chain Management (SCM)",
                    url: "[https://www.investopedia.com/terms/s/scm.asp](https://www.investopedia.com/terms/s/scm.asp)"
                },
                {
                    title: "Quizlet – FBLA Agribusiness Objective Test",
                    url: "[https://quizlet.com/search?query=fbla%20agribusiness%20objective%20test&type=sets](https://quizlet.com/search?query=fbla%20agribusiness%20objective%20test&type=sets)"
                },
                {
                    title: "Quizlet – Agribusiness Marketing Terms",
                    url: "[https://quizlet.com/search?query=agribusiness%20marketing%20terms%20fbla&type=sets](https://quizlet.com/search?query=agribusiness%20marketing%20terms%20fbla&type=sets)"
                },
                {
                    title: "Quizlet – Agricultural Economics Vocabulary",
                    url: "[https://quizlet.com/search?query=agricultural%20economics%20fbla&type=sets](https://quizlet.com/search?query=agricultural%20economics%20fbla&type=sets)"
                },
                {
                    title: "Quizlet – Agribusiness Management Concepts",
                    url: "[https://quizlet.com/search?query=agribusiness%20management%20fbla&type=sets](https://quizlet.com/search?query=agribusiness%20management%20fbla&type=sets)"
                },
                {
                    title: "Quizlet – Supply Chain Agriculture FBLA",
                    url: "[https://quizlet.com/search?query=supply%20chain%20agriculture%20fbla&type=sets](https://quizlet.com/search?query=supply%20chain%20agriculture%20fbla&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Agribusiness Practice Test",
                    prompt: "Create a 40-question multiple-choice practice test for the FBLA Agribusiness Objective Test. Questions should cover topics such as agricultural economics (supply and demand, elasticity), agribusiness management, marketing of agricultural products, risk management, sustainability, government policies (USDA, subsidies), global trade, and supply chain management. Each question should have 4 answer choices and include a detailed explanation for the correct answer."
                },
                {
                    title: "Adaptive Agribusiness Coach",
                    prompt: "Act as an adaptive study coach for the FBLA Agribusiness Objective Test. First, ask me 10 diagnostic multiple-choice questions covering key areas like agricultural economics, marketing, finance, and supply chains. Then analyze my answers to identify weak areas. Based on that, create a personalized study plan, explain key concepts I struggled with, and generate targeted practice questions with explanations to improve my understanding."
                }
            ]
        },

    },
    {
        id: "banking-and-financial-systems-role-play",
        resources: {
            title: "banking-and-financial-systems-role-play Resources",
            links: [
                {
                    title: "Khan Academy: Banking and Money",
                    url: "[https://www.khanacademy.org/economics-finance-domain/core-finance/banking-and-money](https://www.khanacademy.org/economics-finance-domain/core-finance/banking-and-money)"
                },
                {
                    title: "Federal Reserve Education: About the Fed",
                    url: "[https://www.federalreserveeducation.org/about-the-fed](https://www.federalreserveeducation.org/about-the-fed)"
                },
                {
                    title: "FDIC: Money Smart Financial Education Program",
                    url: "[https://www.fdic.gov/resources/consumers/money-smart/](https://www.fdic.gov/resources/consumers/money-smart/)"
                },
                {
                    title: "Investopedia: Banking System Definition",
                    url: "[https://www.investopedia.com/terms/b/bankingsystem.asp](https://www.investopedia.com/terms/b/bankingsystem.asp)"
                },
                {
                    title: "Investopedia: Central Bank Overview",
                    url: "[https://www.investopedia.com/terms/c/centralbank.asp](https://www.investopedia.com/terms/c/centralbank.asp)"
                },
                {
                    title: "Investopedia: Fractional Reserve Banking",
                    url: "[https://www.investopedia.com/terms/f/fractionalreservebanking.asp](https://www.investopedia.com/terms/f/fractionalreservebanking.asp)"
                },
                {
                    title: "Investopedia: Commercial Bank Definition",
                    url: "[https://www.investopedia.com/terms/c/commercialbank.asp](https://www.investopedia.com/terms/c/commercialbank.asp)"
                },
                {
                    title: "Investor.gov: Introduction to Financial Markets",
                    url: "[https://www.investor.gov/introduction-investing/investing-basics](https://www.investor.gov/introduction-investing/investing-basics)"
                },
                {
                    title: "Federal Reserve: Monetary Policy Basics",
                    url: "[https://www.federalreserve.gov/monetarypolicy.htm](https://www.federalreserve.gov/monetarypolicy.htm)"
                },
                {
                    title: "CFPB: What is a Bank Account?",
                    url: "[https://www.consumerfinance.gov/consumer-tools/bank-accounts/](https://www.consumerfinance.gov/consumer-tools/bank-accounts/)"
                },
                {
                    title: "CFPB: Credit Reports and Scores",
                    url: "[https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/](https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/)"
                },
                {
                    title: "National Credit Union Administration: Credit Union Resources",
                    url: "[https://www.ncua.gov/consumers](https://www.ncua.gov/consumers)"
                },
                {
                    title: "World Bank: Financial System Overview",
                    url: "[https://www.worldbank.org/en/publication/gfdr/gfdr-2016/background/financial-systems](https://www.worldbank.org/en/publication/gfdr/gfdr-2016/background/financial-systems)"
                },
                {
                    title: "International Monetary Fund: Financial System Soundness",
                    url: "[https://www.imf.org/en/About/Factsheets/Sheets/2016/08/01/20/57/Financial-Soundness-Indicators](https://www.imf.org/en/About/Factsheets/Sheets/2016/08/01/20/57/Financial-Soundness-Indicators)"
                },
                {
                    title: "Coursera: Financial Markets by Yale University",
                    url: "[https://www.coursera.org/learn/financial-markets-global](https://www.coursera.org/learn/financial-markets-global)"
                },
                {
                    title: "Harvard Business School Online: Financial Accounting Fundamentals",
                    url: "[https://online.hbs.edu/courses/financial-accounting/](https://online.hbs.edu/courses/financial-accounting/)"
                },
                {
                    title: "Federal Deposit Insurance Corporation: Deposit Insurance Explained",
                    url: "[https://www.fdic.gov/resources/deposit-insurance/](https://www.fdic.gov/resources/deposit-insurance/)"
                },
                {
                    title: "Federal Reserve Bank of St. Louis: Economic Education Resources",
                    url: "[https://www.stlouisfed.org/education](https://www.stlouisfed.org/education)"
                },
                {
                    title: "NASAA: Investor Education Resources",
                    url: "[https://www.nasaa.org/investor-education/](https://www.nasaa.org/investor-education/)"
                },
                {
                    title: "Investopedia: Risk Management in Finance",
                    url: "[https://www.investopedia.com/terms/r/riskmanagement.asp](https://www.investopedia.com/terms/r/riskmanagement.asp)"
                },
                {
                    title: "Quizlet Search: FBLA Banking and Financial Systems",
                    url: "[https://quizlet.com/search?query=fbla%20banking%20and%20financial%20systems&type=sets](https://quizlet.com/search?query=fbla%20banking%20and%20financial%20systems&type=sets)"
                },
                {
                    title: "Quizlet Search: Banking System Terms FBLA",
                    url: "[https://quizlet.com/search?query=fbla%20banking%20terms&type=sets](https://quizlet.com/search?query=fbla%20banking%20terms&type=sets)"
                },
                {
                    title: "Quizlet Search: Financial Systems Role Play FBLA",
                    url: "[https://quizlet.com/search?query=fbla%20financial%20systems%20role%20play&type=sets](https://quizlet.com/search?query=fbla%20financial%20systems%20role%20play&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test (Banking and Financial Systems Role Play)",
                    prompt: "Create a 35-question multiple-choice practice test for FBLA Banking and Financial Systems Role Play. Cover topics such as: functions of commercial banks, Federal Reserve System structure and roles, monetary policy tools (open market operations, discount rate, reserve requirements), types of financial institutions (credit unions, savings & loans, investment banks), risk management, credit analysis, loan approval process, financial statements, customer service scenarios, fraud prevention, and ethical decision-making in banking. Each question should have 4 answer choices and include a detailed explanation for the correct answer."
                },
                {
                    title: "Adaptive Coaching and Weakness Analyzer",
                    prompt: "Act as an FBLA Banking and Financial Systems Role Play coach. First, ask me 10 diagnostic multiple-choice questions covering banking operations, financial institutions, monetary policy, credit, and customer interaction scenarios. Based on my answers, identify my weak areas. Then create a personalized study plan, explain key concepts I struggled with in simple terms, and give me 5 realistic role-play scenarios (like advising a client, handling a fraud case, or explaining loan terms) with feedback on how I should respond to score highly in FBLA competitions."
                }
            ]
        },

    },
    {
        id: "broadcast-journalism-presentation",
        resources: {
            title: "broadcast-journalism-presentation Resources",
            links: [
                {
                    title: "Poynter News University – Journalism Training",
                    url: "[https://www.poynter.org/newsu/](https://www.poynter.org/newsu/)"
                },
                {
                    title: "Radio Television Digital News Association (RTDNA) Ethics Guidelines",
                    url: "[https://www.rtdna.org/content/rtdna_code_of_ethics](https://www.rtdna.org/content/rtdna_code_of_ethics)"
                },
                {
                    title: "Society of Professional Journalists Code of Ethics",
                    url: "[https://www.spj.org/ethicscode.asp](https://www.spj.org/ethicscode.asp)"
                },
                {
                    title: "PBS NewsHour Classroom – Journalism Resources",
                    url: "[https://www.pbs.org/newshour/classroom](https://www.pbs.org/newshour/classroom)"
                },
                {
                    title: "BBC Academy – Journalism Skills",
                    url: "[https://www.bbc.co.uk/academy/en/collections/journalism](https://www.bbc.co.uk/academy/en/collections/journalism)"
                },
                {
                    title: "NPR Training – Journalism Training Resources",
                    url: "[https://training.npr.org/](https://training.npr.org/)"
                },
                {
                    title: "Coursera – Journalism Courses",
                    url: "[https://www.coursera.org/courses?query=journalism](https://www.coursera.org/courses?query=journalism)"
                },
                {
                    title: "edX – Journalism and Media Courses",
                    url: "[https://www.edx.org/learn/journalism](https://www.edx.org/learn/journalism)"
                },
                {
                    title: "Khan Academy – Storytelling and Communication",
                    url: "[https://www.khanacademy.org/college-careers-more/career-content/storytelling](https://www.khanacademy.org/college-careers-more/career-content/storytelling)"
                },
                {
                    title: "YouTube Creator Academy – Storytelling for Video",
                    url: "[https://creatoracademy.youtube.com/page/lesson/storytelling](https://creatoracademy.youtube.com/page/lesson/storytelling)"
                },
                {
                    title: "The Open Notebook – Science Journalism Tips (applies broadly)",
                    url: "[https://www.theopennotebook.com/category/craft/](https://www.theopennotebook.com/category/craft/)"
                },
                {
                    title: "AP Stylebook Basics",
                    url: "[https://www.apstylebook.com/](https://www.apstylebook.com/)"
                },
                {
                    title: "Reuters Handbook of Journalism",
                    url: "[https://www.reutersagency.com/en/about/standards-values/](https://www.reutersagency.com/en/about/standards-values/)"
                },
                {
                    title: "Columbia Journalism Review – Resources",
                    url: "[https://www.cjr.org/](https://www.cjr.org/)"
                },
                {
                    title: "National Press Photographers Association Ethics",
                    url: "[https://nppa.org/code-ethics](https://nppa.org/code-ethics)"
                },
                {
                    title: "Media College – Broadcast Journalism Tutorials",
                    url: "[https://www.mediacollege.com/journalism/](https://www.mediacollege.com/journalism/)"
                },
                {
                    title: "SkillsYouNeed – Presentation Skills",
                    url: "[https://www.skillsyouneed.com/presentation-skills.html](https://www.skillsyouneed.com/presentation-skills.html)"
                },
                {
                    title: "Harvard Business Review – How to Give a Great Presentation",
                    url: "[https://hbr.org/2013/06/how-to-give-a-killer-presentation](https://hbr.org/2013/06/how-to-give-a-killer-presentation)"
                },
                {
                    title: "TED – The Secret Structure of Great Talks",
                    url: "[https://www.ted.com/talks/nancy_duarte_the_secret_structure_of_great_talks](https://www.ted.com/talks/nancy_duarte_the_secret_structure_of_great_talks)"
                },
                {
                    title: "Canva Design School – Video Storytelling",
                    url: "[https://www.canva.com/learn/video-storytelling/](https://www.canva.com/learn/video-storytelling/)"
                },
                {
                    title: "Quizlet – Broadcast Journalism Basics (FBLA search)",
                    url: "[https://quizlet.com/search?query=fbla%20broadcast%20journalism&type=sets](https://quizlet.com/search?query=fbla%20broadcast%20journalism&type=sets)"
                },
                {
                    title: "Quizlet – Journalism Ethics and Reporting Terms",
                    url: "[https://quizlet.com/search?query=journalism%20ethics%20broadcast&type=sets](https://quizlet.com/search?query=journalism%20ethics%20broadcast&type=sets)"
                },
                {
                    title: "Quizlet – News Production and Reporting Terms",
                    url: "[https://quizlet.com/search?query=news%20production%20terms&type=sets](https://quizlet.com/search?query=news%20production%20terms&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Broadcast Journalism Practice Test",
                    prompt: "Create a 35-question multiple-choice FBLA-style practice test for the Broadcast Journalism Presentation event. Cover topics such as news writing structure (inverted pyramid), broadcast scripting, interviewing techniques, ethics (SPJ and RTDNA codes), bias and objectivity, storytelling for video, voice delivery, camera presence, editing basics, and live reporting challenges. Each question must have 4 answer choices and include the correct answer with a short explanation. Make questions scenario-based where possible."
                },
                {
                    title: "Adaptive Broadcast Journalism Coaching",
                    prompt: "Act as an FBLA Broadcast Journalism Presentation coach. Ask me 5 diagnostic questions to identify my weaknesses in areas like script writing, delivery, on-camera presence, storytelling, and ethics. Based on my answers, create a personalized improvement plan with specific drills (e.g., mock interviews, script rewrites, timing practice), feedback tips, and a 1-week training schedule. Include realistic judging criteria aligned with FBLA performance standards."
                }
            ]
        },

    },
    {
        id: "business-communication-objective-test",
        resources: {
            title: "business-communication-objective-test Resources",
            links: [
                {
                    title: "Business Communication – Overview (Coursera)",
                    url: "[https://www.coursera.org/learn/business-communication](https://www.coursera.org/learn/business-communication)"
                },
                {
                    title: "Business Communication Skills (edX)",
                    url: "[https://www.edx.org/learn/business-communication](https://www.edx.org/learn/business-communication)"
                },
                {
                    title: "Communication Skills in Business (Khan Academy)",
                    url: "[https://www.khanacademy.org/college-careers-more/professional-development](https://www.khanacademy.org/college-careers-more/professional-development)"
                },
                {
                    title: "Effective Business Writing (Harvard Business Review Guide)",
                    url: "[https://hbr.org/2016/07/how-to-improve-your-business-writing](https://hbr.org/2016/07/how-to-improve-your-business-writing)"
                },
                {
                    title: "Business Writing Tips (Purdue OWL)",
                    url: "[https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/index.html](https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/index.html)"
                },
                {
                    title: "Communication Process Explained (Investopedia)",
                    url: "[https://www.investopedia.com/terms/c/communication.asp](https://www.investopedia.com/terms/c/communication.asp)"
                },
                {
                    title: "Formal vs Informal Communication (Indeed Career Guide)",
                    url: "[https://www.indeed.com/career-advice/career-development/formal-vs-informal-communication](https://www.indeed.com/career-advice/career-development/formal-vs-informal-communication)"
                },
                {
                    title: "Nonverbal Communication in Business (MindTools)",
                    url: "[https://www.mindtools.com/CommSkll/NonverbalCommunication.htm](https://www.mindtools.com/CommSkll/NonverbalCommunication.htm)"
                },
                {
                    title: "Active Listening Skills (SkillsYouNeed)",
                    url: "[https://www.skillsyouneed.com/ips/active-listening.html](https://www.skillsyouneed.com/ips/active-listening.html)"
                },
                {
                    title: "Barriers to Effective Communication (Lumen Learning)",
                    url: "[https://courses.lumenlearning.com/wm-businesscommunication/chapter/barriers-to-effective-communication/](https://courses.lumenlearning.com/wm-businesscommunication/chapter/barriers-to-effective-communication/)"
                },
                {
                    title: "Interpersonal Communication Skills (OpenLearn)",
                    url: "[https://www.open.edu/openlearn/money-business/leadership-management/interpersonal-skills/content-section-0](https://www.open.edu/openlearn/money-business/leadership-management/interpersonal-skills/content-section-0)"
                },
                {
                    title: "Email Writing for Business (Grammarly Blog)",
                    url: "[https://www.grammarly.com/blog/business-email/](https://www.grammarly.com/blog/business-email/)"
                },
                {
                    title: "Report Writing in Business (University of Melbourne)",
                    url: "[https://services.unimelb.edu.au/academicskills/resources/report-writing](https://services.unimelb.edu.au/academicskills/resources/report-writing)"
                },
                {
                    title: "Professional Presentation Skills (Toastmasters)",
                    url: "[https://www.toastmasters.org/resources/public-speaking-tips](https://www.toastmasters.org/resources/public-speaking-tips)"
                },
                {
                    title: "Ethics in Business Communication (Saylor Academy)",
                    url: "[https://saylordotorg.github.io/text_business-communication-for-success/s11-ethics-in-business-communicat.html](https://saylordotorg.github.io/text_business-communication-for-success/s11-ethics-in-business-communicat.html)"
                },
                {
                    title: "Cross-Cultural Communication (University of Minnesota Libraries)",
                    url: "[https://open.lib.umn.edu/businesscommunication/chapter/3-3-intercultural-communication/](https://open.lib.umn.edu/businesscommunication/chapter/3-3-intercultural-communication/)"
                },
                {
                    title: "Persuasive Communication Techniques (MindTools)",
                    url: "[https://www.mindtools.com/pages/article/newTMC_96.htm](https://www.mindtools.com/pages/article/newTMC_96.htm)"
                },
                {
                    title: "Organizational Communication (OpenStax)",
                    url: "[https://openstax.org/details/books/business-ethics](https://openstax.org/details/books/business-ethics)"
                },
                {
                    title: "Professional Tone in Writing (University of North Carolina Writing Center)",
                    url: "[https://writingcenter.unc.edu/tips-and-tools/tone/](https://writingcenter.unc.edu/tips-and-tools/tone/)"
                },
                {
                    title: "Meeting Management Skills (MindTools)",
                    url: "[https://www.mindtools.com/pages/article/newLDR_90.htm](https://www.mindtools.com/pages/article/newLDR_90.htm)"
                },
                {
                    title: "Quizlet: FBLA Business Communication Vocabulary",
                    url: "[https://quizlet.com/search?query=fbla%20business%20communication&type=sets](https://quizlet.com/search?query=fbla%20business%20communication&type=sets)"
                },
                {
                    title: "Quizlet: Business Communication Terms FBLA",
                    url: "[https://quizlet.com/subject/fbla-business-communication/](https://quizlet.com/subject/fbla-business-communication/)"
                },
                {
                    title: "Quizlet: Communication Process and Barriers (FBLA)",
                    url: "[https://quizlet.com/search?query=fbla%20communication%20process&type=sets](https://quizlet.com/search?query=fbla%20communication%20process&type=sets)"
                },
                {
                    title: "Quizlet: Business Writing and Email (FBLA)",
                    url: "[https://quizlet.com/search?query=fbla%20business%20writing&type=sets](https://quizlet.com/search?query=fbla%20business%20writing&type=sets)"
                },
                {
                    title: "Quizlet: Nonverbal Communication FBLA",
                    url: "[https://quizlet.com/search?query=fbla%20nonverbal%20communication&type=sets](https://quizlet.com/search?query=fbla%20nonverbal%20communication&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length FBLA Business Communication Practice Test",
                    prompt: "Create a 40-question multiple-choice practice test for the FBLA Business Communication Objective Test. Cover topics including communication process, barriers to communication, nonverbal communication, business writing, email etiquette, listening skills, organizational communication, cross-cultural communication, and ethics. Each question should have 4 answer choices (A–D), clearly indicate the correct answer, and include a brief explanation for why the answer is correct."
                },
                {
                    title: "Adaptive Business Communication Coach",
                    prompt: "Act as an FBLA Business Communication coach. Ask me 5 diagnostic multiple-choice questions across topics like business writing, communication barriers, and nonverbal communication. Based on my answers, identify my weak areas and create a personalized study plan. Then generate targeted practice questions and mini-lessons to improve my weakest topics, adjusting difficulty as I improve."
                }
            ]
        },

    },
    {
        id: "business-ethics-presentation",
        resources: {
            title: "business-ethics-presentation Resources",
            links: [
                {
                    title: "Investopedia: Business Ethics Definition",
                    url: "[https://www.investopedia.com/terms/b/business-ethics.asp](https://www.investopedia.com/terms/b/business-ethics.asp)"
                },
                {
                    title: "Markkula Center for Applied Ethics: Framework for Ethical Decision Making",
                    url: "[https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/](https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/)"
                },
                {
                    title: "Khan Academy: Ethics and Public Policy",
                    url: "[https://www.khanacademy.org/college-careers-more/ap-art-history/later-europe-and-americas/modernity-ap/a/ethics-and-public-policy](https://www.khanacademy.org/college-careers-more/ap-art-history/later-europe-and-americas/modernity-ap/a/ethics-and-public-policy)"
                },
                {
                    title: "Harvard Business Review: A Framework for Making Ethical Decisions",
                    url: "[https://hbr.org/2015/11/a-framework-for-making-ethical-decisions](https://hbr.org/2015/11/a-framework-for-making-ethical-decisions)"
                },
                {
                    title: "Corporate Finance Institute: Business Ethics",
                    url: "[https://corporatefinanceinstitute.com/resources/knowledge/other/business-ethics/](https://corporatefinanceinstitute.com/resources/knowledge/other/business-ethics/)"
                },
                {
                    title: "Ethics Unwrapped: Giving Voice to Values",
                    url: "[https://ethicsunwrapped.utexas.edu/topic/giving-voice-to-values](https://ethicsunwrapped.utexas.edu/topic/giving-voice-to-values)"
                },
                {
                    title: "Ethics Unwrapped: Moral Reasoning",
                    url: "[https://ethicsunwrapped.utexas.edu/topic/moral-reasoning](https://ethicsunwrapped.utexas.edu/topic/moral-reasoning)"
                },
                {
                    title: "Coursera: Introduction to Business Ethics",
                    url: "[https://www.coursera.org/learn/business-ethics](https://www.coursera.org/learn/business-ethics)"
                },
                {
                    title: "Stanford Encyclopedia of Philosophy: Business Ethics",
                    url: "[https://plato.stanford.edu/entries/ethics-business/](https://plato.stanford.edu/entries/ethics-business/)"
                },
                {
                    title: "BBC Bitesize: Ethics in Business",
                    url: "[https://www.bbc.co.uk/bitesize/guides/zq9g87h/revision/1](https://www.bbc.co.uk/bitesize/guides/zq9g87h/revision/1)"
                },
                {
                    title: "OECD: Business Integrity Toolkit",
                    url: "[https://www.oecd.org/corruption/business-integrity-toolkit/](https://www.oecd.org/corruption/business-integrity-toolkit/)"
                },
                {
                    title: "U.S. Small Business Administration: Ethics in Business",
                    url: "[https://www.sba.gov/business-guide/manage-your-business/ethics](https://www.sba.gov/business-guide/manage-your-business/ethics)"
                },
                {
                    title: "Indeed Career Guide: Business Ethics Definition and Examples",
                    url: "[https://www.indeed.com/career-advice/career-development/business-ethics](https://www.indeed.com/career-advice/career-development/business-ethics)"
                },
                {
                    title: "AccountingTools: Code of Ethics Definition",
                    url: "[https://www.accountingtools.com/articles/code-of-ethics](https://www.accountingtools.com/articles/code-of-ethics)"
                },
                {
                    title: "The Ethics Institute: What is Ethics?",
                    url: "[https://www.ethicsinstitute.co.za/what-is-ethics](https://www.ethicsinstitute.co.za/what-is-ethics)"
                },
                {
                    title: "NASBA: Code of Professional Conduct Overview",
                    url: "[https://nasba.org/licensure/nasbalicensing/codeofconduct/](https://nasba.org/licensure/nasbalicensing/codeofconduct/)"
                },
                {
                    title: "McKinsey: The Role of Ethics in Decision Making",
                    url: "[https://www.mckinsey.com/featured-insights/leadership/the-importance-of-ethics-in-decision-making](https://www.mckinsey.com/featured-insights/leadership/the-importance-of-ethics-in-decision-making)"
                },
                {
                    title: "Ethics Unwrapped: Conflicts of Interest",
                    url: "[https://ethicsunwrapped.utexas.edu/topic/conflicts-of-interest](https://ethicsunwrapped.utexas.edu/topic/conflicts-of-interest)"
                },
                {
                    title: "Ethics Unwrapped: Whistleblowing",
                    url: "[https://ethicsunwrapped.utexas.edu/topic/whistleblowing](https://ethicsunwrapped.utexas.edu/topic/whistleblowing)"
                },
                {
                    title: "Global Business Ethics Survey (Ethics & Compliance Initiative)",
                    url: "[https://www.ethics.org/ecigb-es/](https://www.ethics.org/ecigb-es/)"
                },
                {
                    title: "Quizlet: FBLA Business Ethics Presentation Study Set",
                    url: "[https://quizlet.com/search?query=fbla%20business%20ethics%20presentation](https://quizlet.com/search?query=fbla%20business%20ethics%20presentation)"
                },
                {
                    title: "Quizlet: Business Ethics Key Terms (FBLA)",
                    url: "[https://quizlet.com/search?query=fbla%20business%20ethics%20terms](https://quizlet.com/search?query=fbla%20business%20ethics%20terms)"
                },
                {
                    title: "Quizlet: Ethical Decision Making Business Quiz",
                    url: "[https://quizlet.com/search?query=fbla%20ethical%20decision%20making](https://quizlet.com/search?query=fbla%20ethical%20decision%20making)"
                },
                {
                    title: "Quizlet: Corporate Social Responsibility FBLA",
                    url: "[https://quizlet.com/search?query=fbla%20corporate%20social%20responsibility](https://quizlet.com/search?query=fbla%20corporate%20social%20responsibility)"
                },
                {
                    title: "Quizlet: Business Law and Ethics FBLA Practice",
                    url: "[https://quizlet.com/search?query=fbla%20business%20law%20ethics](https://quizlet.com/search?query=fbla%20business%20law%20ethics)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length FBLA Business Ethics Practice Test",
                    prompt: "Create a 35-question multiple-choice practice test for FBLA Business Ethics Presentation. Cover topics including ethical decision-making models, corporate social responsibility (CSR), stakeholder theory, conflicts of interest, whistleblowing, codes of ethics, legal vs ethical responsibilities, sustainability, and real-world case studies (e.g., Enron, Volkswagen emissions scandal). Each question should have 4 answer choices and include a detailed explanation for the correct answer. Make the difficulty similar to FBLA competitive event standards."
                },
                {
                    title: "Adaptive Business Ethics Coaching Prompt",
                    prompt: "Act as an FBLA coach specializing in Business Ethics Presentation. Ask me 5 diagnostic multiple-choice questions covering ethics frameworks, CSR, and workplace dilemmas. Based on my answers, identify my weak areas and create a personalized study plan. Include targeted explanations, mini case studies, and practice scenarios where I must explain ethical decisions clearly, as required in FBLA presentations. Focus on improving my ability to justify decisions using ethical principles and real-world examples."
                }
            ]
        },

    },
    {
        id: "business-law-objective-test",
        resources: {
            title: "business-law-objective-test Resources",
            links: [
                {
                    title: "Introduction to Business Law - Lumen Learning",
                    url: "[https://courses.lumenlearning.com/wm-introductiontobusinesslaw/](https://courses.lumenlearning.com/wm-introductiontobusinesslaw/)"
                },
                {
                    title: "Business Law - Saylor Academy",
                    url: "[https://learn.saylor.org/course/view.php?id=33](https://learn.saylor.org/course/view.php?id=33)"
                },
                {
                    title: "Legal Basics for Entrepreneurs - Coursera",
                    url: "[https://www.coursera.org/learn/legal-basics-entrepreneurs](https://www.coursera.org/learn/legal-basics-entrepreneurs)"
                },
                {
                    title: "Contract Law: From Trust to Promise to Contract - Harvard (edX)",
                    url: "[https://pll.harvard.edu/course/contract-law-trust-promise-contract](https://pll.harvard.edu/course/contract-law-trust-promise-contract)"
                },
                {
                    title: "Uniform Commercial Code (UCC) Overview - Cornell Law",
                    url: "[https://www.law.cornell.edu/wex/uniform_commercial_code](https://www.law.cornell.edu/wex/uniform_commercial_code)"
                },
                {
                    title: "What Is Business Law? - Investopedia",
                    url: "[https://www.investopedia.com/terms/b/business-law.asp](https://www.investopedia.com/terms/b/business-law.asp)"
                },
                {
                    title: "Contract Law Basics - Legal Information Institute",
                    url: "[https://www.law.cornell.edu/wex/contract](https://www.law.cornell.edu/wex/contract)"
                },
                {
                    title: "Tort Law Overview - Cornell Law",
                    url: "[https://www.law.cornell.edu/wex/tort](https://www.law.cornell.edu/wex/tort)"
                },
                {
                    title: "Intellectual Property Basics - USPTO",
                    url: "[https://www.uspto.gov/patents/basics](https://www.uspto.gov/patents/basics)"
                },
                {
                    title: "Employment Law Guide - U.S. Department of Labor",
                    url: "[https://www.dol.gov/general/aboutdol/majorlaws](https://www.dol.gov/general/aboutdol/majorlaws)"
                },
                {
                    title: "Antitrust Laws and Competition - Federal Trade Commission",
                    url: "[https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws](https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws)"
                },
                {
                    title: "Business Ethics and Legal Environment - OpenStax",
                    url: "[https://openstax.org/details/books/business-ethics](https://openstax.org/details/books/business-ethics)"
                },
                {
                    title: "Agency Law Overview - Cornell Law",
                    url: "[https://www.law.cornell.edu/wex/agency](https://www.law.cornell.edu/wex/agency)"
                },
                {
                    title: "Sales Law and the UCC - Nolo",
                    url: "[https://www.nolo.com/legal-encyclopedia/sales-law-the-ucc-29848.html](https://www.nolo.com/legal-encyclopedia/sales-law-the-ucc-29848.html)"
                },
                {
                    title: "Bankruptcy Basics - United States Courts",
                    url: "[https://www.uscourts.gov/services-forms/bankruptcy/bankruptcy-basics](https://www.uscourts.gov/services-forms/bankruptcy/bankruptcy-basics)"
                },
                {
                    title: "Negotiable Instruments Overview - Investopedia",
                    url: "[https://www.investopedia.com/terms/n/negotiableinstrument.asp](https://www.investopedia.com/terms/n/negotiableinstrument.asp)"
                },
                {
                    title: "Partnerships and Corporations - IRS Business Structures",
                    url: "[https://www.irs.gov/businesses/small-businesses-self-employed/business-structures](https://www.irs.gov/businesses/small-businesses-self-employed/business-structures)"
                },
                {
                    title: "Consumer Protection Laws - Federal Trade Commission",
                    url: "[https://consumer.ftc.gov/articles/consumer-protection-basics](https://consumer.ftc.gov/articles/consumer-protection-basics)"
                },
                {
                    title: "E-Commerce Law Basics - American Bar Association",
                    url: "[https://www.americanbar.org/groups/business_law/publications/blt/2017/01/05_goldman/](https://www.americanbar.org/groups/business_law/publications/blt/2017/01/05_goldman/)"
                },
                {
                    title: "International Business Law Overview - World Trade Organization",
                    url: "[https://www.wto.org/english/thewto_e/whatis_e/inbrief_e/inbr_e.htm](https://www.wto.org/english/thewto_e/whatis_e/inbrief_e/inbr_e.htm)"
                },
                {
                    title: "Quizlet: FBLA Business Law Vocabulary",
                    url: "[https://quizlet.com/subject/fbla-business-law/](https://quizlet.com/subject/fbla-business-law/)"
                },
                {
                    title: "Quizlet: FBLA Business Law Practice Questions",
                    url: "[https://quizlet.com/search?query=fbla%20business%20law&type=sets](https://quizlet.com/search?query=fbla%20business%20law&type=sets)"
                },
                {
                    title: "Quizlet: Business Law Contracts and Torts (FBLA)",
                    url: "[https://quizlet.com/subject/business-law-contracts-torts-fbla/](https://quizlet.com/subject/business-law-contracts-torts-fbla/)"
                },
                {
                    title: "Quizlet: FBLA Business Law Terms and Definitions",
                    url: "[https://quizlet.com/search?query=fbla%20business%20law%20terms&type=sets](https://quizlet.com/search?query=fbla%20business%20law%20terms&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length FBLA Business Law Practice Test",
                    prompt: "Create a 40-question multiple-choice practice test for the FBLA Business Law Objective Test. Cover topics including contracts (formation, breach, remedies), torts (negligence, liability), agency relationships, employment law, consumer protection, the Uniform Commercial Code (UCC), negotiable instruments, business ownership structures, ethics in law, and intellectual property. Each question should have four answer choices (A–D), clearly identify the correct answer, and include a detailed explanation for why the correct answer is right and why the others are wrong."
                },
                {
                    title: "Adaptive Business Law Study Coach",
                    prompt: "Act as an FBLA Business Law coach. Start by asking me 5 diagnostic multiple-choice questions across key areas (contracts, torts, UCC, agency, and employment law). Based on my answers, identify my weak areas and create a personalized study plan. Then provide targeted mini-lessons, memory tricks, and 10 additional practice questions focused only on my weakest topics. Continue adapting difficulty and focus as I improve."
                }
            ]
        },

    },
    {
        id: "business-management-role-play",
        resources: {
            title: "business-management-role-play Resources",
            links: [
                {
                    title: "SBA Guide to Managing a Business",
                    url: "[https://www.sba.gov/business-guide/manage-your-business](https://www.sba.gov/business-guide/manage-your-business)"
                },
                {
                    title: "Investopedia: Business Management Definition",
                    url: "[https://www.investopedia.com/terms/b/business-management.asp](https://www.investopedia.com/terms/b/business-management.asp)"
                },
                {
                    title: "Harvard Business Review - Management Tips",
                    url: "[https://hbr.org/topic/management](https://hbr.org/topic/management)"
                },
                {
                    title: "MindTools: Leadership Skills",
                    url: "[https://www.mindtools.com/pages/main/newMN_LDR.htm](https://www.mindtools.com/pages/main/newMN_LDR.htm)"
                },
                {
                    title: "MindTools: Decision Making Techniques",
                    url: "[https://www.mindtools.com/pages/main/newTED_00.htm](https://www.mindtools.com/pages/main/newTED_00.htm)"
                },
                {
                    title: "Coursera: Principles of Management",
                    url: "[https://www.coursera.org/learn/principles-of-management](https://www.coursera.org/learn/principles-of-management)"
                },
                {
                    title: "Khan Academy: Microeconomics (Decision-Making Concepts)",
                    url: "[https://www.khanacademy.org/economics-finance-domain/microeconomics](https://www.khanacademy.org/economics-finance-domain/microeconomics)"
                },
                {
                    title: "Indeed Career Guide: Management Skills",
                    url: "[https://www.indeed.com/career-advice/career-development/management-skills](https://www.indeed.com/career-advice/career-development/management-skills)"
                },
                {
                    title: "Investopedia: SWOT Analysis",
                    url: "[https://www.investopedia.com/terms/s/swot.asp](https://www.investopedia.com/terms/s/swot.asp)"
                },
                {
                    title: "Investopedia: Organizational Structure",
                    url: "[https://www.investopedia.com/terms/o/organizational-structure.asp](https://www.investopedia.com/terms/o/organizational-structure.asp)"
                },
                {
                    title: "Corporate Finance Institute: Leadership vs Management",
                    url: "[https://corporatefinanceinstitute.com/resources/management/leadership-vs-management/](https://corporatefinanceinstitute.com/resources/management/leadership-vs-management/)"
                },
                {
                    title: "Corporate Finance Institute: Conflict Resolution",
                    url: "[https://corporatefinanceinstitute.com/resources/management/conflict-resolution/](https://corporatefinanceinstitute.com/resources/management/conflict-resolution/)"
                },
                {
                    title: "McKinsey & Company: Strategy & Corporate Finance Insights",
                    url: "[https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights)"
                },
                {
                    title: "Asana: Project Management Basics",
                    url: "[https://asana.com/resources/project-management-basics](https://asana.com/resources/project-management-basics)"
                },
                {
                    title: "HubSpot: Management Skills Guide",
                    url: "[https://blog.hubspot.com/marketing/management-skills](https://blog.hubspot.com/marketing/management-skills)"
                },
                {
                    title: "OpenStax Principles of Management Textbook",
                    url: "[https://openstax.org/details/books/principles-management](https://openstax.org/details/books/principles-management)"
                },
                {
                    title: "MIT OpenCourseWare: Introduction to Management",
                    url: "[https://ocw.mit.edu/courses/sloan-school-of-management/](https://ocw.mit.edu/courses/sloan-school-of-management/)"
                },
                {
                    title: "American Management Association: Management Training Articles",
                    url: "[https://www.amanet.org/articles/](https://www.amanet.org/articles/)"
                },
                {
                    title: "Indeed: How to Handle Workplace Conflict",
                    url: "[https://www.indeed.com/career-advice/career-development/how-to-handle-conflict-at-work](https://www.indeed.com/career-advice/career-development/how-to-handle-conflict-at-work)"
                },
                {
                    title: "Investopedia: Leadership Definition",
                    url: "[https://www.investopedia.com/terms/l/leadership.asp](https://www.investopedia.com/terms/l/leadership.asp)"
                },
                {
                    title: "Quizlet: FBLA Business Management Role Play",
                    url: "[https://quizlet.com/search?query=fbla%20business%20management%20role%20play&type=sets](https://quizlet.com/search?query=fbla%20business%20management%20role%20play&type=sets)"
                },
                {
                    title: "Quizlet: FBLA Management Role Play Terms",
                    url: "[https://quizlet.com/search?query=fbla%20management%20role%20play&type=sets](https://quizlet.com/search?query=fbla%20management%20role%20play&type=sets)"
                },
                {
                    title: "Quizlet: FBLA Business Management Vocabulary",
                    url: "[https://quizlet.com/search?query=fbla%20business%20management%20vocabulary&type=sets](https://quizlet.com/search?query=fbla%20business%20management%20vocabulary&type=sets)"
                },
                {
                    title: "Quizlet: FBLA Leadership and Management Concepts",
                    url: "[https://quizlet.com/search?query=fbla%20leadership%20management&type=sets](https://quizlet.com/search?query=fbla%20leadership%20management&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length FBLA Business Management Role Play Practice Test",
                    prompt: "Create a 40-question multiple-choice practice test for FBLA Business Management Role Play. Cover topics such as leadership styles, motivation theories (Maslow, Herzberg), conflict resolution, communication strategies, decision-making models, SWOT analysis, organizational structure, employee performance management, and ethical decision-making. Include realistic business scenarios where the student must choose the best managerial response. Provide 4 answer choices per question and include a detailed answer key with explanations."
                },
                {
                    title: "Adaptive FBLA Role Play Coaching Prompt",
                    prompt: "Act as an FBLA Business Management Role Play judge and coach. Ask me 5 diagnostic questions to identify my weaknesses in areas like leadership, communication, decision-making, and problem-solving. Then generate a personalized improvement plan with targeted practice scenarios, key concepts to review, and mock role-play prompts. Include feedback on how to structure answers using clear business reasoning, professionalism, and FBLA judging criteria."
                }
            ]
        },

    },
    {
        id: "business-plan-presentation",
        resources: {
            title: "business-plan-presentation Resources",
            links: [
                {
                    title: "SBA Guide: Write Your Business Plan",
                    url: "[https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan](https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan)"
                },
                {
                    title: "Investopedia: Business Plan Definition",
                    url: "[https://www.investopedia.com/terms/b/business-plan.asp](https://www.investopedia.com/terms/b/business-plan.asp)"
                },
                {
                    title: "Bplans: How to Write a Business Plan",
                    url: "[https://www.bplans.com/business-plan-template/](https://www.bplans.com/business-plan-template/)"
                },
                {
                    title: "Harvard Business Review: How to Write a Winning Business Plan",
                    url: "[https://hbr.org/1997/07/how-to-write-a-winning-business-plan](https://hbr.org/1997/07/how-to-write-a-winning-business-plan)"
                },
                {
                    title: "Score.org Business Plan Template and Guide",
                    url: "[https://www.score.org/resource/business-plan-template-startup-business](https://www.score.org/resource/business-plan-template-startup-business)"
                },
                {
                    title: "Entrepreneur: Write Your Business Plan",
                    url: "[https://www.entrepreneur.com/growing-a-business/how-to-write-a-business-plan/247575](https://www.entrepreneur.com/growing-a-business/how-to-write-a-business-plan/247575)"
                },
                {
                    title: "U.S. Small Business Administration Market Research Guide",
                    url: "[https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis](https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis)"
                },
                {
                    title: "MIT OpenCourseWare: New Enterprises Business Planning",
                    url: "[https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/](https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/)"
                },
                {
                    title: "Khan Academy: Entrepreneurship Course",
                    url: "[https://www.khanacademy.org/economics-finance-domain/core-finance/entrepreneurship](https://www.khanacademy.org/economics-finance-domain/core-finance/entrepreneurship)"
                },
                {
                    title: "Coursera: Entrepreneurship Specialization (Wharton)",
                    url: "[https://www.coursera.org/specializations/wharton-entrepreneurship](https://www.coursera.org/specializations/wharton-entrepreneurship)"
                },
                {
                    title: "Y Combinator: How to Build a Startup",
                    url: "[https://www.ycombinator.com/library/4A-how-to-build-a-startup](https://www.ycombinator.com/library/4A-how-to-build-a-startup)"
                },
                {
                    title: "Shopify: Business Plan Guide",
                    url: "[https://www.shopify.com/blog/business-plan](https://www.shopify.com/blog/business-plan)"
                },
                {
                    title: "NerdWallet: Write a Business Plan",
                    url: "[https://www.nerdwallet.com/article/small-business/how-to-write-a-business-plan](https://www.nerdwallet.com/article/small-business/how-to-write-a-business-plan)"
                },
                {
                    title: "Indeed: How to Create a Business Plan",
                    url: "[https://www.indeed.com/career-advice/career-development/how-to-create-a-business-plan](https://www.indeed.com/career-advice/career-development/how-to-create-a-business-plan)"
                },
                {
                    title: "U.S. Chamber of Commerce: Business Plan Guide",
                    url: "[https://www.uschamber.com/co/start/strategy/business-plan](https://www.uschamber.com/co/start/strategy/business-plan)"
                },
                {
                    title: "Palo Alto Software: Business Plan Outline",
                    url: "[https://www.liveplan.com/blog/business-plan-outline](https://www.liveplan.com/blog/business-plan-outline)"
                },
                {
                    title: "Forbes: Key Elements of a Business Plan",
                    url: "[https://www.forbes.com/advisor/business/business-plan/](https://www.forbes.com/advisor/business/business-plan/)"
                },
                {
                    title: "Stanford eCorner: Business Models",
                    url: "[https://ecorner.stanford.edu/topic/business-models/](https://ecorner.stanford.edu/topic/business-models/)"
                },
                {
                    title: "HubSpot: Business Plan Template",
                    url: "[https://blog.hubspot.com/marketing/business-plan-template](https://blog.hubspot.com/marketing/business-plan-template)"
                },
                {
                    title: "McKinsey: Developing a Strategy and Business Plan",
                    url: "[https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights)"
                },
                {
                    title: "Quizlet: FBLA Business Plan Presentation Terms",
                    url: "[https://quizlet.com/search?query=fbla-business-plan-presentation&type=sets](https://quizlet.com/search?query=fbla-business-plan-presentation&type=sets)"
                },
                {
                    title: "Quizlet: Business Plan Vocabulary (FBLA)",
                    url: "[https://quizlet.com/search?query=fbla-business-plan&type=sets](https://quizlet.com/search?query=fbla-business-plan&type=sets)"
                },
                {
                    title: "Quizlet: Entrepreneurship Business Plan Concepts",
                    url: "[https://quizlet.com/search?query=entrepreneurship-business-plan&type=sets](https://quizlet.com/search?query=entrepreneurship-business-plan&type=sets)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test",
                    prompt: "Create a 35-question multiple-choice practice test for the FBLA Business Plan Presentation event. Cover topics such as executive summaries, market analysis, competitive analysis, financial projections (income statements, cash flow), marketing strategies, operations plans, management structure, and funding requests. Include realistic business scenarios, charts or data interpretation questions, and presentation-related decision-making. Provide 4 answer choices per question and include a detailed answer key with explanations."
                },
                {
                    title: "Adaptive Weakness Coaching",
                    prompt: "Act as an FBLA Business Plan Presentation coach. Ask me 5 diagnostic questions to identify my weakest areas (such as financials, marketing strategy, or presentation delivery). Then create a personalized study plan with targeted explanations, mini-practice questions, and improvement drills. Include real-world examples and simulate judge feedback on a sample business idea I provide."
                }
            ]
        },

    },
    {
        id: "career-portfolio-presentation",
        resources: {
            title: "career-portfolio-presentation Resources",
            links: [
                {
                    title: "FBLA Career Portfolio Competitive Event Details",
                    url: "[https://www.fbla.org/competitive-events/career-portfolio/](https://www.fbla.org/competitive-events/career-portfolio/)"
                },
                {
                    title: "2025–2026 FBLA Career Portfolio Competitive Events Guidelines (PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%vents%20Resources/Individual%20Guidelines/Presentation%20Events/Career-Portfolio.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%vents%20Resources/Individual%20Guidelines/Presentation%20Events/Career-Portfolio.pdf)"
                },
                {
                    title: "Career Portfolio Vocabulary Flashcards on Quizlet",
                    url: "[https://quizlet.com/1106235980/career-portfolio-vocaulary-flash-cards/](https://quizlet.com/1106235980/career-portfolio-vocaulary-flash-cards/)"
                },
                {
                    title: "Career Portfolio Flashcards on Quizlet",
                    url: "[https://quizlet.com/76259696](https://quizlet.com/76259696)"
                },
                {
                    title: "Career Portfolio Guide (Texas State University Career Services)",
                    url: "[https://www.careerservices.txst.edu/students-alumni/resources-services/career-guides/portfolio-guide.html](https://www.careerservices.txst.edu/students-alumni/resources-services/career-guides/portfolio-guide.html)"
                },
                {
                    title: "Comprehensive Guide to Showcasing Your Portfolio (WGU Career Resources)",
                    url: "[https://careers.wgu.edu/resources/comprehensive-guide-to-showcasing-your-portfolio/](https://careers.wgu.edu/resources/comprehensive-guide-to-showcasing-your-portfolio/)"
                },
                {
                    title: "12 Elements to Include in a Career Portfolio (Indeed)",
                    url: "[https://www.indeed.com/career-advice/resumes-cover-letters/career-portfolio](https://www.indeed.com/career-advice/resumes-cover-letters/career-portfolio)"
                },
                {
                    title: "What Is a Work Portfolio & How to Build One (Indeed Career Guide)",
                    url: "[https://www.indeed.com/career-advice/resumes-cover-letters/build-your-work-portfolio](https://www.indeed.com/career-advice/resumes-cover-letters/build-your-work-portfolio)"
                },
                {
                    title: "Electronic Career Portfolio Overview (fbla-resources Google Site)",
                    url: "[https://sites.google.com/mhrd.org/fbla-resources/Presentation-Events/Individual/Electronic-Career-Portfolio](https://sites.google.com/mhrd.org/fbla-resources/Presentation-Events/Individual/Electronic-Career-Portfolio)"
                },
                {
                    title: "FBLA Career Ready Practice Event Archive",
                    url: "[https://www.fbla.org/career_cluster/career-ready-practice/](https://www.fbla.org/career_cluster/career-ready-practice/)"
                },
                {
                    title: "FBLA High School Competitive Events Overview",
                    url: "[https://www.fbla.org/high-school/competitive-events/](https://www.fbla.org/high-school/competitive-events/)"
                },
                {
                    title: "FBLA Electronic Career Portfolio Presentation Example on Emaze",
                    url: "[https://www.emaze.com/%40aoctqfqqq/FBLA-Electronic-Career-Portfolio](https://www.emaze.com/%40aoctqfqqq/FBLA-Electronic-Career-Portfolio)"
                },
                {
                    title: "Career Portfolio (Wikipedia overview)",
                    url: "[https://en.wikipedia.org/wiki/Career_portfolio](https://en.wikipedia.org/wiki/Career_portfolio)"
                },
                {
                    title: "Resume Tips for a Portfolio Career (IvyExec)",
                    url: "[https://ivyexec.com/career-advice/2016/resume-portfolio-career/](https://ivyexec.com/career-advice/2016/resume-portfolio-career/)"
                },
                {
                    title: "Developing a Career Portfolio (PDF Guide)",
                    url: "[https://aiha-assets.sfo2.digitaloceanspaces.com/AIHA/resources/CareerAdvantage/How-to-Develop-a-Career-Portfolio.pdf](https://aiha-assets.sfo2.digitaloceanspaces.com/AIHA/resources/CareerAdvantage/How-to-Develop-a-Career-Portfolio.pdf)"
                },
                {
                    title: "FBLA SEM Careers Flashcards (related career Flashcards on Quizlet)",
                    url: "[https://quizlet.com/1009411668/fbla-sem-careers-flash-cards/](https://quizlet.com/1009411668/fbla-sem-careers-flash-cards/)"
                },
                {
                    title: "Formulas for Career Success: Portfolio Development (Quizlet)",
                    url: "[https://quizlet.com/399764610/formulas-for-career-success-portfolio-development-assessment-iii-flash-cards/](https://quizlet.com/399764610/formulas-for-career-success-portfolio-development-assessment-iii-flash-cards/)"
                },
                {
                    title: "Additional Career Portfolio Flashcards (Quizlet set)",
                    url: "[https://quizlet.com/76259696](https://quizlet.com/76259696)"
                },
                {
                    title: "Career Portfolio Professional Presentation Tips (Texas State)",
                    url: "[https://www.careerservices.txst.edu/students-alumni/resources-services/career-guides/portfolio-guide.html](https://www.careerservices.txst.edu/students-alumni/resources-services/career-guides/portfolio-guide.html)"
                },
                {
                    title: "Portfolio Showcasing Tips (WGU Career Resources)",
                    url: "[https://careers.wgu.edu/resources/comprehensive-guide-to-showcasing-your-portfolio/](https://careers.wgu.edu/resources/comprehensive-guide-to-showcasing-your-portfolio/)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test for Career Portfolio",
                    prompt: "Create a 30-question multiple-choice practice test focused on FBLA Career Portfolio Presentation topics including: portfolio components (e.g., resume, samples, career summary), professional presentation skills, research on chosen career fields, effective use of visual aids, and how to answer judge questions. Include correct answers and brief explanations for each."
                },
                {
                    title: "Adaptive Coaching for Career Portfolio Weaknesses",
                    prompt: "Assess the competitor’s current Career Portfolio draft and provide targeted feedback on weakest areas (e.g., resume quality, career research depth, presentation delivery). Then outline a personalized study and improvement plan with specific practice tasks for each area, emphasizing professional growth and readiness for the judging panel."
                }
            ]
        },

    },
    {
        id: "coding-and-programming-presentation",
        resources: {
            title: "coding-and-programming-presentation Resources",
            links: [
                {
                    title: "FBLA Coding & Programming – Official Event Details and Guidelines",
                    url: "https://www.fbla.org/competitive-event/coding-programming/"
                },
                {
                    title: "FBLA Coding & Programming Event Resources & Overview (Community Guide)",
                    url: "https://sites.google.com/mhrd.org/fbla-resources/Presentation-Events/Individual-or-Team/Coding-Programming"
                },
                {
                    title: "FBLA 2024–25 Competitive Events Guidelines (Coding & Programming Rubric + Requirements)",
                    url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/24-25-High-School-Guidelines-All-in-One.pdf"
                },
                {
                    title: "Quizlet: FBLA Computer Science and Coding VOCAB Flashcards",
                    url: "https://quizlet.com/324809852/fbla-computer-science-and-coding-vocab-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Computer Science & Coding (alt set)",
                    url: "https://quizlet.com/_5ddsvw?x=1jqt"
                },
                {
                    title: "Quizlet: FBLA Competitive Events Flashcards (includes Coding & Tech Terminology)",
                    url: "https://quizlet.com/480834737/fbla-competitive-events-flash-cards/"
                },
                {
                    title: "Free Programming Lesson Presentation Template (Google Slides & PowerPoint)",
                    url: "https://www.slidescarnival.com/template/programming-lesson/166300"
                },
                {
                    title: "Coding & Programming Presentation Templates – Envato Elements",
                    url: "https://elements.envato.com/presentation-templates/programming"
                },
                {
                    title: "Coding Programming PowerPoint and Google Slides Themes – SlideEgg",
                    url: "https://www.slideegg.com/coding-presentation"
                },
                {
                    title: "How to Code Presentation Template – SlideModel",
                    url: "https://slidemodel.com/templates/how-to-code-presentation-template/"
                },
                {
                    title: "Coding PowerPoint Presentation Template – PPTUniverse",
                    url: "https://www.pptuniverse.com/templates/coding-powerpoint-presentation/"
                },
                {
                    title: "FBLA Middle Level Exploring Coding & Programming Event Overview",
                    url: "https://www.flfbla.org/middle-level-event-ml-exploring-coding-and-programming"
                },
                {
                    title: "FBLA High School Competitive Events Listing (includes Coding & Programming)",
                    url: "https://www.fbla.org/high-school/competitive-events/"
                },
                {
                    title: "Quizlet: Middle Level Introduction to Computer Science and Coding Flashcards",
                    url: "https://quizlet.com/442127262/fbla-middle-level-introduction-to-computer-science-and-coding-flash-cards/"
                },
                {
                    title: "Quizlet: Computer Science – FBLA Flashcards",
                    url: "https://quizlet.com/965830191"
                },
                {
                    title: "FBLA Programming Lesson & Vocabulary – Teachers Pay Teachers (optional material)",
                    url: "https://www.teacherspayteachers.com/Product/Coding-Basics-Lesson-Slides-Reading-Passage-Discussion-Questions-Vocab-13135864"
                },
                {
                    title: "FBLA Coding & Programming Presentation Assessment Lesson Bundle (TPT)",
                    url: "https://www.teacherspayteachers.com/Product/Coding-Programming-Presentation-Assessment-Lesson-Bundle-14810121"
                },
                {
                    title: "Simplilearn Coding for Beginners Presentation Example",
                    url: "https://www.slideserve.com/Simplilearn/coding-for-beginners-how-to-start-coding-learn-coding-for-beginners"
                },
                {
                    title: "General FBLA Presentation Resources and Tips (CVFBLA)",
                    url: "https://cvfbla.org/presentation_events"
                },
                {
                    title: "Quizlet: FBLA Exploring Computer Science Flashcards",
                    url: "https://quizlet.com/849922835/fbla-exploring-computer-science-flash-cards/"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Coding & Programming Presentation Practice Test",
                    prompt: "Generate a 30‑question multiple‑choice practice test tailored to the FBLA Coding & Programming Presentation event covering: programming terminology, software development lifecycle, debugging strategies, version control basics, UI/UX considerations, algorithm analysis, coding ethics, common data structures, and presentation scenarios. Include 4 answer choices per question and a detailed answer key at the end."
                },
                {
                    title: "Adaptive Coding & Presentation Weakness Analysis Coach",
                    prompt: "Act as an adaptive study coach for FBLA Coding & Programming Presentation. Ask the student to describe which areas they feel weakest in (for example: algorithms, debugging, UI explanation, project documentation, or presenting technical decisions). Then generate a personalized study plan with targeted explanations, mini‑quizzes, and practice scenarios to improve those specific weak points tailored to FBLA judging rubrics."
                }
            ]
        },
    },
    {
        id: "community-service-project",
        resources: {
            title: "community-service-project Resources",
            links: [
                {
                    title: "FBLA Community Service Project Competitive Event Overview",
                    url: "[https://www.fbla.org/competitive-events/community-service-project-2/](https://www.fbla.org/competitive-events/community-service-project-2/)"
                },
                {
                    title: "2025‑2026 FBLA Competitive Events Guidelines: Community Service Project (High School)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/25-26-High-School-Guidelines-All-in-One.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/25-26-High-School-Guidelines-All-in-One.pdf)"
                },
                {
                    title: "Florida FBLA Community Service Project Event Details",
                    url: "[https://www.flfbla.org/event-community-service-project](https://www.flfbla.org/event-community-service-project)"
                },
                {
                    title: "FBLA Community Service Project Packet (Ideas & Hints)",
                    url: "[https://pafbla.org/downloads/11_Web_Postings--2011/%2B11_Recruitment_Ideas/commserviceideas.pdf](https://pafbla.org/downloads/11_Web_Postings--2011/%2B11_Recruitment_Ideas/commserviceideas.pdf)"
                },
                {
                    title: "Quizlet: FBLA community service project Flashcards",
                    url: "[https://quizlet.com/683250900/fbla-community-service-project-flash-cards/](https://quizlet.com/683250900/fbla-community-service-project-flash-cards/)"
                },
                {
                    title: "Quizlet: FBLA COMMUNITY SERVICE PROJECT 2022 Flashcards",
                    url: "[https://quizlet.com/688796117/fbla-community-service-project-2022-flash-cards/](https://quizlet.com/688796117/fbla-community-service-project-2022-flash-cards/)"
                },
                {
                    title: "Planning Your Community Service Project Guide (MSU Extension)",
                    url: "[https://www.canr.msu.edu/uploads/236/67527/PlanYourCommServProj.pdf](https://www.canr.msu.edu/uploads/236/67527/PlanYourCommServProj.pdf)"
                },
                {
                    title: "63 Unique Community Service Project Ideas for Nonprofits",
                    url: "[https://www.bonterratech.com/blog/community-service-projects](https://www.bonterratech.com/blog/community-service-projects)"
                },
                {
                    title: "131 Great Examples of Community Service Projects",
                    url: "[https://research.com/education/examples-of-community-service-projects](https://research.com/education/examples-of-community-service-projects)"
                },
                {
                    title: "99 Community Service Project Ideas Across Ages",
                    url: "[https://www.rosterfy.com/resources-hub/blog/99-community-service-project-ideas/](https://www.rosterfy.com/resources-hub/blog/99-community-service-project-ideas/)"
                },
                {
                    title: "How to Create Successful Community Service Projects",
                    url: "[https://blog.prepscholar.com/community-service-projects](https://blog.prepscholar.com/community-service-projects)"
                },
                {
                    title: "Organizing Service Projects Toolkit (SME)",
                    url: "[https://www.sme.org/globalassets/sme.org/membership/sme-chapter-toolkit/organizing-service-projects.pdf](https://www.sme.org/globalassets/sme.org/membership/sme-chapter-toolkit/organizing-service-projects.pdf)"
                },
                {
                    title: "Youth Volunteer Corps (national youth volunteer organization)",
                    url: "[https://yvc.org/](https://yvc.org/)"
                },
                {
                    title: "Rebuilding Together: Neighborhood Revitalization Volunteer Opportunities",
                    url: "[https://rebuildingtogether.org/](https://rebuildingtogether.org/)"
                },
                {
                    title: "FBLA Big 33 Community Service Program (PA FBLA)",
                    url: "[https://www.pafbla.org/programs/big-33-community-service/](https://www.pafbla.org/programs/big-33-community-service/)"
                },
                {
                    title: "Homestead FBLA Community Service Overview",
                    url: "[https://www.hhsfbla.com/projects/community-service](https://www.hhsfbla.com/projects/community-service)"
                },
                {
                    title: "FBLA Service Season One‑Pager (FBLA official PDF)",
                    url: "[https://www.fbla.org/media/2023/08/2023-24-Service-Season-One-Pager.pdf](https://www.fbla.org/media/2023/08/2023-24-Service-Season-One-Pager.pdf)"
                },
                {
                    title: "Plan Your Service Project (FFA guide with steps)",
                    url: "[https://www.ffa.org/livingtoserve/plan-your-service-project/](https://www.ffa.org/livingtoserve/plan-your-service-project/)"
                },
                {
                    title: "Nonprofit Skills‑Based Volunteering Toolkit (Ohio Gov PDF)",
                    url: "[https://dam.assets.ohio.gov/image/upload/serve.ohio.gov/SBV%20Toolkit%20FINAL.pdf](https://dam.assets.ohio.gov/image/upload/serve.ohio.gov/SBV%20Toolkit%20FINAL.pdf)"
                },
                {
                    title: "Evaluation Planning Examples & Template for Service Projects",
                    url: "[https://saferoutespartnership.org/resource/evaluation-planning-examples-and-template/](https://saferoutespartnership.org/resource/evaluation-planning-examples-and-template/)"
                }
            ],
            aiPrompts: [
                {
                    title: "20‑Question Multiple Choice Practice Test for Community Service Project",
                    prompt: "Create a 20‑question multiple choice practice test covering key concepts in the FBLA Community Service Project event, including: event structure and competitive components (pre‑judged report and presentation), planning steps (identifying community needs, setting SMART goals, recruiting volunteers), project impact evaluation, report organization and formatting, strategies for judges’ Q&A, and examples of effective service initiatives. Provide four answer options for each question and include an answer key at the end."
                },
                {
                    title: "Adaptive Coach: Weakness‑Based Feedback for Community Service Project Prep",
                    prompt: "You are a study coach for an FBLA member preparing for the Community Service Project event. Ask the student to list which areas they struggle with (e.g., planning timeline, writing the 17‑page report, evaluating impact, public speaking). Based on their weaknesses, give tailored exercises: write a section of the report with SMART objectives, draft a project timeline with milestones, provide sentence frames for judges’ responses, and recommend targeted readings from the provided resource list to strengthen their understanding of service project planning and execution."
                }
            ]
        },

    },
    {
        id: "computer-applications",
        resources: {
            title: "computer-applications Resources",
            links: [
                {
                    title: "GCFGlobal Free Computer & Office Tutorials",
                    url: "https://edu.gcfglobal.org/en/topics/computerbasics/"
                },
                {
                    title: "Microsoft Word Help & Learning (Official)",
                    url: "https://support.microsoft.com/en-us/word"
                },
                {
                    title: "Microsoft 365 Basics Video Training",
                    url: "https://support.microsoft.com/en-us/office/microsoft-365-basics-video-training-396b8d9e-e118-42d0-8a0d-87d1f2f055fb"
                },
                {
                    title: "Microsoft Learn Training for Office Skills",
                    url: "https://www.microsoft.com/en-us/microsoft-learn"
                },
                {
                    title: "Free Microsoft Office Training Courses (NonprofitReady)",
                    url: "https://www.nonprofitready.org/free-microsoft-office-training"
                },
                {
                    title: "Free Online Excel Course for Beginners (Great Learning)",
                    url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/excel-for-beginners"
                },
                {
                    title: "FBLA Official Computer Applications Event Info",
                    url: "https://www.fbla.org/competitive-events/computer-applications/"
                },
                {
                    title: "FBLA Computer Applications Study Guide (Google Sites)",
                    url: "https://sites.google.com/mhrd.org/fbla-resources/Production-Events/Computer-Applications"
                },
                {
                    title: "Quizlet: FBLA Computer Applications Flashcards (690 terms)",
                    url: "https://quizlet.com/189990153/fbla-computer-applications-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Computer Applications Flashcards (40 terms)",
                    url: "https://quizlet.com/1020729349/fbla-computer-applications-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA COMPUTER APPLICATIONS Flashcards (30 terms)",
                    url: "https://quizlet.com/17267357/fbla-computer-applications-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Computer Applications 7 Flashcards",
                    url: "https://quizlet.com/368890958/fbla-computer-applications-7-flash-cards/"
                },
                {
                    title: "Brainscape Computer Application Flashcards & Quizzes",
                    url: "https://www.brainscape.com/subjects/computer-application"
                },
                {
                    title: "YouTube Microsoft Office Tutorial (9‑Hour All‑In‑One)",
                    url: "https://www.youtube.com/watch?v=DzTCFsdxMP4"
                },
                {
                    title: "YouTube Microsoft Office 365 for Beginners (12+ Hours)",
                    url: "https://www.youtube.com/watch?v=Kxf3Az-3sCo"
                },
                {
                    title: "YouTube Microsoft 365 Basics Excel & PowerPoint Tutorial",
                    url: "https://www.youtube.com/watch?v=TdtNYk0urrc"
                },
                {
                    title: "Quizlet: FBLA Computer Problem Solving Flashcards",
                    url: "https://quizlet.com/77052390/flashcards"
                },
                {
                    title: "Quizlet: FBLA Introduction to IT OS Vocab Flashcards",
                    url: "https://quizlet.com/561253138/fbla-introduction-to-information-technology-operating-systems-vocab-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Introduction to Information Technology",
                    url: "https://quizlet.com/664402612/fbla-introduction-to-information-technology-flash-cards/"
                },
                {
                    title: "Online Quia Computer Applications FBLA Practice Test",
                    url: "https://www.quia.com/quiz/4063062.html"
                }
            ],
            aiPrompts: [
                {
                    title: "Computer Applications 50‑Question Practice Test",
                    prompt: "Generate a 50‑question multiple‑choice practice test covering FBLA Computer Applications topics including: basic computer terminology, Word processing commands and formatting, Excel functions and formulas, PowerPoint slide design, database query basics, cybersecurity best practices, netiquette, email applications, troubleshooting common issues, and integrating data across applications. Include answer keys."
                },
                {
                    title: "Weakness‑Focused Coaching: Computer Skills Drill",
                    prompt: "Analyze my strengths and weaknesses in Computer Applications based on my incorrect answers from a practice set on word processing, spreadsheets, and presentations. Then create targeted drills focusing on the topics I struggled with most (e.g., Excel formulas, PowerPoint transitions, Word formatting) along with explanations, additional practice questions, and mini‑tests to improve those weak areas."
                }
            ]
        },
    },
    {
        id: "computer-game-and-simulation-programming",
        resources: {
            title: "computer-game-and-simulation-programming Resources",
            links: [
                {
                    title: "FBLA Official Computer Game & Simulation Programming Event Guidelines",
                    url: "[https://www.fbla.org/competitive-events/computer-game-simulation-programming/](https://www.fbla.org/competitive-events/computer-game-simulation-programming/)"
                },
                {
                    title: "FBLA Computer Game & Simulation Programming Flashcards (Key Rules & Requirements) - Quizlet",
                    url: "[https://quizlet.com/1086873479](https://quizlet.com/1086873479)"
                },
                {
                    title: "FBLA Computer Game & Simulation Flashcards - Quizlet",
                    url: "[https://quizlet.com/267945902](https://quizlet.com/267945902)"
                },
                {
                    title: "Unity Learn Official Tutorials and Courses (Game Development)",
                    url: "[https://learn.unity.com/](https://learn.unity.com/)"
                },
                {
                    title: "Introduction to Game Development Course - Codecademy",
                    url: "[https://www.codecademy.com/learn/learn-game-development](https://www.codecademy.com/learn/learn-game-development)"
                },
                {
                    title: "Video Game Design & Development Course - FutureLearn",
                    url: "[https://www.futurelearn.com/courses/video-game-design-development/5](https://www.futurelearn.com/courses/video-game-design-development/5)"
                },
                {
                    title: "Game Programming Essentials Course - CG Spectrum",
                    url: "[https://www.cgspectrum.com/courses/game-programming-essentials](https://www.cgspectrum.com/courses/game-programming-essentials)"
                },
                {
                    title: "Game Programming Courses - CG Spectrum",
                    url: "[https://www.cgspectrum.com/courses/game-programming](https://www.cgspectrum.com/courses/game-programming)"
                },
                {
                    title: "Simulation and Game Development Research Guide - Wake Tech Library",
                    url: "[https://researchguides.waketech.edu/SimulationandGameDevelopment](https://researchguides.waketech.edu/SimulationandGameDevelopment)"
                },
                {
                    title: "Phaser HTML5 Game Framework (Documentation & Examples)",
                    url: "[https://phaser.io/](https://phaser.io/)"
                },
                {
                    title: "Godot Game Engine (Open‑Source Game Dev)",
                    url: "[https://en.wikipedia.org/wiki/GDevelop](https://en.wikipedia.org/wiki/GDevelop)"
                },
                {
                    title: "Owlcat Games GameDev Learning Drop (Directory of Game Dev Resources)",
                    url: "[https://www.pcgamer.com/gaming-industry/rpg-developer-owlcat-launches-free-game-dev-learning-resource-a-rising-tide-truly-lifts-all-ships/](https://www.pcgamer.com/gaming-industry/rpg-developer-owlcat-launches-free-game-dev-learning-resource-a-rising-tide-truly-lifts-all-ships/)"
                },
                {
                    title: "Kodu Game Lab (Visual Game Dev for Beginners)",
                    url: "[https://en.wikipedia.org/wiki/Kodu_Game_Lab](https://en.wikipedia.org/wiki/Kodu_Game_Lab)"
                },
                {
                    title: "Lightbot (Educational Programming Puzzle Game)",
                    url: "[https://en.wikipedia.org/wiki/Lightbot](https://en.wikipedia.org/wiki/Lightbot)"
                },
                {
                    title: "CodeCombat (Educational Game for Learning Programming)",
                    url: "[https://en.wikipedia.org/wiki/CodeCombat](https://en.wikipedia.org/wiki/CodeCombat)"
                },
                {
                    title: "Intro to Game Design Microcourse - Tynker",
                    url: "[https://www.tynker.com/camps/live/courses/intro-to-game-design-microcourse](https://www.tynker.com/camps/live/courses/intro-to-game-design-microcourse)"
                },
                {
                    title: "Programming 300: Intro to Game Design - Tynker",
                    url: "[https://www.tynker.com/free-classroom-school/coding-curriculum/programming-300/2-intro-to-game-design](https://www.tynker.com/free-classroom-school/coding-curriculum/programming-300/2-intro-to-game-design)"
                },
                {
                    title: "JavaScript Game Design Course - SimplyCoding.org",
                    url: "[https://simplycoding.org/product/code-computer-games-in-javascript-course/](https://simplycoding.org/product/code-computer-games-in-javascript-course/)"
                },
                {
                    title: "Zero‑to‑Mastery Game Development Resources",
                    url: "[https://zero-to-mastery.github.io/resources/GameDev.html](https://zero-to-mastery.github.io/resources/GameDev.html)"
                },
                {
                    title: "Best Unity Courses List (Class Central)",
                    url: "[https://www.classcentral.com/report/best-unity-courses/](https://www.classcentral.com/report/best-unity-courses/)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full‑Length Practice Test for Computer Game & Simulation Programming",
                    prompt: "Create a 30‑question multiple‑choice practice test covering FBLA Computer Game & Simulation Programming topics including: game design principles, programming logic basics (loops, conditionals, functions), game engine concepts, event handling, AI behaviors, UI programming, collision detection, game loops, and debugging strategies. Provide four answer choices per question with one correct answer and short explanations for each correct option."
                },
                {
                    title: "Adaptive Study Coach Prompt",
                    prompt: "Analyze my weakest areas from questions about game development concepts (e.g., object‑oriented programming, game loops, collision detection, event systems). Create a tailored study plan that focuses practice exercises, mini‑projects, and explanations for these weak spots, including example code snippets and conceptual breakdowns specific to computer game and simulation programming."
                }
            ]
        },

    },
    {
        id: "computer-problem-solving-objective-test",
        resources: {
            title: "computer-problem-solving-objective-test Resources",
            links: [
                {
                    title: "FBLA Computer Problem Solving Event Details & Guidelines",
                    url: "https://www.fbla.org/competitive-event/computer-problem-solving/"
                },
                {
                    title: "Florida FBLA Computer Problem Solving Overview & Study Competencies",
                    url: "https://www.flfbla.org/fbla-event-computer-problem-solving"
                },
                {
                    title: "2025–2026 FBLA Competitive Events Guidelines for Computer Problem Solving (PDF)",
                    url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Computer-Problem-Solving.pdf"
                },
                {
                    title: "FBLA Computer Problem Solving Flashcards (224 terms) on Quizlet",
                    url: "https://quizlet.com/487301071/fbla-computer-problem-solving-flash-cards/"
                },
                {
                    title: "FBLA Computer Problem Solving Vocabulary Flashcards (138 terms)",
                    url: "https://quizlet.com/74464307/fbla-computer-problem-solving-vocabulary-flash-cards/"
                },
                {
                    title: "FBLA Computer Problem Solving Flashcards (150 terms) on Quizlet",
                    url: "https://quizlet.com/114028109/fbla-computer-problem-solving-flash-cards/"
                },
                {
                    title: "FBLA Computer Problem Solving Practice Quiz (Quia)",
                    url: "https://www.quia.com/quiz/3468927.html"
                },
                {
                    title: "ExamCompass Free CompTIA A+ Practice Tests (Hardware/Networking/Security) ",
                    url: "https://www.examcompass.com/comptia/a-plus-certification/free-a-plus-practice-tests"
                },
                {
                    title: "CompTIA Practice Tests (A+, Network+, Security+) for IT Fundamentals",
                    url: "https://comptiapracticetest.net/"
                },
                {
                    title: "Free CompTIA A+ Practice Test — HowToNetwork",
                    url: "https://www.howtonetwork.com/free/free-comptia-a-practice-test/"
                },
                {
                    title: "Introduction to Hardware and Operating Systems Course (Coursera)",
                    url: "https://www.coursera.org/learn/introduction-to-hardware-and-operating-systems"
                },
                {
                    title: "Instructor-Led Free CompTIA A+ Core 1 Training Videos (Professor Messer)",
                    url: "https://www.professormesser.com/free-a-plus-training/220-1201/220-1201-video/220-1201-training-course/"
                },
                {
                    title: "Operating Systems Introduction (GeeksforGeeks)",
                    url: "https://www.geeksforgeeks.org/operating-systems/introduction-of-operating-system-set-1/"
                },
                {
                    title: "Cisco Networking Academy — Free Networking & Security Courses",
                    url: "https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html"
                },
                {
                    title: "FBLA Competitive Events Practice Resources",
                    url: "https://lohsfbla.com/comps/"
                },
                {
                    title: "FBLA Competitive Events Bulk Resources (bizybear.app)",
                    url: "https://bizybear.app/comps"
                },
                {
                    title: "FBLA High School Competitive Events Overview",
                    url: "https://www.fbla.org/high-school/competitive-events/"
                },
                {
                    title: "Computer Problem Solving Sample Questions & Tips",
                    url: "https://uhsfbla.weebly.com/individual-events.html"
                },
                {
                    title: "Free CompTIA A+ Core 220‑1101 & 220‑1102 Practice Tests",
                    url: "https://uniontestprep.com/comptia-a-core-series-exam/practice-test"
                },
                {
                    title: "Free CompTIA A+ 220‑1102 Practice Test (CertBlaster)",
                    url: "https://certblaster.com/free-a-plus-220-1102-practice-test/"
                }
            ],
            aiPrompts: [
                {
                    title: "Computer Problem Solving Full‑Length Practice Test",
                    prompt: "Generate a 40‑question multiple‑choice practice test covering the major competencies of the FBLA Computer Problem Solving Objective Test: operating systems, networking fundamentals, computer hardware and connectivity, security concepts, laptops/tablets/mobile devices, and printers/peripherals. For each question, include four answer choices and indicate the correct answer."
                },
                {
                    title: "Adaptive Weakness‑Based Study Coach Prompt",
                    prompt: "Assess my strengths and weaknesses after I take a 25‑question Computer Problem Solving practice quiz. Based on the areas I get wrong (operating systems, networking, hardware, security, mobile devices, or printers), create a tailored study plan with specific topics to review, example questions for each weak area, and recommended online resources."
                }
            ]
        },
    },
    {
        id: "customer-service-role-play",
        resources: {
            title: "customer-service-role-play Resources",
            links: [
                {
                    title: "FBLA Customer Service Competitive Event Overview",
                    url: "https://www.fbla.org/competitive-events/customer-service/"
                },
                {
                    title: "FBLA Customer Service Flashcards (26 terms)",
                    url: "https://quizlet.com/1128879864/fbla-customer-service-flash-cards/"
                },
                {
                    title: "FBLA Customer Service Flashcards (Positive Relations)",
                    url: "https://quizlet.com/1127869296/fbla-customer-service-flash-cards/"
                },
                {
                    title: "FBLA MS Customer Service Flashcards (109 terms)",
                    url: "https://quizlet.com/1088201099/ms-fbla-customer-service-flash-cards/"
                },
                {
                    title: "iSpringSolutions: 13 Customer Service Role-Play Scenarios",
                    url: "https://www.ispringsolutions.com/blog/role-playing-scenarios-for-customer-service-training"
                },
                {
                    title: "HubSpot: 12 Customer Service Role Play Scenarios + Scripts",
                    url: "https://blog.hubspot.com/service/customer-service-role-play"
                },
                {
                    title: "Tidio: 15 Customer Service Scenarios for Role Play",
                    url: "https://www.tidio.com/blog/customer-service-scenarios/"
                },
                {
                    title: "Alison Free Customer Service Skills Course",
                    url: "https://alison.com/course/customer-service-skills"
                },
                {
                    title: "Coursera Customer Service Courses List",
                    url: "https://www.coursera.org/courses?query=customer+service"
                },
                {
                    title: "Evolve eLearning: Customer Service Basics Courses",
                    url: "https://evolveelearning.com/training_courses/customer-service-basics/"
                },
                {
                    title: "AMA Customer Service Skills & Training Resources",
                    url: "https://www.amanet.org/resources/key-business-skills/customer-service/"
                },
                {
                    title: "Business Training Works: Five Free Customer Service Training Games",
                    url: "https://www.businesstrainingworks.com/resources/five-free-customer-service-training-games/"
                },
                {
                    title: "Business Training Experts: Customer Service Skills Overview",
                    url: "https://businesstrainingexperts.com/customer-service-training/customer-service-roadmap/overview-cs/"
                },
                {
                    title: "Dashly: 16 Customer Service Role Play Scenarios & Scripts",
                    url: "https://www.dashly.io/blog/role-playing-customer-service/"
                },
                {
                    title: "FBLA 2025-2026 Customer Service Competitive Events Guidelines (Study Objectives)",
                    url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%Events/Customer-Service.pdf"
                },
                {
                    title: "FBLA Exploring Customer Service (Role Play Event Details)",
                    url: "https://www.fbla.org/competitive-events/exploring-customer-service/"
                },
                {
                    title: "FBLA Event Overview (Florida FBLA – Customer Service)",
                    url: "https://www.flfbla.org/event-customer-service"
                },
                {
                    title: "FBLA Event – Client Service (Role Play Event)",
                    url: "https://www.fbla.org/competitive-events/client-service/"
                },
                {
                    title: "Quizlet Role Play Scenario 1 Flashcards",
                    url: "https://quizlet.com/756416337/role-play-scenario-1-quizlet-flash-cards/"
                },
                {
                    title: "FBLA Help Desk Test Competencies Flashcards",
                    url: "https://quizlet.com/246383434/fbla-help-desk-test-competencies-flash-cards/"
                }
            ],
            aiPrompts: [
                {
                    title: "Customer Service Role Play Full-Length Practice Test",
                    prompt: "Generate a 30-question multiple-choice practice test for FBLA Customer Service Role Play covering: positive customer relations, active listening techniques, conflict resolution strategies, problem identification and solution skills, professionalism in customer interactions, and scenario-based decision-making. Provide answer key and brief explanations tailored to FBLA role play expectations."
                },
                {
                    title: "Adaptive Coaching Prompt for Weakness Improvement",
                    prompt: "Analyze my recent Customer Service Role Play responses and provide targeted coaching. Include: identification of weakness (e.g., empathy, conflict resolution, clarity of communication), specific drills to practice, example responses to role play scenarios, and tips for improving real-time interaction performance under pressure."
                }
            ],
        },
    },
    {
        id: "cybersecurity-objective-test",
        resources: {
            title: "cybersecurity-objective-test Resources",
            links: [
                {
                    title: "FBLA Cybersecurity Objective Test Guidelines (Official FBLA Connect PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/Collegiate%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Cybersecurity.pdf](https://connect.fbla.org/headquarters/files/Collegiate%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Cybersecurity.pdf)"
                },
                {
                    title: "Cybersecurity Event Details – Florida FBLA",
                    url: "[https://www.floridafbla.org/event-cybersecurity](https://www.floridafbla.org/event-cybersecurity)"
                },
                {
                    title: "Cybersecurity Knowledge Flashcards – U.S. Dept of Education",
                    url: "[https://studentprivacy.ed.gov/cybersecurity-knowledge-flashcards](https://studentprivacy.ed.gov/cybersecurity-knowledge-flashcards)"
                },
                {
                    title: "Cybersecurity Basics – KnowledgeFlow Cybersafety Foundation",
                    url: "[https://knowledgeflow.org/resource/cybersecurity-basics/](https://knowledgeflow.org/resource/cybersecurity-basics/)"
                },
                {
                    title: "Cybersecurity Basics – Federal Trade Commission",
                    url: "[https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/basics](https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/basics)"
                },
                {
                    title: "Cybersecurity Basics Quiz – FTC Interactive Quiz",
                    url: "[https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/quiz/basics](https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/quiz/basics)"
                },
                {
                    title: "NICCS – National Initiative for Cybersecurity Careers and Studies",
                    url: "[https://niccs.cisa.gov/](https://niccs.cisa.gov/)"
                },
                {
                    title: "Cybersecurity Awareness & Training – CISA",
                    url: "[https://www.cisa.gov/cybersecurity-awareness-training](https://www.cisa.gov/cybersecurity-awareness-training)"
                },
                {
                    title: "Free & Low Cost Online Cybersecurity Learning Content – NIST",
                    url: "[https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content](https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content)"
                },
                {
                    title: "Cybersecurity 701 (High School to Intro Cybersecurity Curriculum)",
                    url: "[https://cyber.org/cybersecurity](https://cyber.org/cybersecurity)"
                },
                {
                    title: "FBLA Cybersecurity Flashcards – Brainscape",
                    url: "[https://www.brainscape.com/subjects/fbla-cybersecurity](https://www.brainscape.com/subjects/fbla-cybersecurity)"
                },
                {
                    title: "FBLA Cyber Security Flashcards Set (Quizlet)",
                    url: "[https://quizlet.com/19931629/fbla-cyber-security-flash-cards/](https://quizlet.com/19931629/fbla-cyber-security-flash-cards/)"
                },
                {
                    title: "FBLA - Cybersecurity National Champion Flashcards (Quizlet)",
                    url: "[https://quizlet.com/157717442/fbla-cybersecurity-by-guy-who-won-nationally-flash-cards/](https://quizlet.com/157717442/fbla-cybersecurity-by-guy-who-won-nationally-flash-cards/)"
                },
                {
                    title: "FBLA Cyber Security Questions Flashcards (Quizlet)",
                    url: "[https://quizlet.com/483289091/fbla-cyber-security-questions-flash-cards/](https://quizlet.com/483289091/fbla-cyber-security-questions-flash-cards/)"
                },
                {
                    title: "FBLA-cybersecurity Flashcards (Quizlet 2019 Packet)",
                    url: "[https://quizlet.com/489551757/fbla-cybersecurity-flash-cards/](https://quizlet.com/489551757/fbla-cybersecurity-flash-cards/)"
                },
                {
                    title: "Cyber Security FBLA Practice Test Flashcards (Quizlet)",
                    url: "[https://quizlet.com/183380564/cyber-security-fbla-practice-test-flash-cards/](https://quizlet.com/183380564/cyber-security-fbla-practice-test-flash-cards/)"
                },
                {
                    title: "Cyber Security SLC FBLA Flashcards (Quizlet)",
                    url: "[https://quizlet.com/196377112/cyber-security-slc-fbla-flash-cards/](https://quizlet.com/196377112/cyber-security-slc-fbla-flash-cards/)"
                },
                {
                    title: "FBLA Cybersecurity Flashcards (Confidentiality, Integrity, Availability) (Quizlet)",
                    url: "[https://quizlet.com/1129724675/fbla-cybersecurity-flash-cards/](https://quizlet.com/1129724675/fbla-cybersecurity-flash-cards/)"
                },
                {
                    title: "FBLA Cyber Security--Defend & Attack Flashcards (Quizlet)",
                    url: "[https://quizlet.com/342047098/fbla-cyber-security-defend-attack-flash-cards/](https://quizlet.com/342047098/fbla-cyber-security-defend-attack-flash-cards/)"
                },
                {
                    title: "FBLA Cybersecurity Flashcards (Basic Risks & Threats) (Quizlet)",
                    url: "[https://quizlet.com/984942449/fbla-cybersecurity-flash-cards/](https://quizlet.com/984942449/fbla-cybersecurity-flash-cards/)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test",
                    prompt: "Create a 50-question multiple-choice practice test covering key FBLA Cybersecurity Objective Test topics: security fundamentals, threats & vulnerabilities (malware, phishing), network security, cryptography basics, authentication, intrusion detection, email security, disaster recovery, forensics security, public key infrastructure, and cybersecurity best practices. Provide answer choices and correct answers. Emulate FBLA-style wording and difficulty."
                },
                {
                    title: "Adaptive Coaching Prompt",
                    prompt: "Analyze my incorrect answers on an FBLA Cybersecurity Objective Test practice quiz and generate a targeted study plan. For each topic I missed (e.g., network security, malware types, encryption methods), provide brief explanations, key definitions, example scenarios, and practice questions until mastery is shown."
                }
            ]
        },

    },
    {
        id: "data-analysis-presentation",
        resources: {
            title: "data-analysis-presentation Resources",
            links: [
                {
                    title: "FBLA Data Analysis Event Official Guidelines",
                    url: "[https://www.fbla.org/competitive-events/data-analysis/](https://www.fbla.org/competitive-events/data-analysis/)"
                },
                {
                    title: "Canva Guide: Data Presentation Best Practices",
                    url: "[https://www.canva.com/resources/data-presentation/](https://www.canva.com/resources/data-presentation/)"
                },
                {
                    title: "Tableau: Data Visualization Tips and Best Practices",
                    url: "[https://www.tableau.com/visualization/data-visualization-best-practices](https://www.tableau.com/visualization/data-visualization-best-practices)"
                },
                {
                    title: "Pragmatic Institute: 10 Ways to Communicate Data Findings Effectively",
                    url: "[https://www.pragmaticinstitute.com/resources/articles/data/10-ways-to-communicate-data-findings-effectively/](https://www.pragmaticinstitute.com/resources/articles/data/10-ways-to-communicate-data-findings-effectively/)"
                },
                {
                    title: "Digital.gov Introduction to Data Visualization",
                    url: "[https://digital.gov/resources/an-introduction-to-data-visualization](https://digital.gov/resources/an-introduction-to-data-visualization)"
                },
                {
                    title: "SOCR: Statistics Online Computational Resource",
                    url: "[https://www.socr.umich.edu](https://www.socr.umich.edu)"
                },
                {
                    title: "Coursera: Data Analysis and Presentation Skills Specialization",
                    url: "[https://www.coursera.org/specializations/pwc-analytics](https://www.coursera.org/specializations/pwc-analytics)"
                },
                {
                    title: "Coursera: Data Analysis and Presentation Skills Final Project",
                    url: "[https://www.coursera.org/learn/data-analysis-project-pwc](https://www.coursera.org/learn/data-analysis-project-pwc)"
                },
                {
                    title: "FBLA Event Overview - Florida FBLA",
                    url: "[https://www.flfbla.org/fbla-event-data-analysis](https://www.flfbla.org/fbla-event-data-analysis)"
                },
                {
                    title: "FBLA Data Analysis Overview - Iowa FBLA",
                    url: "[https://www.iowafbla.org/hs-competitive-events/data-analysis](https://www.iowafbla.org/hs-competitive-events/data-analysis)"
                },
                {
                    title: "Data Analysis Presentation Template - SlideKit",
                    url: "[https://www.slidekit.com/data-analysis-presentation-template/](https://www.slidekit.com/data-analysis-presentation-template/)"
                },
                {
                    title: "Data Analysis Process PowerPoint Templates - PPTUniverse",
                    url: "[https://www.pptuniverse.com/templates/data-analysis-process-powerpoint-presentation/](https://www.pptuniverse.com/templates/data-analysis-process-powerpoint-presentation/)"
                },
                {
                    title: "Data Analysis Process Overview - SlideGeeks",
                    url: "[https://www.slidegeeks.com/powerpoint/Data-Analysis-Process](https://www.slidegeeks.com/powerpoint/Data-Analysis-Process)"
                },
                {
                    title: "Exploratory Data Analysis (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Exploratory_data_analysis](https://en.wikipedia.org/wiki/Exploratory_data_analysis)"
                },
                {
                    title: "Ggplot2 Data Visualization Package (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Ggplot2](https://en.wikipedia.org/wiki/Ggplot2)"
                },
                {
                    title: "Stem-and-Leaf Display (Data Visualization)",
                    url: "[https://en.wikipedia.org/wiki/Stem-and-leaf_display](https://en.wikipedia.org/wiki/Stem-and-leaf_display)"
                },
                {
                    title: "Mosaic Plot (Data Visualization)",
                    url: "[https://en.wikipedia.org/wiki/Mosaic_plot](https://en.wikipedia.org/wiki/Mosaic_plot)"
                },
                {
                    title: "GGobi Interactive Data Visualization Tool",
                    url: "[http://www.ggobi.org/](http://www.ggobi.org/)"
                },
                {
                    title: "Oregon FBLA Data Analysis Study Guide",
                    url: "[https://oregonfbla.org/wp-content/uploads/2025/01/Competitive-Event-Study-Guide-.pdf](https://oregonfbla.org/wp-content/uploads/2025/01/Competitive-Event-Study-Guide-.pdf)"
                },
                {
                    title: "FBLA Competitive Events Practice Resources (BizyBear)",
                    url: "[https://bizybear.app/comps](https://bizybear.app/comps)"
                },
                {
                    title: "Quizlet Search: FBLA Data Analysis Presentation Sets",
                    url: "[https://www.quizlet.com/search?q=fbla+data+analysis+presentation](https://www.quizlet.com/search?q=fbla+data+analysis+presentation)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test",
                    prompt: "Create a 30–40 question FBLA-style multiple choice practice test about data analysis and presentation focusing on identifying correct data visualization types, interpreting charts and graphs, evaluating statistical summaries, explaining exploratory data analysis steps, and choosing effective presentation strategies. Include answer key and detailed explanations for each answer."
                },
                {
                    title: "Adaptive Coaching Prompt",
                    prompt: "Generate a personalized study plan for someone struggling with data interpretation and visualization within data analysis presentations. Ask diagnostic questions about which areas they find hardest (chart selection, storytelling, statistical interpretation, visual design), then produce targeted explanations, examples, and practice quizzes in those areas."
                }
            ]
        },

    },
    {
        id: "",
        resources: {
            title: "data-science-and-ai-objective-test Resources",
            links: [
                {
                    title: "FBLA Data Science & AI Official Competitive Event Overview & Guidelines",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/25-26-High-School-Guidelines-All-in-One.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/25-26-High-School-Guidelines-All-in-One.pdf)"
                },
                {
                    title: "FBLA Data Science & AI Event Details — FBLA.org",
                    url: "[https://www.fbla.org/competitive-events/data-science-ai/](https://www.fbla.org/competitive-events/data-science-ai/)"
                },
                {
                    title: "FBLA High School Competitive Events List (includes Data Science & AI)",
                    url: "[https://www.fbla.org/media/2025/05/25-26-HS-CE-List.pdf](https://www.fbla.org/media/2025/05/25-26-HS-CE-List.pdf)"
                },
                {
                    title: "Quizlet — FBLA Data Science and AI Flashcards (AnaghaChod)",
                    url: "[https://quizlet.com/1116898557](https://quizlet.com/1116898557)"
                },
                {
                    title: "Quizlet — FBLA - Data Science and AI (Updated) Flash Cards",
                    url: "[https://quizlet.com/1130474331](https://quizlet.com/1130474331)"
                },
                {
                    title: "Quizlet — Testbank Questions on AI Impact & Data Science Concepts",
                    url: "[https://quizlet.com/421383942](https://quizlet.com/421383942)"
                },
                {
                    title: "MIT Free Data Science and Machine Learning Courses Overview",
                    url: "[https://openlearning.mit.edu/news/15-free-mit-data-science-courses](https://openlearning.mit.edu/news/15-free-mit-data-science-courses)"
                },
                {
                    title: "GeeksforGeeks AI, ML and Data Science Tutorial",
                    url: "[https://www.geeksforgeeks.org/machine-learning/ai-ml-and-data-science-tutorial-learn-ai-ml-and-data-science/](https://www.geeksforgeeks.org/machine-learning/ai-ml-and-data-science-tutorial-learn-ai-ml-and-data-science/)"
                },
                {
                    title: "Free Machine Learning & AI Courses on Coursera",
                    url: "[https://www.coursera.org/courses?query=free&skills=Machine+Learning](https://www.coursera.org/courses?query=free&skills=Machine+Learning)"
                },
                {
                    title: "Codecademy Data Science Courses & Tutorials",
                    url: "[https://www.codecademy.com/catalog/subject/data-science](https://www.codecademy.com/catalog/subject/data-science)"
                },
                {
                    title: "IBM SkillsBuild Free Data Science Courses for Students",
                    url: "[https://skillsbuild.org/students/course-catalog/data-science](https://skillsbuild.org/students/course-catalog/data-science)"
                },
                {
                    title: "Wikipedia — Data Science Field Overview",
                    url: "[https://en.wikipedia.org/wiki/Data_science](https://en.wikipedia.org/wiki/Data_science)"
                },
                {
                    title: "Wikipedia — Kaggle Data Science Competition Platform",
                    url: "[https://en.wikipedia.org/wiki/Kaggle](https://en.wikipedia.org/wiki/Kaggle)"
                },
                {
                    title: "SOCR — Statistics Online Computational Resource for Data Science",
                    url: "[http://www.socr.umich.edu](http://www.socr.umich.edu)"
                },
                {
                    title: "Harvard Online Data Science Courses",
                    url: "[https://pll.harvard.edu/subject/data-science](https://pll.harvard.edu/subject/data-science)"
                },
                {
                    title: "FBLA Competitive Event Resources (General Practice Links)",
                    url: "[https://bizybear.app/comps](https://bizybear.app/comps)"
                },
                {
                    title: "Quizlet — Data Science Chapter 5 Study Guide",
                    url: "[https://quizlet.com/497899621](https://quizlet.com/497899621)"
                },
                {
                    title: "Quizlet — ITD 140 Machine Learning Flashcards (relevant AI/ML concepts)",
                    url: "[https://quizlet.com/1126257230](https://quizlet.com/1126257230)"
                },
                {
                    title: "SkillsBuild Data Fundamentals Courses",
                    url: "[https://skillsbuild.org/students/course-catalog/data-science](https://skillsbuild.org/students/course-catalog/data-science)"
                },
                {
                    title: "MIT Open Learning Data & Computation Courses",
                    url: "[https://openlearning.mit.edu/news/15-free-mit-data-science-courses](https://openlearning.mit.edu/news/15-free-mit-data-science-courses)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test",
                    prompt: "Generate a 50-question multiple choice practice test for the FBLA Data Science and AI Objective Test covering topics such as probability and statistics foundations, data analysis for AI, machine learning basics, AI ethics and privacy, data literacy, and tools for data science. Include four choices (A–D) for each question and indicate the correct answer."
                },
                {
                    title: "Weakness-Based Coaching Prompt",
                    prompt: "Assess my current understanding of these FBLA Data Science & AI topics and generate a personalized study plan: probability and statistics, interpreting visual data, basic machine learning concepts, AI ethics, and data tools. Provide targeted practice questions where I scored low and explanations for concepts I struggled with."
                }
            ]
        },

    },
    {
        id: "digital-animation-presentation",
        resources: {
            title: "digital-animation-presentation Resources",
            links: [
                {
                    title: "FBLA Digital Animation Competitive Event Guidelines",
                    url: "https://www.fbla.org/competitive-events/digital-animation/"
                },
                {
                    title: "FBLA 2024 Digital Animation Flashcards (Quizlet)",
                    url: "https://quizlet.com/925724548/fbla-2024-nationals-presentation-da-flash-cards/"
                },
                {
                    title: "BPA Digital Communication & Design Concepts (Animation Principles Quizlet)",
                    url: "https://quizlet.com/962459498/bpa-digital-communication-design-concepts-flash-cards/"
                },
                {
                    title: "Twelve Basic Principles of Animation (Wikipedia)",
                    url: "https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation"
                },
                {
                    title: "Storyboard Overview (Wikipedia)",
                    url: "https://en.wikipedia.org/wiki/Storyboard"
                },
                {
                    title: "The Ultimate Beginner's Guide to Animation (Adobe)",
                    url: "https://www.adobe.com/creativecloud/animation/discover/animation.html"
                },
                {
                    title: "Principles of Digital Animation Video Series (ETSU Open Educational Resources)",
                    url: "https://dc.etsu.edu/digital-animation-videos-oer-collection/"
                },
                {
                    title: "Free Workshop: The 12 Principles of Animation (Animation Mentor)",
                    url: "https://www.animationmentor.com/blog/free-workshop-12-principles-of-animation/"
                },
                {
                    title: "Animation Tutorials YouTube Playlist",
                    url: "https://www.youtube.com/playlist?list=PL5xtQ0kWJKFSXkMRwx9hwwa69A_Do9g0R"
                },
                {
                    title: "12 Principles of Animation Explained (Animaker)",
                    url: "https://www.animaker.com/hub/12-principles-of-animation/"
                },
                {
                    title: "Traditional Animation Techniques in Digital Format (Fiveable)",
                    url: "https://fiveable.me/2d-animation/unit-19/traditional-animation-techniques-digital-format/study-guide/taX0Bs1ZdlyHWXfZ"
                },
                {
                    title: "FBLA Competitive Events Flashcards (General, includes animation)",
                    url: "https://quizlet.com/871777469"
                },
                {
                    title: "Powerful Presentations Flashcards (includes animation concepts)",
                    url: "https://quizlet.com/68310781/powerful-presentations-flash-cards/"
                },
                {
                    title: "Digital Animation Resources on Hillsborough FBLA",
                    url: "https://hillsboroughfbla.org/resources"
                },
                {
                    title: "Digital Animation Event Overview by Florida FBLA",
                    url: "https://www.floridafbla-pbl.com/fbla-3-d-animation"
                },
                {
                    title: "Exploring Animation Event Info (FBLA)",
                    url: "https://www.fbla.org/competitive-events/exploring-animation/"
                },
                {
                    title: "Animation Mentor Free Workshop Listings",
                    url: "https://www.animationmentor.com/blog/free-workshop-12-principles-of-animation/"
                },
                {
                    title: "Principles of Animation: Squash and Stretch (Wikipedia)",
                    url: "https://en.wikipedia.org/wiki/Squash_and_stretch"
                },
                {
                    title: "School of Motion (motion design training platform)",
                    url: "https://schoolofmotion.com/"
                },
                {
                    title: "Animation Basics for Beginners (BlooopAnimation)",
                    url: "https://www.bloopanimation.com/animation-for-beginners/"
                }
            ],
            aiPrompts: [
                {
                    title: "20‑Question Digital Animation Presentation Practice Test",
                    prompt: "Create a 20‑question multiple choice practice test for FBLA Digital Animation Presentation covering key concepts such as the 12 Principles of Animation (squash & stretch, timing, staging, etc.), storyboard development, types of digital animation (2D, 3D, motion graphics), presentation tips for judging panels, animation workflow processes (keyframes, timelines), and critique questions on storytelling and visual communication. Provide four answer options per question and include the correct answer and a brief explanation for each."
                },
                {
                    title: "Adaptive Coaching for Digital Animation Weaknesses",
                    prompt: "Assess my current strengths and weaknesses in digital animation presentation skills and generate a custom coaching plan. Include targeted exercises to strengthen understanding of the 12 Principles of Animation, storyboard review practice, tips for clear technical explanations during presentations, guided prompts to refine storytelling and pacing, and strategies to improve confidence during live Q&A with judges. Provide actionable steps and short practice tasks I can complete daily."
                }
            ]
        },
    },
    {
        id: "digital-video-production-presentation",
        resources: {
            title: "digital-video-production-presentation Resources",
            links: [
                {
                    title: "FBLA Digital Video Production Competitive Event Guidelines (National FBLA)",
                    url: "[https://www.fbla.org/competitive-events/digital-video-production/](https://www.fbla.org/competitive-events/digital-video-production/)"
                },
                {
                    title: "FBLA Digital Video Production Event Overview (Florida FBLA)",
                    url: "[https://www.flfbla.org/fbla-event-digital-video-production](https://www.flfbla.org/fbla-event-digital-video-production)"
                },
                {
                    title: "FBLA Digital Video Production Flashcards – Quizlet",
                    url: "[https://quizlet.com/121890618/fbla-digital-video-production-flash-cards/](https://quizlet.com/121890618/fbla-digital-video-production-flash-cards/)"
                },
                {
                    title: "Digital Video Production Flashcards – Quizlet",
                    url: "[https://quizlet.com/140238466/digital-video-production-flash-cards/](https://quizlet.com/140238466/digital-video-production-flash-cards/)"
                },
                {
                    title: "FBLA Competitive Events Flashcards – Quizlet (includes Digital Video Production)",
                    url: "[https://quizlet.com/480834737/fbla-competitive-events-flash-cards/](https://quizlet.com/480834737/fbla-competitive-events-flash-cards/)"
                },
                {
                    title: "Adobe Video Production Beginner’s Guide",
                    url: "[https://www.adobe.com/creativecloud/video/production.html](https://www.adobe.com/creativecloud/video/production.html)"
                },
                {
                    title: "Video Production Basics – Fiveable Multimedia Skills Notes",
                    url: "[https://fiveable.me/multimedia-skills/unit-6](https://fiveable.me/multimedia-skills/unit-6)"
                },
                {
                    title: "Digital Video Production and Editing Techniques – Fiveable Guide",
                    url: "[https://fiveable.me/art-and-technology/unit-14/digital-video-production-editing-techniques/study-guide/HrwWDpWeop8pmmnO](https://fiveable.me/art-and-technology/unit-14/digital-video-production-editing-techniques/study-guide/HrwWDpWeop8pmmnO)"
                },
                {
                    title: "Video Production Best Practices – Columbia CTL",
                    url: "[https://ctl.columbia.edu/resources-and-technology/teaching-with-technology/diy-video/video-best-practices/](https://ctl.columbia.edu/resources-and-technology/teaching-with-technology/diy-video/video-best-practices/)"
                },
                {
                    title: "Video Storytelling Guide for Beginners",
                    url: "[https://carta.fiu.edu/gsc-creative/2020/01/21/video-storytelling-guide-beginners/](https://carta.fiu.edu/gsc-creative/2020/01/21/video-storytelling-guide-beginners/)"
                },
                {
                    title: "Video Planning & Production Guide – Georgia Tech Library",
                    url: "[https://libguides.library.gatech.edu/VideoProduction/VideoPlanning](https://libguides.library.gatech.edu/VideoProduction/VideoPlanning)"
                },
                {
                    title: "Mastering Digital Video Production Presentation PPT",
                    url: "[https://www.slideserve.com/robinhunt/basics-of-digital-video-production-powerpoint-ppt-presentation](https://www.slideserve.com/robinhunt/basics-of-digital-video-production-powerpoint-ppt-presentation)"
                },
                {
                    title: "Practice FBLA Digital Video Production Questions",
                    url: "[https://lohsfbla.com/comps/Digital%2BVideo%2BProduction](https://lohsfbla.com/comps/Digital%2BVideo%2BProduction)"
                },
                {
                    title: "FBLA Exploring Digital Video Production Guidelines",
                    url: "[https://www.fbla.org/competitive-events/exploring-digital-video-production/](https://www.fbla.org/competitive-events/exploring-digital-video-production/)"
                },
                {
                    title: "FBLA Intro Practice Questions – Includes Video Production Term",
                    url: "[https://quizlet.com/560203409/intro-to-fbla-practice-questions-flash-cards/](https://quizlet.com/560203409/intro-to-fbla-practice-questions-flash-cards/)"
                },
                {
                    title: "FBLA Principles & Procedures – Flashcards (includes DVP event)",
                    url: "[https://quizlet.com/274021384/fbla-principles-procedues-flash-cards/](https://quizlet.com/274021384/fbla-principles-procedues-flash-cards/)"
                },
                {
                    title: "Video Production 101: Guide for Beginners",
                    url: "[https://www.lemonlight.com/video-production/](https://www.lemonlight.com/video-production/)"
                },
                {
                    title: "Complete Guide to Video Production Workflow",
                    url: "[https://www.mangomedia.ie/blog/from-concept-to-completion-the-complete-guide-to-video-production](https://www.mangomedia.ie/blog/from-concept-to-completion-the-complete-guide-to-video-production)"
                },
                {
                    title: "Storyboarding for Film & Video (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Storyboard](https://en.wikipedia.org/wiki/Storyboard)"
                },
                {
                    title: "Videomaker Magazine (Video Production magazine)",
                    url: "[https://en.wikipedia.org/wiki/Videomaker](https://en.wikipedia.org/wiki/Videomaker)"
                }
            ],
            aiPrompts: [
                {
                    title: "20‑Question Multiple‑Choice Practice Test for Digital Video Production",
                    prompt: "Create a 20‑question multiple‑choice practice test focused on digital video production for FBLA. Include questions that cover: the stages of video production (pre‑production, production, post‑production), storytelling and audience targeting, camera techniques, lighting basics, sound recording best practices, common editing terms, and effective presentation strategies for judges. Provide four answer choices per question with only one correct answer."
                },
                {
                    title: "Adaptive Coaching Prompt for Weakness‑Based Improvement",
                    prompt: "Given a learner’s FBLA Digital Video Production weaknesses (e.g., low confidence in audio techniques, struggle with shot composition, or confusion about editing workflow), generate a customized coaching plan. Ask the learner to describe their specific weak areas, then offer step‑by‑step targeted exercises and resource recommendations for improving those skills, including practice tasks, definitions, and real‑world examples tailored to FBLA competition needs."
                }
            ]
        },

    },
    {
        id: "economics-objective-test",
        resources: {
            title: "economics-objective-test Resources",
            links: [
                {
                    title: "FBLA Economics Competitive Event Overview (FBLA Official Guides)",
                    url: "[https://www.fbla.org/competitive-events/economics/](https://www.fbla.org/competitive-events/economics/)"
                },
                {
                    title: "2024–25 FBLA Economics Objective Test Guidelines (Official PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Economics.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Economics.pdf)"
                },
                {
                    title: "FBLA Economics Event Details (Florida FBLA)",
                    url: "[https://www.flfbla.org/fbla-event-economics](https://www.flfbla.org/fbla-event-economics)"
                },
                {
                    title: "FBLA Economics Competitive Resources (Canada FBLA)",
                    url: "[https://fblc.ca/economics](https://fblc.ca/economics)"
                },
                {
                    title: "Supply, Demand, and Market Equilibrium (Khan Academy)",
                    url: "[https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium](https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium)"
                },
                {
                    title: "Economics Overview and Modules (Khan Academy)",
                    url: "[https://www.khanacademy.org/economics-finance-domain](https://www.khanacademy.org/economics-finance-domain)"
                },
                {
                    title: "Microeconomics Principles (Khan Academy)",
                    url: "[https://www.khanacademy.org/economics-finance-domain/microeconomics](https://www.khanacademy.org/economics-finance-domain/microeconomics)"
                },
                {
                    title: "Macroeconomics Basics (Khan Academy)",
                    url: "[https://www.khanacademy.org/economics-finance-domain/macroeconomics](https://www.khanacademy.org/economics-finance-domain/macroeconomics)"
                },
                {
                    title: "FBLA Economics Flashcards (Quizlet set 9331216)",
                    url: "[https://quizlet.com/9331216/fbla-economics-flash-cards/](https://quizlet.com/9331216/fbla-economics-flash-cards/)"
                },
                {
                    title: "FBLA Economics Objective Test Flashcards (Quizlet set 346212528)",
                    url: "[https://quizlet.com/346212528/fbla-economics-objective-test-flash-cards/](https://quizlet.com/346212528/fbla-economics-objective-test-flash-cards/)"
                },
                {
                    title: "FBLA Economics Objective Test Flashcards (Quizlet set 1001318443)",
                    url: "[https://quizlet.com/1001318443/fbla-economics-objective-test-flash-cards](https://quizlet.com/1001318443/fbla-economics-objective-test-flash-cards)"
                },
                {
                    title: "FBLA Economics Objective Test Key Terms (Quizlet set 854417333)",
                    url: "[https://quizlet.com/854417333/fbla-economics-objective-test-key-terms-flash-cards/](https://quizlet.com/854417333/fbla-economics-objective-test-key-terms-flash-cards/)"
                },
                {
                    title: "FBLA Economics Study Guide Flashcards (Quizlet set 855667832)",
                    url: "[https://quizlet.com/855667832/fbla-economics-study-guide-flash-cards/](https://quizlet.com/855667832/fbla-economics-study-guide-flash-cards/)"
                },
                {
                    title: "FBLA Economics Objective Test Part A Flashcards (Quizlet 977861354)",
                    url: "[https://quizlet.com/977861354/fbla-economics-objective-test-part-a-basic-economic-concepts-and-principles-flash-cards/](https://quizlet.com/977861354/fbla-economics-objective-test-part-a-basic-economic-concepts-and-principles-flash-cards/)"
                },
                {
                    title: "FBLA Economic Basics Objective Test Competencies (Quizlet set 993272551)",
                    url: "[https://quizlet.com/993272551](https://quizlet.com/993272551)"
                },
                {
                    title: "Supply and Demand (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Supply_and_demand](https://en.wikipedia.org/wiki/Supply_and_demand)"
                },
                {
                    title: "Law of Demand (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Law_of_demand](https://en.wikipedia.org/wiki/Law_of_demand)"
                },
                {
                    title: "CORE Economics Open Access Textbooks (CORE Econ materials)",
                    url: "[https://core-econ.org/the-economy/](https://core-econ.org/the-economy/)"
                },
                {
                    title: "Principles of Macroeconomics CLEP Study Resources (CollegeBoard)",
                    url: "[https://clep.collegeboard.org/prepare-for-an-exam/study-resources-by-exam/macroeconomics](https://clep.collegeboard.org/prepare-for-an-exam/study-resources-by-exam/macroeconomics)"
                },
                {
                    title: "Principles of Microeconomics CLEP Study Resources (CollegeBoard)",
                    url: "[https://clep.collegeboard.org/prepare-for-an-exam/study-resources-by-exam/microeconomics](https://clep.collegeboard.org/prepare-for-an-exam/study-resources-by-exam/microeconomics)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length FBLA Economics Objective Practice Test",
                    prompt: "Generate a 40-question multiple-choice practice test aligned with FBLA Economics Objective Test competencies (supply and demand, market structures, fiscal and monetary policy, global trade, economic indicators). Provide four options per question and include an answer key with explanations."
                },
                {
                    title: "Adaptive Economics Weakness Coaching",
                    prompt: "Review my incorrect answers from an FBLA Economics Objective Test practice set and create customized flashcards and focused practice questions on my weakest economic topics (e.g., monetary policy, elasticity, comparative advantage, GDP) to strengthen understanding before the competition."
                }
            ]
        },

    },
    {
        id: "entrepreneurship-role-play",
        resources: {
            title: "entrepreneurship-role-play Resources",
            links: [
                {
                    title: "FBLA Entrepreneurship Event Details and Guidelines",
                    url: "[https://www.fbla.org/competitive-events/entrepreneurship/](https://www.fbla.org/competitive-events/entrepreneurship/)"
                },
                {
                    title: "FBLA Competitive Events Guidelines – Entrepreneurship PDF",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Entrepreneurship.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Entrepreneurship.pdf)"
                },
                {
                    title: "Entrepreneurship Roleplay Practice – Canada FBLA Resources",
                    url: "[https://fblc.ca/entrepreneurship](https://fblc.ca/entrepreneurship)"
                },
                {
                    title: "How to Start a Business – Investopedia Comprehensive Guide",
                    url: "[https://www.investopedia.com/how-to-start-a-business-7970202](https://www.investopedia.com/how-to-start-a-business-7970202)"
                },
                {
                    title: "Entrepreneur Definition – Investopedia",
                    url: "[https://www.investopedia.com/terms/e/entrepreneur.asp](https://www.investopedia.com/terms/e/entrepreneur.asp)"
                },
                {
                    title: "Entrepreneurship Basics – Khan Academy",
                    url: "[https://www.khanacademy.org/economics-finance-domain/economics-personal-finance-va/x3ed8f3aede624754%3Afoundations-of-economics/x3ed8f3aede624754%3Afactors-of-production/v/entrepreneurship](https://www.khanacademy.org/economics-finance-domain/economics-personal-finance-va/x3ed8f3aede624754%3Afoundations-of-economics/x3ed8f3aede624754%3Afactors-of-production/v/entrepreneurship)"
                },
                {
                    title: "Entrepreneurship Life Skills – Khan Academy Interviews",
                    url: "[https://www.khanacademy.org/college-careers-more/entrepreneurship2](https://www.khanacademy.org/college-careers-more/entrepreneurship2)"
                },
                {
                    title: "Entrepreneur Career Profiles – Khan Academy",
                    url: "[https://www.khanacademy.org/college-careers-more/career-content/career-profiles-start-a-business](https://www.khanacademy.org/college-careers-more/career-content/career-profiles-start-a-business)"
                },
                {
                    title: "Coursera: The Entrepreneur’s Guide for Beginners",
                    url: "[https://www.coursera.org/learn/entrepreneur-guide-beginners](https://www.coursera.org/learn/entrepreneur-guide-beginners)"
                },
                {
                    title: "Quizlet – FBLA Entrepreneurship Role Play Flashcards",
                    url: "[https://quizlet.com/876836801/fbla-entrepreneurship-role-play-flash-cards/](https://quizlet.com/876836801/fbla-entrepreneurship-role-play-flash-cards/)"
                },
                {
                    title: "Quizlet – FBLA Entrepreneurship Test Questions",
                    url: "[https://quizlet.com/113099898/fbla-entrepreneurship-test-questions-flash-cards/](https://quizlet.com/113099898/fbla-entrepreneurship-test-questions-flash-cards/)"
                },
                {
                    title: "Quizlet – FBLA Entrepreneurship Study Guide",
                    url: "[https://quizlet.com/552204937](https://quizlet.com/552204937)"
                },
                {
                    title: "Quizlet – FBLA Entrepreneurship Flashcards Set A",
                    url: "[https://quizlet.com/1019576990/fbla-entrepreneurship-flash-cards/](https://quizlet.com/1019576990/fbla-entrepreneurship-flash-cards/)"
                },
                {
                    title: "Quizlet – FBLA Entrepreneurship Study Guide 2",
                    url: "[https://quizlet.com/552594850/fbla-entrepreneurship-study-guide-2-flash-cards/](https://quizlet.com/552594850/fbla-entrepreneurship-study-guide-2-flash-cards/)"
                },
                {
                    title: "Quizlet – Additional FBLA Entrepreneurship Flashcards",
                    url: "[https://quizlet.com/248075190/fbla-entrepreneurship-flash-cards/](https://quizlet.com/248075190/fbla-entrepreneurship-flash-cards/)"
                },
                {
                    title: "Lean Startup Methodology Overview – Wikipedia",
                    url: "[https://en.wikipedia.org/wiki/Lean_startup](https://en.wikipedia.org/wiki/Lean_startup)"
                },
                {
                    title: "Lean LaunchPad Entrepreneurship Method – Wikipedia",
                    url: "[https://en.wikipedia.org/wiki/Lean_Launchpad](https://en.wikipedia.org/wiki/Lean_Launchpad)"
                },
                {
                    title: "Principles of Entrepreneurship with Role Play Samples – DECA+",
                    url: "[https://www.decaplus.org/competitive-events/principles-of-entrepreneurship](https://www.decaplus.org/competitive-events/principles-of-entrepreneurship)"
                },
                {
                    title: "Entrepreneurship Education – Federal Reserve Bank of Kansas City",
                    url: "[https://www.kansascityfed.org/education/entrepreneurship/](https://www.kansascityfed.org/education/entrepreneurship/)"
                },
                {
                    title: "Entrepreneurship Lesson Plan and Role-Play Activity (PDF)",
                    url: "[https://www.federalreserveeducation.org/resources/lessons/lesson--mind-your-own-business.pdf](https://www.federalreserveeducation.org/resources/lessons/lesson--mind-your-own-business.pdf)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test for Entrepreneurship Role Play",
                    prompt: "Generate a 30‑question multiple‑choice practice test specifically tailored for FBLA Entrepreneurship Role Play covering business planning, market analysis, financial concepts, risk management, legal structures, and strategic decision‑making. Include four answer choices per question, and mark the correct answer with a brief explanation of why it’s correct."
                },
                {
                    title: "Adaptive Coaching for Weaknesses in Role Play",
                    prompt: "Analyze my incorrect answers from an FBLA Entrepreneurship Role Play practice quiz and generate targeted coaching tips. Identify which entrepreneurship competencies (e.g., financial management, marketing strategy, business plan components, risk analysis) I struggled with most, provide simplified explanations for each weak area, and suggest specific real‑world examples or case scenarios to improve my understanding."
                }
            ]
        },

    },
    {
        id: "event-planning-presentation",
        resources: {
            title: "event-planning-presentation Resources",
            links: [
                { title: "FBLA Event Planning Competitive Event Guidelines (2025‑2026)", url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Event-Planning.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Event-Planning.pdf)" },
                { title: "FBLA Event Planning Overview – Florida FBLA", url: "[https://www.flfbla.org/fbla-event-introduction-to-event-planning](https://www.flfbla.org/fbla-event-introduction-to-event-planning)" },
                { title: "FBLA High School Competitive Events – Event Planning", url: "[https://www.fbla.org/high-school/competitive-events/](https://www.fbla.org/high-school/competitive-events/)" },
                { title: "FBLA: Introduction to Event Planning Flashcards | Quizlet", url: "[https://quizlet.com/752204644/fbla-introduction-to-event-planning-flash-cards/](https://quizlet.com/752204644/fbla-introduction-to-event-planning-flash-cards/)" },
                { title: "Introduction to Event Planning (FBLA) Flashcards | Quizlet", url: "[https://quizlet.com/1003736603/introduction-to-event-planning-fbla-flash-cards/](https://quizlet.com/1003736603/introduction-to-event-planning-fbla-flash-cards/)" },
                { title: "FBLA Event Planning Flashcards", url: "[https://quizlet.com/760819652/fbla-event-planning-flash-cards/](https://quizlet.com/760819652/fbla-event-planning-flash-cards/)" },
                { title: "FBLA Introduction To Event Planning (282 Terms) | Quizlet", url: "[https://quizlet.com/789675735/fbla-introduction-to-event-planning-flash-cards/](https://quizlet.com/789675735/fbla-introduction-to-event-planning-flash-cards/)" },
                { title: "FBLA Introduction to Event Planning Practice Page", url: "[https://lohsfbla.com/comps/Introduction%2Bto%2BEvent%2BPlanning](https://lohsfbla.com/comps/Introduction%2Bto%2BEvent%2BPlanning)" },
                { title: "The Complete Event Management Guide for Modern Planners", url: "[https://www.guidebook.com/post/event-management-guide](https://www.guidebook.com/post/event-management-guide)" },
                { title: "Event Management Process: 7 Steps To Planning An Event", url: "[https://www.accruent.com/resources/knowledge-hub/event-management-process](https://www.accruent.com/resources/knowledge-hub/event-management-process)" },
                { title: "How to Plan a Business Event: 10‑Step Guide", url: "[https://www.executivevents.com/post/how-to-plan-a-business-event-the-complete-10-step-guide](https://www.executivevents.com/post/how-to-plan-a-business-event-the-complete-10-step-guide)" },
                { title: "20+ Expert Event Planning Tips to Run a Smooth Event", url: "[https://whova.com/blog/best-event-planning-tips/](https://whova.com/blog/best-event-planning-tips/)" },
                { title: "Event Planning Guide With Checklist 2026", url: "[https://www.cvent.com/en/blog/events/event-planning-guide](https://www.cvent.com/en/blog/events/event-planning-guide)" },
                { title: "Event Planning Checklist | Special Events ‑ Georgia Tech", url: "[https://specialevents.gatech.edu/resources/guide/checklist](https://specialevents.gatech.edu/resources/guide/checklist)" },
                { title: "Event Planning Template Examples + Best Practices", url: "[https://slidemodel.com/event-planning-template/](https://slidemodel.com/event-planning-template/)" },
                { title: "What Is Event Management? (Wikipedia)", url: "[https://en.wikipedia.org/wiki/Event_management](https://en.wikipedia.org/wiki/Event_management)" },
                { title: "2025‑26 FBLA Competitive Events Overview (FBLA.org)", url: "[https://www.fbla.org/high-school/competitive-events/](https://www.fbla.org/high-school/competitive-events/)" },
                { title: "FBLA Presentation Resources – CVFBLA", url: "[https://cvfbla.org/presentation_events](https://cvfbla.org/presentation_events)" },
                { title: "FBLA Introduction to Event Planning Practice Flashcards", url: "[https://lohsfbla.com/comps/Introduction%2Bto%2BEvent%2BPlanning/flashcards](https://lohsfbla.com/comps/Introduction%2Bto%2BEvent%2BPlanning/flashcards)" },
                { title: "FBLA Event Planning Definitions & Key Concepts", url: "[https://quizlet.com/789675735/fbla-introduction-to-event-planning-flash-cards/](https://quizlet.com/789675735/fbla-introduction-to-event-planning-flash-cards/)" }
            ],
            aiPrompts: [
                {
                    title: "Event Planning Presentation Full‑Length Practice Test",
                    prompt: "Create a 30‑question multiple‑choice practice exam that covers event planning presentation topics including: identifying event objectives, budgeting and finance, timeline creation, vendor coordination, marketing strategies, logistics, risk management, and post‑event evaluation. For each question provide four options (A‑D) with clear correct answers and brief explanations tied to real industry practices, emphasizing FBLA judging criteria and competitive event expectations."
                },
                {
                    title: "Adaptive Coaching for Event Planning Weak Areas",
                    prompt: "Assess my strengths and weaknesses in event planning presentation skills based on a short description of my work. Provide tailored coaching advice to improve in weak areas like budgeting accuracy, event timeline clarity, vendor communication, and presentation delivery. Include specific tips, example scripts, practice exercises, and targeted resources that align with FBLA event planning competitive standards."
                }
            ]
        },

    },
    {
        id: "financial-planning-presentation",
        resources: {
            title: "financial-planning-presentation Resources",
            links: [
                { title: "FBLA Financial Planning Competitive Event Guidelines (Official)", url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%vents/Presentation%20Events/Financial-Planning.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%vents/Presentation%20Events/Financial-Planning.pdf)" },
                { title: "FBLA Financial Planning Event Overview & Description", url: "[https://www.fbla.org/competitive-events/financial-planning/](https://www.fbla.org/competitive-events/financial-planning/)" },
                { title: "Investopedia Personal Finance: The Complete Guide", url: "[https://www.investopedia.com/personal-finance-4427760](https://www.investopedia.com/personal-finance-4427760)" },
                { title: "Fidelity: Steps to Create a Financial Plan", url: "[https://www.fidelity.com/learning-center/personal-finance/financial-planning-steps](https://www.fidelity.com/learning-center/personal-finance/financial-planning-steps)" },
                { title: "CFP Board Guide to the Financial Planning Process", url: "[https://www.cfp.net/-/media/files/cfp-board/standards-and-ethics/compliance-resources/guide-to-financial-planning-process.pdf](https://www.cfp.net/-/media/files/cfp-board/standards-and-ethics/compliance-resources/guide-to-financial-planning-process.pdf)" },
                { title: "Investopedia: What Is Financial Planning?", url: "[https://www.investopedia.com/terms/f/financial_plan.asp](https://www.investopedia.com/terms/f/financial_plan.asp)" },
                { title: "Investopedia: Personal Finance Defined", url: "[https://www.investopedia.com/terms/p/personalfinance.asp](https://www.investopedia.com/terms/p/personalfinance.asp)" },
                { title: "Investopedia: Financial Literacy Basics", url: "[https://www.investopedia.com/guide-to-financial-literacy-4800530](https://www.investopedia.com/guide-to-financial-literacy-4800530)" },
                { title: "U.S. Bank Guide to Financial Planning", url: "[https://www.usbank.com/wealth-management/financial-perspectives/financial-planning/guide-to-financial-planning.html](https://www.usbank.com/wealth-management/financial-perspectives/financial-planning/guide-to-financial-planning.html)" },
                { title: "Investopedia: Budgeting & Savings Overview", url: "[https://www.investopedia.com/budgeting-and-savings-4427755](https://www.investopedia.com/budgeting-and-savings-4427755)" },
                { title: "Quizlet: FBLA Competitive Event Personal Finance Study Guide", url: "[https://quizlet.com/657464095/fbla-competitive-event-personal-finance-study-guide-flash-cards/](https://quizlet.com/657464095/fbla-competitive-event-personal-finance-study-guide-flash-cards/)" },
                { title: "Quizlet: FBLA Personal Finance 2025 Flashcards", url: "[https://quizlet.com/1015313512](https://quizlet.com/1015313512)" },
                { title: "Quizlet: FBLA Financial Literacy Flashcards", url: "[https://quizlet.com/991932698/fbla-financial-literacy-flash-cards/](https://quizlet.com/991932698/fbla-financial-literacy-flash-cards/)" },
                { title: "Brainscape: FBLA Personal Finance Test Flashcards", url: "[https://www.brainscape.com/packs/fbla-personal-finance-test-21840021](https://www.brainscape.com/packs/fbla-personal-finance-test-21840021)" },
                { title: "Quizlet: Financial Literacy Vocabulary", url: "[https://quizlet.com/405601289/financial-literacy-flash-cards/](https://quizlet.com/405601289/financial-literacy-flash-cards/)" },
                { title: "Fremont FBLA Financial Literacy Flashcards (Quizlet Links)", url: "[https://quizlet.com/77851089/financial-literacy-vocabulary-flash-cards/](https://quizlet.com/77851089/financial-literacy-vocabulary-flash-cards/)" },
                { title: "FBLA Financial Literacy Month Toolkit (FBLA PDF)", url: "[https://www.fbla.org/media/2026/02/Financial-Literacy-Month-Toolkit_Final.pdf](https://www.fbla.org/media/2026/02/Financial-Literacy-Month-Toolkit_Final.pdf)" },
                { title: "Financial Planning Presentation Example (Lancaster CTC PDF)", url: "[https://lancasterctc.edu/wp-content/uploads/2025/04/Financial-Planning-Presentation.pdf](https://lancasterctc.edu/wp-content/uploads/2025/04/Financial-Planning-Presentation.pdf)" },
                { title: "Bankrate: Financial Planning Guide", url: "[https://www.bankrate.com/investing/financial-advisors/what-is-financial-planning/](https://www.bankrate.com/investing/financial-advisors/what-is-financial-planning/)" },
                { title: "Investopedia: Master Your Financial Goals", url: "[https://www.investopedia.com/articles/personal-finance/100516/setting-financial-goals/](https://www.investopedia.com/articles/personal-finance/100516/setting-financial-goals/)" }
            ],
            aiPrompts: [
                { title: "Full-Length Practice Test: Financial Planning Presentation", prompt: "Create a comprehensive 30–40 question multiple-choice practice test tailored to FBLA Financial Planning Presentation topics, including budgeting strategies, financial goal setting, investment basics, debt management, the financial planning process, risk mitigation, and scenario evaluation. Provide 4 answer choices per question with an answer key and brief explanations for each answer." },
                { title: "Adaptive Financial Planning Coaching Prompt", prompt: "Act as an FBLA financial planning coach. Ask the student to describe which areas of financial planning they feel weakest in (e.g., budgeting, investments, debt, or goal setting) and generate a personalized practice plan with targeted questions, examples, and mini quizzes to strengthen their understanding in those specific areas, referencing real concepts like the 50/30/20 rule, emergency funds, retirement planning, and financial goal prioritization." }
            ]
        },

    },
    {
        id: "financial-statement-analysis-presentation",
        resources: {
            title: "financial-statement-analysis-presentation Resources",
            links: [
                {
                    title: "FBLA Competitive Event: Financial Statement Analysis Official Guidelines",
                    url: "[https://www.fbla.org/competitive-events/financial-statement-analysis/](https://www.fbla.org/competitive-events/financial-statement-analysis/)"
                },
                {
                    title: "Investopedia: Financial Statement Analysis Explained",
                    url: "[https://www.investopedia.com/terms/f/financial-statement-analysis.asp](https://www.investopedia.com/terms/f/financial-statement-analysis.asp)"
                },
                {
                    title: "Investopedia: Financial Analysis (Definition and Key Concepts)",
                    url: "[https://www.investopedia.com/terms/f/financial-analysis.asp](https://www.investopedia.com/terms/f/financial-analysis.asp)"
                },
                {
                    title: "Investopedia: Types of Financial Statements & How to Read Them",
                    url: "[https://www.investopedia.com/terms/f/financial-statements.asp](https://www.investopedia.com/terms/f/financial-statements.asp)"
                },
                {
                    title: "FBLA Financial Statement Analysis Flashcards on Quizlet",
                    url: "[https://quizlet.com/852074492/fbla-financial-statement-analysis-flash-cards/](https://quizlet.com/852074492/fbla-financial-statement-analysis-flash-cards/)"
                },
                {
                    title: "Another FBLA Financial Statement Analysis Quizlet Set",
                    url: "[https://quizlet.com/900855003/fbla-financial-statement-analysis-flash-cards/](https://quizlet.com/900855003/fbla-financial-statement-analysis-flash-cards/)"
                },
                {
                    title: "FBLA Financial Statement Analysis Match Quiz (Quizlet)",
                    url: "[https://quizlet.com/852074492/match?funnelUUID=8c5a7779-c472-455c-966c-0fe506255dd3](https://quizlet.com/852074492/match?funnelUUID=8c5a7779-c472-455c-966c-0fe506255dd3)"
                },
                {
                    title: "CH.1 Financial Statement Analysis Flashcards (Quizlet)",
                    url: "[https://quizlet.com/524986340/ch1-financial-statement-analysis-flash-cards/](https://quizlet.com/524986340/ch1-financial-statement-analysis-flash-cards/)"
                },
                {
                    title: "Financial Statement Analysis Midterm Review Flashcards",
                    url: "[https://quizlet.com/325753869/financial-statement-analysis-midterm-review-flash-cards/](https://quizlet.com/325753869/financial-statement-analysis-midterm-review-flash-cards/)"
                },
                {
                    title: "Modules 15 & 16: Financial Reporting Standards Flashcards",
                    url: "[https://quizlet.com/705737401/modules-15-16-flash-cards/](https://quizlet.com/705737401/modules-15-16-flash-cards/)"
                },
                {
                    title: "MindLuster Financial Statement Analysis Tutorial",
                    url: "[https://www.mindluster.com/course/495/Financial-Statement-Analysis](https://www.mindluster.com/course/495/Financial-Statement-Analysis)"
                },
                {
                    title: "LearnAccountingForFree: Financial Statement Analysis Lesson",
                    url: "[https://learnaccountingforfree.com/lesson10.html](https://learnaccountingforfree.com/lesson10.html)"
                },
                {
                    title: "FBLA Financial Statement Analysis Sample Test",
                    url: "[https://lohsfbla.com/comps/Financial%2BStatement%2BAnalysis/test](https://lohsfbla.com/comps/Financial%2BStatement%2BAnalysis/test)"
                },
                {
                    title: "FBLA Canada Financial Statement Analysis Resource Page",
                    url: "[https://fblc.ca/fsa](https://fblc.ca/fsa)"
                },
                {
                    title: "Financial Statement Presentation Techniques PDF",
                    url: "[https://moneywise.adventist.org/wp-content/uploads/FinancialStatementTechniques.pdf](https://moneywise.adventist.org/wp-content/uploads/FinancialStatementTechniques.pdf)"
                },
                {
                    title: "2024–25 Competitive Events Financial Statement Analysis Rating Sheet",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/24-25-High-School-Rating-Sheets-All-in-One.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/24-25-High-School-Rating-Sheets-All-in-One.pdf)"
                },
                {
                    title: "2025–26 FBLA Financial Statement Analysis Guidelines PDF",
                    url: "[https://greektrack-fbla-public.s3.amazonaws.com/files/1/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Financial-Statement-Analysis.pdf](https://greektrack-fbla-public.s3.amazonaws.com/files/1/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Financial-Statement-Analysis.pdf)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test Prompt",
                    prompt: "Create a 30-question multiple-choice practice test for financial-statement-analysis-presentation, covering horizontal analysis, vertical analysis, ratio analysis, interpretation of balance sheets, income statements, cash flow statements, and scenario-based questions that reflect FBLA event expectations. Include an answer key with explanations referencing performance evaluation and presentation strategy."
                },
                {
                    title: "Adaptive Coaching Prompt",
                    prompt: "Diagnose weaknesses in financial statement analysis for an FBLA presentation: ask the model to analyze a student's explanations of financial ratios, trend comparisons, and business decision recommendations from their draft presentation. Provide targeted feedback on where they misinterpret financial data and how to improve clarity, accuracy, and link analysis to actionable business insights."
                }
            ]
        },

    },
    {
        id: "future-business-educator-presentation",
        resources: {
            title: "future-business-educator-presentation Resources",
            links: [
                {
                    title: "FBLA Future Business Educator Competitive Event Guidelines",
                    url: "https://www.fbla.org/competitive-events/future-business-educator/"
                },
                {
                    title: "2025‑2026 High School Future Business Educator Topic PDF (Teach the Future of Business)",
                    url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/25-26-High-School-Topics.pdf"
                },
                {
                    title: "FBLA+ Future Business Educator Practice Resources Hub",
                    url: "https://www.fblaplus.org/events/future-business-educator"
                },
                {
                    title: "Rutgers Business Education Lesson Plan Ideas",
                    url: "https://njalternateroute.rutgers.edu/blog/31-business-education-resources-elevate-your-lesson-plan"
                },
                {
                    title: "NBEA Library – Business Education Lesson Plans & Teaching Resources",
                    url: "https://nbealibrary.org/"
                },
                {
                    title: "Share My Lesson – Free Business Management & Administration Lesson Resources",
                    url: "https://sharemylesson.com/subject/business-management-and-administration"
                },
                {
                    title: "Entrepreneurship Teaching Tools for High School Educators (EIX)",
                    url: "https://eiexchange.com/educator-resources-hub"
                },
                {
                    title: "Quizlet: FBLA Competitive Events Flashcards (Includes Future Business Educator)",
                    url: "https://quizlet.com/871777469"
                },
                {
                    title: "Quizlet: FBLA Battle Of The Districts Flashcards (Future Business Educator Terms)",
                    url: "https://quizlet.com/468782729/fbla-battle-of-the-districts-flash-cards/"
                },
                {
                    title: "Quizlet: NRSM 1 Flashcards (FBLA FUTURE BUSINESS EDUCATOR)",
                    url: "https://quizlet.com/385429598/nrsm-1-flash-cards/"
                },
                {
                    title: "Quizlet: Social Policies Chapter Related to FBLA FUTURE BUSINESS EDUCATOR",
                    url: "https://quizlet.com/166922721/social-policies-chapter-10-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Competitive Events Overview Study Guide",
                    url: "https://quizlet.com/study-guides/fbla-competitive-events-overview-b979a286-d2b2-4ce6-9cc1-491da1a663b1"
                },
                {
                    title: "Sample Lesson Plans for Business & Economics Educators (Study.com overview)",
                    url: "https://study.com/academy/course/business-lesson-plans.html"
                },
                {
                    title: "CBT Lesson Plan Templates for Business Education (Lesson Planet)",
                    url: "http://www.lessonplanet.com/"
                },
                {
                    title: "FBLA Competitive Events List (shows Future Business Educator)",
                    url: "https://www.fbla.org/media/2025/05/25-26-HS-CE-List.pdf"
                },
                {
                    title: "Understanding by Design (UbD) Curriculum Planning Framework",
                    url: "https://en.wikipedia.org/wiki/Understanding_by_Design"
                },
                {
                    title: "Flipped Classroom Instructional Strategy (useful for presentations)",
                    url: "https://en.wikipedia.org/wiki/Flipped_classroom"
                },
                {
                    title: "Business‑education partnerships (context for lesson planning)",
                    url: "https://en.wikipedia.org/wiki/Business-education_partnerships"
                },
                {
                    title: "Future Business Educator Event Overview (Florida FBLA)",
                    url: "https://www.flfbla.org/fbla-event-future-business-educator"
                },
                {
                    title: "Future Business Educator Competition Guidelines (Studocu summary)",
                    url: "https://www.studocu.com/en-us/document/samford-university/business-strategy/future-business-educator/115307052"
                }
            ],
            aiPrompts: [
                {
                    title: "Full‑Length Practice Test for Future Business Educator",
                    prompt: "Write a 30‑question multiple‑choice practice test with answer key for the FBLA Future Business Educator Presentation event, focusing on business education concepts (e.g., instructional strategies, lesson planning terms, presentation skills, NACE competencies) and real‑world classroom examples that mirror the official event requirements."
                },
                {
                    title: "Adaptive Coaching Prompt for Weakness‑Based Improvement",
                    prompt: "Analyze the competitor’s submission rubric and personal feedback to create an adaptive study plan that highlights weak areas (e.g., instructional design, business concepts, classroom engagement) and generate tailored mini‑practice tasks and lesson plan revisions to strengthen content mastery and presentation delivery for Future Business Educator."
                }
            ]
        },
    },
    {
        id: "future-business-leader-presentation",
        resources: {
            title: "future-business-leader-presentation Resources",
            links: [
                {
                    title: "Future Business Leader Competitive Event Guidelines (FBLA)",
                    url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Future-Business-Leader.pdf"
                },
                {
                    title: "Future Business Leader Event Description – FBLA Official Website",
                    url: "https://www.fbla.org/competitive-events/future-business-leader/"
                },
                {
                    title: "FBLA High School Competitive Events Overview",
                    url: "https://www.fbla.org/high-school/competitive-events/"
                },
                {
                    title: "Quizlet: FBLA Future Business Leader Flashcards",
                    url: "https://quizlet.com/367117689/fbla-future-business-leader-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Future Business Leader Objective Test Flashcards",
                    url: "https://quizlet.com/344293062/fbla-future-business-leader-objective-test-flash-cards/"
                },
                {
                    title: "Quizlet: Future Business Leader Study Set",
                    url: "https://quizlet.com/65780612/future-business-leader-study-1-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Competition Future Business Leader Flashcards",
                    url: "https://quizlet.com/558990011/fbla-competition-future-business-leader-flash-cards/"
                },
                {
                    title: "FBLA Publications — Competitive Events & Resources",
                    url: "https://archive.fbla.org/publications/"
                },
                {
                    title: "Ultimate Competitive Events Guide (WA FBLA PDF)",
                    url: "https://wafbla.org/wp-content/uploads/2022/10/Ultimate-Competitive-Events-Guide.pdf"
                },
                {
                    title: "8 Essential Leadership Communication Skills — HBS Online",
                    url: "https://online.hbs.edu/blog/post/leadership-communication"
                },
                {
                    title: "10 Tips for Improving Your Public Speaking Skills — Harvard DCE",
                    url: "https://professional.dce.harvard.edu/blog/10-tips-for-improving-your-public-speaking-skills/"
                },
                {
                    title: "Toastmasters International — Public Speaking & Leadership Organization",
                    url: "https://www.toastmasters.org"
                },
                {
                    title: "Mastering Public Speaking: A Crucial Skill for Business Leaders",
                    url: "https://speakerhub.com/skillcamp/mastering-public-speaking-crucial-skill-business-leaders"
                },
                {
                    title: "Public Speaking for Business Leaders — Huntington Chamber",
                    url: "https://www.huntingtonchamber.org/2025/06/25/command-the-room-public-speaking-for-business-leaders/"
                },
                {
                    title: "FBLA National Competitive Events Operations Manual (from FBLA Files)",
                    url: "https://connect.fbla.org/files"
                },
                {
                    title: "Reddit Discussion: Tips for the Future Business Leader Event",
                    url: "https://www.reddit.com/r/fbla/comments/1os8rch/tips_for_the_future_business_leader_event/"
                },
                {
                    title: "Reddit: Future Business Leader Event Advice",
                    url: "https://www.reddit.com/r/fbla/comments/1p53gut/future_business_leader_event/"
                },
                {
                    title: "FBLA BAA Awards Flashcards (relevant for overall FBLA knowledge)",
                    url: "https://quizlet.com/260512810/fbla-baa-awards-flash-cards/"
                },
                {
                    title: "Oklahoma FBLA Events by Career Cluster (PDF listing including FBL)",
                    url: "https://oklahomafbla.org/wp-content/uploads/2019/11/FBLA-Events-by-Career-Cluster.pdf"
                },
                {
                    title: "FBLA Wiki / Overview Page (Wikipedia)",
                    url: "https://en.wikipedia.org/wiki/FBLA"
                }
            ],
            aiPrompts: [
                {
                    title: "Future Business Leader Practice Test (FBLA‑style)",
                    prompt: "Create a 30‑question multiple choice practice test tailored to the FBLA Future Business Leader event. Include questions on FBLA organization, mission/goals, leadership communication scenarios, general business knowledge (management, marketing, accounting basics), and objective test style content similar to FBLA competitive event questions. Provide four answer options per question and indicate the correct answer at the end."
                },
                {
                    title: "Adaptive Coaching for Interview & Presentation Prep",
                    prompt: "Give adaptive coaching feedback for improving a Future Business Leader interview presentation. Provide an AI coaching session where the model asks the user to submit a written or spoken sample of their presentation introduction, then identifies specific strengths and weaknesses, suggests concrete revisions for clarity and leadership impact, and outlines personalized practice exercises to improve communication and confidence."
                }
            ]
        },
    },
    {
        id: "graphic-design-presentation",
        resources: {
            title: "graphic-design-presentation Resources",
            links: [
                {
                    title: "FBLA Graphic Design Competitive Event Official Guidelines",
                    url: "https://www.fbla.org/competitive-events/graphic-design/"
                },
                {
                    title: "FBLA Graphic Design Presentation High School Competitive Event PDF",
                    url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Graphic-Design.pdf"
                },
                {
                    title: "Coursera Course: Graphic Design (Presentation & Visual Communication)",
                    url: "https://www.coursera.org/learn/presentation-design"
                },
                {
                    title: "The Golden Rules of Presentation Design (Design Principles)",
                    url: "https://blog.thenounproject.com/the-golden-rules-of-presentation-design/"
                },
                {
                    title: "Evidence-Based Presentation Design Recommendations (UC San Diego)",
                    url: "https://multimedia.ucsd.edu/best-practices/presentation-design.html"
                },
                {
                    title: "13 Core Graphic Design Principles + How to Apply Them (Figma Resource)",
                    url: "https://www.figma.com/resource-library/graphic-design-principles/"
                },
                {
                    title: "Graphic Design Lesson Google Slides Theme & PPT Template",
                    url: "https://slidesgo.com/theme/graphic-design-lesson"
                },
                {
                    title: "Graphic Design Concepts Introduction Presentation Lesson",
                    url: "https://www.teacherspayteachers.com/Product/Graphic-Design-Concepts-Introduction-Google-Slides-Presentation-Lesson-7238198"
                },
                {
                    title: "Graphic Design Flashcards (Study.com)",
                    url: "https://study.com/academy/flashcards/graphic-design-vocabulary-flashcards.html"
                },
                {
                    title: "Graphic Design Vocabulary Flashcards (Brainscape)",
                    url: "https://www.brainscape.com/subjects/graphic-design"
                },
                {
                    title: "Grid in Graphic Design (Wikipedia Overview)",
                    url: "https://en.wikipedia.org/wiki/Grid_%28graphic_design%29"
                },
                {
                    title: "Visual Hierarchy in Graphic Design (Wikipedia)",
                    url: "https://en.wikipedia.org/wiki/Visual_hierarchy"
                },
                {
                    title: "General Presentation Design Principles (UNM LibGuide)",
                    url: "https://libguides.unm.edu/presentations"
                },
                {
                    title: "Presentation Design Principles for Better PowerPoint Design",
                    url: "https://www.brightcarbon.com/blog/presentation-design-principles-better-powerpoint-design/"
                },
                {
                    title: "Graphic Design Tips for Great-Looking Presentations",
                    url: "https://www.upskillist.com/blog/graphic-design-tips-for-great-looking-presentations/"
                },
                {
                    title: "FBLA Graphic Design Presentation Flashcards (Quizlet Set)",
                    url: "https://quizlet.com/345679591/fbla-graphic-design-presentation-flash-cards/"
                },
                {
                    title: "FBLA Graphic Design Presentation STATES Flashcards (Quizlet)",
                    url: "https://quizlet.com/742706392/fbla-graphic-design-presentation-states-flash-cards/"
                },
                {
                    title: "FBLA Study Guide (Graphic Design) Flashcards (Quizlet)",
                    url: "https://quizlet.com/452527842/fbla-study-guide-graphic-design-flash-cards/"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test (20 Questions) for Graphic Design Presentation",
                    prompt: "Create a 20-question multiple-choice practice test focusing on key topics for the FBLA graphic design presentation event, including design principles (alignment, contrast, balance, hierarchy), effective slide design strategies, visual communication techniques, critique best practices, and FBLA event guidelines. Provide 4 answer options per question, identify the correct answer, and include short explanations for each correct answer."
                },
                {
                    title: "Adaptive Feedback Coach Prompt for Graphic Design Presentation Weaknesses",
                    prompt: "Generate a coaching session that analyzes a given graphic design presentation draft (slides and script provided by the user) to identify weaknesses in visual hierarchy, color usage, typography, layout clarity, and adherence to FBLA guidelines. Offer tailored, step-by-step improvement suggestions and examples of how to revise slides and talking points to strengthen clarity and visual impact."
                }
            ],
        }

    },
    {
        id: "healthcare-administration-objective-test",
        resources: {
            title: "healthcare-administration-objective-test Resources",
            links: [
                {
                    title: "FBLA Healthcare Administration Competitive Event Guidelines (Official FBLA resource)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Healthcare-Administration.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Healthcare-Administration.pdf)"
                },
                {
                    title: "FBLA Healthcare Administration Event Overview – FBLA.org",
                    url: "[https://www.fbla.org/competitive-events/healthcare-administration/](https://www.fbla.org/competitive-events/healthcare-administration/)"
                },
                {
                    title: "FBLA Healthcare Administration Flashcards (65+ terms) – Quizlet",
                    url: "[https://quizlet.com/24469971/fbla-health-care-administration-test-flash-cards/](https://quizlet.com/24469971/fbla-health-care-administration-test-flash-cards/)"
                },
                {
                    title: "FBLA 2025–2026 Healthcare Administration Flashcards – Quizlet",
                    url: "[https://quizlet.com/1117945262](https://quizlet.com/1117945262)"
                },
                {
                    title: "FBLA Healthcare Administration Study Guide (Complete) – Quizlet",
                    url: "[https://quizlet.com/267360791/flashcards](https://quizlet.com/267360791/flashcards)"
                },
                {
                    title: "FBLA Healthcare Administration Laws & Legal Rules Flashcards – Quizlet",
                    url: "[https://quizlet.com/1130529619](https://quizlet.com/1130529619)"
                },
                {
                    title: "FBLA Healthcare Administration Managing Office Procedures – Quizlet",
                    url: "[https://quizlet.com/ca/871451593](https://quizlet.com/ca/871451593)"
                },
                {
                    title: "FBLA Healthcare Administration Review Guide – Quizlet Study Guide",
                    url: "[https://quizlet.com/study-guides/fbla-healthcare-administration-review-guide-4a3022cc-1ccd-4ec9-b0f4-161d39b6d966](https://quizlet.com/study-guides/fbla-healthcare-administration-review-guide-4a3022cc-1ccd-4ec9-b0f4-161d39b6d966)"
                },
                {
                    title: "FBLA Healthcare Administration Flashcards & Quizzes – Brainscape",
                    url: "[https://www.brainscape.com/subjects/fbla-healthcare-administration](https://www.brainscape.com/subjects/fbla-healthcare-administration)"
                },
                {
                    title: "Medical Office Procedures & Administration Flashcards – Quizlet",
                    url: "[https://quizlet.com/754376205](https://quizlet.com/754376205)"
                },
                {
                    title: "Medical Terminology Guide for Medical Administrative Assistants – Northwest Career College",
                    url: "[https://www.northwestcareercollege.edu/blog/a-guide-to-medical-terminology-for-medical-administrative-assistants/](https://www.northwestcareercollege.edu/blog/a-guide-to-medical-terminology-for-medical-administrative-assistants/)"
                },
                {
                    title: "Medical Record (Wikipedia – foundational concept for records management)",
                    url: "[https://en.wikipedia.org/wiki/Medical_record](https://en.wikipedia.org/wiki/Medical_record)"
                },
                {
                    title: "Current Procedural Terminology (CPT) – AMA – coding resource",
                    url: "[https://en.wikipedia.org/wiki/Current_Procedural_Terminology](https://en.wikipedia.org/wiki/Current_Procedural_Terminology)"
                },
                {
                    title: "Practice Management (Wikipedia – healthcare administration concept)",
                    url: "[https://en.wikipedia.org/wiki/Practice_management](https://en.wikipedia.org/wiki/Practice_management)"
                },
                {
                    title: "American Health Information Management Association (AHIMA)",
                    url: "[https://en.wikipedia.org/wiki/American_Health_Information_Management_Association](https://en.wikipedia.org/wiki/American_Health_Information_Management_Association)"
                },
                {
                    title: "NHA CMAA Practice Test Flashcards (medical admin practice)",
                    url: "[https://quizlet.com/509813472/nha-cmaa-practice-test-1-flash-cards/](https://quizlet.com/509813472/nha-cmaa-practice-test-1-flash-cards/)"
                },
                {
                    title: "Health Care Administration Exam Questions and Verified Answers – Docsity",
                    url: "[https://www.docsity.com/en/docs/fbla-health-care-administration-exam-questions-and-verified-answers/13670948/](https://www.docsity.com/en/docs/fbla-health-care-administration-exam-questions-and-verified-answers/13670948/)"
                },
                {
                    title: "FBLA Event – Health Care Administration (Florida FBLA page)",
                    url: "[https://www.flfbla.org/fbla-event-health-care-administration](https://www.flfbla.org/fbla-event-health-care-administration)"
                },
                {
                    title: "FBLA Healthcare Administration Competencies Doc (Course Hero overview)",
                    url: "[https://www.coursehero.com/file/78294729/FBLA-Health-Care-Administration-Competenciesdocx/](https://www.coursehero.com/file/78294729/FBLA-Health-Care-Administration-Competenciesdocx/)"
                },
                {
                    title: "FBLA Objective Test Overview (Washington FBLA study overview with Quizlets)",
                    url: "[https://wafbla.org/competitive-events/](https://wafbla.org/competitive-events/)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test Prompt",
                    prompt: "Create a 50-question multiple-choice practice test tailored for the FBLA Healthcare Administration Objective Test. Cover key topics such as medical terminology, managing office procedures, legal and ethical issues in healthcare, health insurance systems, records management, infection control protocols, medical history documentation, communication skills in healthcare settings, and financial management in medical offices. Provide answer choices and an answer key at the end."
                },
                {
                    title: "Adaptive Coaching Weakness-Based Prompt",
                    prompt: "Analyze my answers to a set of sample Healthcare Administration Objective Test questions and generate a study plan focused on my weak areas. Ask me to provide my incorrect answers or scores by topic (e.g., medical terminology, legal issues, office procedures). Then, create customized explanations, flashcards, and practice questions that target those knowledge gaps using FBLA-relevant examples."
                }
            ]
        },

    },
    {
        id: "hospitality-and-event-management-role-play",
        resources: {
            title: "hospitality-and-event-management-role-play Resources",
            links: [
                {
                    title: "FBLA Hospitality & Event Management Competitive Event Guidelines",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Hospitality-and-Event-Management.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Hospitality-and-Event-Management.pdf)"
                },
                {
                    title: "FBLA Official Event Page — Hospitality & Event Management",
                    url: "[https://www.fbla.org/competitive-events/hospitality-event-management/](https://www.fbla.org/competitive-events/hospitality-event-management/)"
                },
                {
                    title: "FBLA Event Management and Hospitality Flashcards — Quizlet",
                    url: "[https://quizlet.com/881964730/fbla-event-management-and-hospitality-flash-cards/](https://quizlet.com/881964730/fbla-event-management-and-hospitality-flash-cards/)"
                },
                {
                    title: "FBLA Roleplay: Hospitality Management Flashcards — Quizlet",
                    url: "[https://quizlet.com/549795807/fbla-roleplay-hospitality-management-c-flash-cards/](https://quizlet.com/549795807/fbla-roleplay-hospitality-management-c-flash-cards/)"
                },
                {
                    title: "FBLA Hospitality & Event Management Flashcards — Quizlet (41 terms)",
                    url: "[https://quizlet.com/872551594/fbla-hospitality-and-event-management-flash-cards/](https://quizlet.com/872551594/fbla-hospitality-and-event-management-flash-cards/)"
                },
                {
                    title: "FBLA Hospitality & Event Management Short Flashcards — Quizlet",
                    url: "[https://quizlet.com/872551674/fbla-hospitality-and-event-management-flash-cards/](https://quizlet.com/872551674/fbla-hospitality-and-event-management-flash-cards/)"
                },
                {
                    title: "Hospitality & Event Management Studocu Competencies Guide",
                    url: "[https://www.studocu.com/en-us/document/discovery-canyon-campus-high-school/business-and-leadership/hospitality-and-event-management/116304179](https://www.studocu.com/en-us/document/discovery-canyon-campus-high-school/business-and-leadership/hospitality-and-event-management/116304179)"
                },
                {
                    title: "Practice FBLA Hospitality & Event Management Test",
                    url: "[https://lohsfbla.com/comps/Hospitality%2B%2526%2BEvent%2BManagement/test](https://lohsfbla.com/comps/Hospitality%2B%2526%2BEvent%2BManagement/test)"
                },
                {
                    title: "Practice Hospitality & Event Management Quiz & Flashcards",
                    url: "[https://lohsfbla.com/comps/Hospitality%2B%2526%2BEvent%2BManagement](https://lohsfbla.com/comps/Hospitality%2B%2526%2BEvent%2BManagement)"
                },
                {
                    title: "Hospitality & Event Management Overview — Canada FBLA",
                    url: "[https://fblc.ca/hospitality-and-event-management](https://fblc.ca/hospitality-and-event-management)"
                },
                {
                    title: "Hospitality: Meeting and Event Management (Maricopa College overview)",
                    url: "[https://www.maricopa.edu/degrees-certificates/business-entrepreneurialism-management/hospitality-meeting-event-management-5918-ccl](https://www.maricopa.edu/degrees-certificates/business-entrepreneurialism-management/hospitality-meeting-event-management-5918-ccl)"
                },
                {
                    title: "Event Management Courses on Coursera",
                    url: "[https://www.coursera.org/courses?query=event+management](https://www.coursera.org/courses?query=event+management)"
                },
                {
                    title: "Hospitality & Event Management Course on Study.com",
                    url: "[https://study.com/academy/course/event-conference-meeting-management.html](https://study.com/academy/course/event-conference-meeting-management.html)"
                },
                {
                    title: "Event Planning Guide With Checklist (Cvent)",
                    url: "[https://www.cvent.com/en/blog/events/event-planning-guide](https://www.cvent.com/en/blog/events/event-planning-guide)"
                },
                {
                    title: "Tourism, Hospitality, and Event Planning Career Guide (Indiana U)",
                    url: "[https://careerexploration.indiana.edu/career-guides/tourism-hospitality-event-planning.html](https://careerexploration.indiana.edu/career-guides/tourism-hospitality-event-planning.html)"
                },
                {
                    title: "Online Hospitality Courses on edX",
                    url: "[https://www.edx.org/learn/hospitality](https://www.edx.org/learn/hospitality)"
                },
                {
                    title: "FBLA High School Competitive Events List",
                    url: "[https://www.fbla.org/high-school/competitive-events/](https://www.fbla.org/high-school/competitive-events/)"
                },
                {
                    title: "Hospitality & Event Management Event Overview — FL FBLA",
                    url: "[https://www.flfbla.org/fbla-event-hospitality-management](https://www.flfbla.org/fbla-event-hospitality-management)"
                },
                {
                    title: "Hospitality & Event Management Event Breakdown — Lynbrook FBLA",
                    url: "[https://www.lynbrookfbla.com/competition](https://www.lynbrookfbla.com/competition)"
                },
                {
                    title: "Hospitality & Event Management Study Guide (NY State FBLA)",
                    url: "[https://www.nysfbla.org/wp-content/uploads/2025/07/Study-Materials.pdf](https://www.nysfbla.org/wp-content/uploads/2025/07/Study-Materials.pdf)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test — Hospitality & Event Management",
                    prompt: "Create a 40‑question multiple choice practice test for FBLA Hospitality & Event Management Role Play covering hospitality marketing concepts, event site selection, customer service, budgeting, legal issues, logistics, human resources, meeting design and event marketing. Provide four answer choices for each and include an answer key with explanations."
                },
                {
                    title: "Adaptive Coach Prompt for Weakness Targeting",
                    prompt: "You are an FBLA study coach. Ask the user to list 3 hospitality & event management topic areas they’re weakest in (e.g., budgeting, marketing, risk management). Based on their choices, generate a personalized study plan with targeted explanations, practice questions, and flashcards for those topics."
                }
            ]
        },

    },
    {
        id: "human-resource-management-objective-test",
        resources: {
            title: "human-resource-management-objective-test Resources",
            links: [
                {
                    title: "FBLA Official Human Resource Management Event Guidelines",
                    url: "[https://www.fbla.org/competitive-events/human-resource-management/](https://www.fbla.org/competitive-events/human-resource-management/)"
                },
                {
                    title: "FBLA Human Resource Management Study Guide Flashcards (Quizlet)",
                    url: "[https://quizlet.com/931741100/2024-fbla-human-resource-management-study-guide-flash-cards/](https://quizlet.com/931741100/2024-fbla-human-resource-management-study-guide-flash-cards/)"
                },
                {
                    title: "FBLA Human Resource Management Test Review Flashcards (Quizlet)",
                    url: "[https://quizlet.com/779885531/fbla-human-resource-management-test-review-flash-cards/](https://quizlet.com/779885531/fbla-human-resource-management-test-review-flash-cards/)"
                },
                {
                    title: "FBLA Human Resource Management Flashcards Set (313 Terms)",
                    url: "[https://quizlet.com/1123046341](https://quizlet.com/1123046341)"
                },
                {
                    title: "FBLA Human Resource Management Flashcards (Alternate Set)",
                    url: "[https://quizlet.com/275679333/fbla-human-resource-management-flash-cards/](https://quizlet.com/275679333/fbla-human-resource-management-flash-cards/)"
                },
                {
                    title: "Human Resource Management Exam 1 Flashcards (Quizlet)",
                    url: "[https://quizlet.com/512811098/human-resource-management-exam-1-chapters-1-4-flash-cards/](https://quizlet.com/512811098/human-resource-management-exam-1-chapters-1-4-flash-cards/)"
                },
                {
                    title: "Chapters 1–5 HR Study Guide Flashcards (Quizlet)",
                    url: "[https://quizlet.com/120847046/chapters-1-5-hr-study-guide-flash-cards/](https://quizlet.com/120847046/chapters-1-5-hr-study-guide-flash-cards/)"
                },
                {
                    title: "FBLA Human Resource Management Sample Questions (Quizlet)",
                    url: "[https://quizlet.com/1019591720/fbla-human-resource-management-sample-questions-flash-cards/](https://quizlet.com/1019591720/fbla-human-resource-management-sample-questions-flash-cards/)"
                },
                {
                    title: "High School HRM Objective Test Guide: Key Concepts & Competencies (Studocu)",
                    url: "[https://www.studocu.com/en-us/document/discovery-canyon-campus-high-school/business-and-leadership/human-resource-management/116304165](https://www.studocu.com/en-us/document/discovery-canyon-campus-high-school/business-and-leadership/human-resource-management/116304165)"
                },
                {
                    title: "FBLA Human Resource Management Practice Test (Quiz-Maker)",
                    url: "[https://www.quiz-maker.com/cp-hs-fbla-hr-challenge](https://www.quiz-maker.com/cp-hs-fbla-hr-challenge)"
                },
                {
                    title: "FBLA Human Resource Management Event Resource Hub",
                    url: "[https://lohsfbla.com/comps/Human%2BResource%2BManagement](https://lohsfbla.com/comps/Human%2BResource%2BManagement)"
                },
                {
                    title: "Human Resource Management Objective Test Competencies (FBLA PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Human-Resource-Management.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Human-Resource-Management.pdf)"
                },
                {
                    title: "HR Management MCQs and Planning Guide (Scribd)",
                    url: "[https://www.scribd.com/document/488859988/MCQs-Unit-1-Human-Resource-Management-and-Planning-pdf](https://www.scribd.com/document/488859988/MCQs-Unit-1-Human-Resource-Management-and-Planning-pdf)"
                },
                {
                    title: "Human Resources Management Quiz (HackingHRLab)",
                    url: "[https://hackinghrlab.io/blogs/human-resources-management-quiz/](https://hackinghrlab.io/blogs/human-resources-management-quiz/)"
                },
                {
                    title: "FBLA Event Breakdown for Human Resource Management (Florida FBLA)",
                    url: "[https://www.flfbla.org/fbla-event-human-resource-management](https://www.flfbla.org/fbla-event-human-resource-management)"
                },
                {
                    title: "FBLA Human Resource Management Overview (Florida FBLA)",
                    url: "[https://www.floridafbla-pbl.com/fbla-event-human-resource-management](https://www.floridafbla-pbl.com/fbla-event-human-resource-management)"
                },
                {
                    title: "FBLA Competitive Events Resources Listing (LOHS FBLA)",
                    url: "[https://lohsfbla.com/comps/](https://lohsfbla.com/comps/)"
                },
                {
                    title: "Human Resource Management Flashcards (Fundamentals Set)",
                    url: "[https://quizlet.com/473213426/fundamentals-of-human-resource-management-flash-cards/](https://quizlet.com/473213426/fundamentals-of-human-resource-management-flash-cards/)"
                },
                {
                    title: "FBLA Competitive Events Flashcards (contextual study)",
                    url: "[https://quizlet.com/1003708759/fbla-competitive-events-flash-cards/](https://quizlet.com/1003708759/fbla-competitive-events-flash-cards/)"
                },
                {
                    title: "FBLA Human Resource Management Flashcards (Alternate Practice)",
                    url: "[https://quizlet.com/841123090/d356-hr-technology-pre-assessment-flash-cards/](https://quizlet.com/841123090/d356-hr-technology-pre-assessment-flash-cards/)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Human Resource Management Objective Test Practice",
                    prompt: "Generate a 40-question multiple-choice practice test covering key FBLA human resource management objective test topics including staffing and recruitment, training and development, performance management, compensation and benefits, labor relations, human resource planning, government relations and issues, and employee relations. Provide four answer choices and include an answer key at the end."
                },
                {
                    title: "Adaptive HRM Study Coach for Weakness Areas",
                    prompt: "You are an adaptive study coach. Ask the student to input the areas in human resource management they struggle with (such as performance management, recruitment, or compensation). Based on the weaknesses provided, generate a targeted study plan with explanations, practice questions, and mini-quizzes to help improve understanding of those specific HRM topics relevant to the FBLA objective test."
                }
            ]
        },

    },
    {
        id: "impromptu-speaking-presentation",
        resources: {
            title: "impromptu-speaking-presentation Resources",
            links: [
                {
                    title: "FBLA Event: Impromptu Speaking Overview (Florida FBLA)",
                    url: "[https://www.flfbla.org/fbla-event-impromptu-speaking](https://www.flfbla.org/fbla-event-impromptu-speaking)"
                },
                {
                    title: "FBLA Impromptu Speaking Competitive Event Details (FBLA Official)",
                    url: "[https://www.fbla.org/competitive-events/impromptu-speaking-high-school/](https://www.fbla.org/competitive-events/impromptu-speaking-high-school/)"
                },
                {
                    title: "2024–25 FBLA Impromptu Speaking Guidelines (PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Impromptu-Speaking.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Impromptu-Speaking.pdf)"
                },
                {
                    title: "FBLA: Impromptu Speaking Flashcards on Quizlet",
                    url: "[https://quizlet.com/281705810/fbla-impromptu-speaking-flash-cards/](https://quizlet.com/281705810/fbla-impromptu-speaking-flash-cards/)"
                },
                {
                    title: "FBLA IMPROMPTU SPEECH Flashcards (Quizlet)",
                    url: "[https://quizlet.com/772602339/fbla-impromptu-speech-flash-cards/](https://quizlet.com/772602339/fbla-impromptu-speech-flash-cards/)"
                },
                {
                    title: "Impromptu Speaking (FBLA) Vocabulary Flashcards",
                    url: "[https://quizlet.com/317645326/impromptu-speaking-fbla-vocabulary-flash-cards/](https://quizlet.com/317645326/impromptu-speaking-fbla-vocabulary-flash-cards/)"
                },
                {
                    title: "FBLA Goals for Impromptu Speaking Flashcards",
                    url: "[https://quizlet.com/265481113/fbla-goals-for-impromptu-speaking-flash-cards/](https://quizlet.com/265481113/fbla-goals-for-impromptu-speaking-flash-cards/)"
                },
                {
                    title: "FBLA Impromptu Flashcards (Additional Set)",
                    url: "[https://quizlet.com/427453896/fbla-impromptu-flash-cards/](https://quizlet.com/427453896/fbla-impromptu-flash-cards/)"
                },
                {
                    title: "Impromptu Speaking Sample Topics (Nebraska FBLA)",
                    url: "[https://nebraskafbla.org/chapter-resources/resources-ce_impromspkgtopicsamples/](https://nebraskafbla.org/chapter-resources/resources-ce_impromspkgtopicsamples/)"
                },
                {
                    title: "Impromptu Speaking Resource (Toastmasters International)",
                    url: "[https://www.toastmasters.org/resources/impromptu-speaking](https://www.toastmasters.org/resources/impromptu-speaking)"
                },
                {
                    title: "Impromptu Starter Kit (Speech & Debate.org PDF)",
                    url: "[https://www.speechanddebate.org/wp-content/uploads/Impromptu-Starter-Kit.pdf](https://www.speechanddebate.org/wp-content/uploads/Impromptu-Starter-Kit.pdf)"
                },
                {
                    title: "Impromptu Speaking Tips - Training Associates Blog",
                    url: "[https://thetrainingassociates.com/impromptu-speaking-tips/](https://thetrainingassociates.com/impromptu-speaking-tips/)"
                },
                {
                    title: "Tips for Effective Impromptu Speaking (UW‑La Crosse PDF)",
                    url: "[https://www.uwlax.edu/globalassets/offices-services/tutoring--learning-center/public-speaking-tutors/new-folder/psc-handout-impromptu-tips.pdf](https://www.uwlax.edu/globalassets/offices-services/tutoring--learning-center/public-speaking-tutors/new-folder/psc-handout-impromptu-tips.pdf)"
                },
                {
                    title: "Impromptu Speaking: The Framework That Makes You Sound Prepared",
                    url: "[https://winningpresentations.com/impromptu-speaking/](https://winningpresentations.com/impromptu-speaking/)"
                },
                {
                    title: "10 Tips for Improving Your Public Speaking Skills (Harvard DCE)",
                    url: "[https://professional.dce.harvard.edu/blog/10-tips-for-improving-your-public-speaking-skills/](https://professional.dce.harvard.edu/blog/10-tips-for-improving-your-public-speaking-skills/)"
                },
                {
                    title: "Writing Center Resources for Public Speaking (Amherst College)",
                    url: "[https://www.amherst.edu/academiclife/support/writingcenter/public-speaking/resources-for-public-speaking](https://www.amherst.edu/academiclife/support/writingcenter/public-speaking/resources-for-public-speaking)"
                },
                {
                    title: "Wikipedia: Impromptu Speaking",
                    url: "[https://en.wikipedia.org/wiki/Impromptu_speaking](https://en.wikipedia.org/wiki/Impromptu_speaking)"
                },
                {
                    title: "Wikipedia: Toastmasters International",
                    url: "[https://en.wikipedia.org/wiki/Toastmasters_International](https://en.wikipedia.org/wiki/Toastmasters_International)"
                },
                {
                    title: "Wikipedia: Speaker's Triangle (Public Speaking Technique)",
                    url: "[https://en.wikipedia.org/wiki/Speaker's_triangle](https://en.wikipedia.org/wiki/Speaker's_triangle)"
                },
                {
                    title: "FBLA Competitive Events Flashcards Including Impromptu Speaking",
                    url: "[https://quizlet.com/480834737/fbla-competitive-events-flash-cards/](https://quizlet.com/480834737/fbla-competitive-events-flash-cards/)"
                }
            ],
            aiPrompts: [
                {
                    title: "Impromptu Speaking Presentation Practice Test",
                    prompt: "Create a 30‑question multiple choice practice test focused on FBLA Impromptu Speaking Presentation. Include scenario‑based questions about speech structure (introduction, body, conclusion), evaluation of delivery skills, time management strategies, how to organize thoughts under pressure, business‑related speech topics, judging criteria, and best practices for using notecards. Provide correct answers with brief explanations."
                },
                {
                    title: "Adaptive Impromptu Speaking Coach",
                    prompt: "Act as an adaptive coach for improving impromptu speaking skills specific to FBLA competition. Ask a student for their weakest area (e.g., time management, structure, confidence, filler words), then generate tailored practice exercises, brief simulated prompts on business or FBLA goals, feedback on responses, and tips to progressively build skills over multiple practice rounds."
                }
            ]
        },

    },
    {
        id: "insurance-and-risk-management-objective-test",
        resources: {
            title: "insurance-and-risk-management-objective-test Resources",
            links: [
                {
                    title: "FBLA Insurance & Risk Management Competitive Event Guidelines",
                    url: "[https://www.fbla.org/competitive-events/insurance-risk-management/](https://www.fbla.org/competitive-events/insurance-risk-management/)"
                },
                {
                    title: "Florida FBLA Insurance & Risk Management Event Overview and Competencies",
                    url: "[https://www.flfbla.org/fbla-event-insurance-risk-management](https://www.flfbla.org/fbla-event-insurance-risk-management)"
                },
                {
                    title: "Objective Test Guidelines for Insurance & Risk Management (PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Insurance-and-Risk-Management.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Insurance-and-Risk-Management.pdf)"
                },
                {
                    title: "FBLA Insurance & Risk Management Practice Test (LOHS FBLA)",
                    url: "[https://lohsfbla.com/comps/Insurance%2B%26%2BRisk%2BManagement/test](https://lohsfbla.com/comps/Insurance%2B%26%2BRisk%2BManagement/test)"
                },
                {
                    title: "Investopedia – What Is Insurance?",
                    url: "[https://www.investopedia.com/terms/i/insurance.asp](https://www.investopedia.com/terms/i/insurance.asp)"
                },
                {
                    title: "Investopedia – Understanding Insurance Coverage Types",
                    url: "[https://www.investopedia.com/terms/i/insurance-coverage.asp](https://www.investopedia.com/terms/i/insurance-coverage.asp)"
                },
                {
                    title: "Investopedia – What Is Risk Management in Finance?",
                    url: "[https://www.investopedia.com/terms/r/riskmanagement.asp](https://www.investopedia.com/terms/r/riskmanagement.asp)"
                },
                {
                    title: "Achievable – Managing Risks in Insurance and Risk Management",
                    url: "[https://app.achievable.me/study/insurance-life-health/learn/general-insurance-concepts-managing-risks](https://app.achievable.me/study/insurance-life-health/learn/general-insurance-concepts-managing-risks)"
                },
                {
                    title: "Quizlet – FBLA Insurance & Risk Management Flash Cards (49 terms)",
                    url: "[https://quizlet.com/59316876/fbla-insurance-risk-management-flash-cards/](https://quizlet.com/59316876/fbla-insurance-risk-management-flash-cards/)"
                },
                {
                    title: "Quizlet – FBLA Insurance and Risk Management Flash Cards (72 terms)",
                    url: "[https://quizlet.com/264705801/fbla-insurance-and-risk-management-flash-cards/](https://quizlet.com/264705801/fbla-insurance-and-risk-management-flash-cards/)"
                },
                {
                    title: "Quizlet – Comprehensive FBLA Insurance & Risk Management Set (446 terms)",
                    url: "[https://quizlet.com/1131856673/fbla-insurance-risk-management-flash-cards/](https://quizlet.com/1131856673/fbla-insurance-risk-management-flash-cards/)"
                },
                {
                    title: "Quizlet – Insurance and Risk Management FBLA Flash Cards (82 terms)",
                    url: "[https://quizlet.com/551920026/insurance-and-risk-management-fbla-flash-cards/](https://quizlet.com/551920026/insurance-and-risk-management-fbla-flash-cards/)"
                },
                {
                    title: "Quizlet – Principles of Risk Management and Insurance Flashcards",
                    url: "[https://quizlet.com/66938338/principles-of-risk-management-and-insurance-exam-1-flash-cards/](https://quizlet.com/66938338/principles-of-risk-management-and-insurance-exam-1-flash-cards/)"
                },
                {
                    title: "Quizlet – Risk Management and Insurance Ch. 1 Flash Cards",
                    url: "[https://quizlet.com/91940324/principles-of-risk-management-and-insurance-chapter-1-flash-cards/](https://quizlet.com/91940324/principles-of-risk-management-and-insurance-chapter-1-flash-cards/)"
                },
                {
                    title: "Studocu – Risk Management & Insurance Study Guide",
                    url: "[https://www.studocu.com/en-us/document/university-of-north-georgia/economics-decision-making/risk-management-insurance-ch-16-exam-study-guide/141644111](https://www.studocu.com/en-us/document/university-of-north-georgia/economics-decision-making/risk-management-insurance-ch-16-exam-study-guide/141644111)"
                },
                {
                    title: "FBLA Resources – Objective Test Insurance & Risk Management Listing",
                    url: "[https://lohsfbla.com/comps/](https://lohsfbla.com/comps/)"
                },
                {
                    title: "FBLA Washington Competitive Events – Insurance & Risk Management Quizlet Sets",
                    url: "[https://wafbla.org/competitive-events/](https://wafbla.org/competitive-events/)"
                },
                {
                    title: "FBLA Insurance & Risk Management Site (Google Sites)",
                    url: "[https://sites.google.com/mhrd.org/fbla-resources/Objective-Test/individual-event/Insurance-and-Risk-Management](https://sites.google.com/mhrd.org/fbla-resources/Objective-Test/individual-event/Insurance-and-Risk-Management)"
                },
                {
                    title: "Stuvia – FBLA Insurance & Risk Management Questions and Answers",
                    url: "[https://www.stuvia.com/doc/7906648/fbla-insurance-en-risk-management-questions-and-answers](https://www.stuvia.com/doc/7906648/fbla-insurance-en-risk-management-questions-and-answers)"
                },
                {
                    title: "Stuvia – FBLA Insurance & Risk Management Practice Solution Manual",
                    url: "[https://www.stuvia.com/en-us/doc/7176610/fbla-insurance-en-risk-management-practice-solution-manual-fully-solved-latest-update-2025-already-passed](https://www.stuvia.com/en-us/doc/7176610/fbla-insurance-en-risk-management-practice-solution-manual-fully-solved-latest-update-2025-already-passed)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length FBLA Insurance & Risk Management Practice Test",
                    prompt: "Generate a 50-question multiple-choice practice test that covers key FBLA Insurance & Risk Management objective test domains including risk management process, types of insurance (property, liability, health, disability, life), risk assessment techniques, insurance terminology (peril, hazard, pure and speculative risk), premium calculation concepts, and ethical decision-making scenarios relevant to FBLA guidelines."
                },
                {
                    title: "Adaptive Coaching for Insurance & Risk Management Weaknesses",
                    prompt: "Design an adaptive coaching session that identifies a student’s weakest FBLA Insurance & Risk Management topics (e.g., risk identification, underwriting, health vs. life insurance differences, ethics in insurance) and creates targeted mini-quizzes, flashcard prompts, and brief explanations to strengthen understanding and retention in those specific areas."
                }
            ]
        },

    },
    {
        id: "international-business-role-play",
        resources: {
            title: "international-business-role-play Resources",
            links: [
                {
                    title: "FBLA International Business Competitive Event Guidelines (Official)",
                    url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/International-Business.pdf"
                },
                {
                    title: "FBLA International Business Event Details – FBLA.org",
                    url: "https://www.fbla.org/competitive-events/international-business/"
                },
                {
                    title: "International Business – Canada FBLA Resources",
                    url: "https://fblc.ca/international-business"
                },
                {
                    title: "International Business – Wikipedia (Core Concepts)",
                    url: "https://en.wikipedia.org/wiki/International_business"
                },
                {
                    title: "Quizlet: FBLA International Business Vocab Flashcards",
                    url: "https://quizlet.com/558272074/fbla-international-business-vocab-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA International/Global Business Flashcards",
                    url: "https://quizlet.com/547541543/fbla-internationalglobal-business-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA International Business Flashcards (Mihir_Bamdhamravuri)",
                    url: "https://quizlet.com/852078438/fbla-international-business-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA International Business Flashcards (General)",
                    url: "https://quizlet.com/856017010/fbla-international-business-flash-cards/"
                },
                {
                    title: "Quizlet: International Business FBLA Flashcards",
                    url: "https://quizlet.com/761880078/international-business-fbla-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA International Business Terms Flashcards",
                    url: "https://quizlet.com/872707525/fbla-international-business-terms-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA International Business Concepts Flashcards",
                    url: "https://quizlet.com/747767722/fbla-international-business-concepts-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA International Business (1/3) Review Questions",
                    url: "https://quizlet.com/609118403/fbla-international-business-13-review-questions-flash-cards/"
                },
                {
                    title: "FBLA High School Competitive Events - International Business Listing",
                    url: "https://www.fbla.org/high-school/competitive-events/"
                },
                {
                    title: "Oregon FBLA International Business Practice & Study Guide PDF",
                    url: "https://oregonfbla.org/wp-content/uploads/2025/01/Competitive-Event-Study-Guide-.pdf"
                },
                {
                    title: "Investopedia – What Is International Business?",
                    url: "https://www.investopedia.com/terms/i/internationalbusiness.asp"
                },
                {
                    title: "Khan Academy – International Trade and Globalization",
                    url: "https://www.khanacademy.org/economics-finance-domain/macroeconomics/globalization-topic"
                },
                {
                    title: "Coursera – International Business Essentials Courses",
                    url: "https://www.coursera.org/browse/business/international-business"
                },
                {
                    title: "Export.gov – U.S. Government Trade Resources",
                    url: "https://www.trade.gov/"
                },
                {
                    title: "World Trade Organization – Basics of International Trade",
                    url: "https://www.wto.org/english/thewto_e/whatis_e/whatis_e.htm"
                },
                {
                    title: "United Nations Conference on Trade and Development (UNCTAD)",
                    url: "https://unctad.org/"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length International Business Role Play Practice Test (40 Questions)",
                    prompt: "Create a 40-question multiple-choice practice test specifically for FBLA International Business Role Play prep covering international trade, cultural awareness, global marketing, economic systems, treaties & trade agreements, currency exchange, legal/regulatory issues, HR management, and ethics with answer key and explanations."
                },
                {
                    title: "Adaptive International Business Coaching Prompt",
                    prompt: "Act as a study coach. Ask me detailed questions to diagnose my weakest topics in international business (e.g., currency exchange, legal differences, global marketing), then generate targeted mini-quizzes and explanations to strengthen those areas based on my responses."
                }
            ],
        }
    },
    {
        id: "job-interview-presentation",
        resources: {
            title: "job‑interview‑presentation Resources",
            links: [
                {
                    title: "FBLA Job Interview Competitive Event Guidelines (2025‑26)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Job-Interview.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Job-Interview.pdf)"
                },
                {
                    title: "FBLA Job Interview Event Overview (Florida FBLA)",
                    url: "[https://www.flfbla.org/fbla-event-job-interview](https://www.flfbla.org/fbla-event-job-interview)"
                },
                {
                    title: "U.S. Department of Labor Interview Tips",
                    url: "[https://www.dol.gov/general/jobs/interview-tips](https://www.dol.gov/general/jobs/interview-tips)"
                },
                {
                    title: "Indeed: How to Make a Great Impression in a Job Interview",
                    url: "[https://www.indeed.com/career-advice/interviewing/job-interview-tips-how-to-make-a-great-impression](https://www.indeed.com/career-advice/interviewing/job-interview-tips-how-to-make-a-great-impression)"
                },
                {
                    title: "Sample Interview Questions (PDF) – University of Arizona",
                    url: "[https://service.sbs.arizona.edu/sites/default/files/2024-04/Sample%20Interview%20Questions.pdf](https://service.sbs.arizona.edu/sites/default/files/2024-04/Sample%20Interview%20Questions.pdf)"
                },
                {
                    title: "Interviewing Skills Module (PDF)",
                    url: "[https://ioer.ilsharedlearning.org/ContentDocs/Personal/223/91abe00f-0dd0-49b5-90ba-d4185677d347/Unit_8_-_Interviewing_Skills.pdf](https://ioer.ilsharedlearning.org/ContentDocs/Personal/223/91abe00f-0dd0-49b5-90ba-d4185677d347/Unit_8_-_Interviewing_Skills.pdf)"
                },
                {
                    title: "STAR Interview Technique (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Situation%2C_task%2C_action%2C_result](https://en.wikipedia.org/wiki/Situation%2C_task%2C_action%2C_result)"
                },
                {
                    title: "Free Interview Templates – Template.net",
                    url: "[https://www.template.net/interview/](https://www.template.net/interview/)"
                },
                {
                    title: "Job Interview Questions and Answers (Career Guide PDF)",
                    url: "[https://mumanfoundation.org/documents/careeroptions/co_doc_85bab.pdf](https://mumanfoundation.org/documents/careeroptions/co_doc_85bab.pdf)"
                },
                {
                    title: "Interview Success Strategies – UNT Career Center",
                    url: "[https://careercenter.unt.edu/resources/interview-success-strategies/](https://careercenter.unt.edu/resources/interview-success-strategies/)"
                },
                {
                    title: "Preparing for an Interview – University of Idaho Career Services",
                    url: "[https://www.uidaho.edu/career-services/career-skills-resources/interview-prep](https://www.uidaho.edu/career-services/career-skills-resources/interview-prep)"
                },
                {
                    title: "Preparing for an Interview – CU Boulder Career Advising",
                    url: "[https://ce.colorado.edu/advising-services/career-advising/interview-preparation](https://ce.colorado.edu/advising-services/career-advising/interview-preparation)"
                },
                {
                    title: "Mock Interview (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Mock_interview](https://en.wikipedia.org/wiki/Mock_interview)"
                },
                {
                    title: "FBLA Job Interview Flashcards (Quizlet Set 1)",
                    url: "[https://quizlet.com/1115853641](https://quizlet.com/1115853641)"
                },
                {
                    title: "Job Interview FBLA Flashcards (Quizlet Set 2)",
                    url: "[https://quizlet.com/648751882](https://quizlet.com/648751882)"
                },
                {
                    title: "FBLA Competitive Events Flashcards (Interview Focus)",
                    url: "[https://quizlet.com/104268025](https://quizlet.com/104268025)"
                },
                {
                    title: "FBLA Job Interview Flashcards (Alternate Set)",
                    url: "[https://quizlet.com/131579486](https://quizlet.com/131579486)"
                },
                {
                    title: "FBLA Competitive Events Flashcards (General Interview)",
                    url: "[https://quizlet.com/480834737](https://quizlet.com/480834737)"
                },
                {
                    title: "FBLA Competitive Events Flashcards (Interview Event Info)",
                    url: "[https://quizlet.com/991125032](https://quizlet.com/991125032)"
                },
                {
                    title: "FBLA Competitive Events Flashcards (Additional)",
                    url: "[https://quizlet.com/413186417](https://quizlet.com/413186417)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full‑Length Interview Practice Test",
                    prompt: "Create a 30‑question multiple‑choice practice test focused on FBLA Job Interview presentation topics, including professional behavior, STAR method responses, interpreting job descriptions, preparing a resume/cover letter, effective communication strategies during the interview, appropriate attire and etiquette, evaluating example interview scenarios, and common interview pitfalls. Provide an answer key with explanations for each question."
                },
                {
                    title: "Adaptive Interview Coaching Prompt",
                    prompt: "Act as a personalized FBLA Job Interview coach. Ask the user for their weakest areas (e.g., answering behavioral questions, body language, confidence, clarity of answers). Then provide targeted practice exercises and mock interview questions that adapt based on their responses, with feedback after each practice answer to help them improve specific weaknesses and prepare for the live interview presentation."
                }
            ],
        }

    },
    {
        id: "journalism-objective-test",
        resources: {
            title: "journalism-objective-test Resources",
            links: [
                {
                    title: "FBLA Competitive Event Guidelines: Journalism (official PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Journalism.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Journalism.pdf)"
                },
                {
                    title: "FBLA Event Overview: Journalism – Florida FBLA",
                    url: "[https://www.flfbla.org/fbla-event-journalism](https://www.flfbla.org/fbla-event-journalism)"
                },
                {
                    title: "FBLA Journalism Flashcards (Quizlet)",
                    url: "[https://quizlet.com/193184213/fbla-journalism-test-flash-cards/](https://quizlet.com/193184213/fbla-journalism-test-flash-cards/)"
                },
                {
                    title: "FBLA Test‑ Journalism Flashcards (Quizlet)",
                    url: "[https://quizlet.com/782268591/fbla-test-journalism-flash-cards/](https://quizlet.com/782268591/fbla-test-journalism-flash-cards/)"
                },
                {
                    title: "FBLA Journalism Practice Test – Quiz‑Maker",
                    url: "[https://take.quiz-maker.com/cp-hs-fbla-journalism-challenge](https://take.quiz-maker.com/cp-hs-fbla-journalism-challenge)"
                },
                {
                    title: "FBLA Journalism Practice (LOHS FBLA site)",
                    url: "[https://lohsfbla.com/comps/Journalism](https://lohsfbla.com/comps/Journalism)"
                },
                {
                    title: "FBLA – Journalism Practice Test (Bizybear)",
                    url: "[https://bizybear.app/comps/Journalism/test](https://bizybear.app/comps/Journalism/test)"
                },
                {
                    title: "Journalism Terminology Quiz (Quizizz)",
                    url: "[https://wayground.com/admin/quiz/670fdd880ed8bc032e6538cf/journalism-terminology-quiz](https://wayground.com/admin/quiz/670fdd880ed8bc032e6538cf/journalism-terminology-quiz)"
                },
                {
                    title: "Associated Press Stylebook (official reference)",
                    url: "[https://www.apstylebook.com/](https://www.apstylebook.com/)"
                },
                {
                    title: "AP Style Basics – Journalist’s Resource summary",
                    url: "[https://journalistsresource.org/home/ap-style-basics/](https://journalistsresource.org/home/ap-style-basics/)"
                },
                {
                    title: "AP Style ‘Cheat Sheet’ for student journalists",
                    url: "[https://wjea.org/wp-content/uploads/2014/02/WJEA-AP-Style-Cheat-Sheet.pdf](https://wjea.org/wp-content/uploads/2014/02/WJEA-AP-Style-Cheat-Sheet.pdf)"
                },
                {
                    title: "NYU Journalism Handbook for Students",
                    url: "[https://journalism.nyu.edu/about-us/resources/ethics-handbook-for-students/nyu-journalism-handbook-for-students/](https://journalism.nyu.edu/about-us/resources/ethics-handbook-for-students/nyu-journalism-handbook-for-students/)"
                },
                {
                    title: "Inverted Pyramid (journalism) – Encyclopedia entry",
                    url: "[https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)](https://en.wikipedia.org/wiki/Inverted_pyramid_%28journalism%29)"
                },
                {
                    title: "Five Ws (journalism basics) – Encyclopedia entry",
                    url: "[https://en.wikipedia.org/wiki/Five_Ws](https://en.wikipedia.org/wiki/Five_Ws)"
                },
                {
                    title: "Media Ethics – Purdue OWL",
                    url: "[https://owl.purdue.edu/owl/subject_specific_writing/journalism_and_journalistic_writing/media_ethics.html](https://owl.purdue.edu/owl/subject_specific_writing/journalism_and_journalistic_writing/media_ethics.html)"
                },
                {
                    title: "The Role of Ethics in News Journalism",
                    url: "[https://www.wgu.edu/blog/the-role-of-ethics-in-news-journalism2407.html](https://www.wgu.edu/blog/the-role-of-ethics-in-news-journalism2407.html)"
                },
                {
                    title: "Journalism Ethics and Responsibility Lesson Plan (UT Austin PDF)",
                    url: "[https://journalism.utexas.edu/sites/default/files/sites/journalism.utexas.edu/files/attachments/asne/Lesson_Plans_2012.pdf](https://journalism.utexas.edu/sites/default/files/sites/journalism.utexas.edu/files/attachments/asne/Lesson_Plans_2012.pdf)"
                },
                {
                    title: "Open Textbook – Journalism & Media Studies",
                    url: "[https://open.umn.edu/opentextbooks/subjects/journalism-media-studies-communications](https://open.umn.edu/opentextbooks/subjects/journalism-media-studies-communications)"
                },
                {
                    title: "Introduction to Journalism & Newswriting PDF",
                    url: "[https://cwi.pressbooks.pub/introductiontojournalismandnewswriting/open/download?type=pdf](https://cwi.pressbooks.pub/introductiontojournalismandnewswriting/open/download?type=pdf)"
                },
                {
                    title: "Objective Test Resources – Cumberland Valley FBLA list",
                    url: "[https://cvfbla.org/objective_tests](https://cvfbla.org/objective_tests)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full‑Length Journalism Objective Practice Test",
                    prompt: "Generate a 30‑question multiple‑choice practice test specific to FBLA Journalism Objective Test topics, including the economics and business of journalism, grammar and format, law and ethics, basic journalism principles (such as the Five Ws and inverted pyramid), and history of journalism. Include four answer choices per question and provide the correct answer with a brief explanation for each."
                },
                {
                    title: "Adaptive Journalism Study Coach Prompt",
                    prompt: "Act as an adaptive study coach for FBLA Journalism Objective Test prep. Ask me questions on areas I struggle with (e.g., AP style rules, ethical principles, newsworthiness criteria), evaluate my responses, and tailor follow‑up questions and explanations to strengthen my weaknesses. Focus on applying journalism principles and ethics to realistic scenarios and news‑writing examples."
                }
            ]
        },

    },
    {
        id: "management-information-systems-role-play",
        resources: {
            title: "management-information-systems-role-play Resources",
            links: [
                { title: "FBLA Official Management Information Systems Event Guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Management-Information-Systems.pdf" },
                { title: "FBLA Management Information Systems Event Description (FBLA.org)", url: "https://www.fbla.org/competitive-event/management-information-systems/" },
                { title: "FBLA Management Information Systems Role Play Overview - Florida FBLA", url: "https://www.flfbla.org/fbla-event-management-information-systems" },
                { title: "Prilo FBLA Management Information Systems Study Guide", url: "https://prilo.ai/fbla-resources/management-information-systems" },
                { title: "DSST Management Information Systems Study Guide & Practice", url: "https://study.com/academy/course/dsst-management-information-systems-study-guide-test-prep.html" },
                { title: "Management Information Systems Courses on Coursera", url: "https://www.coursera.org/courses?query=management+information+systems" },
                { title: "Information Systems for Business and Beyond (Open Textbook)", url: "https://open.umn.edu/opentextbooks/textbooks/information-systems-for-business-and-beyond" },
                { title: "Introduction to Management Information Systems on edX", url: "https://www.edx.org/learn/information-systems/universidad-carlos-iii-de-madrid-introduction-to-management-information-systems-mis-a-survival-guide" },
                { title: "What Is a Management Information System? (Coursera Article)", url: "https://www.coursera.org/articles/management-information-system" },
                { title: "Management Information Systems Flashcards (Quizlet)", url: "https://quizlet.com/1099098396" },
                { title: "FBLA Management Information Systems Flashcards (Quizlet Set)", url: "https://quizlet.com/195881182" },
                { title: "FBLA Management Information Systems Flashcards (Quizlet)", url: "https://quizlet.com/458586051" },
                { title: "FBLA Roleplay: Management Decision Making Flashcards (Quizlet)", url: "https://quizlet.com/549760090" },
                { title: "Management Information Systems (MIS) Wikipedia Overview", url: "https://en.wikipedia.org/wiki/Management_information_system" },
                { title: "Association for Information Systems (Professional Org)", url: "https://aisnet.org/" },
                { title: "Journal of Management Information Systems (Academic)", url: "https://jmis-web.org" },
                { title: "MIS Quarterly Executive Journal (Practice-oriented Research)", url: "https://aisel.aisnet.org/misqe/" },
                { title: "Management Information Systems Core Concepts PDF", url: "https://www.scribd.com/document/892461263/Management-Information-System" },
                { title: "FBLA Competitive Events Practice Lists (including MIS Roleplay)", url: "https://lohsfbla.com/comps/" },
                { title: "Management Information Systems Competencies & Tasks (Oregon FBLA)", url: "https://oregonfbla.org/wp-content/uploads/2025/01/Competitive-Event-Study-Guide-.pdf" },
                { title: "Quia FBLA Management Information Systems Quiz", url: "https://www.quia.com/quiz/3633449.html" },
                { title: "MIS 301 Exam & Study Materials (University-level but relevant concepts)", url: "https://www.coursehero.com/sitemap/schools/864-Iowa-State-University/courses/4290634-MIS301/" },
                { title: "MIS Concepts & SDLC Overview (educational resource)", url: "https://louis.oercommons.org/curated-collections/28" },
                { title: "FBLA MIS Terminology Flashcards (Quizlet)", url: "https://quizlet.com/893799712" },
                { title: "FBLA MIS Executive Info System Flashcards (Quizlet)", url: "https://quizlet.com/1099098396" },
                { title: "FBLA MIS Transaction & DSS Flashcards (Quizlet)", url: "https://quizlet.com/1099098396" },
                { title: "Management Information System Basics (The Knowledge Academy)", url: "https://www.theknowledgeacademy.com/blog/what-is-management-information-systems/" },
                { title: "FBLA MIS Test Concepts Overview (FBLA Connect Learn)", url: "https://www.fbla.org/high-school/competitive-events/" },
                { title: "MIS Career Info & Job Roles (Coursera Article)", url: "https://www.coursera.org/articles/management-information-system" },
                { title: "MIS Role in Business Strategy (Coursera Article)", url: "https://www.coursera.org/articles/management-information-system" },
                { title: "MIS Tutorial on YouTube (Fundamentals)", url: "https://www.youtube.com/watch?v=NvzbdohvvvY" },
                { title: "Quizlet MIS Data & Modeling Flashcards", url: "https://quizlet.com/1099098396" },
                { title: "Quizlet MIS SDLC & Database Flashcards", url: "https://quizlet.com/195881182" },
                { title: "FBLA MIS Flashcards (another set)", url: "https://quizlet.com/458586051" },
                { title: "FBLA MIS Terms Practice (Quizlet)", url: "https://quizlet.com/893799712" },
                { title: "FBLA MIS Concept Flashcards Set", url: "https://quizlet.com/1099098396" },
                { title: "FBLA MIS Mixed Flashcards", url: "https://quizlet.com/195881182" },
                { title: "FBLA MIS Vocabulary Practice", url: "https://quizlet.com/458586051" }
            ],
            aiPrompts: [
                {
                    title: "MIS Full-Length Practice Test",
                    prompt: "Create a 40-question multiple-choice practice test covering key FBLA Management Information Systems concepts including Systems Development Life Cycle, database management, SQL basics, object-oriented analysis, user interfaces, system controls, and decision support systems. Provide answer key and brief explanations for each question."
                },
                {
                    title: "Adaptive MIS Role-Play Coaching Prompt",
                    prompt: "You are preparing for an FBLA Management Information Systems role play. Based on your weaknesses (e.g., SDLC phases, database queries, controls, user interface design), generate tailored study tasks and mini mock role-play scenarios with explanations to help improve. Focus on scenarios where you need to analyze a given business information challenge and propose a system solution. Include feedback-style guidance after responses."
                }
            ]
        },
    },
    {
        id: "marketing-role-play",
        resources: {
            title: "marketing-role-play Resources",
            links: [
                {
                    title: "FBLA National Marketing Competitive Event Guidelines",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Marketing.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Marketing.pdf)"
                },
                {
                    title: "FBLA Official Marketing Event Page",
                    url: "[https://www.fbla.org/competitive-event/marketing/](https://www.fbla.org/competitive-event/marketing/)"
                },
                {
                    title: "FBLA Marketing Practice Test (Quiz‑Maker)",
                    url: "[https://www.quiz-maker.com/cp-hs-fbla-marketing-mastery](https://www.quiz-maker.com/cp-hs-fbla-marketing-mastery)"
                },
                {
                    title: "FBLA Introduction to Marketing Concepts Practice Test (BizyBear)",
                    url: "[https://bizybear.app/comps/Introduction%2Bto%2BMarketing%2BConcepts/test](https://bizybear.app/comps/Introduction%2Bto%2BMarketing%2BConcepts/test)"
                },
                {
                    title: "Coursera Marketing Fundamentals Courses",
                    url: "[https://www.coursera.org/courses?query=marketing+fundamentals](https://www.coursera.org/courses?query=marketing+fundamentals)"
                },
                {
                    title: "Salesforce Marketing Strategy Guide",
                    url: "[https://www.salesforce.com/marketing/strategy/](https://www.salesforce.com/marketing/strategy/)"
                },
                {
                    title: "LinkedIn Learning Marketing Courses",
                    url: "[https://www.linkedin.com/learning/topics/marketing](https://www.linkedin.com/learning/topics/marketing)"
                },
                {
                    title: "AMA Marketing Essentials Training",
                    url: "[https://www.amanet.org/fundamentals-of-marketing-your-action-plan-for-success/](https://www.amanet.org/fundamentals-of-marketing-your-action-plan-for-success/)"
                },
                {
                    title: "uCertify Marketing 101 Course Overview",
                    url: "[https://www.ucertify.com/p/principle-of-marketing.html](https://www.ucertify.com/p/principle-of-marketing.html)"
                },
                {
                    title: "Marketing Role Play Sample – Studocu",
                    url: "[https://www.studocu.com/en-us/document/adlai-e-stevenson-high-school/business/marketing-role-play-sample-for-competition-maximized-space-solutions/132212389](https://www.studocu.com/en-us/document/adlai-e-stevenson-high-school/business/marketing-role-play-sample-for-competition-maximized-space-solutions/132212389)"
                },
                {
                    title: "World of Marketing Standard 1 Flashcards (Quizlet)",
                    url: "[https://quizlet.com/524208704/world-of-marketing-standard-1-flash-cards/](https://quizlet.com/524208704/world-of-marketing-standard-1-flash-cards/)"
                },
                {
                    title: "Marketing Role Play Flashcards (Quizlet)",
                    url: "[https://quizlet.com/859924235/marketing-role-play-flash-cards/](https://quizlet.com/859924235/marketing-role-play-flash-cards/)"
                },
                {
                    title: "Marketing Strategies – Role Play Flashcards (Quizlet)",
                    url: "[https://quizlet.com/477421167/marketing-strategies-role-play-know-flash-cards/](https://quizlet.com/477421167/marketing-strategies-role-play-know-flash-cards/)"
                },
                {
                    title: "FBLA Marketing Study Guide Flashcards (Quizlet)",
                    url: "[https://quizlet.com/178389930/fbla-marketing-study-guide-flash-cards/](https://quizlet.com/178389930/fbla-marketing-study-guide-flash-cards/)"
                },
                {
                    title: "FBLA Marketing Flashcards (Quizlet 94 terms)",
                    url: "[https://quizlet.com/79010858/fbla-marketing-flash-cards/](https://quizlet.com/79010858/fbla-marketing-flash-cards/)"
                },
                {
                    title: "FBLA Marketing Flashcards (Quizlet 170 terms)",
                    url: "[https://quizlet.com/485875081/fbla-marketing-flash-cards/](https://quizlet.com/485875081/fbla-marketing-flash-cards/)"
                },
                {
                    title: "FBLA Marketing Test Vocabulary Flashcards",
                    url: "[https://www.goconqr.com/flashcard/38381716/fbla-marketing-test-vocabulary](https://www.goconqr.com/flashcard/38381716/fbla-marketing-test-vocabulary)"
                },
                {
                    title: "Marketing Fundamentals Course List – Coursera",
                    url: "[https://www.coursera.org/courses?query=marketing+fundamentals](https://www.coursera.org/courses?query=marketing+fundamentals)"
                },
                {
                    title: "Udemy Free Marketing Strategy Tutorials",
                    url: "[https://www.udemy.com/topic/marketing-strategy/free/?srsltid=AfmBOoqs38NfXia6RSNuNzeRe8RC4UF3DchYC8WXfIiINMaRsyI3WubF](https://www.udemy.com/topic/marketing-strategy/free/?srsltid=AfmBOoqs38NfXia6RSNuNzeRe8RC4UF3DchYC8WXfIiINMaRsyI3WubF)"
                },
                {
                    title: "Quizlet – DECA Marketing Roleplay Flashcards",
                    url: "[https://quizlet.com/524717853/deca-marketing-roleplay-flash-cards/](https://quizlet.com/524717853/deca-marketing-roleplay-flash-cards/)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full Marketing‑Role‑Play Practice Test",
                    prompt: "Create a 30‑question multiple‑choice practice test focused on FBLA marketing role play event content, covering marketing fundamentals like market research, the 4 Ps (product, price, place, promotion), SWOT analysis, customer engagement strategies, pricing decisions, promotional tactics, channel management, and selling techniques. Include answer choices and an answer key at the end. Ensure questions mimic FBLA style and are scoped for both objective test and role play prep."
                },
                {
                    title: "Adaptive Coaching Prompt for Marketing Role Play Weaknesses",
                    prompt: "Assess my understanding of specific marketing role play topics by identifying areas I missed in a mock practice test I took. For each weak topic (like marketing research, target market selection, pricing strategies, or promotion methods), generate tailored study questions and examples, explanations of key concepts, and suggested mini practice role play scenarios to help reinforce those areas. Provide feedback on how to improve responses for future role plays."
                }
            ]
        },

    },
    {
        id: "mobile-application-development-presentation",
        resources: {
            title: "mobile-application-development-presentation Resources",
            links: [
                {
                    title: "FBLA Mobile Application Development Event Guidelines",
                    url: "https://www.fbla.org/competitive-events/mobile-application-development/"
                },
                {
                    title: "Florida FBLA - Mobile Application Development Presentation Details",
                    url: "https://www.flfbla.org/fbla-event-mobile-application-development"
                },
                {
                    title: "Introduction to Mobile Application Development (Coursera Course)",
                    url: "https://www.coursera.org/learn/introduction-to-mobile-app-development"
                },
                {
                    title: "Android Developer Training - Get Started With Android",
                    url: "https://developer.android.com/get-started/overview"
                },
                {
                    title: "Android Developers Courses and Curriculum",
                    url: "https://developer.android.com/courses"
                },
                {
                    title: "Apple Developer App Dev Tutorials",
                    url: "https://developer.apple.com/tutorials/app-dev-training"
                },
                {
                    title: "Codecademy Mobile Development Tutorials",
                    url: "https://www.codecademy.com/catalog/subject/mobile-development"
                },
                {
                    title: "GeeksforGeeks Android App Development Fundamentals",
                    url: "https://www.geeksforgeeks.org/blogs/android-app-development-fundamentals-for-beginners/"
                },
                {
                    title: "SlideShare: Overview of Mobile Application Development",
                    url: "https://www.slideshare.net/slideshow/mobile-application-development-66646109/66646109"
                },
                {
                    title: "SlideShare: Mobile Application Development Intro & Platforms",
                    url: "https://www.slideshare.net/slideshow/introduction-to-mobiledevelopment/12640907"
                },
                {
                    title: "Mobile App Development PPT on Slideserve",
                    url: "https://www.slideserve.com/jstanford/introduction-to-mobile-apps-powerpoint-ppt-presentation"
                },
                {
                    title: "Android Application Development PPT (SlidesFinder)",
                    url: "https://www.slidesfinder.com/presentation/android-application-development-ppt-slides/904.aspx"
                },
                {
                    title: "Mobile Application Development Overview PPT (SlideShare)",
                    url: "https://www.slideshare.net/slideshow/mobile-application-development-32797156/32797156"
                },
                {
                    title: "Study Guide: Mobile Development Fundamentals (CliffsNotes)",
                    url: "https://www.cliffsnotes.com/study-notes/20026651"
                },
                {
                    title: "FBLA Mobile Application Development Flashcards",
                    url: "https://lohsfbla.com/comps/Mobile%2BApplication%2BDevelopment/flashcards"
                },
                {
                    title: "FBLA Mobile Application Development Practice Test",
                    url: "https://lohsfbla.com/comps/Mobile%2BApplication%2BDevelopment/test"
                },
                {
                    title: "Quizlet: Introduction to Mobile Application Development Flashcards",
                    url: "https://quizlet.com/821936228/introduction-to-mobile-application-and-mobile-application-development-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Competitive Events Flashcards Including Mobile App Dev",
                    url: "https://quizlet.com/480834737/fbla-competitive-events-flash-cards/"
                },
                {
                    title: "Quizlet: FBLA Competitive Events Overview Study Guide",
                    url: "https://quizlet.com/study-guides/fbla-competitive-events-overview-b979a286-d2b2-4ce6-9cc1-491da1a663b1"
                },
                {
                    title: "Quizlet: Georgia FBLA Statesmen Award Study Guide (Mobile App Dev Mention)",
                    url: "https://quizlet.com/111053947/georgia-fbla-statesmen-award-study-guide-flash-cards/"
                }
            ],
            aiPrompts: [
                {
                    title: "Full-Length Practice Test Prompt",
                    prompt: "Create a 30-question multiple-choice practice test focused on mobile application development presentation concepts for FBLA, including questions on mobile platforms (Android, iOS), development frameworks, UI/UX design principles, deployment processes, cross-platform tools, testing strategies, and judges’ presentation expectations. For each question, provide four answer options and indicate the correct answer with a brief explanation tied to real-world mobile app development practices."
                },
                {
                    title: "Adaptive Coaching Prompt",
                    prompt: "Design an adaptive coaching session for a student preparing for the FBLA mobile application development presentation. The coaching should ask the student to input their weakest topic (e.g., UI design, development lifecycle, platform differences), then generate a tailored study plan with targeted questions, real examples, and suggested resources to improve their understanding and readiness for the presentation."
                }
            ]
        },
    },
    {
        id: "network-design-role-play",
        resources: {
            title: "network-design-role-play Resources",
            links: [
                {
                    title: "FBLA National Network Design Event Overview",
                    url: "[https://www.fbla.org/competitive-events/network-design/](https://www.fbla.org/competitive-events/network-design/)"
                },
                {
                    title: "2025‑2026 FBLA Network Design Competitive Event Guidelines (PDF)",
                    url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Network-Design.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Network-Design.pdf)"
                },
                {
                    title: "FBLA Network Design Flashcards (Quizlet)",
                    url: "[https://quizlet.com/127551553/fbla-network-design-flash-cards/](https://quizlet.com/127551553/fbla-network-design-flash-cards/)"
                },
                {
                    title: "FBLA Network Design Flashcards Set 2 (Quizlet)",
                    url: "[https://quizlet.com/1086912410/network-design-fbla-flash-cards/](https://quizlet.com/1086912410/network-design-fbla-flash-cards/)"
                },
                {
                    title: "FBLA Network Design Flashcards Set 3 (Quizlet)",
                    url: "[https://quizlet.com/643816718/fbla-network-design-flash-cards/](https://quizlet.com/643816718/fbla-network-design-flash-cards/)"
                },
                {
                    title: "FBLA Network Design Flashcards Set 4 (Quizlet)",
                    url: "[https://quizlet.com/411773037/fbla-network-design-flash-cards/](https://quizlet.com/411773037/fbla-network-design-flash-cards/)"
                },
                {
                    title: "FBLA Network Design Case Study Flashcards (Quizlet)",
                    url: "[https://quizlet.com/573847258/fbla-network-design-case-study-flash-cards/](https://quizlet.com/573847258/fbla-network-design-case-study-flash-cards/)"
                },
                {
                    title: "Networking Fundamentals Study Guide – Webopedia",
                    url: "[https://www.webopedia.com/reference/network-fundamentals-study-guide/](https://www.webopedia.com/reference/network-fundamentals-study-guide/)"
                },
                {
                    title: "Cisco Networking Fundamentals PDF (OSI, Devices, WAN/LAN)",
                    url: "[https://www.cisco.com/c/dam/global/fi_fi/assets/docs/SMB_University_120307_Networking_Fundamentals.pdf](https://www.cisco.com/c/dam/global/fi_fi/assets/docs/SMB_University_120307_Networking_Fundamentals.pdf)"
                },
                {
                    title: "Cisco Networking Basics Overview",
                    url: "[https://www.cisco.com/site/us/en/learn/topics/small-business/networking-basics.html](https://www.cisco.com/site/us/en/learn/topics/small-business/networking-basics.html)"
                },
                {
                    title: "Computer Network Tutorials – GeeksforGeeks",
                    url: "[https://www.geeksforgeeks.org/computer-networks/computer-network-tutorials/](https://www.geeksforgeeks.org/computer-networks/computer-network-tutorials/)"
                },
                {
                    title: "Introduction to Networking and OSI Model Overview (Quizlet)",
                    url: "[https://quizlet.com/study-guides/introduction-to-networking-and-osi-model-overview-9fce36b3-e958-462e-bcb0-997b7301d9c3](https://quizlet.com/study-guides/introduction-to-networking-and-osi-model-overview-9fce36b3-e958-462e-bcb0-997b7301d9c3)"
                },
                {
                    title: "Cisco Networking Academy – Free Networking Courses",
                    url: "[https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html](https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html)"
                },
                {
                    title: "Computer Network Diagram – Explanation (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Computer_network_diagram](https://en.wikipedia.org/wiki/Computer_network_diagram)"
                },
                {
                    title: "Cisco Packet Tracer – Network Simulation Tool (Wikipedia)",
                    url: "[https://en.wikipedia.org/wiki/Packet_Tracers](https://en.wikipedia.org/wiki/Packet_Tracers)"
                },
                {
                    title: "Network Design Fundamentals Explained | Vaia",
                    url: "[https://www.vaia.com/en-us/explanations/business-studies/business-data-analytics/network-design/](https://www.vaia.com/en-us/explanations/business-studies/business-data-analytics/network-design/)"
                },
                {
                    title: "FBLA Network Design Practice Test (LOHSFBLA)",
                    url: "[https://lohsfbla.com/comps/Network%2BDesign/test](https://lohsfbla.com/comps/Network%2BDesign/test)"
                },
                {
                    title: "FBLA Event – Network Design (Florida FBLA Info)",
                    url: "[https://www.flfbla.org/fbla-event-network-design](https://www.flfbla.org/fbla-event-network-design)"
                },
                {
                    title: "Network Design Study Guide – New York State FBLA PDF",
                    url: "[https://www.nysfbla.org/wp-content/uploads/2025/07/Study-Materials.pdf](https://www.nysfbla.org/wp-content/uploads/2025/07/Study-Materials.pdf)"
                },
                {
                    title: "FBLA Resources – Network Design Description (Google Sites)",
                    url: "[https://sites.google.com/mhrd.org/fbla-resources/Role-Play-Events/Individual-or-Team/Network-Design](https://sites.google.com/mhrd.org/fbla-resources/Role-Play-Events/Individual-or-Team/Network-Design)"
                }
            ],
            aiPrompts: [
                {
                    title: "Full‑Length Network Design Practice Test (FBLA‑Style)",
                    prompt: "Generate a 40‑question multiple‑choice practice test covering FBLA Network Design role play and objective test topics including OSI/TCP‑IP models, network topologies, protocols, hardware functions, subnetting basics, security concepts, disaster recovery, network planning and troubleshooting. Provide answer choices A–D and include an answer key at the end."
                },
                {
                    title: "Adaptive Network Design Study Coach Prompt",
                    prompt: "Create an adaptive coaching session for an FBLA Network Design competitor that identifies a student’s weak areas (e.g., subnetting, network security, topology selection, or protocol functions) and generates targeted explanations and practice questions in each weak topic area until the student shows mastery with explanations and mini‑quizzes."
                }
            ]
        },

    },
    {
        id: "networking-infrastructures-objective-test",
        resources: {
title: "networking-infrastructures-objective-test Resources",
links: [
{
title: "Official FBLA Networking Infrastructures Event Details",
url: "[https://www.fbla.org/competitive-events/networking-infrastructures/](https://www.fbla.org/competitive-events/networking-infrastructures/)"
},
{
title: "FBLA Networking Infrastructures Competitive Event Guidelines (2025–26)",
url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Networking-Infrastructures.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Networking-Infrastructures.pdf)"
},
{
title: "FBLA Networking Infrastructures Overview and Competencies",
url: "[https://sites.google.com/mhrd.org/fbla-resources/Objective-Test/individual-event/Networking-Infrastructures](https://sites.google.com/mhrd.org/fbla-resources/Objective-Test/individual-event/Networking-Infrastructures)"
},
{
title: "Flashcards: FBLA Networking Infrastructures (Quizlet)",
url: "[https://quizlet.com/657068366/flashcards](https://quizlet.com/657068366/flashcards)"
},
{
title: "FBLA Networking Infrastructures Competencies Flashcards (Quizlet)",
url: "[https://quizlet.com/584560583/fbla-networking-infrastructures-competencies-flash-cards](https://quizlet.com/584560583/fbla-networking-infrastructures-competencies-flash-cards)"
},
{
title: "FBLA Networking Infrastructures D, E, F Flashcards (Quizlet)",
url: "[https://quizlet.com/765450153/fbla-networking-infrastructures-def-flash-cards](https://quizlet.com/765450153/fbla-networking-infrastructures-def-flash-cards)"
},
{
title: "FBLA Networking Infrastructure Flashcards (Quizlet)",
url: "[https://quizlet.com/675199010/fbla-networking-infrastructure-flash-cards](https://quizlet.com/675199010/fbla-networking-infrastructure-flash-cards)"
},
{
title: "Computer Network Tutorial (GeeksforGeeks)",
url: "[https://www.geeksforgeeks.org/computer-networks/computer-network-tutorials/](https://www.geeksforgeeks.org/computer-networks/computer-network-tutorials/)"
},
{
title: "Networking Basics: What You Need To Know (Cisco)",
url: "[https://www.cisco.com/site/us/en/learn/topics/small-business/networking-basics.html](https://www.cisco.com/site/us/en/learn/topics/small-business/networking-basics.html)"
},
{
title: "Fundamentals of Computer Networking (Microsoft Learn)",
url: "[https://learn.microsoft.com/en-us/training/modules/network-fundamentals/](https://learn.microsoft.com/en-us/training/modules/network-fundamentals/)"
},
{
title: "Basics of Computer Networking (GeeksforGeeks)",
url: "[https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/](https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/)"
},
{
title: "Networking Fundamentals Explained (Medium Guide)",
url: "[https://medium.com/@mohamedirhirallah/networking-fundamentals-everything-you-need-to-know-from-interfaces-to-osi-layers-7e43d48401fc](https://medium.com/@mohamedirhirallah/networking-fundamentals-everything-you-need-to-know-from-interfaces-to-osi-layers-7e43d48401fc)"
},
{
title: "FREE Network Fundamentals Online Training (Cybrary)",
url: "[https://www.cybrary.it/course/network-fundamentals](https://www.cybrary.it/course/network-fundamentals)"
},
{
title: "Network Fundamentals Workbook (howtonetwork.com)",
url: "[https://www.howtonetwork.com/network-design-workbook/networking-fundamentals/](https://www.howtonetwork.com/network-design-workbook/networking-fundamentals/)"
},
{
title: "Packet Tracer Network Simulation (Wikipedia)",
url: "[https://en.wikipedia.org/wiki/Packet_Tracer](https://en.wikipedia.org/wiki/Packet_Tracer)"
},
{
title: "VLAN Overview (Wikipedia)",
url: "[https://en.wikipedia.org/wiki/VLAN](https://en.wikipedia.org/wiki/VLAN)"
},
{
title: "Spanning Tree Protocol Explained (Wikipedia)",
url: "[https://en.wikipedia.org/wiki/Spanning_Tree_Protocol](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol)"
},
{
title: "FBLA Networking Infrastructures Quizlet Search Results",
url: "[https://quizlet.com/search?q=fbla+networking+infrastructures](https://quizlet.com/search?q=fbla+networking+infrastructures)"
},
{
title: "Quizlet Sets for Networking Infrastructure FBLA Topics",
url: "[https://quizlet.com/search?q=fbla+networking+infrastructure+objective+test](https://quizlet.com/search?q=fbla+networking+infrastructure+objective+test)"
},
{
title: "Quizlet Study Sets for Networking Infrastructure Key Terms",
url: "[https://quizlet.com/search?q=fbla+network+infrastructure+terms](https://quizlet.com/search?q=fbla+network+infrastructure+terms)"
}
],
aiPrompts: [
{
title: "Full-Length Practice Test: Networking Infrastructures Objective",
prompt: "Create a 50-question multiple-choice practice test covering all major topics in the FBLA Networking Infrastructures Objective Test, including network basics (OSI model, protocols, IP addressing), network hardware and connectivity (routers, switches, cabling types), network topologies and architectures (LAN, WAN, star, mesh), network security (threats, firewalls, encryption, authentication), and common protocols (TCP/IP, DHCP, DNS). Provide answer choices and a separate answer key."
},
{
title: "Adaptive Study Coach: Networking Infrastructures Weakness Finder",
prompt: "Based on a student's incorrect answers from a sample Networking Infrastructures practice test, generate an adaptive study plan that identifies weak areas (e.g., OSI layer functions, network security measures, network device roles) and provides tailored explanations, targeted practice questions, and mini quizzes to reinforce concepts."
}
]
},

    },
    {
        id: "organizational-leadership-objective-test",
        resources: {
title: "organizational-leadership-objective-test Resources",
links: [
{
title: "FBLA Organizational Leadership Competitive Event Guidelines",
url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Organizational-Leadership.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Organizational-Leadership.pdf)"
},
{
title: "FBLA Official Organizational Leadership Event Description",
url: "[https://www.fbla.org/competitive-events/organizational-leadership/](https://www.fbla.org/competitive-events/organizational-leadership/)"
},
{
title: "FBLA 2025 Organizational Leadership Flashcards (123 terms) | Quizlet",
url: "[https://quizlet.com/1028650861](https://quizlet.com/1028650861)"
},
{
title: "FBLA Organizational Leadership Flashcards (200 cards) | Quizlet",
url: "[https://quizlet.com/186894545/fbla-organizational-leadership-flash-cards//](https://quizlet.com/186894545/fbla-organizational-leadership-flash-cards//)"
},
{
title: "FBLA Organizational Leadership Flashcards (67 terms) | Quizlet",
url: "[https://quizlet.com/357585980/fbla-organizational-leadership-flash-cards//](https://quizlet.com/357585980/fbla-organizational-leadership-flash-cards//)"
},
{
title: "FBLA Organizational Leadership Flashcards (83 terms) | Quizlet",
url: "[https://quizlet.com/560052322/fbla-organizational-leadership-flash-cards//](https://quizlet.com/560052322/fbla-organizational-leadership-flash-cards//)"
},
{
title: "Organizational Leadership FBLA Flashcards | Brainscape",
url: "[https://www.brainscape.com/flashcards/organizational-leadership-fbla-17552934/packs/22504138](https://www.brainscape.com/flashcards/organizational-leadership-fbla-17552934/packs/22504138)"
},
{
title: "FBLA Organizational Leadership Practice Page",
url: "[https://lohsfbla.com/comps/Organizational%2BLeadership](https://lohsfbla.com/comps/Organizational%2BLeadership)"
},
{
title: "Leadership Theories and Frameworks Explained (Leadership Basics)",
url: "[https://thecompletemedic.com/leadership/leadership-theories](https://thecompletemedic.com/leadership/leadership-theories)"
},
{
title: "The 6 Most Common Leadership Styles & How to Find Yours",
url: "[https://www.imd.org/blog/leadership/leadership-styles/](https://www.imd.org/blog/leadership/leadership-styles/)"
},
{
title: "Leader–Member Exchange Theory (LMX)",
url: "[https://en.wikipedia.org/wiki/Leader%E2%80%93member_exchange_theory](https://en.wikipedia.org/wiki/Leader%E2%80%93member_exchange_theory)"
},
{
title: "Full Range Leadership Model Overview",
url: "[https://en.wikipedia.org/wiki/Full_range_leadership_model](https://en.wikipedia.org/wiki/Full_range_leadership_model)"
},
{
title: "Functional Leadership Model Explained",
url: "[https://en.wikipedia.org/wiki/Functional_leadership_model](https://en.wikipedia.org/wiki/Functional_leadership_model)"
},
{
title: "Multifactor Leadership Questionnaire (MLQ) Assessment Info",
url: "[https://en.wikipedia.org/wiki/Multifactor_Leadership_Questionnaire](https://en.wikipedia.org/wiki/Multifactor_Leadership_Questionnaire)"
},
{
title: "Michigan Studies of Leadership Summary",
url: "[https://en.wikipedia.org/wiki/Michigan_Studies_of_Leadership](https://en.wikipedia.org/wiki/Michigan_Studies_of_Leadership)"
},
{
title: "Leadership Theories & Styles Guide",
url: "[https://www.wgu.edu/blog/leadership-theories-styles2004.html](https://www.wgu.edu/blog/leadership-theories-styles2004.html)"
},
{
title: "Leadership Models That Can Define Your Style (USAHS)",
url: "[https://www.usa.edu/blog/leadership-models/](https://www.usa.edu/blog/leadership-models/)"
},
{
title: "Organizational Leadership Event Guide (Pafbla.org PDF)",
url: "[https://www.pafbla.org/downloads/17-18_Web_Files/17-18_Competitive_Events_PDFs/Organizational_Leadership.pdf](https://www.pafbla.org/downloads/17-18_Web_Files/17-18_Competitive_Events_PDFs/Organizational_Leadership.pdf)"
},
{
title: "FBLA Organizational Leadership Questions & Answers Study Doc",
url: "[https://www.stuvia.com/en-us/doc/9400387/fbla-organizational-leadership-questions-en-answers](https://www.stuvia.com/en-us/doc/9400387/fbla-organizational-leadership-questions-en-answers)"
},
{
title: "Leadership in Education: Recent e-books and Resources",
url: "[https://guides.library.stanford.edu/leadership_in_ed/recent_ebooks](https://guides.library.stanford.edu/leadership_in_ed/recent_ebooks)"
}
],
aiPrompts: [
{
title: "Full-Length Practice Test: Organizational Leadership",
prompt: "Generate a 50-question multiple-choice practice test specifically for the FBLA Organizational Leadership Objective Test based on official competencies (leadership concepts, managerial roles, motivation theories, communication skills, team leadership, ethical leadership, conflict management, transformational vs transactional leadership, power & politics, coaching, servant leadership, diversity inclusion) with answer key and short explanations tied to real-world examples."
},
{
title: "Adaptive Leadership Weakness Diagnostic & Coaching Prompt",
prompt: "Analyze my performance on an Organizational Leadership practice quiz (provide answers and explanations). Identify my weakest topics (e.g., networking, strategic leadership, motivation theories). Then create a customized study plan with targeted explanations, real-world examples, mnemonics, and follow-up questions to strengthen those areas for the FBLA Objective Test."
}
]
},

    },
    {
        id: "parliamentary-procedure-role-play",
        resources: {
title: "parliamentary-procedure-role-play Resources",
links: [
{
title: "FBLA Official Parliamentary Procedure Event Details",
url: "[https://www.fbla.org/competitive-events/parliamentary-procedure/](https://www.fbla.org/competitive-events/parliamentary-procedure/)"
},
{
title: "Florida FBLA Parliamentary Procedure Event Guide (Objective Test + Role Play)",
url: "[https://www.flfbla.org/fbla-event-parliamentary-procedure](https://www.flfbla.org/fbla-event-parliamentary-procedure)"
},
{
title: "2025–2026 FBLA Competitive Events Guidelines – Parliamentary Procedure PDF",
url: "[https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Parliamentary-Procedure.pdf](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Parliamentary-Procedure.pdf)"
},
{
title: "Robert’s Rules of Order Official Site (Primary Parliamentary Procedure Authority)",
url: "[https://robertsrules.com/](https://robertsrules.com/)"
},
{
title: "Robert’s Rules of Order – Simplified PDF (Cornell Assembly Guide)",
url: "[https://assembly.cornell.edu/sites/default/files/roberts_rules_simplified.pdf](https://assembly.cornell.edu/sites/default/files/roberts_rules_simplified.pdf)"
},
{
title: "Robert’s Rules of Order Online (RulesOnline.com)",
url: "[https://www.rulesonline.com/](https://www.rulesonline.com/)"
},
{
title: "Parliamentary Procedure Overview – Norwich University Guide",
url: "[https://guides.norwich.edu/faculty-services/parliamentary](https://guides.norwich.edu/faculty-services/parliamentary)"
},
{
title: "Parliamentary Procedure: A Brief Guide (MRSC)",
url: "[https://mrsc.org/explore-topics/public-meetings/procedures/parliamentary-procedure](https://mrsc.org/explore-topics/public-meetings/procedures/parliamentary-procedure)"
},
{
title: "Parliamentary Procedure & Robert’s Rules – NASC Adviser Resources",
url: "[https://www.natstuco.org/adviser-resource-center/council-operations/parliamentary-procedure-roberts-rules/](https://www.natstuco.org/adviser-resource-center/council-operations/parliamentary-procedure-roberts-rules/)"
},
{
title: "The Standard Code of Parliamentary Procedure (Wikipedia)",
url: "[https://en.wikipedia.org/wiki/The_Standard_Code_of_Parliamentary_Procedure](https://en.wikipedia.org/wiki/The_Standard_Code_of_Parliamentary_Procedure)"
},
{
title: "Demeter’s Manual of Parliamentary Law and Procedure (Wikipedia)",
url: "[https://en.wikipedia.org/wiki/Demeter%27s_Manual_of_Parliamentary_Law_and_Procedure](https://en.wikipedia.org/wiki/Demeter%27s_Manual_of_Parliamentary_Law_and_Procedure)"
},
{
title: "Parliamentary Procedure (General Concept – Wikipedia)",
url: "[https://en.wikipedia.org/wiki/Parliamentary_procedure](https://en.wikipedia.org/wiki/Parliamentary_procedure)"
},
{
title: "American Institute of Parliamentarians (Professional Org Wiki)",
url: "[https://en.wikipedia.org/wiki/American_Institute_of_Parliamentarians](https://en.wikipedia.org/wiki/American_Institute_of_Parliamentarians)"
},
{
title: "FBLA Parliamentary Procedure Flashcards – 60 Terms (Quizlet)",
url: "[https://quizlet.com/452521903/parliamentary-procedure-fbla-flash-cards/](https://quizlet.com/452521903/parliamentary-procedure-fbla-flash-cards/)"
},
{
title: "FBLA (Parliamentary Procedure) Flashcards – 175 Terms (Quizlet)",
url: "[https://quizlet.com/754404134/fbla-parliamentary-procedure-flash-cards/](https://quizlet.com/754404134/fbla-parliamentary-procedure-flash-cards/)"
},
{
title: "FBLA Parliamentary Procedure Flashcards – 75 Terms (Quizlet)",
url: "[https://quizlet.com/79706105/fbla-parliamentary-procedure-flash-cards/](https://quizlet.com/79706105/fbla-parliamentary-procedure-flash-cards/)"
},
{
title: "FBLA Parliamentary Procedure Flashcards – 69 Terms (Quizlet)",
url: "[https://quizlet.com/1128851053/fbla-parliamentary-procedure-flash-cards//](https://quizlet.com/1128851053/fbla-parliamentary-procedure-flash-cards//)"
},
{
title: "FBLA Parliamentary Procedures Test Flashcards (Quizlet)",
url: "[https://quizlet.com/283734548/fbla-parliamentary-procedures-test-flash-cards/](https://quizlet.com/283734548/fbla-parliamentary-procedures-test-flash-cards/)"
},
{
title: "FBLA Introduction to Parliamentary Procedure Flashcards (Quizlet)",
url: "[https://quizlet.com/392100252/fbla-introduction-to-parliamentary-procedure-flash-cards/](https://quizlet.com/392100252/fbla-introduction-to-parliamentary-procedure-flash-cards/)"
},
{
title: "FBLA Parliamentary Procedure Practice/Test Resource (LOHS FBLA Portal)",
url: "[https://lohsfbla.com/comps/Parliamentary%2BProcedure/test](https://lohsfbla.com/comps/Parliamentary%2BProcedure/test)"
}
],
aiPrompts: [
{
title: "Full-Length Practice Test Prompt",
prompt: "Create a 30-question multiple-choice practice exam for FBLA Parliamentary Procedure Role Play based on Robert’s Rules of Order (Newly Revised) and FBLA bylaws. Include questions covering motions (main, subsidiary, privileged, incidental), order of business, proper voting procedures, quorum, officer roles, and simulated scenario questions similar to role play situations. Provide an answer key at the end."
},
{
title: "Adaptive Coaching Prompt",
prompt: "I’m struggling most with recognizing which motions take precedence and handling parliamentary scenarios under time pressure. Generate an adaptive coaching session focused on parliamentary procedure priority of motions and role-play meeting scenarios. Start by asking what specific motion types the user finds confusing, assess their current understanding, and then provide tailored examples, explanations, and practice scenarios to strengthen their weaknesses."
}
]
},

    }
];

export const getFBLAResourceById = (id: string): FBLAResourceEntry | undefined => {
    return FBLAResources.find((entry) => entry.id === id);
};
