"use client";

import { useEffect, useState } from "react";

const PHONE_PATTERN = /^[0-9+().\-\s]{7,24}$/;

/**
 * Puts a phone number on the printed page when the page is opened with it in
 * the URL, for example `?phone=...`. The PDF generator passes numbers that way,
 * so they are printed on the resume PDF without ever being part of the
 * website's own HTML or source. It never shows on screen, so a crafted link
 * cannot make the live site display someone else's number.
 */
export function PrintOnlyPhone({
  param,
  as: Tag = "span",
  suffix = "",
}: {
  param: string;
  as?: "span" | "li";
  /** Text appended after the number, such as a separator. */
  suffix?: string;
}) {
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get(param);
    // Reading the URL is only possible after mount; this runs once.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (value && PHONE_PATTERN.test(value)) setPhone(value.trim());
  }, [param]);

  if (!phone) return null;
  return (
    <Tag data-print-phone={param} className="hidden print:inline">
      {phone}
      {suffix}
    </Tag>
  );
}
