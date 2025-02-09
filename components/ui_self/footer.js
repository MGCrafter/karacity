import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center w-full relative">
      <p>&copy; {new Date().getFullYear()} Powered by NekoZDevTeam | 
        <a href="/impressum" className="underline"> Impressum</a>
      </p>
    </footer>
  );
}