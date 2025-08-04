// components/portfolio/ContactSection.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">CONTACT ME</h2>
      <form className="bg-white p-6 rounded-lg border space-y-4 hover:shadow-md transition-all duration-200 ease-in-out">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message..."
            rows={4}
          />
        </div>
        <Button className="w-full bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out">
          Submit
        </Button>
      </form>
    </section>
  );
}
