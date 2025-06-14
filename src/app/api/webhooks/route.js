import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req);

    if (evt.type === "user.created") {
      console.log("userId: created", evt.data.id);
    }
    if (evt.type === "user.updated") {
      console.log("userId: updated", evt.data.id);
    }
    if (evt.type === "user.deleted") {
      console.log("userId: deleted", evt.data.id);
    }
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
