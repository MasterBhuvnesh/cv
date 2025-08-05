"use client";

import Image from "next/image";
import { MapPin, Globe, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProfileSidebar from "./Desktopcard";

export function ProfileCard() {
  return (
    <>
      {/* Mobile Header Card */}
      <div className="lg:hidden">
        <Card className="m-4 shadow-sm bg-gray-100 rounded-3xl">
          <CardContent className="p-4">
            {/* row 1 */}
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/Bhuvnesh_Verma.png?height=128&width=128"
                  alt="Bhuvnesh Verma"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover object-top "
                />
              </div>
              <div className="flex-1">
                <h1 className="text-lg text-gray-900 leading-tight">
                  Hello I'm
                  <br />
                  Bhuvnesh Verma
                </h1>
                <p className="text-xs text-gray-600 mt-1">
                  Software Engineer, Polyglot Developer & Solution Architect
                </p>
              </div>
            </div>
            {/* row 2 */}
            <div className="flex flex-row justify-evenly mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">
                  Available for work
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">Nagpur , India</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <Card className="m-4 shadow-sm bg-gray-100 rounded-3xl">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Globe className="w-4 h-4" />
              <span className="text-xs">domain</span>
            </div>
          </CardContent>
        </Card> */}
        <div className="m-4 flex flex-row gap-3">
          <Button
            variant="outline"
            className="w-full bg-transparent hover:scale-[1.02] transition-all duration-200 ease-in-out"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button
            className="w-full bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out"
            onClick={() =>
              (window.location.href = "mailto:bhuvneshverma2904@gmail.com")
            }
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-64 xl:w-72 lg:fixed lg:ml-[100px] lg:left-4 xl:left-8 2xl:left-16 lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto scrollbar-hide">
        <div className="m-4 lg:m-0">
          <Card className="shadow-sm bg-white rounded-xl">
            <CardContent className="p-6 space-y-6">
              {/* Image with 100% width */}
              <div className="rounded-2xl overflow-hidden shadow-md w-full">
                <Image
                  src="/Bhuvnesh_Verma.png"
                  alt="Bhuvnesh Verma"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-top"
                  style={{
                    aspectRatio: "1/1",
                  }}
                />
              </div>

              {/* Name and title */}
              <div className="text-center space-y-2">
                <h1 className="text-xl text-gray-900 font-medium leading-tight">
                  Hello I'm
                  <br />
                  Bhuvnesh Verma
                </h1>
                <p className="text-gray-600 text-base">
                  Software Engineer, Polyglot Developer & Solution Architect
                </p>
              </div>

              {/* Availability and location */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Available for work
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Nagpur, India</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 bg-transparent hover:bg-gray-50 hover:scale-[1.02] transition-all duration-200 ease-in-out"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out"
                  onClick={() =>
                    (window.location.href =
                      "mailto:bhuvneshverma2904@gmail.com")
                  }
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </div>

              {/* Contact info */}
              <div className="pt-4 space-y-3 border-t border-gray-100">
                <div className="flex items-center gap-3 text-gray-600">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs">bhuvneshverma.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs break-all">
                    bhuvneshverma2904@gmail.com
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
