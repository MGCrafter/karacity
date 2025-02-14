"use client";
import { useState, useEffect } from "react";
import { DIRECTUS_URL, MODELS } from "../lib/config.js";
import Spinner from "../components/ui_self/spinner";
import { motion } from "framer-motion";
import Navbar_self from "../components/ui_self/navbar_self";
import Footer from "../components/ui_self/footer";
import Image from "next/image";
import Carousel from "../components/ui/carousel";
import { HomeKarosell } from "../types/directus";

interface SlideData {
  title: string;
  screen: string;
}

export default function HomePage() {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${DIRECTUS_URL}/items/Karosell_1?fields=title,screen`);
        const result = await response.json();

        if (Array.isArray(result.data)) {
          const formattedSlides: SlideData[] = result.data.map((item: HomeKarosell) => ({
            title: item.title || "Kein Titel",
            screen: typeof item.screen === "string"
              ? `${DIRECTUS_URL}/assets/${item.screen}`
              : `${DIRECTUS_URL}/assets/${item.screen?.id}`,
          }));
          console.log("Directus Data:", result.data);
          console.log("Formatted Slides:", formattedSlides);
          setSlides(formattedSlides);
        }
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Fehler beim Laden der Daten");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <motion.div
      className="flex flex-col w-full min-h-screen justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar_self />
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/Background.png"
          alt="Landing Background"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Carousel Section */}
      <div className="py-20 flex flex-col items-center">
        {loading ? <Spinner /> : error ? <p className="text-red-500">{error}</p> : <Carousel slides={slides} />}
      </div>
      <Footer />
    </motion.div>
  );
}
