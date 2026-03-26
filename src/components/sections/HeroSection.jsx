import profilePic from "../../../public/picture.jpg";
import { profile } from "../../data/profile";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineEnvelope,
  HiOutlineDocumentArrowDown,
} from "react-icons/hi2";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] md:items-start">
      <div className="flex justify-center md:justify-start">
        <img
          src={profilePic}
          alt={profile.name}
          className="h-84 w-56 rounded-2xl object-cover shadow-md"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Backend-Focused Full-Stack Developer / Internal Systems Developer
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/Sirakoon"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-accent"
          >
            <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sirawit-leamlert"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-accent"
          >
            <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            <HiOutlineDocumentArrowDown className="h-4 w-4" />
            Resume
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-accent"
          >
            <HiOutlineEnvelope className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <p>{profile.location}</p>
            <p>{profile.phone}</p>
            <p>{profile.email}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Personal Objectives</h2>
          <p className="mt-2 leading-7 text-muted-foreground">
            Backend-focused full-stack developer with hands-on experience
            building internal systems for engineering operations. Strong in
            designing REST APIs with Node.js/Express, MSSQL database flows,
            CRUD-based business systems, and workflow automation using Node-RED
            and Power Automate. Experienced in solving real operational problems
            such as calibration tracking, equipment borrowing, stock control,
            and monitoring visibility through practical internal tools.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-2 text-muted-foreground">
            <p>{profile.education.degree}</p>
            <p>{profile.education.university}</p>
            <p>{profile.education.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
}