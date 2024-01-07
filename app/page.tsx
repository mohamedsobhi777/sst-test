
import Image from 'next/image'
import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";

const sqs = new AWS.SQS();

export default async function Home() {

  await sqs
    .sendMessage({
      // Get the queue url from the environment variable
      QueueUrl: Queue.Queue.queueUrl,
      MessageBody: JSON.stringify({ ordered: true }),
    })
    .promise();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      hello
    </main>
  )
}
