import { profile } from "../data/profile";

// Drop this wherever the current photo is rendered (Hero or About).
// The image is only cropped and resized. Nothing in the face is edited.
// Use size="lg" in the hero and size="md" in About.
const SIZES = {
  md: "w-48 sm:w-56",
  lg: "w-56 sm:w-72 lg:w-80",
};

export default function ProfilePhoto({ size = "lg", className = "" }) {
  return (
    <div
      className={`relative ${SIZES[size]} aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 ${className}`}
    >
      <img
        src={profile.photo.portrait}
        alt={`${profile.name}, ${profile.role}`}
        width={1000}
        height={1250}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover object-[50%_20%]"
      />
      {/* thin inner highlight so the grey photo background sits well on a dark page */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}
