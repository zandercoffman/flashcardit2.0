import { PracticeTest, PracticeTestGroup } from "../AllSets";

const allAcountingObjectiveTests: PracticeTestGroup = {
    id: "accounting-objective-test",
    tests: [
        {
            "title": "FBLA Accounting Objective Test Practice Test - 1",
            "questions": [
                {
                    "id": "q4_1",
                    "question": "What is the primary purpose of adjusting entries?",
                    "options": ["To record daily transactions", "To correct errors", "To ensure revenues and expenses are recognized in the proper period", "To close temporary accounts"],
                    "correctAnswerIndex": 2,
                    "explanation": "Adjusting entries align revenues and expenses with the correct accounting period under accrual accounting.",
                    "difficulty": "easy",
                    "category": "Adjusting Entries"
                },
                {
                    "id": "q4_2",
                    "question": "Which financial statement reports revenues and expenses?",
                    "options": ["Balance sheet", "Statement of cash flows", "Income statement", "Statement of owner's equity"],
                    "correctAnswerIndex": 2,
                    "explanation": "The income statement shows revenues and expenses to determine net income or loss.",
                    "difficulty": "easy",
                    "category": "Financial Statements"
                },
                {
                    "id": "q4_3",
                    "question": "Example: A company prepaid $3,000 for insurance covering 12 months. What is the monthly adjusting entry?",
                    "options": ["Debit Insurance Expense $250, credit Prepaid Insurance $250", "Debit Prepaid Insurance $250, credit Cash $250", "Debit Insurance Expense $3,000, credit Cash $3,000", "Debit Cash $250, credit Insurance Expense $250"],
                    "correctAnswerIndex": 0,
                    "explanation": "$3,000 divided by 12 months equals $250 monthly expense recognized.",
                    "difficulty": "easy",
                    "category": "Adjusting Entries"
                },
                {
                    "id": "q4_4",
                    "question": "Which account type is increased with a debit?",
                    "options": ["Revenue", "Liability", "Expense", "Owner's equity"],
                    "correctAnswerIndex": 2,
                    "explanation": "Expenses increase with debits, while revenues and liabilities increase with credits.",
                    "difficulty": "easy",
                    "category": "Accounting Basics"
                },
                {
                    "id": "q4_5",
                    "question": "What is the normal balance of accounts payable?",
                    "options": ["Debit", "Credit", "Either", "None"],
                    "correctAnswerIndex": 1,
                    "explanation": "Accounts payable is a liability account and has a normal credit balance.",
                    "difficulty": "easy",
                    "category": "Liabilities"
                },
                {
                    "id": "q4_6",
                    "question": "What is the accounting equation?",
                    "options": ["Assets = Liabilities - Equity", "Assets = Liabilities + Equity", "Assets + Liabilities = Equity", "Equity = Assets + Liabilities"],
                    "correctAnswerIndex": 1,
                    "explanation": "The accounting equation states that assets equal liabilities plus owner's equity.",
                    "difficulty": "easy",
                    "category": "Accounting Equation"
                },
                {
                    "id": "q4_7",
                    "question": "Example: A company earned $5,000 in revenue but has not yet received payment. What is recorded?",
                    "options": ["Debit Cash, credit Revenue", "Debit Accounts Receivable, credit Revenue", "Debit Revenue, credit Accounts Receivable", "Debit Expense, credit Revenue"],
                    "correctAnswerIndex": 1,
                    "explanation": "Revenue is recognized when earned, so accounts receivable is debited.",
                    "difficulty": "medium",
                    "category": "Accrual Accounting"
                },
                {
                    "id": "q4_8",
                    "question": "Which inventory costing method assumes the oldest inventory is sold first?",
                    "options": ["LIFO", "FIFO", "Weighted Average", "Specific Identification"],
                    "correctAnswerIndex": 1,
                    "explanation": "FIFO assumes the first goods purchased are the first sold.",
                    "difficulty": "medium",
                    "category": "Inventory"
                },
                {
                    "id": "q4_9",
                    "question": "Example: A company has net sales of $100,000 and cost of goods sold of $60,000. What is gross profit?",
                    "options": ["$40,000", "$60,000", "$100,000", "$160,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Gross profit equals net sales minus cost of goods sold.",
                    "difficulty": "medium",
                    "category": "Income Statement"
                },
                {
                    "id": "q4_10",
                    "question": "Which method allocates the cost of an asset over its useful life?",
                    "options": ["Amortization", "Depreciation", "Depletion", "Accrual"],
                    "correctAnswerIndex": 1,
                    "explanation": "Depreciation spreads the cost of tangible assets over time.",
                    "difficulty": "medium",
                    "category": "Depreciation"
                },
                {
                    "id": "q4_11",
                    "question": "Example: A company receives cash before performing a service. What account is credited?",
                    "options": ["Revenue", "Unearned Revenue", "Accounts Receivable", "Expense"],
                    "correctAnswerIndex": 1,
                    "explanation": "Unearned revenue is a liability until the service is performed.",
                    "difficulty": "medium",
                    "category": "Liabilities"
                },
                {
                    "id": "q4_12",
                    "question": "What is a trial balance used for?",
                    "options": ["Preparing financial statements", "Checking equality of debits and credits", "Recording transactions", "Calculating net income"],
                    "correctAnswerIndex": 1,
                    "explanation": "A trial balance ensures total debits equal total credits.",
                    "difficulty": "medium",
                    "category": "Trial Balance"
                },
                {
                    "id": "q4_13",
                    "question": "Example: A business purchased equipment for $10,000 cash. What is the effect?",
                    "options": ["Assets increase and liabilities increase", "Assets increase and decrease", "Assets decrease and liabilities increase", "No change"],
                    "correctAnswerIndex": 1,
                    "explanation": "One asset increases (equipment) while another decreases (cash).",
                    "difficulty": "medium",
                    "category": "Accounting Equation"
                },
                {
                    "id": "q4_14",
                    "question": "Which financial statement shows changes in owner's equity?",
                    "options": ["Income statement", "Balance sheet", "Statement of owner's equity", "Cash flow statement"],
                    "correctAnswerIndex": 2,
                    "explanation": "The statement of owner's equity tracks changes in equity over a period.",
                    "difficulty": "medium",
                    "category": "Financial Statements"
                },
                {
                    "id": "q4_15",
                    "question": "Example: A company pays $2,000 for salaries owed from last period. What is recorded?",
                    "options": ["Debit Salaries Expense, credit Cash", "Debit Salaries Payable, credit Cash", "Debit Cash, credit Salaries Expense", "Debit Expense, credit Payable"],
                    "correctAnswerIndex": 1,
                    "explanation": "The liability (salaries payable) is reduced when paid.",
                    "difficulty": "medium",
                    "category": "Liabilities"
                },
                {
                    "id": "q4_16",
                    "question": "What is the purpose of internal controls?",
                    "options": ["Increase profits", "Prevent fraud and errors", "Reduce expenses", "Improve marketing"],
                    "correctAnswerIndex": 1,
                    "explanation": "Internal controls safeguard assets and ensure reliable financial reporting.",
                    "difficulty": "medium",
                    "category": "Ethics & Controls"
                },
                {
                    "id": "q4_17",
                    "question": "Example: A company’s assets are $50,000 and liabilities are $30,000. What is equity?",
                    "options": ["$20,000", "$30,000", "$50,000", "$80,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Equity equals assets minus liabilities.",
                    "difficulty": "medium",
                    "category": "Accounting Equation"
                },
                {
                    "id": "q4_18",
                    "question": "Which ratio measures a company’s ability to pay short-term obligations?",
                    "options": ["Debt ratio", "Current ratio", "Return on assets", "Profit margin"],
                    "correctAnswerIndex": 1,
                    "explanation": "The current ratio evaluates liquidity by comparing current assets to liabilities.",
                    "difficulty": "medium",
                    "category": "Financial Ratios"
                },
                {
                    "id": "q4_19",
                    "question": "Example: Inventory at the beginning is $10,000, purchases are $40,000, and ending inventory is $15,000. What is cost of goods sold?",
                    "options": ["$35,000", "$45,000", "$50,000", "$25,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "COGS = Beginning Inventory + Purchases - Ending Inventory.",
                    "difficulty": "hard",
                    "category": "Inventory"
                },
                {
                    "id": "q4_20",
                    "question": "Which accounting principle requires consistency in methods over time?",
                    "options": ["Matching principle", "Consistency principle", "Revenue recognition principle", "Cost principle"],
                    "correctAnswerIndex": 1,
                    "explanation": "The consistency principle ensures comparability across periods.",
                    "difficulty": "hard",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q4_21",
                    "question": "Example: A company uses straight-line depreciation on equipment costing $12,000 with a salvage value of $2,000 and a useful life of 5 years. What is annual depreciation?",
                    "options": ["$2,000", "$2,400", "$1,000", "$3,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "($12,000 - $2,000) / 5 = $2,000 per year.",
                    "difficulty": "hard",
                    "category": "Depreciation"
                },
                {
                    "id": "q4_22",
                    "question": "Which method recognizes bad debts based on estimated uncollectible accounts?",
                    "options": ["Direct write-off method", "Allowance method", "Cash method", "Matching method"],
                    "correctAnswerIndex": 1,
                    "explanation": "The allowance method estimates uncollectible accounts in advance.",
                    "difficulty": "hard",
                    "category": "Receivables"
                },
                {
                    "id": "q4_23",
                    "question": "Example: A company’s net income is $10,000 and total assets are $50,000. What is return on assets?",
                    "options": ["20%", "10%", "5%", "50%"],
                    "correctAnswerIndex": 0,
                    "explanation": "ROA = Net Income / Total Assets = 10,000 / 50,000 = 20%.",
                    "difficulty": "hard",
                    "category": "Financial Ratios"
                },
                {
                    "id": "q4_24",
                    "question": "Which section of the statement of cash flows includes payments to suppliers?",
                    "options": ["Investing activities", "Financing activities", "Operating activities", "Non-cash activities"],
                    "correctAnswerIndex": 2,
                    "explanation": "Operating activities include day-to-day cash transactions like payments to suppliers.",
                    "difficulty": "hard",
                    "category": "Cash Flow"
                },
                {
                    "id": "q4_25",
                    "question": "Example: A company has a current ratio of 2:1 and current liabilities of $10,000. What are current assets?",
                    "options": ["$5,000", "$10,000", "$20,000", "$15,000"],
                    "correctAnswerIndex": 2,
                    "explanation": "Current assets are twice current liabilities, so $20,000.",
                    "difficulty": "hard",
                    "category": "Financial Ratios"
                },
                {
                    "id": "q5_1",
                    "question": "What is an asset?",
                    "options": ["Something a business owes", "Something a business owns", "Revenue earned", "An expense incurred"],
                    "correctAnswerIndex": 1,
                    "explanation": "Assets are resources owned by a business that have economic value.",
                    "difficulty": "easy",
                    "category": "Accounting Basics"
                },
                {
                    "id": "q5_2",
                    "question": "Which account is classified as a current asset?",
                    "options": ["Equipment", "Accounts Payable", "Accounts Receivable", "Mortgage Payable"],
                    "correctAnswerIndex": 2,
                    "explanation": "Accounts receivable is expected to be converted into cash within one year.",
                    "difficulty": "easy",
                    "category": "Assets"
                },
                {
                    "id": "q5_3",
                    "question": "Example: A business receives $1,000 cash for services performed immediately. What is recorded?",
                    "options": ["Debit Cash, credit Revenue", "Debit Revenue, credit Cash", "Debit Accounts Receivable, credit Revenue", "Debit Cash, credit Unearned Revenue"],
                    "correctAnswerIndex": 0,
                    "explanation": "Revenue is earned and cash is received, so both are recorded immediately.",
                    "difficulty": "easy",
                    "category": "Revenue"
                },
                {
                    "id": "q5_4",
                    "question": "What is the normal balance of revenue accounts?",
                    "options": ["Debit", "Credit", "Zero", "Variable"],
                    "correctAnswerIndex": 1,
                    "explanation": "Revenue accounts increase with credits.",
                    "difficulty": "easy",
                    "category": "Accounting Basics"
                },
                {
                    "id": "q5_5",
                    "question": "Which document is used to request payment from a customer?",
                    "options": ["Invoice", "Receipt", "Purchase order", "Check"],
                    "correctAnswerIndex": 0,
                    "explanation": "An invoice details goods/services and requests payment.",
                    "difficulty": "easy",
                    "category": "Business Documents"
                },
                {
                    "id": "q5_6",
                    "question": "What does GAAP stand for?",
                    "options": ["General Accounting Application Practices", "Generally Accepted Accounting Principles", "Global Accounting Audit Policies", "General Audit Approval Process"],
                    "correctAnswerIndex": 1,
                    "explanation": "GAAP refers to the standard framework of accounting rules used in the U.S.",
                    "difficulty": "easy",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q5_7",
                    "question": "Example: A company purchases supplies on account for $500. What is recorded?",
                    "options": ["Debit Supplies, credit Cash", "Debit Supplies, credit Accounts Payable", "Debit Expense, credit Cash", "Debit Accounts Payable, credit Supplies"],
                    "correctAnswerIndex": 1,
                    "explanation": "Supplies increase and a liability (accounts payable) is created.",
                    "difficulty": "medium",
                    "category": "Transactions"
                },
                {
                    "id": "q5_8",
                    "question": "Which journal is used to record all transactions not fitting in special journals?",
                    "options": ["Sales journal", "Cash receipts journal", "General journal", "Purchases journal"],
                    "correctAnswerIndex": 2,
                    "explanation": "The general journal is used for miscellaneous transactions.",
                    "difficulty": "medium",
                    "category": "Journals"
                },
                {
                    "id": "q5_9",
                    "question": "Example: A business pays $800 rent for the current month. What is recorded?",
                    "options": ["Debit Rent Expense, credit Cash", "Debit Cash, credit Rent Expense", "Debit Prepaid Rent, credit Cash", "Debit Expense, credit Payable"],
                    "correctAnswerIndex": 0,
                    "explanation": "The rent expense is incurred and cash is paid immediately.",
                    "difficulty": "medium",
                    "category": "Expenses"
                },
                {
                    "id": "q5_10",
                    "question": "What is the purpose of a post-closing trial balance?",
                    "options": ["Check revenue totals", "Verify only permanent accounts remain", "Record adjustments", "Calculate net income"],
                    "correctAnswerIndex": 1,
                    "explanation": "Only permanent accounts appear after closing entries are completed.",
                    "difficulty": "medium",
                    "category": "Closing Process"
                },
                {
                    "id": "q5_11",
                    "question": "Example: A company’s beginning capital is $20,000, net income is $5,000, and withdrawals are $2,000. What is ending capital?",
                    "options": ["$23,000", "$25,000", "$18,000", "$27,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Ending capital = Beginning + Net Income - Withdrawals.",
                    "difficulty": "medium",
                    "category": "Equity"
                },
                {
                    "id": "q5_12",
                    "question": "Which term describes a decrease in assets or increase in liabilities?",
                    "options": ["Expense", "Revenue", "Equity", "Asset"],
                    "correctAnswerIndex": 0,
                    "explanation": "Expenses reduce equity through asset decreases or liability increases.",
                    "difficulty": "medium",
                    "category": "Expenses"
                },
                {
                    "id": "q5_13",
                    "question": "Example: A company records depreciation of $500. What is the entry?",
                    "options": ["Debit Depreciation Expense, credit Accumulated Depreciation", "Debit Equipment, credit Cash", "Debit Expense, credit Cash", "Debit Cash, credit Expense"],
                    "correctAnswerIndex": 0,
                    "explanation": "Depreciation increases expense and accumulates contra-asset value.",
                    "difficulty": "medium",
                    "category": "Depreciation"
                },
                {
                    "id": "q5_14",
                    "question": "Which account is a contra asset?",
                    "options": ["Accounts Payable", "Accumulated Depreciation", "Revenue", "Capital"],
                    "correctAnswerIndex": 1,
                    "explanation": "Accumulated depreciation reduces the value of assets.",
                    "difficulty": "medium",
                    "category": "Assets"
                },
                {
                    "id": "q5_15",
                    "question": "Example: A business collects $1,200 from a customer who owed money. What happens?",
                    "options": ["Increase revenue", "Decrease accounts receivable", "Increase liabilities", "Decrease equity"],
                    "correctAnswerIndex": 1,
                    "explanation": "Cash increases and accounts receivable decreases.",
                    "difficulty": "medium",
                    "category": "Receivables"
                },
                {
                    "id": "q5_16",
                    "question": "Which financial statement is prepared first?",
                    "options": ["Balance sheet", "Income statement", "Cash flow statement", "Owner’s equity statement"],
                    "correctAnswerIndex": 1,
                    "explanation": "The income statement is prepared first because net income is used in other statements.",
                    "difficulty": "medium",
                    "category": "Financial Statements"
                },
                {
                    "id": "q5_17",
                    "question": "Example: A company’s expenses exceed revenues. What is the result?",
                    "options": ["Net income", "Net loss", "Break-even", "Profit margin"],
                    "correctAnswerIndex": 1,
                    "explanation": "When expenses exceed revenues, the business incurs a net loss.",
                    "difficulty": "medium",
                    "category": "Income Statement"
                },
                {
                    "id": "q5_18",
                    "question": "What is the matching principle?",
                    "options": ["Match assets with liabilities", "Match revenues with expenses", "Match debits with credits", "Match equity with assets"],
                    "correctAnswerIndex": 1,
                    "explanation": "Expenses should be recorded in the same period as the revenues they help generate.",
                    "difficulty": "medium",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q5_19",
                    "question": "Example: A company buys inventory for $8,000 and sells it for $12,000. What is gross profit?",
                    "options": ["$4,000", "$8,000", "$12,000", "$20,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Gross profit = Sales - Cost of Goods Sold.",
                    "difficulty": "hard",
                    "category": "Income Statement"
                },
                {
                    "id": "q5_20",
                    "question": "Which method of inventory valuation results in higher profits during inflation?",
                    "options": ["FIFO", "LIFO", "Weighted average", "Specific identification"],
                    "correctAnswerIndex": 0,
                    "explanation": "FIFO uses older, cheaper costs, resulting in higher reported profits.",
                    "difficulty": "hard",
                    "category": "Inventory"
                },
                {
                    "id": "q5_21",
                    "question": "Example: A company’s current assets are $30,000 and current liabilities are $15,000. What is the current ratio?",
                    "options": ["1:1", "2:1", "3:1", "0.5:1"],
                    "correctAnswerIndex": 1,
                    "explanation": "Current ratio = Current Assets / Current Liabilities = 2.",
                    "difficulty": "hard",
                    "category": "Financial Ratios"
                },
                {
                    "id": "q5_22",
                    "question": "Which concept assumes a business will continue operating indefinitely?",
                    "options": ["Matching principle", "Going concern", "Consistency principle", "Cost principle"],
                    "correctAnswerIndex": 1,
                    "explanation": "The going concern assumption assumes the business will remain in operation.",
                    "difficulty": "hard",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q5_23",
                    "question": "Example: A company has sales of $50,000 and expenses of $35,000. What is net income?",
                    "options": ["$15,000", "$35,000", "$50,000", "$85,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Net income = Revenues - Expenses.",
                    "difficulty": "hard",
                    "category": "Income Statement"
                },
                {
                    "id": "q5_24",
                    "question": "Which section of the balance sheet lists long-term liabilities?",
                    "options": ["Current liabilities", "Owner’s equity", "Noncurrent liabilities", "Assets"],
                    "correctAnswerIndex": 2,
                    "explanation": "Noncurrent liabilities include obligations due beyond one year.",
                    "difficulty": "hard",
                    "category": "Liabilities"
                },
                {
                    "id": "q5_25",
                    "question": "Example: A company’s total liabilities are $40,000 and equity is $60,000. What are total assets?",
                    "options": ["$20,000", "$40,000", "$60,000", "$100,000"],
                    "correctAnswerIndex": 3,
                    "explanation": "Assets = Liabilities + Equity.",
                    "difficulty": "hard",
                    "category": "Accounting Equation"
                },
                {
                    "id": "q6_1",
                    "question": "Which account is increased with a credit?",
                    "options": ["Cash", "Accounts Receivable", "Revenue", "Expense"],
                    "correctAnswerIndex": 2,
                    "explanation": "Revenue accounts increase with credits according to accounting rules.",
                    "difficulty": "easy",
                    "category": "Accounting Basics"
                },
                {
                    "id": "q6_2",
                    "question": "Example: A business issues common stock for $10,000 cash. What is the effect?",
                    "options": ["Debit Cash, credit Common Stock", "Debit Common Stock, credit Cash", "Debit Cash, credit Retained Earnings", "Debit Cash, credit Revenue"],
                    "correctAnswerIndex": 0,
                    "explanation": "Issuing stock increases both cash and equity.",
                    "difficulty": "easy",
                    "category": "Equity"
                },
                {
                    "id": "q6_3",
                    "question": "Which financial statement reports a company’s financial position at a specific point in time?",
                    "options": ["Income statement", "Balance sheet", "Statement of cash flows", "Statement of owner’s equity"],
                    "correctAnswerIndex": 1,
                    "explanation": "The balance sheet reports assets, liabilities, and equity at a single point in time.",
                    "difficulty": "easy",
                    "category": "Financial Statements"
                },
                {
                    "id": "q6_4",
                    "question": "Which account is classified as a liability?",
                    "options": ["Accounts Receivable", "Prepaid Insurance", "Notes Payable", "Equipment"],
                    "correctAnswerIndex": 2,
                    "explanation": "Notes payable represents an obligation to pay a creditor.",
                    "difficulty": "easy",
                    "category": "Liabilities"
                },
                {
                    "id": "q6_5",
                    "question": "Example: A company performs a service for $500 on account. What is recorded?",
                    "options": ["Debit Cash, credit Revenue", "Debit Accounts Receivable, credit Revenue", "Debit Revenue, credit Accounts Receivable", "Debit Cash, credit Accounts Receivable"],
                    "correctAnswerIndex": 1,
                    "explanation": "Revenue is earned, but cash is not yet received, so accounts receivable is debited.",
                    "difficulty": "easy",
                    "category": "Revenue"
                },
                {
                    "id": "q6_6",
                    "question": "What is the purpose of a general ledger?",
                    "options": ["Record daily transactions", "Summarize all accounts and balances", "Prepare tax returns", "Audit financial statements"],
                    "correctAnswerIndex": 1,
                    "explanation": "The general ledger contains all accounts and their balances for reporting.",
                    "difficulty": "easy",
                    "category": "Ledger"
                },
                {
                    "id": "q6_7",
                    "question": "Example: A business prepays $1,200 for 12 months of rent. What is the monthly adjusting entry?",
                    "options": ["Debit Rent Expense $100, credit Prepaid Rent $100", "Debit Prepaid Rent $100, credit Cash $100", "Debit Rent Expense $1,200, credit Cash $1,200", "Debit Cash $100, credit Rent Expense $100"],
                    "correctAnswerIndex": 0,
                    "explanation": "Prepaid rent is allocated monthly: $1,200 ÷ 12 = $100 per month.",
                    "difficulty": "medium",
                    "category": "Adjusting Entries"
                },
                {
                    "id": "q6_8",
                    "question": "Which account is a contra equity account?",
                    "options": ["Common Stock", "Treasury Stock", "Retained Earnings", "Revenue"],
                    "correctAnswerIndex": 1,
                    "explanation": "Treasury stock reduces total equity and has a debit balance.",
                    "difficulty": "medium",
                    "category": "Equity"
                },
                {
                    "id": "q6_9",
                    "question": "Example: A company records accrued wages of $2,500 at the end of the period. What is the entry?",
                    "options": ["Debit Wages Expense $2,500, credit Wages Payable $2,500", "Debit Wages Payable $2,500, credit Cash $2,500", "Debit Cash $2,500, credit Wages Expense $2,500", "Debit Expense $2,500, credit Cash $2,500"],
                    "correctAnswerIndex": 0,
                    "explanation": "Accrued wages increase expense and create a liability until paid.",
                    "difficulty": "medium",
                    "category": "Accruals"
                },
                {
                    "id": "q6_10",
                    "question": "Which principle requires recognizing revenue when earned, regardless of cash received?",
                    "options": ["Matching principle", "Revenue recognition principle", "Consistency principle", "Conservatism principle"],
                    "correctAnswerIndex": 1,
                    "explanation": "Revenue is recognized when earned, per the revenue recognition principle.",
                    "difficulty": "medium",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q6_11",
                    "question": "Example: A company writes off an uncollectible account of $300. What is the journal entry under the allowance method?",
                    "options": ["Debit Bad Debt Expense, credit Accounts Receivable", "Debit Allowance for Doubtful Accounts, credit Accounts Receivable", "Debit Accounts Receivable, credit Cash", "Debit Expense, credit Cash"],
                    "correctAnswerIndex": 1,
                    "explanation": "The allowance for doubtful accounts is reduced, and receivable is written off.",
                    "difficulty": "medium",
                    "category": "Receivables"
                },
                {
                    "id": "q6_12",
                    "question": "Which ratio measures profitability relative to sales?",
                    "options": ["Current ratio", "Debt ratio", "Profit margin", "Return on assets"],
                    "correctAnswerIndex": 2,
                    "explanation": "Profit margin shows net income as a percentage of net sales.",
                    "difficulty": "medium",
                    "category": "Financial Ratios"
                },
                {
                    "id": "q6_13",
                    "question": "Example: A company purchases inventory costing $5,000 and pays $500 freight-in. What is total inventory cost?",
                    "options": ["$5,000", "$5,500", "$4,500", "$500"],
                    "correctAnswerIndex": 1,
                    "explanation": "Freight-in is added to inventory cost: $5,000 + $500 = $5,500.",
                    "difficulty": "medium",
                    "category": "Inventory"
                },
                {
                    "id": "q6_14",
                    "question": "Which account is closed at the end of the period?",
                    "options": ["Cash", "Accounts Payable", "Revenue", "Equipment"],
                    "correctAnswerIndex": 2,
                    "explanation": "Revenue accounts are temporary and closed to retained earnings or capital.",
                    "difficulty": "medium",
                    "category": "Closing Process"
                },
                {
                    "id": "q6_15",
                    "question": "Example: A company’s beginning inventory is $12,000, purchases $8,000, and ending inventory is $10,000. What is cost of goods sold?",
                    "options": ["$10,000", "$12,000", "$8,000", "$10,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "COGS = Beginning Inventory + Purchases - Ending Inventory = 12,000 + 8,000 - 10,000 = 10,000.",
                    "difficulty": "hard",
                    "category": "Inventory"
                },
                {
                    "id": "q6_16",
                    "question": "Which accounting assumption states that the business’s financial records are separate from the owner’s?",
                    "options": ["Economic entity assumption", "Going concern assumption", "Consistency principle", "Full disclosure principle"],
                    "correctAnswerIndex": 0,
                    "explanation": "The economic entity assumption separates personal and business transactions.",
                    "difficulty": "hard",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q6_17",
                    "question": "Example: A machine costs $50,000, salvage value $5,000, useful life 9 years. What is annual straight-line depreciation?",
                    "options": ["$5,000", "$5,500", "$6,000", "$4,500"],
                    "correctAnswerIndex": 1,
                    "explanation": "(50,000 - 5,000) / 9 = $5,000 per year.",
                    "difficulty": "hard",
                    "category": "Depreciation"
                },
                {
                    "id": "q6_18",
                    "question": "Which type of account normally has a debit balance?",
                    "options": ["Revenue", "Expense", "Liability", "Capital"],
                    "correctAnswerIndex": 1,
                    "explanation": "Expenses normally have debit balances, as they decrease equity.",
                    "difficulty": "medium",
                    "category": "Accounting Basics"
                },
                {
                    "id": "q6_19",
                    "question": "Example: A company pays $600 cash for utilities. What is recorded?",
                    "options": ["Debit Utilities Expense $600, credit Cash $600", "Debit Cash $600, credit Utilities Expense $600", "Debit Utilities Payable $600, credit Cash $600", "Debit Expense $600, credit Payable $600"],
                    "correctAnswerIndex": 0,
                    "explanation": "Cash decreases and expense is recorded for the payment.",
                    "difficulty": "medium",
                    "category": "Expenses"
                },
                {
                    "id": "q6_20",
                    "question": "Which financial statement section shows borrowing and repayment of debt?",
                    "options": ["Operating activities", "Investing activities", "Financing activities", "Equity activities"],
                    "correctAnswerIndex": 2,
                    "explanation": "Financing activities include cash flows related to debt and equity.",
                    "difficulty": "hard",
                    "category": "Cash Flow"
                },
                {
                    "id": "q6_21",
                    "question": "Example: A company has assets of $120,000 and liabilities of $80,000. What is equity?",
                    "options": ["$40,000", "$120,000", "$80,000", "$200,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Equity = Assets - Liabilities = 120,000 - 80,000 = 40,000.",
                    "difficulty": "medium",
                    "category": "Accounting Equation"
                },
                {
                    "id": "q6_22",
                    "question": "Which principle requires full disclosure of financial information?",
                    "options": ["Consistency", "Going concern", "Full disclosure", "Matching"],
                    "correctAnswerIndex": 2,
                    "explanation": "The full disclosure principle requires all relevant information be presented.",
                    "difficulty": "medium",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q6_23",
                    "question": "Example: A company sells goods costing $3,000 for $5,000 on account. What is gross profit?",
                    "options": ["$2,000", "$3,000", "$5,000", "$8,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Gross profit = Sales - Cost of Goods Sold = 5,000 - 3,000 = 2,000.",
                    "difficulty": "medium",
                    "category": "Income Statement"
                },
                {
                    "id": "q6_24",
                    "question": "Which concept requires recording revenue when earned and expenses when incurred?",
                    "options": ["Cash basis accounting", "Accrual basis accounting", "Conservatism", "Cost principle"],
                    "correctAnswerIndex": 1,
                    "explanation": "Accrual accounting matches revenues and expenses to the correct period.",
                    "difficulty": "medium",
                    "category": "Accounting Principles"
                },
                {
                    "id": "q6_25",
                    "question": "Example: A company has total sales $100,000, cost of goods sold $60,000, and operating expenses $25,000. What is net income?",
                    "options": ["$15,000", "$25,000", "$40,000", "$60,000"],
                    "correctAnswerIndex": 0,
                    "explanation": "Net income = Sales - COGS - Expenses = 100,000 - 60,000 - 25,000 = 15,000.",
                    "difficulty": "hard",
                    "category": "Income Statement"
                },
                {
"id": "q7_1",
"question": "Which type of account is increased by a debit and decreased by a credit?",
"options": ["Revenue", "Expense", "Liability", "Equity"],
"correctAnswerIndex": 1,
"explanation": "Expenses have a normal debit balance and reduce equity when incurred.",
"difficulty": "easy",
"category": "Accounting Basics"
},
{
"id": "q7_2",
"question": "Example: A company receives $2,000 in advance for services to be performed next month. What is recorded?",
"options": ["Debit Cash, credit Revenue", "Debit Cash, credit Unearned Revenue", "Debit Revenue, credit Cash", "Debit Accounts Receivable, credit Revenue"],
"correctAnswerIndex": 1,
"explanation": "Cash is received, but revenue is not yet earned, so a liability is recorded.",
"difficulty": "easy",
"category": "Revenue"
},
{
"id": "q7_3",
"question": "Which financial statement reports inflows and outflows of cash?",
"options": ["Balance sheet", "Income statement", "Statement of cash flows", "Statement of owner’s equity"],
"correctAnswerIndex": 2,
"explanation": "The statement of cash flows summarizes cash from operating, investing, and financing activities.",
"difficulty": "easy",
"category": "Financial Statements"
},
{
"id": "q7_4",
"question": "Which principle requires that expenses be recorded in the same period as the related revenue?",
"options": ["Matching principle", "Revenue recognition principle", "Consistency principle", "Full disclosure principle"],
"correctAnswerIndex": 0,
"explanation": "The matching principle aligns expenses with the revenues they help generate.",
"difficulty": "medium",
"category": "Accounting Principles"
},
{
"id": "q7_5",
"question": "Example: A business prepays $6,000 for insurance covering 12 months. How much is recorded as insurance expense per month?",
"options": ["$500", "$600", "$1,000", "$1,200"],
"correctAnswerIndex": 0,
"explanation": "$6,000 ÷ 12 months = $500 monthly expense.",
"difficulty": "medium",
"category": "Adjusting Entries"
},
{
"id": "q7_6",
"question": "Which account is a current liability?",
"options": ["Mortgage Payable", "Accounts Payable", "Equipment", "Prepaid Rent"],
"correctAnswerIndex": 1,
"explanation": "Accounts payable is expected to be paid within one year, classifying it as current.",
"difficulty": "medium",
"category": "Liabilities"
},
{
"id": "q7_7",
"question": "Example: A company sells merchandise costing $7,000 for $10,000. What is the gross profit?",
"options": ["$3,000", "$7,000", "$10,000", "$17,000"],
"correctAnswerIndex": 0,
"explanation": "Gross profit = Sales - Cost of Goods Sold = 10,000 - 7,000 = 3,000.",
"difficulty": "medium",
"category": "Income Statement"
},
{
"id": "q7_8",
"question": "Which type of account normally has a credit balance?",
"options": ["Expense", "Asset", "Revenue", "Drawings/Withdrawals"],
"correctAnswerIndex": 2,
"explanation": "Revenue accounts increase with credits.",
"difficulty": "easy",
"category": "Accounting Basics"
},
{
"id": "q7_9",
"question": "Example: A company pays $400 cash for utilities. Which accounts are affected?",
"options": ["Debit Utilities Expense, credit Cash", "Debit Cash, credit Utilities Expense", "Debit Accounts Payable, credit Cash", "Debit Expense, credit Payable"],
"correctAnswerIndex": 0,
"explanation": "Payment decreases cash and records the expense.",
"difficulty": "medium",
"category": "Expenses"
},
{
"id": "q7_10",
"question": "Which document authorizes a purchase of goods or services?",
"options": ["Invoice", "Purchase order", "Receipt", "Check"],
"correctAnswerIndex": 1,
"explanation": "A purchase order initiates the transaction and specifies terms.",
"difficulty": "easy",
"category": "Business Documents"
},
{
"id": "q7_11",
"question": "Which accounting assumption assumes the business will operate indefinitely?",
"options": ["Going concern assumption", "Consistency assumption", "Economic entity assumption", "Full disclosure principle"],
"correctAnswerIndex": 0,
"explanation": "Going concern assumes the company will continue operations into the foreseeable future.",
"difficulty": "medium",
"category": "Accounting Principles"
},
{
"id": "q7_12",
"question": "Example: A company records $800 accrued salaries at month-end. What is the journal entry?",
"options": ["Debit Salaries Expense $800, credit Salaries Payable $800", "Debit Salaries Payable $800, credit Cash $800", "Debit Cash $800, credit Salaries Expense $800", "Debit Expense $800, credit Cash $800"],
"correctAnswerIndex": 0,
"explanation": "Accrued salaries increase expense and create a liability until paid.",
"difficulty": "medium",
"category": "Accruals"
},
{
"id": "q7_13",
"question": "Which ratio measures liquidity by comparing current assets to current liabilities?",
"options": ["Debt ratio", "Profit margin", "Current ratio", "Return on equity"],
"correctAnswerIndex": 2,
"explanation": "The current ratio evaluates a company's ability to pay short-term obligations.",
"difficulty": "medium",
"category": "Financial Ratios"
},
{
"id": "q7_14",
"question": "Example: A company’s beginning capital is $50,000, net income $10,000, withdrawals $5,000. What is ending capital?",
"options": ["$50,000", "$55,000", "$60,000", "$65,000"],
"correctAnswerIndex": 2,
"explanation": "Ending capital = Beginning + Net Income - Withdrawals = 50,000 + 10,000 - 5,000 = 55,000.",
"difficulty": "medium",
"category": "Equity"
},
{
"id": "q7_15",
"question": "Which account is a contra asset?",
"options": ["Accounts Receivable", "Accumulated Depreciation", "Cash", "Equipment"],
"correctAnswerIndex": 1,
"explanation": "Accumulated depreciation reduces the value of the related asset.",
"difficulty": "medium",
"category": "Assets"
},
{
"id": "q7_16",
"question": "Example: A company pays $1,000 for insurance covering six months. What is the monthly expense?",
"options": ["$100", "$150", "$166.67", "$200"],
"correctAnswerIndex": 2,
"explanation": "$1,000 ÷ 6 months = $166.67 per month.",
"difficulty": "medium",
"category": "Adjusting Entries"
},
{
"id": "q7_17",
"question": "Which financial statement reports net income for a period?",
"options": ["Balance sheet", "Statement of cash flows", "Income statement", "Statement of owner’s equity"],
"correctAnswerIndex": 2,
"explanation": "The income statement reports revenues, expenses, and net income over a period.",
"difficulty": "easy",
"category": "Financial Statements"
},
{
"id": "q7_18",
"question": "Which method of inventory costing assumes the newest items are sold first?",
"options": ["FIFO", "LIFO", "Weighted average", "Specific identification"],
"correctAnswerIndex": 1,
"explanation": "LIFO assumes the last goods purchased are sold first.",
"difficulty": "medium",
"category": "Inventory"
},
{
"id": "q7_19",
"question": "Example: A company sells inventory costing $4,000 for $6,000 on account. What is recorded?",
"options": ["Debit Accounts Receivable $6,000, credit Revenue $6,000; Debit COGS $4,000, credit Inventory $4,000", "Debit Cash $6,000, credit Revenue $6,000", "Debit Inventory $4,000, credit COGS $4,000", "Debit Accounts Receivable $4,000, credit Revenue $4,000"],
"correctAnswerIndex": 0,
"explanation": "Revenue is recorded for the sale, and inventory is reduced by cost of goods sold.",
"difficulty": "medium",
"category": "Inventory/Revenue"
},
{
"id": "q7_20",
"question": "Which account is closed to retained earnings or capital at period-end?",
"options": ["Cash", "Accounts Payable", "Revenue", "Equipment"],
"correctAnswerIndex": 2,
"explanation": "Revenue accounts are temporary and closed to retained earnings or capital.",
"difficulty": "medium",
"category": "Closing Process"
},
{
"id": "q7_21",
"question": "Example: A company has assets of $200,000 and liabilities of $120,000. What is equity?",
"options": ["$80,000", "$200,000", "$120,000", "$320,000"],
"correctAnswerIndex": 0,
"explanation": "Equity = Assets - Liabilities = 200,000 - 120,000 = 80,000.",
"difficulty": "medium",
"category": "Accounting Equation"
},
{
"id": "q7_22",
"question": "Which accounting assumption separates personal transactions from business transactions?",
"options": ["Going concern", "Economic entity", "Consistency", "Full disclosure"],
"correctAnswerIndex": 1,
"explanation": "The economic entity assumption separates the owner’s activities from the business.",
"difficulty": "medium",
"category": "Accounting Principles"
},
{
"id": "q7_23",
"question": "Example: A company purchases equipment for $12,000, salvage $2,000, useful life 5 years. Straight-line depreciation per year?",
"options": ["$2,000", "$2,400", "$1,800", "$2,500"],
"correctAnswerIndex": 1,
"explanation": "(12,000 - 2,000) ÷ 5 = $2,000 per year.",
"difficulty": "hard",
"category": "Depreciation"
},
{
"id": "q7_24",
"question": "Which financial statement section includes cash received from issuing stock?",
"options": ["Operating activities", "Investing activities", "Financing activities", "Non-cash activities"],
"correctAnswerIndex": 2,
"explanation": "Financing activities include cash inflows from issuing stock.",
"difficulty": "hard",
"category": "Cash Flow"
},
{
"id": "q7_25",
"question": "Example: A company has total sales $80,000, COGS $50,000, operating expenses $20,000. Net income?",
"options": ["$10,000", "$20,000", "$30,000", "$40,000"],
"correctAnswerIndex": 0,
"explanation": "Net income = Sales - COGS - Expenses = 80,000 - 50,000 - 20,000 = 10,000.",
"difficulty": "hard",
"category": "Income Statement"
}
            ]
        }

    ]
};

export const allFBLAPracticeTests: PracticeTestGroup[] = [
    allAcountingObjectiveTests
]