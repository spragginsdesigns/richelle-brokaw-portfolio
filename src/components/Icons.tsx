import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function Solid({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const HomeIcon = (props: IconProps) => (
  <Stroke {...props}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
  </Stroke>
);

export const BriefcaseIcon = (props: IconProps) => (
  <Stroke {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
  </Stroke>
);

export const SkillsIcon = (props: IconProps) => (
  <Stroke {...props}>
    <path d="M9 11l3 3 8-8" />
    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
  </Stroke>
);

export const FileIcon = (props: IconProps) => (
  <Stroke {...props}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </Stroke>
);

export const MailIcon = (props: IconProps) => (
  <Stroke {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Stroke>
);

export const DownloadIcon = (props: IconProps) => (
  <Stroke {...props}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </Stroke>
);

export const LinkedInIcon = (props: IconProps) => (
  <Solid {...props}>
    <path d="M20.45 20.45h-3.56v-5.570c0-1.330-.02-3.040-1.850-3.040-1.850 0-2.140 1.450-2.140 2.940v5.670H9.350V9h3.410v1.560h.05c.48-.9 1.640-1.850 3.370-1.850 3.600 0 4.270 2.370 4.270 5.460zM5.340 7.430a2.060 2.060 0 1 1 0-4.130 2.060 2.060 0 0 1 0 4.130zM7.120 20.450H3.560V9h3.560zM22.220 0H1.770C.79 0 0 .77 0 1.730v20.540C0 23.230.79 24 1.770 24h20.450c.98 0 1.780-.77 1.780-1.730V1.730C24 .77 23.200 0 22.220 0z" />
  </Solid>
);

export const FacebookIcon = (props: IconProps) => (
  <Solid {...props}>
    <path d="M24 12.070C24 5.410 18.630 0 12 0S0 5.410 0 12.070C0 18.100 4.390 23.090 10.130 24v-8.440H7.080v-3.490h3.050V9.410c0-3.020 1.790-4.690 4.530-4.690 1.310 0 2.690.24 2.690.24v2.970h-1.520c-1.490 0-1.960.93-1.960 1.890v2.250h3.330l-.53 3.490h-2.800V24C19.610 23.090 24 18.100 24 12.070z" />
  </Solid>
);
