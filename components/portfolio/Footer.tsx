// components/portfolio/Footer.tsx
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span className="text-sm">Made by Bhuvnesh Verma</span>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <span>© 2025 Bhuvnesh Verma</span>
          <span>•</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
