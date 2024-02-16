import { Checkbox } from '@/components/ui/checkbox'

export default function Home() {
  return (
    <main>
      <div className="flex items-center space-x-2">
        <Checkbox size="large" id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </main>
  )
}
