import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-sky-50 via-emerald-100 to-white text-gray-800 font-sans">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-sky-800">👨‍⚕️ Dr. Sai Kumar Koneti</h1>
        <p className="text-xl text-gray-600 mt-4">Health Informatics • Clinical Research • Data Science</p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="mailto:konetisaikumar27@gmail.com">
            <img src="https://img.shields.io/badge/Email-grey?style=flat&logo=gmail" />
          </a>
          <a href="https://www.linkedin.com/in/dr-sai-kumar-5142a4226/">
            <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" />
          </a>
          <img src="https://img.shields.io/badge/Health%20Informatics%20-Masters-green" />
          <img src="https://img.shields.io/badge/Open%20to-Collaborations-purple" />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-8">🚀 Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Cards */}
        </div>
      </section>
      <section className="py-12 bg-white mt-16">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">📂 Work Areas</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {/* Work Area Bubbles */}
        </div>
      </section>
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>📫 konetisaikumar27@gmail.com | 💼 <a className="underline" href="https://www.linkedin.com/in/dr-sai-kumar-5142a4226/">LinkedIn</a></p>
        <p>© 2025 Sai Kumar Koneti. All rights reserved.</p>
      </footer>
    </main>
  );
}