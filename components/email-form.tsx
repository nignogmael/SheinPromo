"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function EmailForm() {
  const [email, setEmail] = useState("")
  const [isAgeVerified, setIsAgeVerified] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ email, isAgeVerified })
    // Redirect to the specified URL
    window.location.href = "https://glstrck.com/aff_c?offer_id=1304&aff_id=5383"
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="age"
          checked={isAgeVerified}
          onCheckedChange={(checked) => setIsAgeVerified(checked as boolean)}
          required
        />
        <Label htmlFor="age" className="text-sm">
          I confirm that I am 18 years or older
        </Label>
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
        Submit
      </Button>
    </form>
  )
}
