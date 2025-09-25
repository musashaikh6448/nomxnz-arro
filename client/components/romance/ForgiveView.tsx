import React from "react";
import { ArrowLeft, Sparkles, Send } from "lucide-react";

export default function ForgiveView({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-10 mx-auto my-8 flex w-full max-w-5xl flex-col items-center gap-6 rounded-3xl bg-white/70 p-6 text-center shadow-xl backdrop-blur sm:p-10">
      <h2 className="font-script text-5xl text-rose-600 glow-pink">I Love You Arro 💖</h2>
      <p className="mx-auto max-w-2xl text-rose-800/90">
        You said YES 💕
        <br />
        Thank you, my love. I promise, I will fix everything and make you proud of us.
        <br />
        I love you endlessly, and I’m never letting go again.
      </p>
      <p className="text-right w-full pr-4 font-semibold text-rose-700">— Yours always, Noman 💖</p>

      {/* Image Grid */}
      <div className="mt-2 grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Our memory"
            className="h-28 w-full rounded-xl object-cover shadow md:h-36"
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://www.instagram.com/_nomxnz_/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 font-medium text-white shadow-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          <Send className="size-4" /> Restart Our Story
        </a>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-5 py-2.5 text-rose-700 shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          <ArrowLeft className="size-4" /> Back
        </button>
      </div>

      {/* Hearts/Fireworks Effect */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute select-none text-pink-500/70 animate-pop"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${(i % 10) * 0.12}s`,
              transformOrigin: "center",
              filter: "drop-shadow(0 2px 6px rgba(255,105,180,.35))",
            }}
          >
            💖
          </span>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={`rose-${i}`}
            className="absolute select-none animate-fall-slow text-rose-400/80"
            style={{ left: `${(i * 9 + 12) % 100}%`, animationDelay: `${i * 0.8}s` }}
          >
            🌹
          </span>
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={`sp-${i}`}
            className="absolute text-rose-300/60 animate-twinkle"
            style={{ left: `${(i * 5 + 3) % 100}%`, top: `${(i * 6 + 9) % 100}%` }}
          >
            <Sparkles className="size-4" />
          </span>
        ))}
      </div>
    </div>
  );
}

// Image URLs (unchanged)
const images = [
  "https://mistralaichatupprodswe.blob.core.windows.net/chat-images/a7/56/73/a7567319-41df-466f-93eb-faa8dbe42871/61c098ce-a749-4174-8cfe-6468cfd12881/8da3fca4-3694-4146-878d-9907dd31bcbd?sv=2025-01-05&st=2025-09-25T19%3A49%3A36Z&se=2025-09-25T20%3A49%3A36Z&sr=b&sp=rade&sig=iy4uBWOgmg8axELw7RNNGvu9qo1JyfVRJJjfmwaKFiM%3D",
  "https://mistralaichatupprodswe.blob.core.windows.net/chat-images/a7/56/73/a7567319-41df-466f-93eb-faa8dbe42871/61c098ce-a749-4174-8cfe-6468cfd12881/92535f90-4dd8-4fe4-b251-da9533c63702?sv=2025-01-05&st=2025-09-25T19%3A49%3A36Z&se=2025-09-25T20%3A49%3A36Z&sr=b&sp=rade&sig=vjnVYIKiUkd6yYjqO6g1x5xz0%2F7s7gzhJM3t8%2FJvQr0%3D",
  "https://mistralaichatupprodswe.blob.core.windows.net/chat-images/a7/56/73/a7567319-41df-466f-93eb-faa8dbe42871/61c098ce-a749-4174-8cfe-6468cfd12881/63133285-5369-4204-a4ee-e632586ce1c5?sv=2025-01-05&st=2025-09-25T19%3A49%3A36Z&se=2025-09-25T20%3A49%3A36Z&sr=b&sp=rade&sig=iwufwaEw1VqvJah%2FHx%2BxKxxGtGa39qXLib%2BLq52eUVY%3D",
  "https://mistralaichatupprodswe.blob.core.windows.net/chat-images/a7/56/73/a7567319-41df-466f-93eb-faa8dbe42871/61c098ce-a749-4174-8cfe-6468cfd12881/60814ff0-bfb0-4302-8d02-6fcadd01eecf?sv=2025-01-05&st=2025-09-25T19%3A49%3A36Z&se=2025-09-25T20%3A49%3A36Z&sr=b&sp=rade&sig=7cp8fpVkeapYjqhWWPLNfKWpijYRb3EAXBVeeCXS8ho%3D",
  "https://mistralaichatupprodswe.blob.core.windows.net/chat-images/a7/56/73/a7567319-41df-466f-93eb-faa8dbe42871/61c098ce-a749-4174-8cfe-6468cfd12881/5002452c-a019-45ed-bf3a-28a136818b2d?sv=2025-01-05&st=2025-09-25T19%3A49%3A36Z&se=2025-09-25T20%3A49%3A36Z&sr=b&sp=rade&sig=rI2XGeKck9Wv0E7zwR7TJaAn%2F1ApFebkMh%2FnUCL5ljk%3D",
  "https://mistralaichatupprodswe.blob.core.windows.net/chat-images/a7/56/73/a7567319-41df-466f-93eb-faa8dbe42871/61c098ce-a749-4174-8cfe-6468cfd12881/3a009c37-1c82-4a7f-b52b-47c90c334f7f?sv=2025-01-05&st=2025-09-25T19%3A49%3A36Z&se=2025-09-25T20%3A49%3A36Z&sr=b&sp=rade&sig=fhb1Kn6bWW1YYln8uTavC33IpBYtMlzGC%2BiDwR9F4QI%3D",
];
