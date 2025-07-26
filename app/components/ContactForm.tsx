"use client";

import React, { FormEvent, useState } from "react";
import { X } from "lucide-react";

const ContactForm = () => {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

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
  };
  return (
    <section className="min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className=" w-7xl bg-white/10 backdrop-blur-md p-10 shadow-2xl   space-y-6"
      >
        {status && (
          <div
            className={`flex items-start justify-between p-3 my-4 text-sm rounded-md 
  ${
    status.type === "success"
      ? "bg-green-200/80 text-green-800 border border-green-400"
      : "bg-red-200/80 text-red-800 border border-red-400"
  }`}
          >
            <span className="text-xs sm:text-sm flex-1"> {status.message}</span>
            <X
              size={18}
              onClick={() => setStatus(null)}
              className="transition-transform transform hover:scale-110  "
            />
          </div>
        )}
        <h2 className="text-2xl font-semibold text-white mb-6">Contact Me</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
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
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-200 placeholder:text-xs border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
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
            className="  w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-200 placeholder:text-xs border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            required
            value={formData.message}
            onChange={handleChange}
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-200 placeholder:text-xs border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="transition-colors cursor-pointer font-medium hover:bg-gray-950 px-4  py-2  sm:px-8 sm:py-3 rounded-lg border whitespace-nowrap border-gray-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
