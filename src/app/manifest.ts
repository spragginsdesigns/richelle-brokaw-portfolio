import type { MetadataRoute } from "next";
import { profile } from "@/content/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} | ${profile.headline}`,
    short_name: "Richelle B.",
    description: `Portfolio and resume of ${profile.name}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7f4",
    theme_color: "#fbf7f4",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
