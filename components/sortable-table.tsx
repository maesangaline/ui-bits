"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { SortIcon } from "./sort-icon"

type SortDirection = "asc" | "desc" | null
type RowData = {
  id: number
  interestRate: string
  minimumDeposit: string
  term: string
  details: string
}

export function SortableTable() {
  const [sortColumn, setSortColumn] = useState<number | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const [showAllRows, setShowAllRows] = useState(false)

  // Financial services data
  const headers = ["Interest Rate & APY", "Minimum Deposit & Requirements", "Term & Duration", "Additional Information"]

  const financialData: RowData[] = [
    {
      id: 0,
      interestRate:
        "0.50% APY with potential to earn up to 0.75% APY with qualifying direct deposits. Rate may vary based on market conditions and is subject to change without notice.",
      minimumDeposit:
        "$25 initial deposit required. $5 monthly maintenance fee applies unless you maintain a daily balance of $300 or more, or have a qualifying direct deposit of at least $250 per statement cycle.",
      term: "No fixed term. Unlimited deposits and withdrawals. Account remains open until closed by customer or due to inactivity (24 months with $0 balance).",
      details:
        "Our standard savings account offers competitive interest rates with no monthly maintenance fees. Features include online banking access, mobile check deposit, and automatic transfers. FDIC insured up to $250,000 per depositor. Interest compounds daily and is credited to your account monthly.",
    },
    {
      id: 1,
      interestRate:
        "0.85% APY for balances under $10,000. 1.05% APY for balances $10,000-$24,999. 1.25% APY for balances $25,000 and above. Rates effective as of 05/01/2023.",
      minimumDeposit:
        "$1,000 minimum opening deposit. $12 monthly service fee waived with $5,000 minimum daily balance. Limited to six withdrawals or transfers per statement cycle per federal regulations.",
      term: "No fixed term. Account remains active as long as minimum balance requirements are met. Excessive withdrawal fees may apply if transaction limits are exceeded.",
      details:
        "Money Market accounts provide higher yields than standard savings with check-writing privileges. Tiered interest rates reward higher balances. Includes all digital banking features and a debit card option. Perfect for emergency funds or short-term savings goals.",
    },
    {
      id: 2,
      interestRate:
        "1.75% APY fixed rate guaranteed for the entire 12-month term. Interest can be paid monthly, quarterly, or at maturity. $10 bonus for new customers opening their first CD.",
      minimumDeposit:
        "$500 minimum opening deposit. No monthly maintenance fees. Early withdrawal penalty equals 90 days of interest on the amount withdrawn. Additional deposits not permitted during term.",
      term: "12 months fixed term. Automatic renewal available with a 10-day grace period after maturity. Early withdrawal penalties apply. Maturity notice sent 30 days before term end.",
      details:
        "Our 12-month Certificate of Deposit offers guaranteed returns with a fixed rate. Early withdrawal penalties apply. Automatic renewal available with a 10-day grace period. Interest can be paid monthly or at maturity. Ideal for short-term savings goals with predictable returns.",
    },
    {
      id: 3,
      interestRate:
        "1.25% APY for balances up to $25,000. 1.50% APY for balances over $25,000. Rate guaranteed for 6 months after account opening, then subject to change based on market conditions.",
      minimumDeposit:
        "$100 minimum opening deposit. $10 monthly maintenance fee waived with $2,500 minimum daily balance or $5,000 in combined deposit accounts. Direct deposit not required but recommended.",
      term: "No fixed term. Unlimited deposits permitted. Limited to six withdrawals per statement cycle per federal regulations. $15 excessive withdrawal fee for each transaction over the limit.",
      details:
        "Our High-Yield Savings account offers premium interest rates for customers who maintain higher balances. Includes all standard savings features plus priority customer service and financial planning tools. Special relationship rates available when linked with checking account.",
    },
    {
      id: 4,
      interestRate:
        "2.50% APY fixed rate guaranteed for the entire 60-month term. Interest compounds daily for maximum returns. Option to have interest disbursed to another account monthly or quarterly.",
      minimumDeposit:
        "$1,000 minimum opening deposit. No monthly maintenance fees. Substantial early withdrawal penalty equals 180 days of interest on the amount withdrawn. Additional deposits not permitted during term.",
      term: "60 months (5 years) fixed term. One-time rate bump option available if rates increase during term (customer must request). 15-day grace period after maturity for withdrawal or renewal decisions.",
      details:
        "Lock in our highest CD rate with this 5-year term certificate. Ideal for long-term savings goals like education or retirement supplementation. Interest compounds daily for maximum returns. Special relationship rates available for customers with premium checking accounts.",
    },
    {
      id: 5,
      interestRate:
        "2.25% APY fixed rate guaranteed for the entire 36-month term. Tax advantages vary based on IRA type. Consult with tax advisor for specific benefits based on your situation.",
      minimumDeposit:
        "$2,000 minimum opening deposit. Annual IRA custodial fee of $30 (waived for balances over $25,000). Early withdrawal penalties apply, though certain IRA distributions may qualify for penalty exceptions.",
      term: "36 months (3 years) fixed term. Automatic renewal available. Special IRA required minimum distribution (RMD) options for customers over 72. Additional IRA contribution options available annually.",
      details:
        "Our IRA CD combines the security of a certificate of deposit with the tax advantages of an Individual Retirement Account. Available for Traditional, Roth, and SEP IRAs. Consult with our retirement specialists for personalized advice. Annual contribution limits apply according to IRS regulations.",
    },
    {
      id: 6,
      interestRate:
        "0.60% APY for all balances. Rate guaranteed for 12 months after account opening. Bonus 0.25% APY when linked to student checking account with at least one direct deposit per month.",
      minimumDeposit:
        "$10 minimum opening deposit. No monthly maintenance fees for students aged 16-24 with valid student ID. Maximum balance limit of $25,000; balances over this amount earn standard savings rate.",
      term: "No fixed term. Account automatically converts to standard savings account upon reaching age 25. Unlimited deposits and up to six withdrawals per month without penalty.",
      details:
        "Designed for students aged 16-24, this account features no minimum balance requirements, no monthly fees, and a competitive interest rate. Includes financial literacy resources and budgeting tools. Mobile banking app with special student features including educational content and savings goals tracking.",
    },
    {
      id: 7,
      interestRate:
        "0.90% APY for balances under $25,000. 1.10% APY for balances $25,000-$99,999. 1.30% APY for balances $100,000 and above. Rates may vary based on market conditions.",
      minimumDeposit:
        "$5,000 minimum opening deposit. $20 monthly service fee waived with $10,000 minimum daily balance. Limited to six withdrawals or transfers per statement cycle. Business documentation required.",
      term: "No fixed term. Account remains active as long as business remains in good standing. Excessive transaction fees apply for more than six withdrawals per statement cycle per federal regulations.",
      details:
        "Tailored for businesses looking to earn interest on excess cash while maintaining liquidity. Includes business online banking tools, cash management services, and dedicated business banking support. Integration with accounting software available. Special rates for non-profit organizations.",
    },
    {
      id: 8,
      interestRate:
        "2.00% APY fixed rate guaranteed for the entire 18-month term. Limited-time promotional rate, subject to change without notice for new accounts. Interest compounds daily.",
      minimumDeposit:
        "$1,000 minimum opening deposit. No monthly maintenance fees. Early withdrawal penalty equals 180 days of interest on the amount withdrawn. One-time additional deposit of up to $10,000 permitted during term.",
      term: "18 months fixed term. One-time rate bump available if rates increase during the term (customer must request). Automatic renewal into standard 18-month CD at maturity unless otherwise specified.",
      details:
        "Limited-time promotional CD with special rate. Perfect for medium-term savings goals. One-time rate bump available if rates increase during the term. Automatic renewal into standard 18-month CD at maturity. Special relationship rates available for customers with premium checking accounts.",
    },
    {
      id: 9,
      interestRate:
        "1.50% APY for balances under $50,000. 1.75% APY for balances $50,000-$99,999. 2.00% APY for balances $100,000 and above. Rates guaranteed for 12 months after account opening.",
      minimumDeposit:
        "$25,000 minimum opening deposit or $50,000 in combined deposit and investment accounts. $35 monthly service fee waived with $50,000 minimum daily balance or $100,000 in combined accounts.",
      term: "No fixed term. Relationship must be maintained to keep account benefits. Annual relationship review required. 90-day notice recommended for large withdrawals to avoid temporary rate reductions.",
      details:
        "Our premium account for high-value clients combines high interest rates with personalized service. Includes fee waivers on other accounts, preferential loan rates, and dedicated relationship manager. Exclusive access to investment opportunities and financial planning services. Complimentary safe deposit box and premium checks.",
    },
  ]

  const initialRows = 5
  const [data] = useState<RowData[]>(financialData)

  const handleSort = (columnIndex: number) => {
    // If clicking on the same column, toggle direction
    if (sortColumn === columnIndex) {
      if (sortDirection === "asc") {
        setSortDirection("desc")
      } else if (sortDirection === "desc") {
        setSortDirection(null)
        setSortColumn(null)
      } else {
        setSortDirection("asc")
      }
    } else {
      // New column, start with ascending
      setSortColumn(columnIndex)
      setSortDirection("asc")
    }
  }

  // Helper function to extract numeric values from strings
  const extractNumber = (value: string): number => {
    // Extract numbers from strings like "$1,000" or "0.50% APY"
    const matches = value.match(/[\d,.]+/g)
    if (!matches) return 0

    // Join matches and replace commas
    return Number.parseFloat(matches.join("").replace(/,/g, ""))
  }

  // Helper function to extract months from term
  const extractMonths = (term: string): number => {
    if (term.includes("No fixed term")) return 0

    const matches = term.match(/(\d+)\s*(\w+)/)
    if (!matches) return 0

    const value = Number.parseInt(matches[1])
    const unit = matches[2].toLowerCase()

    if (unit.includes("month")) return value
    if (unit.includes("year")) return value * 12

    return value
  }

  // Sort the data based on current sort settings
  const sortedData = [...data]
  if (sortColumn !== null && sortDirection !== null) {
    sortedData.sort((a, b) => {
      let valueA, valueB, numA, numB

      switch (sortColumn) {
        case 0: // Interest Rate (numerical)
          numA = extractNumber(a.interestRate)
          numB = extractNumber(b.interestRate)
          return sortDirection === "asc" ? numA - numB : numB - numA

        case 1: // Minimum Deposit (numerical)
          numA = extractNumber(a.minimumDeposit)
          numB = extractNumber(b.minimumDeposit)
          return sortDirection === "asc" ? numA - numB : numB - numA

        case 2: // Term (special handling)
          numA = extractMonths(a.term)
          numB = extractMonths(b.term)
          return sortDirection === "asc" ? numA - numB : numB - numA
        case 3: // Details (alphabetical)
          valueA = a.details
          valueB = b.details
          return sortDirection === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)

        default:
          return 0
      }
    })
  }

  // Get visible rows based on showAllRows state
  const visibleData = showAllRows ? sortedData : sortedData.slice(0, initialRows)

  return (
    <div className="rounded-md overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto" style={{ minWidth: "100%" }}>
        <div style={{ minWidth: "800px" }}>
          {/* Header Bar */}
          <div className="bg-[#00143d] text-white p-3 grid grid-cols-12 gap-4">
            {headers.map((header, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 cursor-pointer pl-3 ${
                  index === 3 ? "col-span-6" : "col-span-2"
                }`}
                onClick={() => handleSort(index)}
              >
                <span className="text-sm font-medium">{header}</span>
                {sortColumn === index ? (
                  sortDirection === "asc" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : sortDirection === "desc" ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <SortIcon />
                  )
                ) : (
                  <SortIcon />
                )}
              </div>
            ))}
          </div>

          {/* Table Content */}
          <div>
            {visibleData.map((row, rowIndex) => (
              <div key={row.id} className={`${rowIndex % 2 === 1 ? "bg-[#F6FAFF]" : "bg-white"}`}>
                {/* Row cells */}
                <div className="grid grid-cols-12 gap-4">
                  <div className="flex items-start p-3 pl-3 col-span-2">
                    <span className="text-sm">{row.interestRate}</span>
                  </div>

                  <div className="flex items-start p-3 col-span-2">
                    <span className="text-sm">{row.minimumDeposit}</span>
                  </div>

                  <div className="flex items-start p-3 col-span-2">
                    <span className="text-sm">{row.term}</span>
                  </div>

                  <div className="flex items-start p-3 col-span-6">
                    <span className="text-sm">{row.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {visibleData.map((row) => (
          <div key={row.id} className="bg-white rounded-md shadow p-4 border border-[#c1c7d3]">
            {/* Card with clear headers */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[#00143d] mb-1">Interest Rate & APY</h3>
                <p className="text-sm">{row.interestRate}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#00143d] mb-1">Minimum Deposit & Requirements</h3>
                <p className="text-sm">{row.minimumDeposit}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#00143d] mb-1">Term & Duration</h3>
                <p className="text-sm">{row.term}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#00143d] mb-1">Additional Information</h3>
                <p className="text-sm">{row.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Link */}
      {data.length > initialRows && (
        <div className="text-center py-4">
          <Link
            href="#"
            className="text-[#0157ff] text-sm"
            onClick={(e) => {
              e.preventDefault()
              setShowAllRows(!showAllRows)
            }}
          >
            {showAllRows ? "View less" : "View more"}
          </Link>
        </div>
      )}
    </div>
  )
}
