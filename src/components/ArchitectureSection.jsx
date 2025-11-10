import React from 'react';
import { Boxes, Server, Database, Lock, BellRing, Bot } from 'lucide-react';

const ArchItem = ({ icon: Icon, title, points }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-2 text-slate-900 font-semibold">
      <Icon className="h-5 w-5 text-indigo-600" /> {title}
    </div>
    <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

export default function ArchitectureSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 flex items-center gap-3 text-indigo-600">
        <Boxes className="h-6 w-6" />
        <h2 className="text-2xl font-semibold tracking-tight">6–10. Architecture, NFRs & Analytics</h2>
      </header>

      <div className="rounded-xl border border-dashed border-indigo-300 bg-indigo-50 p-6">
        <pre className="whitespace-pre-wrap text-sm text-indigo-900/90">
{`High-Level Architecture (Text Diagram)

[Web/Mobile UI]
   |  (HTTPS/REST)
[API Gateway / Backend Service]
   |  (DB Driver / Message Bus)
[Database Cluster]    [Notification Service]    [AI/Analytics]

Interactions:
- UI calls REST APIs for auth, courses, assessments.
- Backend enforces RBAC, orchestrates workflows, and writes to DB.
- Notifications via email/SMS/push using async queue.
- AI layer powers recommendations, auto-grading, and risk predictions.`}
        </pre>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <ArchItem
          icon={Server}
          title="Backend"
          points={[
            'FastAPI/NestJS-style REST endpoints',
            'RBAC middleware and audit logging',
            'Workflow engine for reviews and approvals',
          ]}
        />
        <ArchItem
          icon={Database}
          title="Database"
          points={[
            'MongoDB for content, users, submissions',
            'Relational reporting layer optional',
            'Backups, indexing, and sharding ready',
          ]}
        />
        <ArchItem
          icon={Lock}
          title="Authentication"
          points={[
            'JWT-based sessions, SSO (SAML/OAuth) capable',
            'Password hashing, MFA options',
            'Row/field-level access policies',
          ]}
        />
        <ArchItem
          icon={BellRing}
          title="Notifications"
          points={[
            'Email, SMS, in-app alerts',
            'Template-based messages and scheduling',
            'Parent and student communication threads',
          ]}
        />
        <ArchItem
          icon={Bot}
          title="AI & Analytics"
          points={[
            'Recommendation engine for courses',
            'Auto-grading short responses',
            'Risk prediction and cohort analytics dashboards',
          ]}
        />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ArchItem
          icon={Lock}
          title="Non-Functional Requirements"
          points={[
            'Security: RBAC, encryption in transit/at rest, GDPR/FERPA compliance',
            'Performance: P95 < 300ms for common reads, async jobs for heavy tasks',
            'Scalability: containerized services, autoscaling, CDN for assets',
            'Usability: WCAG 2.1 AA, responsive design, clear UX patterns',
            'Maintainability: modular code, testing, CI/CD, observability',
            'Reliability: 99.9% uptime target, backups, disaster recovery',
          ]}
        />
        <ArchItem
          icon={Database}
          title="Reports & Data Products"
          points={[
            'Student progress and attendance reports',
            'Instructor course performance and engagement',
            'Department KPIs for Deans',
            'Executive summaries and compliance exports',
          ]}
        />
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Suggested Entities</h3>
        <pre className="mt-3 whitespace-pre-wrap text-sm text-slate-700">
{`Core Entities: User, Role, Department, Course, Lesson, Enrollment, Assignment,
Submission, Grade, Rubric, Announcement, Discussion, Attendance, Notification.

Relationships (ER, text form):
User (1..*) Enrollment (*..1) Course
Instructor (1..*) Course
Course (1..*) Lesson
Course (1..*) Assignment (1..*) Submission (*..1 Student)
Submission (1..1) Grade
User (1..*) Notification
Department (1..*) Course
Reviewer (1..*) Review (course/assessment)
`}
        </pre>
      </div>

      <div className="mt-8 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p className="mt-2 text-indigo-50">
          This LMS aligns stakeholders on a secure, scalable, and data-driven platform. It empowers
          instructors to teach effectively, learners to progress confidently, and leadership to make
          informed decisions with trustworthy analytics.
        </p>
      </div>
    </section>
  );
}
