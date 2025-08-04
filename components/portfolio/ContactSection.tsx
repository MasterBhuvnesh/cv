"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base  inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          CONTACT ME
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg border space-y-4 hover:shadow-md transition-all duration-200 ease-in-out"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm  text-gray-700 mb-1"
          >
            Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm  text-gray-700 mb-1"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm  text-gray-700 mb-1"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message..."
            rows={5}
            style={{ resize: "none" }}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`p-3 rounded-md text-sm ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out disabled:opacity-50 disabled:hover:scale-100"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
