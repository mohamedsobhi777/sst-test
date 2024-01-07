import { sendQueueMessage } from "@/actions/send-queue-message";

export default async function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={sendQueueMessage}>
        <button type="submit">
          Don&apos; click me!
        </button>
      </form>
    </main>
  )
}
