import React from 'react';
import OverviewSection from './components/OverviewSection';
import ActorsRoles from './components/ActorsRoles';
import UseCases from './components/UseCases';
import ArchitectureSection from './components/ArchitectureSection';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold tracking-tight">LMS Project Blueprint</span>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#overview" className="text-slate-600 hover:text-slate-900">Overview</a>
            <a href="#actors" className="text-slate-600 hover:text-slate-900">Actors</a>
            <a href="#use-cases" className="text-slate-600 hover:text-slate-900">Use Cases</a>
            <a href="#architecture" className="text-slate-600 hover:text-slate-900">Architecture</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="overview"><OverviewSection /></section>
        <section id="actors" className="bg-gradient-to-b from-white to-slate-50"><ActorsRoles /></section>
        <section id="use-cases"><UseCases /></section>
        <section id="architecture" className="bg-gradient-to-b from-white to-slate-50"><ArchitectureSection /></section>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} LMS Blueprint. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
