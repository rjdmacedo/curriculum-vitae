"use client";

import * as React from "react";
import { sendGAEvent } from "@next/third-parties/google";

interface TrackedLinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  href: string;
  trackingText: string;
}

export function TrackedLink({
  href,
  trackingText,
  onClick,
  ...rest
}: TrackedLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (onClick) {
      onClick(event);
    }

    // Send a standardized GA4 click event for all outbound links
    sendGAEvent("event", "click_link", {
      link_url: href,
      link_text: trackingText,
    });
  }

  return <a href={href} onClick={handleClick} {...rest} />;
}
