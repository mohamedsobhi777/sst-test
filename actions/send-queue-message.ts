"use server";

import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";

const sqs = new AWS.SQS();

export const sendQueueMessage = async (values: any) => {
    try {
        await sqs
            .sendMessage({
                // Get the queue url from the environment variable
                QueueUrl: Queue.Queue.queueUrl,
                MessageBody: JSON.stringify({ ordered: true }),
            })
            .promise();
        console.log("Success server ack");
        return { success: "OK, Message Sent!" };
    } catch (error: any) {
        console.log("Failure server ack");
        return { error: error.message };
    }
};
