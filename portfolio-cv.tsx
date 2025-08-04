"use client"

import Image from "next/image"
import { MapPin, Globe, Phone, Mail, Download, MessageCircle, ChevronDown, ExternalLink, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Component() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null)

  const skills = ["Web Design", "UI/UX Design", "Front-end development", "Web Animations", "Copywriting", "Marketing"]

  const experience = [
    {
      company: "Layers",
      role: "Senior Web developer",
      period: "Aug 24 - Present",
      color: "bg-purple-100",
      icon: "🔷",
      description:
        "Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
    },
    {
      company: "Catalog",
      role: "Framer Developer",
      period: "Sep 2023 - Aug 24",
      color: "bg-blue-100",
      icon: "🔵",
      description:
        "Designed and implemented interactive prototypes and production-ready templates for startups. Specialized in creating visually compelling and user-centric Framer solutions.",
    },
    {
      company: "Adorn Agency",
      role: "Web designer",
      period: "Aug 2023 - Sep 23",
      color: "bg-green-100",
      icon: "🟢",
      description:
        "Delivered innovative website designs, focusing on user experience and brand alignment. Collaborated with teams to create polished, responsive web pages.",
    },
  ]

  const techStack = [
    { name: "Figma", icon: "F", bg: "bg-purple-100" },
    { name: "Framer", icon: "F", bg: "bg-black text-white" },
    { name: "HTML", icon: "H", bg: "bg-orange-100" },
    { name: "Notion", icon: "N", bg: "bg-gray-100" },
  ]

  const projects = [
    {
      title: "Slate",
      description:
        "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
      image: "https://i.pinimg.com/1200x/2d/ea/17/2dea17e8fed5af05616c83419234a67c.jpg",
      link: "#",
    },
    {
      title: "Anterafull",
      description:
        "A dynamic animation focused landing page highlighting creative storytelling and interactive elements.",
      image: "https://i.pinimg.com/564x/89/4c/d4/894cd4c4d4f4c8f0d4c4d4c4d4c4d4c4.jpg",
      link: "#",
    },
    {
      title: "Blurr",
      description: "A modern portfolio website with smooth animations and clean design aesthetics.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  const education = [
    {
      institution: "Berlin State University",
      degree: "Undergraduate in UI/UX",
      period: "Aug 24 - Present",
      icon: "🎓",
      description:
        "Focused on user-centered design, prototyping, and digital interfaces. Collaborated on design projects and participated in workshops using tools like Figma and Adobe XD.",
    },
    {
      institution: "GreenFields High School",
      degree: "High school diploma",
      period: "Sep 22 - Aug 24",
      icon: "🏫",
      description:
        "At GreenFields High School, I excelled in subjects such as Graphic Design and Technology, which sparked my interest in UI/UX. I also engaged in extracurricular activities, including leading the school's digital design club and creating digital assets for school events.",
    },
  ]

  const recognition = [
    { title: "Best Web Designer", organization: "Awwwards", year: "2023" },
    { title: "Best animations awards", organization: "Framer Awards", year: "2020" },
    { title: "Top visual designer of the year", organization: "Awwwards", year: "2020" },
  ]

  const recommendations = [
    {
      name: "Jonathan Carter",
      role: "Co-founder CTO",
      date: "February 2023",
      text: "Alex's ability to combine creativity with strategic thinking has transformed the way our team approaches challenges. He is quite in his element.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Johnson",
      role: "Head of Product, NextCorp",
      date: "February 2023",
      text: "Alex's leadership and vision have set a new standard for excellence, making a lasting impact on every project they lead. Highly recommend to work with him.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Samantha Lee",
      role: "COO, Innovate",
      date: "February 2023",
      text: "Alex consistently brings a fresh perspective to every project, fostering a collaborative environment that elevates the entire team.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const links = [
    { platform: "Book a call", url: "#" },
    { platform: "Dribbble", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "Instagram", url: "#" },
    { platform: "LinkedIn", url: "#" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8">
        {/* Fixed Profile Card - Desktop - Split into two sections */}
        <div className="lg:w-80 xl:w-96 lg:fixed lg:left-4 xl:left-8 2xl:left-16 lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <div className="m-4 lg:m-0 space-y-4">
            {/* Profile Info Card - Top Section */}
            <Card className="shadow-sm">
              <CardContent className="p-6 space-y-6">
                {/* Profile Photo */}
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

                {/* Name and Title */}
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

                {/* Status */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Available for work</span>
                </div>

                {/* Location */}
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

                {/* Action Buttons */}
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

        {/* Main Content - Scrollable with proper margin */}
        <div className="lg:ml-80 xl:ml-96 lg:pl-8 flex-1 p-4 lg:p-8 space-y-12">
          {/* About Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">ABOUT</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am Alex Morgan, a passionate Web Designer & Developer residing in the dynamic city of Berlin, Germany.
                My expertise lies at the intersection of visual design and technical implementation.
              </p>
              <p>
                With over 5 years of experience in creating visually stunning and user-centric websites, I've honed my
                skills in both front-end and back-end development.
              </p>
            </div>
          </section>

          {/* Skills Section - Individual Containers */}
          <section>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                SKILLS
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-700 px-6 py-4 rounded-2xl text-center font-medium hover:bg-gray-200 hover:scale-105 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section - Dropdown */}
          <section>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                EXPERIENCE
              </span>
            </div>
            <div className="space-y-4">
              {experience.map((job, index) => (
                <div key={index}>
                  <div
                    className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out"
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg ${job.color} flex items-center justify-center text-xl`}>
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{job.company}</h3>
                        <p className="text-gray-600 text-sm">{job.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{job.period}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedExperience === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {expandedExperience === index && (
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border animate-in slide-in-from-top-2 duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded ${job.color} flex items-center justify-center text-sm`}>
                            {job.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{job.company}</h4>
                            <p className="text-gray-600 text-sm">{job.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{job.period}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setExpandedExperience(null)
                            }}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">TECH STACK</h2>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 border rounded-lg flex items-center justify-center font-semibold hover:shadow-md hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer ${tech.bg}`}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">PROJECTS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <div className="aspect-video bg-gray-100">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <a href={project.link} className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                      Click to view <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section - Dropdown */}
          <section>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                EDUCATION
              </span>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div
                    className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out"
                    onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-xl">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                        <p className="text-gray-600 text-sm">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{edu.period}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedEducation === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {expandedEducation === index && (
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border animate-in slide-in-from-top-2 duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-sm">
                            {edu.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{edu.institution}</h4>
                            <p className="text-gray-600 text-sm">{edu.degree}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{edu.period}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setExpandedEducation(null)
                            }}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Recognition Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">RECOGNITION</h2>
            <div className="space-y-3">
              {recognition.map((award, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white rounded-lg border hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out cursor-pointer"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{award.title}</h3>
                    <p className="text-gray-600 text-sm">{award.organization}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{award.year}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recommendations Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">RECOMMENDATIONS</h2>
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      src={rec.avatar || "/placeholder.svg"}
                      alt={rec.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{rec.name}</h3>
                          <p className="text-gray-600 text-sm">{rec.role}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{rec.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{rec.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">LINKS</h2>
            <div className="grid grid-cols-2 gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out group"
                >
                  <span className="text-gray-700">{link.platform}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
              ))}
            </div>
          </section>

          {/* Contact Form Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">CONTACT ME</h2>
            <form className="bg-white p-6 rounded-lg border space-y-4 hover:shadow-md transition-all duration-200 ease-in-out">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={4} />
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200 ease-in-out">
                Submit
              </Button>
            </form>
          </section>

          {/* Footer */}
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
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">Dribbble</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
        </div>
      </div>
    </div>
  )
}
