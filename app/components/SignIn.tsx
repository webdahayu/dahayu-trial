"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, LogIn, X } from "lucide-react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
} from "firebase/auth";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { useRouter } from "next/navigation";

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignIn({ isOpen, onClose }: SignInProps) {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth) {
      setError("Firebase not initialized");
      return;
    }

    setLoading(true);
    setError("");

    // Only allow specific email to sign in
    if (email !== "webdahayu@gmail.com") {
      setError("Akses ditolak. Email tidak diizinkan.");
      setLoading(false);
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setEmail("");
      setPassword("");
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!auth) {
      setError("Firebase not initialized");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Only allow specific email to sign in
      if (result.user.email !== "webdahayu@gmail.com") {
        await auth.signOut();
        setError("Akses ditolak. Email tidak diizinkan.");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-dark-lighter border border-gold/20 rounded-3xl p-8 luxury-glow"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-3 h-3 bg-gold transform rotate-45 mx-auto mb-4"
                />
                <h2 className="text-3xl font-serif font-light text-gradient mb-2">
                  {isSignUp ? "Buat Akun" : "Masuk"}
                </h2>
                <p className="text-cream/60 text-sm">
                  {isSignUp
                    ? "Bergabunglah dengan keluarga Dahayu"
                    : "Selamat datang kembali"}
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Email/Password Form */}
              <form onSubmit={handleEmailAuth} className="space-y-5 mb-6">
                {/* Email Input */}
                <div>
                  <label className="block text-cream/70 text-sm mb-2 font-sans">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                    <motion.input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full pl-12 pr-4 py-3 bg-dark border border-gold/20 rounded-xl text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-cream/70 text-sm mb-2 font-sans">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                    <motion.input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full pl-12 pr-12 py-3 bg-dark border border-gold/20 rounded-xl text-cream focus:border-gold focus:outline-none transition-colors"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/50 hover:text-gold transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gold hover:bg-gold-light text-dark font-normal py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-gold/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <LogIn className="w-5 h-5" />
                  {loading ? "Memproses..." : isSignUp ? "Daftar" : "Masuk"}
                </motion.button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gold/20" />
                <span className="text-cream/40 text-sm">atau</span>
                <div className="flex-1 h-px bg-gold/20" />
              </div>

              {/* Google Sign In */}
              <motion.button
                onClick={handleGoogleSignIn}
                disabled={loading}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-dark border border-gold/20 hover:border-gold/40 text-cream font-normal py-3 rounded-xl flex items-center justify-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Lanjutkan dengan Google
              </motion.button>

              {/* Toggle Sign Up/Sign In */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError("");
                  }}
                  className="text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  {isSignUp ? (
                    <>
                      Sudah punya akun?{" "}
                      <span className="text-gold font-normal">Masuk</span>
                    </>
                  ) : (
                    <>
                      Belum punya akun?{" "}
                      <span className="text-gold font-normal">Daftar</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
