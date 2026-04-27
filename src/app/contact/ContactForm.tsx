"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "Custom Software Development",
  "Business Systems Design",
  "AI-Assisted Development",
  "Automation & Internal Tools",
  "Digital Operations Consulting",
  "Platform Architecture",
  "Training & Skills Development",
  "Tradecraft Thuto",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", company: "", service: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 p-8 bg-surface border border-gold/20 rounded-2xl">
        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-[17px] font-bold text-off-white mb-1">
            Message sent.
          </h3>
          <p className="text-[14px] text-muted leading-relaxed">
            We&apos;ve received your enquiry and will get back to you within
            1–2 business days.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-[13px] font-medium text-gold hover:text-gold-light transition-colors"
        >
          Send another message →
        </button>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-[12px] font-medium text-muted mb-2"
            htmlFor="name"
          >
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={update}
            className="w-full px-4 py-3 bg-surface border border-white/[0.08] rounded-lg text-[14px] text-off-white placeholder-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            className="block text-[12px] font-medium text-muted mb-2"
            htmlFor="email"
          >
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update}
            className="w-full px-4 py-3 bg-surface border border-white/[0.08] rounded-lg text-[14px] text-off-white placeholder-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label
          className="block text-[12px] font-medium text-muted mb-2"
          htmlFor="company"
        >
          Company / Organisation{" "}
          <span className="text-muted/40">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={update}
          className="w-full px-4 py-3 bg-surface border border-white/[0.08] rounded-lg text-[14px] text-off-white placeholder-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
          placeholder="Company name"
        />
      </div>

      <div>
        <label
          className="block text-[12px] font-medium text-muted mb-2"
          htmlFor="service"
        >
          Area of Interest
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={update}
          className="w-full px-4 py-3 bg-surface border border-white/[0.08] rounded-lg text-[14px] text-off-white focus:outline-none focus:border-gold/40 transition-colors appearance-none"
        >
          <option value="">Select a service area</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          className="block text-[12px] font-medium text-muted mb-2"
          htmlFor="message"
        >
          What are you working on? <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          className="w-full px-4 py-3 bg-surface border border-white/[0.08] rounded-lg text-[14px] text-off-white placeholder-muted/40 focus:outline-none focus:border-gold/40 transition-colors resize-none"
          placeholder="Tell us about your project, problem, or requirement. The more context you give, the better we can respond."
        />
      </div>

      {status === "error" && (
        <p className="text-[13px] text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-navy font-semibold text-[14px] rounded transition-colors duration-150"
      >
        {isLoading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
