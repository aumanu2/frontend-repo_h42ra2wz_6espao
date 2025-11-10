import React from 'react';
import { BookOpen, Users, Shield, Trophy } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-indigo-200">
    {children}
  </span>
);

export default function OverviewSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-3 text-indigo-600">
          <BookOpen className="h-6 w-6" />
          <h2 className="text-2xl font-semibold tracking-tight">1. System Overview</h2>
        </div>
        <p className="mt-3 text-slate-600 leading-relaxed">
          A Learning Management System (LMS) is a centralized digital platform designed to deliver,
          manage, and track online and blended learning. It streamlines course creation, enrollment,
          assessment, communication, and analytics to improve educational outcomes and operational efficiency.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Users className="h-5 w-5 text-indigo-600" />
            Purpose in Education
          </div>
          <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-2">
            <li>Deliver structured courses and learning paths at scale.</li>
            <li>Facilitate assessments, grading, and feedback loops.</li>
            <li>Enable collaboration among instructors, students, and parents.</li>
            <li>Provide visibility into progress for academic oversight.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Shield className="h-5 w-5 text-indigo-600" />
            Objectives
          </div>
          <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-2">
            <li>Unify course management, assessment, and communication.</li>
            <li>Support role-based access for all academic stakeholders.</li>
            <li>Enable data-driven decision making with analytics.</li>
            <li>Ensure compliance, security, and accessibility.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Trophy className="h-5 w-5 text-indigo-600" />
            Key Benefits
          </div>
          <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-2">
            <li>Improved learning outcomes via timely feedback and insights.</li>
            <li>Operational efficiency for instructors and administrators.</li>
            <li>Transparent progress tracking for students and parents.</li>
            <li>Scalable foundation for institutional growth.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-wrap gap-2">
          <Pill>Actors: Admin</Pill>
          <Pill>Instructor</Pill>
          <Pill>Learner</Pill>
          <Pill>Reviewer</Pill>
          <Pill>Student</Pill>
          <Pill>Parents</Pill>
          <Pill>Dean</Pill>
          <Pill>Management</Pill>
        </div>
      </div>
    </section>
  );
}
