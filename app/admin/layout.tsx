"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    // Only initialize Firebase on the client side
    if (typeof window === "undefined") return;

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
      messagingSenderId:
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
    };

    // Check if Firebase config is valid
    if (!firebaseConfig.apiKey) {
      console.error("Firebase configuration is missing");
      return;
    }

    let app: FirebaseApp;
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }

    const authInstance = getAuth(app);
    setAuth(authInstance);
  }, []);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.email !== "webdahayu@gmail.com") {
        router.push("/auth");
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  return <>{children}</>;
}
