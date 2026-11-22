import { ImageResponse } from "next/og";
import { profile } from "@/content/resume";

export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#fbf7f4",
          color: "#221a1d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 24px",
            borderRadius: 999,
            background: "#f8e4eb",
            color: "#a83a62",
            fontSize: 30,
          }}
        >
          {profile.location}
        </div>
        <div style={{ marginTop: 36, fontSize: 104, fontWeight: 700, letterSpacing: -3 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 12, fontSize: 48, color: "#a83a62" }}>
          {profile.headline}
        </div>
      </div>
    ),
    size,
  );
}
