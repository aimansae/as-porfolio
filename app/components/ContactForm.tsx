"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();
  const text = "et in touch!";
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [displayedText, setDisplayedText] = useState("g");
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);

        setIndex((prev) => prev + 1);
      } else {
        setDisplayedText("g");
        setIndex(0);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index]);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Your message was sent successfully, we will contact you shortly",
        });

        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
        setTimeout(() => {
          setStatus(null);
          router.push("/");
        }, 2000);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong",
        });
      }
    } catch (error) {
      console.log(error);
      setStatus({ type: "error", message: "Failed to send the message" });
    }

    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };
  return (
    <section className="p-4 md:p-8 lg:px-4 lg:py-8">
      {/* Header */}
      <header>
        <h1>
          <span className="block">{displayedText}</span>
        </h1>
      </header>

      <div className="py-6">
        <h2 className="py-4 [font-family:var(--font-bungee)] text-xl tracking-wide sm:text-2xl">
          Let’s build something great
        </h2>
        <p className="my-4 text-sm font-semibold tracking-wide text-gray-300 sm:text-base">
          Feel free to reach out for collaborations, questions, or just a
          friendly hello. I&apos;ll get back to you as soon as possible!
        </p>

        {/* Status message */}
        {status ? (
          <div
            className={`flex items-start justify-between rounded-md p-3 text-sm shadow-md ${
              status.type === "success"
                ? "border border-green-400 bg-green-200/80 text-green-800"
                : "border border-red-400 bg-red-200/80 text-red-800"
            }`}
          >
            <span className="flex-1 text-xs sm:text-sm">{status.message}</span>
            <X
              size={18}
              onClick={() => setStatus(null)}
              className="transform cursor-pointer transition-transform hover:scale-110"
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            {/* Name + Email */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  required
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-orange-400/40 bg-transparent bg-gradient-to-br from-gray-900/60 to-black/40 p-6 px-3 py-2 text-white placeholder-gray-400 shadow-[0_0_10px_rgba(251,146,60,0.3)] backdrop-blur-md transition-colors duration-500 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(218,88,36,0.6)] focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none sm:px-4 sm:py-3"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  required
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  className="hover:shadow-[0_0_15px_rgba(218,88,36,0.6)]w-full w-full rounded-lg border border-orange-400/40 bg-transparent bg-gradient-to-br from-gray-900/60 to-black/40 p-6 px-3 py-2 text-white placeholder-gray-400 shadow-[0_0_10px_rgba(251,146,60,0.3)] backdrop-blur-md transition-colors duration-500 hover:border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none sm:px-4 sm:py-3"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                placeholder="Type your message..."
                className="h-28 w-full rounded-lg border border-orange-400/40 bg-transparent bg-gradient-to-br from-gray-900/60 to-black/40 p-6 px-3 py-2 text-white placeholder-gray-400 shadow-[0_0_10px_rgba(251,146,60,0.3)] backdrop-blur-md transition transition-all duration-500 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(218,88,36,0.6)] focus:outline-none sm:px-4 sm:py-3"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-max rounded-lg border border-transparent bg-[#bc4414] px-6 py-2 [font-family:var(--font-bungee)] text-sm text-white shadow-lg transition hover:bg-[#993209] sm:text-base"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
export default ContactForm;
