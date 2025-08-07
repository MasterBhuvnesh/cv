"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 404 Icon */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
            <Image
              src="/cat.jpg"
              alt="404 Cat"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </div>

        {/* Action Card */}
        <Card className="border-border bg-card">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              What would you like to do?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1"
              >
                <Link
                  href="/"
                  className="flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>

              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="flex-1 flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <div className="text-xs text-muted-foreground space-y-2">
          <p>If you believe this is an error, please contact me:</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="mailto:bhuvneshverma2904@gmail.com"
              className="hover:text-foreground transition-colors underline"
            >
              Email
            </Link>
            <Link
              href="https://linkedin.com/in/bhuvneshverma"
              className="hover:text-foreground transition-colors underline"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/masterbhuvnesh"
              className="hover:text-foreground transition-colors underline"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
