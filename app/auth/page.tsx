"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SignIn from "../components/SignIn";

export default function AuthPage() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    router.push("/");
  };

  return <SignIn isOpen={isOpen} onClose={handleClose} />;
}
