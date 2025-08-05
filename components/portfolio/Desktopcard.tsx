import React from "react";
import { MapPin, Globe, Mail, Download, Users, Eye } from "lucide-react";

import { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`border border-gray-200 ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }: CardProps) => (
  <div className={className}>{children}</div>
);

type ButtonProps = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "default",
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";
  const variants: { [key in "default" | "outline"]: string } = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const ProfileSidebar = () => {
  return (
    <div className="hidden lg:block lg:w-64 xl:w-72 lg:fixed lg:left-4 xl:left-8 2xl:left-16 lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto scrollbar-hide">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="m-4 lg:m-0 space-y-6">
        {/* Profile Info Card - Top Section */}
        <Card className="shadow-sm bg-white rounded-3xl">
          <CardContent className="p-8 space-y-6">
            <div className="flex justify-center">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=112&h=112&fit=crop&crop=face"
                  alt="Sophie Bennett"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-xl font-semibold text-gray-900">
                  Sophie Bennett
                </h1>
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Product Designer who focuses on simplicity & usability.
              </p>
              <Button
                className="bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out px-8 rounded-full"
                onClick={() => {}}
              >
                Follow +
              </Button>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>312</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Eye className="w-4 h-4" />
                <span>48</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out px-8 rounded-full">
                Follow +
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info Card - Bottom Section */}
        <Card className="shadow-sm bg-gray-100 rounded-3xl">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Globe className="w-4 h-4" />
              <span className="text-xs">sophiebennett.design</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-xs break-all">
                <Download className="w-4 h-4 mr-2" />
                Download Portfolio
              </span>
              <span className="text-xs break-all">
                sophie.bennett@example.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">New York, USA</span>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                variant="outline"
                className="w-full bg-transparent hover:scale-[1.02] transition-all duration-200 ease-in-out rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Portfolio
              </Button>
              <Button
                className="w-full bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out rounded-full"
                onClick={() =>
                  (window.location.href = "mailto:sophie.bennett@example.com")
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSidebar;
