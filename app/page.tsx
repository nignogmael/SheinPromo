import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 pb-10">
      <div className="w-full max-w-md mx-auto">
        {/* Header Card */}
        <div className="bg-black text-white p-6 rounded-b-none rounded-t-lg">
          <h1 className="text-3xl font-bold mb-1">$750</h1>
          <div className="flex justify-center my-4">
            <Image src="/images/shein-logo.png" alt="SHEIN" width={250} height={80} priority />
          </div>
          <div className="flex justify-end items-center text-xs">
            <span className="mr-1">Verified By TikTok</span>
            <span className="text-blue-400 text-lg">●</span>
          </div>
        </div>

        {/* Timer Section */}
        <CountdownTimer />

        {/* Quick Start Guide */}
        <div className="bg-white p-5 mt-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold flex items-center">
            Quick Start Guide <ArrowRight className="ml-2 h-4 w-4" />
          </h3>

          <div className="mt-4 space-y-4">
            <div className="flex">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold">Complete 2-3 required deals</p>
                <p className="text-red-600 text-sm">Earn up to $750</p>
              </div>
            </div>

            <div className="flex">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold">Provide a valid email address</p>
                <p className="text-red-600 text-sm">For instant notification</p>
              </div>
            </div>

            <div className="flex">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold">Ensure you are 18 years or older</p>
                <p className="text-red-600 text-sm">Required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Questions */}
        <div className="bg-white p-5 mt-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold flex items-center">
            Common Questions <ArrowRight className="ml-2 h-4 w-4" />
          </h3>

          <div className="mt-4">
            <p className="text-red-600 font-medium">How long do the deals take?</p>
            <p className="font-medium">Quick 10-20 minute completion time per deal</p>

            <p className="text-red-600 font-medium mt-3">What kind of tasks are required?</p>
            <p className="font-medium">Simple tasks like app downloads, surveys, or sign-ups</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://glstrck.com/aff_c?offer_id=1304&aff_id=5383"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-4"
        >
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg text-lg">
            Start Earning Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-4">Limited time offer. Terms and conditions apply.</p>
      </div>
    </main>
  )
}
