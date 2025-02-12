"use client";
import React, { useState } from "react";
import Navbar_self from "../../components/ui_self/navbar_self";
import Footer from "../../components/ui_self/footer";
import { DIRECTUS_URL } from "@/lib/config";
import Image from "next/image";

const departments = [
    { name: "Bitte wähle aus", image: "" },
    { name: "LSPD", image: "/departments/LSPD.png" },
    { name: "LSFD", image: "/departments/LSFD.png" },
    { name: "LSMD", image: "/departments/LSMD.png" },
    { name: "PBPD", image: "/departments/PBPD.png" },
    { name: "PBMD", image: "/departments/PBMD.png" },
    { name: "SSMD", image: "/departments/BCSO.png" },
    { name: "Anwalt", image: "/departments/Anwalt.png" },
    { name: "Army", image: "/departments/Army.png" },
    { name: "Sheriff", image: "/departments/BCSO.png" },
    { name: "FIB", image: "/departments/FIB.png" },
    { name: "Mechaniker", image: "/departments/LSC.png" },
  ];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    message: "",
    department: "",
    anwalt: "",
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    wohnort: "",
    telefonnummer: "",
    staatsangehoerigkeit: "",
    stadt: "",
    number: "",
    erfahrungen: "",
    laufbahn: "",
    motivationsschreiben: "",
    name: "",
    alter: "",
    discordname: "",
    spielstunden: "",
    staerken: "",
    motivation: "",

  });

  const [submitted, setSubmitted] = useState(false)
  const selectedDepartment = departments.find(d => d.name === formData.department);;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.department === "Bitte wähle aus") {
      alert("Bitte wähle eine Abteilung aus.");
      return;
    }
    const response = await fetch(`${DIRECTUS_URL}/items/bewerbung`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: formData.message,
        department: formData.department,
        anwalt: formData.anwalt,
        vorname: formData.vorname,
        nachname: formData.nachname,
        geburtsdatum: formData.geburtsdatum,
        wohnort: formData.wohnort,
        staatsangehoerigkeit: formData.staatsangehoerigkeit,
        stadt: formData.stadt,
        number: formData.number,
        erfahrungen: formData.erfahrungen,
        laufbahn: formData.laufbahn,
        motivationsschreiben: formData.motivationsschreiben,
        name: formData.name,
        alter: formData.alter,
        discordname: formData.discordname,
        spielstunden: formData.spielstunden,
        staerken: formData.staerken,
        motivation: formData.motivation
      }),
    });
  
    if (response.ok) {
      console.log("Bewerbung erfolgreich gesendet!");
      setSubmitted(true);
    } else {
      console.error("Fehler beim Speichern:", await response.text());
    }
  };
  const getLabelText = (department: string) => {
    if (department === "Anwalt") {
      return "Warum willst du Anwalt werden?*";
    }
    return `Warum willst du ins ${department} kommen?*`;
  };
  

  return (
    <div className="flex flex-col w-full min-h-screen justify-between bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white">
      <Navbar_self />
      <div className="flex flex-col items-center justify-center py-20 px-6 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bewerbungsformular</h1>
        {!submitted ? (
          <form className="w-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-2">Persönliche Informationen</h2>
            <div className="mb-4">
              <label className="block text-left text-lg">Abteilung</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              >
                {departments.map((dept, index) => (
                  <option key={dept.name} value={index === 0 ? "" : dept.name} disabled={index === 0}>{dept.name} </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Vorname*</label>
              <input
                type="text"
                name="vorname"
                placeholder="Dein RP-Name"
                value={formData.vorname}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Nachname*</label>
              <input
                type="text"
                name="nachname"
                placeholder="Dein RP-Nachname"
                value={formData.nachname}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Geburtsdatum*</label>
              <input
                type="date"
                name="geburtsdatum"
                placeholder="TT.MM.JJJJ"
                value={formData.geburtsdatum}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Wohnort*</label>
              <input
                type="text"
                name="wohnort"
                placeholder="Dein RP-Wohnort"
                value={formData.wohnort}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Telefonnummer*</label>
              <input
                type="text"
                name="number"
                placeholder="Deine RP-Telefonnummer"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Staatsangehörigkeit</label>
              <input
                type="text"
                name="staatsangehoerigkeit"
                placeholder="Deine RP-Staatsangehörigkeit"
                value={formData.staatsangehoerigkeit}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <h2 className="pt-1 text-2xl font-semibold mb-2">Berufliche Laufbahn</h2>
            <p className="py-2 text-l">Hier kannst du deine Berufliche RP-Laufbahn beschreiben</p>
            <div className="mb-4">
              <label className="block text-left text-lg">Berufliche Laufbahn*</label>
              <textarea
                name="laufbahn"
                value={formData.laufbahn}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <h2 className="pt-1 text-2xl font-semibold mb-2">Motivationschreiben</h2>
            <p className="py-2 text-l">Hier schreibe bitte ein kleines Motivationsschreiben</p>
            <div className="mb-4">
              <label className="block text-left text-lg">Motivationsschreiben*</label>
              <textarea
                name="motivationsschreiben"
                value={formData.motivationsschreiben}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <h2 className="pt-1 text-2xl font-semibold mb-2">Out-of-Character Informations (OOC)</h2>
            <div className="mb-4">
              <label className="block text-left text-lg">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Dein echter Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Alter*</label>
              <input
                type="text"
                name="alter"
                placeholder="Dein Alter"
                value={formData.alter}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Discord-Name*</label>
              <input
                type="text"
                name="discordname"
                placeholder="Dein Discord-Name"
                value={formData.discordname}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Spielstunden*</label>
              <input
                type="text"
                name="spielstunden"
                placeholder="Deine Spielstunden"
                value={formData.spielstunden}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Deine Erfahrungen*</label>
              <input
                type="text"
                name="erfahrungen"
                placeholder="Deine Erfahrungen im RPs"
                value={formData.erfahrungen}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">{getLabelText(formData.department)}</label>
              <textarea
                name="motivation"
                placeholder="Deine Motivation aus OOC-Sicht"
                value={formData.motivation}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg">Stärken & Schwächen*</label>
              <textarea
                name="staerken"
                value={formData.staerken}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-700 transition"
            >
              Absenden
            </button>
          </form>
        ) : (
          <p className="text-lg">Danke für deine Bewerbung! Wir melden uns bald.</p>
        )}
        {selectedDepartment && (
        <div className="fixed top-1/3 right-10 hidden md:block">
          <Image
            src={selectedDepartment.image}
            alt={selectedDepartment.name}
            width={300}
            height={300}
            className="shadow-lg rounded-lg"
          />
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
}
