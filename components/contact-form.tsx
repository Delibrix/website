"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const canSubmit = useMemo(() => {
    return !!(form.name.trim() && form.email.trim() && form.message.trim());
  }, [form]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong while sending your message.");
      }

      setStatus("success");
      setStatusMessage(
        payload.message || "Thanks, your inquiry was sent successfully. Our team will contact you soon.",
      );
      setForm(initialFormState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send right now. Please try again in a few minutes.";
      setStatus("error");
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
      <label className="grid gap-2 text-sm">
        Name
        <input
          className="input-field"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          required
        />
      </label>

      <label className="grid gap-2 text-sm">
        Work email
        <input
          className="input-field"
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          required
        />
      </label>

      <label className="grid gap-2 text-sm">
        Company
        <input
          className="input-field"
          type="text"
          placeholder="Company name"
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        />
      </label>

      <label className="grid gap-2 text-sm">
        Project goals
        <textarea
          className="input-field min-h-32"
          placeholder="Briefly describe your challenge and expected outcomes"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          required
        />
      </label>

      <button
        type="submit"
        className="btn-primary mt-2 w-fit disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!canSubmit || isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit inquiry"}
      </button>

      {status !== "idle" ? (
        <p className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-700"}`}>
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
