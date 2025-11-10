import React from 'react';
import { Users2, ShieldCheck, CheckCircle2 } from 'lucide-react';

const RoleCard = ({ title, description, capabilities }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{description}</p>
    <div className="mt-4">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
        <ShieldCheck className="h-4 w-4 text-emerald-600" /> Permissions & Access
      </div>
      <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
        {capabilities.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ActorsRoles() {
  const roles = [
    {
      title: 'Admin',
      description:
        'Oversees system configuration, user lifecycle, security policies, and platform operations.',
      capabilities: [
        'Full platform access with audit logging',
        'Manage users, roles, permissions',
        'Configure departments, terms, and grading schemes',
        'Monitor system health and usage analytics',
      ],
    },
    {
      title: 'Instructor',
      description:
        'Designs curricula, manages courses, assessments, grading, and classroom communication.',
      capabilities: [
        'Create courses, lessons, and assessments',
        'Grade submissions and provide feedback',
        'Publish announcements and manage discussions',
        'View learner analytics for their courses',
      ],
    },
    {
      title: 'Learner',
      description:
        'General users who consume courses for self-paced learning; may not be formally enrolled.',
      capabilities: [
        'Enroll in public courses and track progress',
        'Attempt quizzes and view grades',
        'Participate in forums and messaging',
      ],
    },
    {
      title: 'Reviewer',
      description:
        'Performs quality checks on content, assessments, and grading consistency.',
      capabilities: [
        'Review and approve courses and assessments',
        'Moderate grading and verify rubrics',
        'Flag content for revision with comments',
      ],
    },
    {
      title: 'Student',
      description:
        'Enrolled learner under an institution with tracked academic records.',
      capabilities: [
        'Access assigned courses and submit assignments',
        'View attendance, grades, and feedback',
        'Receive counselor and advisor communications',
      ],
    },
    {
      title: 'Parents',
      description:
        'Monitors student progress, attendance, and communicates with instructors.',
      capabilities: [
        'View linked student progress and reports',
        'Receive notifications and schedule meetings',
        'Message instructors and advisors',
      ],
    },
    {
      title: 'Dean',
      description:
        'Oversees academic quality, accreditation alignment, and departmental performance.',
      capabilities: [
        'Department-level dashboards and KPIs',
        'Approve curricula changes and course releases',
        'Audit assessment quality and outcomes',
      ],
    },
    {
      title: 'Management',
      description:
        'Institution-level strategy, compliance, and resource planning.',
      capabilities: [
        'View platform-wide analytics and trends',
        'Manage budgets, licenses, and capacity planning',
        'Compliance exports and executive reporting',
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 flex items-center gap-3 text-indigo-600">
        <Users2 className="h-6 w-6" />
        <h2 className="text-2xl font-semibold tracking-tight">2. Actors and Their Roles</h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((role) => (
          <RoleCard key={role.title} {...role} />
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-indigo-50 p-4 text-sm text-indigo-900">
        <div className="flex items-center gap-2 font-medium">
          <CheckCircle2 className="h-4 w-4" />
          Access Control Summary
        </div>
        <p className="mt-2 text-indigo-900/80">
          Access is enforced via role-based access control (RBAC). Users may hold multiple roles with
          least-privilege policies; sensitive actions require elevated permissions and are audited.
        </p>
      </div>
    </section>
  );
}
