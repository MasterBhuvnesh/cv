"use client";

import Image from "next/image";
import {
  MapPin,
  Globe,
  Phone,
  Mail,
  Download,
  MessageCircle,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileCard() {
  return (
    <>
      {/* Mobile Header Card */}
      <div className="lg:hidden">
        <Card className="m-4 shadow-sm bg-gray-100 rounded-3xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Alex Morgan"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-lg font-bold text-gray-900">
                    Hello I'm
                    <br />
                    Alex Morgan
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Web Designer, Content Creator & writer.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">
                      Available for work
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">Berlin, Germany</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-80 xl:w-96 lg:fixed lg:left-4 xl:left-8 2xl:left-16 lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
        <div className="m-4 lg:m-0 space-y-4">
          {/* Profile Info Card - Top Section */}
          <Card className="shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Alex Morgan"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  Hello I'm
                  <br />
                  Alex Morgan
                </h1>
                <p className="text-gray-600">
                  Web Designer, Content
                  <br />
                  Creator & writer.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Available for work
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Berlin, Germany</span>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card - Bottom Section */}
          <Card className="shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Globe className="w-4 h-4" />
                <span className="text-sm">InstantDesign.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1356-77882-0082</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Instantcraft@Studio.in</span>
              </div>

              <div className="space-y-3 pt-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:scale-[1.02] transition-all duration-200 ease-in-out"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
