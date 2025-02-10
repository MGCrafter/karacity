"use client";
import React from "react";
import Navbar_self from "../../components/ui_self/navbar_self";
import Footer from "../../components/ui_self/footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-between bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white">
      <Navbar_self />
      
      <div className="flex flex-col items-center justify-center py-20 px-6 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Kontaktiere uns</h1>
        <p className="text-lg leading-relaxed mb-6">
        Join auf unseren Discord. Dort kommst du ganz einfach auf unseren Server und erhälts die  neuesten Informationen über die Entwicklung. Wir sind seit Februar 2025 aktiv.
        <br></br><br></br>
        Du hast Fragen oder Probleme? Kein Problem, trete unserem Discord bei und wir werden die umgehend helfen!
        </p>
        
        <a href="https://discord.gg/Q4AqGAC4gn" target="_blank" rel="noopener noreferrer">
          <Image
            src="/discord.png"
            alt="Discord Icon"
            width={150}
            height={150}
            className="hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
      
      <Footer />
    </div>
  );
}
