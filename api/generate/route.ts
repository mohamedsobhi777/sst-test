export async function main() {
    console.log("Message queued locally from queue!");
    return {
        statusCode: 200,
        body: JSON.stringify({ status: "successful" }),
    };
}
