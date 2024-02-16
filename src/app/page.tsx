'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <main className="w-fit">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </main>
  )
}
