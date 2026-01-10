"use client";

import * as React from "react";
import { PageLoader } from "./PageLoader";

export function ClientLayout({ children }) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  );
}
