import React from "react";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();

  return(
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center"></div>
  );
}
