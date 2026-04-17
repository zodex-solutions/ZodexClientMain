"use client";
import React from "react";

import dynamic from "next/dynamic";

const GlassSurface = dynamic(() => import("../GlassSurface"), {
  ssr: false,
});

type GlassButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  type?: "button" | "submit" | "reset";
   // ✅ NEW
  gradientFrom?: string;
  gradientTo?: string;
  gradientDirection?: string;
  gradientOpacity?: number;
};

export default function GlassButton({
  children,
  onClick,
  disabled = false,
  width = 180,
  height = 55,
  className = "",
  type = "button",
  gradientFrom,
  gradientTo,
  gradientDirection,
  gradientOpacity,
}: GlassButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative
        outline-none
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      <GlassSurface
      
        width={width}
        height={height}
        borderRadius={50}
        gradientFrom={gradientFrom}
gradientTo={gradientTo}
gradientDirection={gradientDirection}
gradientOpacity={gradientOpacity}
        className={`
          cursor-pointer
          transition-transform duration-200 ease-out
          group-hover:scale-[1.04]
          group-active:scale-[0.96]
          ${className}
        `}
      >
        {children}
      </GlassSurface>
    </button>
  );
}
