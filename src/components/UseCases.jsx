import React from 'react';
import { ListChecks, Workflow, FileCheck2 } from 'lucide-react';

const Row = ({ actor, name, desc, pre, post, steps, alt }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="grid gap-2 md:grid-cols-6">
      <div className="md:col-span-1">
        <div className="text-xs uppercase tracking-wider text-slate-500">Actor</div>
        <div className="font-medium text-slate-900">{actor}</div>
      </div>
      <div className="md:col-span-2">
        <div className="text-xs uppercase tracking-wider text-slate-500">Use Case</div>
        <div className="font-medium text-slate-900">{name}</div>
        <p className="mt-1 text-slate-600">{desc}</p>
      </div>
      <div className="md:col-span-1">
        <div className="text-xs uppercase tracking-wider text-slate-500">Pre-Conditions</div>
        <ul className="mt-1 list-disc pl-5 text-slate-600 text-sm space-y-1">
          {pre.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-1">
        <div className="text-xs uppercase tracking-wider text-slate-500">Post-Conditions</div>
        <ul className="mt-1 list-disc pl-5 text-slate-600 text-sm space-y-1">
          {post.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-1">
        <div className="text-xs uppercase tracking-wider text-slate-500">Main Flow</div>
        <ol className="mt-1 list-decimal pl-5 text-slate-600 text-sm space-y-1">
          {steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
        {alt && alt.length > 0 && (
          <div className="mt-2">
            <div className="text-xs uppercase tracking-wider text-slate-500">Alternative</div>
            <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
              {alt.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function UseCases() {
  const data = [
    {
      actor: 'Admin',
      name: 'Manage Roles & Permissions',
      desc: 'Create role definitions and assign privileges with audit logging.',
      pre: ['Admin authenticated'],
      post: ['RBAC policy updated', 'Audit trail recorded'],
      steps: [
        'Open security settings',
        'Define or edit role capabilities',
        'Assign roles to users',
        'Save and publish policy',
      ],
      alt: ['Validation fails → show errors and retain draft'],
    },
    {
      actor: 'Instructor',
      name: 'Publish Course',
      desc: 'Create a course, add lessons, and publish after review.',
      pre: ['Instructor authenticated', 'Reviewer workflow enabled'],
      post: ['Course visible to target audience'],
      steps: [
        'Create course shell and syllabus',
        'Upload lessons and assessments',
        'Submit for review',
        'Reviewer approves and course is published',
      ],
      alt: ['Reviewer requests changes → instructor revises and resubmits'],
    },
    {
      actor: 'Student',
      name: 'Submit Assignment',
      desc: 'Upload work for an assigned task before due date.',
      pre: ['Student enrolled in course'],
      post: ['Submission stored and timestamped', 'Confirmation sent'],
      steps: [
        'Open assignment page',
        'Attach files or paste text',
        'Confirm submission',
        'Receive acknowledgement',
      ],
      alt: ['Late submission → marked with policy flags'],
    },
    {
      actor: 'Parents',
      name: 'View Progress',
      desc: 'Review linked student performance and attendance.',
      pre: ['Parent account linked to student'],
      post: ['Progress view captured in analytics'],
      steps: [
        'Open dashboard',
        'Select student profile',
        'Filter by term or course',
        'Review grades and attendance',
      ],
    },
    {
      actor: 'Dean',
      name: 'Approve Curriculum Change',
      desc: 'Evaluate course update requests for alignment and quality.',
      pre: ['Change request submitted'],
      post: ['Decision recorded with rationale'],
      steps: [
        'Open department requests',
        'Review impact analysis and mapping',
        'Approve or request revisions',
      ],
    },
    {
      actor: 'Management',
      name: 'View Executive Dashboard',
      desc: 'Analyze platform-wide usage, outcomes, and costs.',
      pre: ['Verified management role'],
      post: ['Insights exported or bookmarked'],
      steps: [
        'Open analytics module',
        'Select time window and segments',
        'Drill into KPIs and charts',
        'Export report',
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 flex items-center gap-3 text-indigo-600">
        <ListChecks className="h-6 w-6" />
        <h2 className="text-2xl font-semibold tracking-tight">4–5. Use Cases & Diagram</h2>
      </header>

      <div className="space-y-4">
        {data.map((row, i) => (
          <Row key={i} {...row} />
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-indigo-300 bg-indigo-50 p-6">
        <div className="flex items-center gap-2 text-indigo-900 font-medium">
          <Workflow className="h-5 w-5" /> Text-based Use Case Diagram
        </div>
        <pre className="mt-3 whitespace-pre-wrap text-sm text-indigo-900/90">
{`Actors: Admin, Instructor, Learner, Reviewer, Student, Parents, Dean, Management

System: LMS

Admin ----> [RBAC, User Management, System Settings, Audit]
Instructor ----> [Course Authoring, Assessments, Grading, Announcements]
Learner ----> [Enrollment, Lessons, Quizzes, Forum]
Reviewer ----> [Content Review, Grade Moderation]
Student ----> [Assignments, Attendance, Grades]
Parents ----> [Student Progress, Messaging]
Dean ----> [Department KPIs, Curriculum Approvals]
Management ----> [Executive Analytics, Compliance Reports]
`}
        </pre>
      </div>
    </section>
  );
}
