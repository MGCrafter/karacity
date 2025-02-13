"use client";
import React, { useState, useEffect } from "react";
import { DIRECTUS_URL } from "../../lib/config.js";
import Spinner from "../../components/ui_self/spinner";
import { motion } from "framer-motion";
import Navbar_self from "../../components/ui_self/navbar_self";
import Footer from "../../components/ui_self/footer";
import Image from "next/image";

interface RuleSection {
  id: number;
  title: string;
  level: "h1" | "h2" | "h3";
  regel: string;
}

export default function RulesPage() {
  const [rules, setRules] = useState<RuleSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRules() {
      try {
        const response = await fetch(`${DIRECTUS_URL}/items/rules?fields=id,title,level,regel`);
        const result = await response.json();

        if (Array.isArray(result.data)) {
          setRules(result.data);
        } else {
          setRules([]);
        }
      } catch (error) {
        console.error("Error fetching rules", error);
        setError("Fehler beim Laden der Regeln");
      } finally {
        setLoading(false);
      }
    }
    fetchRules();
  }, []);

  return (
    <motion.div className="flex flex-col w-full min-h-screen justify-between bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
      <Navbar_self />

      {/* Background Image */}
      <div className="relative w-full h-72 md:h-96 lg:h-[40.2rem] flex items-center justify-center overflow-hidden"> {/* Bild leicht höher */}
        <Image
          src="/regeln.png"
          alt="Regeln Background"
          width={1400}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-10 px-6 max-w-4xl mx-auto text-white">
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            {rules.map((rule) => (
              <div key={rule.id} className="mb-6">
                {rule.level === "h1" && <h1 className="pt-16 text-4xl font-bold mb-2">{rule.title}</h1>}
                {rule.level === "h2" && <h2 className="pt-5 text-2xl font-semibold mb-2">{rule.title}</h2>}
                {rule.level === "h3" && <h3 className="text-xl font-medium mb-2">{rule.title}</h3>}
                <p className="text-lg leading-relaxed whitespace-pre-line">{rule.regel}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
}
