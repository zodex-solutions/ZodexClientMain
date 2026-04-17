"use client";
import { useState } from "react";
import UpperBar from "./ZUpperBar";
import ZHeader from "./ZHeader";

export default function HeaderWrapper() {
  const [sidebar, setSidebar] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      <ZHeader
        sidebar={sidebar}
        setSidebar={setSidebar}
        showHeader={showHeader}
      />
    </>
  );
}
