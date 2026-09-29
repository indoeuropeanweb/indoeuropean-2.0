"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9 flex items-center justify-center bg-white">
      <Image className="" height={75} width={75} src="/images/logos/loader/loader.gif" alt="Indo European Study Abroad Consultants - Loader" />
    </div>
  );
}
