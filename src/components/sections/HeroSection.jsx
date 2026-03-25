import profilePic from "../../assets/images/picture.jpg";
import { profile } from "../../data/profile";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] md:items-start">
      <div className="flex justify-center md:justify-start">
        <img
          src={profilePic}
          alt={profile.name}
          className="h-56 w-56 rounded-2xl object-cover shadow-md"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{profile.title}</p>
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
            {profile.objective}
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