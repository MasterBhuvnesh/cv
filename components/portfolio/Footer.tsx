// components/portfolio/Footer.tsx
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span className="text-sm">by Alex Morgan</span>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <span>© 2024 Alex Morgan</span>
          <span>•</span>
          <span>All rights reserved</span>
        </div>
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="sr-only">Dribbble</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017 0 15.551 4.477 20.034 10 20.034s10-4.483 10-10.017C20 4.484 15.523 0 10 0zm6.823 4.608c1.14 1.204 1.857 2.781 1.857 4.531 0 .341-.035.673-.092.992-1.836-.37-3.869-.2-6.086.535-.569-.949-1.204-1.836-1.857-2.600 2.329-1.031 4.542-1.852 6.178-3.458zm-1.178 8.839c-2.758-2.07-5.226-2.08-8.511-1.07C5.69 11.013 4.668 9.38 4.668 7.486c0-1.458.52-2.786 1.380-3.824C8.18 4.9 10.017 6.35 11.645 8.447zm-7.99-6.733C6.350 7.897 5.668 9.18 5.668 10.486c0 .341.035.673.092.992-1.836-.37-3.869-.2-6.086.535-.569-.949-1.204-1.836-1.857-2.600 2.329-1.031 4.542-1.852 6.178-3.458z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
