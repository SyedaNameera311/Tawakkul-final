import { useState } from "react";

export default function TawakkulChat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Assalamu Alaikum 👋 I'm Tawakkul's assistant. How can I help you explore the platform?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#070605] px-6 py-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-xl text-amber-400">
            ✦
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Tawakkul Assistant
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Ask. Reflect. Understand.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            Explore Tawakkul, Islamic learning, Quran, Seerah and the
            different paths available on our platform.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-xl">
          <div className="max-h-[500px] min-h-[300px] space-y-5 overflow-y-auto p-6 sm:p-8">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-7 ${
                    item.role === "user"
                      ? "bg-amber-400 text-black"
                      : "border border-white/10 bg-white/[0.04] text-white/70"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/40">
                  Tawakkul is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-4 sm:p-5">
            <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-black/20 p-2">
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask Tawakkul something..."
                className="min-h-[48px] flex-1 resize-none bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/25"
              />

              <button
                onClick={sendMessage}
                disabled={loading || !message.trim()}
                className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send
              </button>
            </div>

            <p className="mt-3 text-center text-[10px] text-white/20">
              Tawakkul AI provides general information and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}