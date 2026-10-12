"use client";
import { useEffect } from "react";
import { bindDeadBoltWalkthrough } from "../../../content/deadbolt/walkthrough.mjs";

export function Walkthrough() {
  useEffect(() => {
    const root = document.querySelector(".deadbolt-experience");
    if (root) return bindDeadBoltWalkthrough(root);
  }, []);
  return null;
}
