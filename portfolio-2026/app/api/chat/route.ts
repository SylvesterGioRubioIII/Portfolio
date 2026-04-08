// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { portfolioKnowledge } from "@/lib/portfolio-knowledge";

async function getOpenAIResponse(
    message: string,
    conversationHistory: Array<{ role: string; content: string }>
) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY is not set");
    }

    // Build conversation messages
    const messages = [
        {
            role: "system",
            content: `You are a helpful AI assistant for a developer portfolio website. Use the following information to answer questions about the portfolio owner and their work:

${portfolioKnowledge}

Answer questions in a friendly, professional manner. If asked about something not in the knowledge base, politely say you don't have that information. Keep responses concise but informative.`,
        },
        ...conversationHistory.slice(-10), // Keep last 10 messages for context
        { role: "user", content: message },
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages,
            temperature: 0.7,
            max_tokens: 500,
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || "OpenAI API error");
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

export async function POST(request: NextRequest) {
    try {
        const { message, conversationHistory = [] } = await request.json();

        if (!message || typeof message !== "string") {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const response = await getOpenAIResponse(message, conversationHistory);
        return NextResponse.json({ response });
    } catch (error: unknown) {
        console.error("Chat API error:", error);
        const errorMessage =
            error instanceof Error ? error.message : "Failed to get AI response";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}