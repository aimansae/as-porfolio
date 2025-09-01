"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();
  const text = "et in touch";
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
    <div className="flex h-full flex-col items-center justify-center">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 sm:gap-6">
          {/* Left Side (Heading + Info) */}
          <div className="relative z-40 flex flex-col items-start justify-between gap-4">
            <h1 className="[font-family:var(--font-bungee)] text-2xl tracking-wide sm:text-3xl">
              <span className="block">{displayedText}</span>
            </h1>

            <h2 className="[font-family:var(--font-bungee)] text-xl tracking-wide sm:py-4 sm:text-2xl md:gap-6">
              Let’s build something great
            </h2>
            <div className="tracking-wider md:block">
              <p className="text-sm font-semibold tracking-wide text-gray-300 sm:text-base">
                Feel free to reach out for collaborations, questions, or just a
                friendly hello. I&apos;ll get back to you as soon as possible!
              </p>
            </div>
          </div>

          {/* Right Side (Form) */}
          {status ? (
            <div
              className={`my-4 flex items-start justify-between rounded-md p-3 text-sm shadow-md ${
                status.type === "success"
                  ? "border border-green-400 bg-green-200/80 text-green-800"
                  : "border border-red-400 bg-red-200/80 text-red-800"
              }`}
            >
              <span className="flex-1 text-xs sm:text-sm">
                {status.message}
              </span>
              <X
                size={18}
                onClick={() => setStatus(null)}
                className="transform cursor-pointer transition-transform hover:scale-110"
              />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-2 rounded-2xl pb-2 shadow-2xl backdrop-blur-xl sm:gap-4"
            >
              {/* Name */}
              <div className="flex gap-2 sm:justify-between sm:gap-4">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="mb-1 hidden text-sm font-medium text-gray-300 sm:block"
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
                    className="w-full rounded-lg border border-gray-700 px-3 py-2 text-white placeholder-gray-400 transition placeholder:text-xs focus:border-[#bc4414] focus:ring-2 focus:ring-[#bc4414] focus:outline-none sm:px-4 sm:py-3 placeholder:sm:text-sm"
                  />
                </div>

                {/* Email */}
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="mb-1 hidden text-sm font-medium text-gray-300 sm:block"
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
                    className="w-full rounded-lg border border-gray-700 px-3 py-2 text-white placeholder-gray-400 transition placeholder:text-xs focus:border-[#bc4414] focus:ring-2 focus:ring-[#bc4414] focus:outline-none sm:px-4 sm:py-3 placeholder:sm:text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="">
                <label
                  htmlFor="message"
                  className="mb-1 hidden text-sm font-medium text-gray-300 sm:block"
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
                  className="h-24 w-full rounded-lg border border-gray-700 px-4 py-3 text-white placeholder-gray-400 transition focus:border-[#bc4414] focus:ring-2 focus:ring-[#bc4414] focus:outline-none sm:block"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="sm:text-basefont-medium w-max cursor-pointer rounded-lg border border-transparent bg-[#bc4414] px-6 py-2 [font-family:var(--font-bungee)] text-sm text-white shadow-lg transition-colors hover:bg-[#993209]"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default ContactForm;
