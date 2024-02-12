import { RocketIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Home() {
  return (
    <main>
      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </main>
  )
}
