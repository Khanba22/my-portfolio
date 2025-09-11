"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient orbs */}
      <div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10"
        style={{
          background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          filter: "blur(100px)",
          animation: "float 18s 3s infinite alternate-reverse",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "linear-gradient(135deg, var(--gradient-end), var(--gradient-start))",
          filter: "blur(120px)",
          animation: "float 15s infinite alternate-reverse",
        }}
      />

      <div className="text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* 404 Number */}
          <motion.h1
            className="text-9xl md:text-[12rem] font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: "var(--card-dark-text-light)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-lg mb-8 max-w-md mx-auto"
            style={{ color: "var(--card-dark-text)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 group"
              style={{
                background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                color: "var(--foreground)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              <span>Go Home</span>
            </motion.button>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 group"
            style={{
              background: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "var(--card-dark-text-light)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{ 
              scale: 1.05,
              background: "rgba(40, 40, 40, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          className="mt-12 p-6 rounded-lg max-w-md mx-auto"
          style={{
            background: "rgba(30, 30, 30, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Search size={20} style={{ color: "var(--gradient-start)" }} />
            <h3 className="font-semibold" style={{ color: "var(--card-dark-text-light)" }}>
              Looking for something specific?
            </h3>
          </div>
          <p className="text-sm" style={{ color: "var(--card-dark-text)" }}>
            Try visiting our <Link href="/portfolio" className="underline hover:no-underline" style={{ color: "var(--gradient-start)" }}>Portfolio</Link>, 
            <Link href="/services" className="underline hover:no-underline mx-1" style={{ color: "var(--gradient-start)" }}>Services</Link>, or 
            <Link href="/about" className="underline hover:no-underline mx-1" style={{ color: "var(--gradient-start)" }}>About</Link> pages.
          </p>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(20px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
