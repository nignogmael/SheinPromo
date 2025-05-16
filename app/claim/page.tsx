import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { EmailForm } from "@/components/email-form"

export default function ClaimPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 p-6">
      <div className="w-full max-w-md mx-auto">
        <Link href="/" className="flex items-center text-gray-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">Claim Your $750 SHEIN Gift Card</h1>

          <div className="mb-6">
            <h2 className="font-semibold mb-2">How it works:</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Enter your email address below</li>
              <li>Complete 2-3 sponsored offers</li>
              <li>Receive your gift card code via email</li>
            </ol>
          </div>

          <EmailForm />
        </div>
      </div>
    </main>
  )
}
