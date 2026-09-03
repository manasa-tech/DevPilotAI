"use client";

import {
  ArrowUpRight,
  Clock3,
  Code2,
  FolderGit2,
  MoreHorizontal,
  Plus,
} from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  updatedAt: string;
}

interface RecentProjectsProps {
  projects?: Project[];
  onProjectClick?: (project: Project) => void;
  onCreateProject?: () => void;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    name: "DevPilot AI",
    description: "AI-powered developer assistant",
    language: "TypeScript",
    updatedAt: "Today",
  },
  {
    id: 2,
    name: "ElderVoice Guardian",
    description: "Voice assistant for elderly users",
    language: "JavaScript",
    updatedAt: "Yesterday",
  },
  {
    id: 3,
    name: "HerbTrace",
    description: "Blockchain herb traceability platform",
    language: "JavaScript",
    updatedAt: "2 days ago",
  },
  {
    id: 4,
    name: "Smart Agriculture",
    description: "AI-based agriculture platform",
    language: "Python",
    updatedAt: "4 days ago",
  },
];

export default function RecentProjects({
  projects = defaultProjects,
  onProjectClick,
  onCreateProject,
}: RecentProjectsProps) {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderGit2 className="h-4 w-4 text-violet-400" />

          <h2 className="text-sm font-semibold text-zinc-300">
            Recent Projects
          </h2>
        </div>

        <button
          type="button"
          onClick={onCreateProject}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] font-medium text-zinc-500 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
        >
          <Plus className="h-3 w-3" />
          New Project
        </button>
      </div>

      {/* Projects */}
      {projects.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick?.(project)}
            />
          ))}
        </div>
      ) : (
        <EmptyProjects onCreateProject={onCreateProject} />
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Project Card                                                                */
/* -------------------------------------------------------------------------- */

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-xl border border-white/10 bg-[#0b0b0f] p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-violet-500/[0.03]"
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {/* Project icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] transition-colors group-hover:border-violet-500/20 group-hover:bg-violet-500/10">
            <Code2 className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-violet-400" />
          </div>

          {/* Name */}
          <div className="min-w-0">
            <h3 className="truncate text-xs font-semibold text-zinc-300 transition-colors group-hover:text-white">
              {project.name}
            </h3>

            <p className="mt-1 truncate text-[10px] text-zinc-600">
              {project.description}
            </p>
          </div>
        </div>

        {/* More */}
        <MoreHorizontal className="h-4 w-4 shrink-0 text-zinc-700 transition-colors group-hover:text-zinc-500" />
      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-violet-500/10 px-2 py-1 text-[9px] font-medium text-violet-400">
            {project.language}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-zinc-700">
          <Clock3 className="h-3 w-3" />
          {project.updatedAt}
        </div>
      </div>

      {/* Hover arrow */}
      <div className="mt-3 flex items-center gap-1 text-[10px] text-transparent transition-colors group-hover:text-violet-400">
        Open project
        <ArrowUpRight className="h-3 w-3" />
      </div>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Empty State                                                                 */
/* -------------------------------------------------------------------------- */

function EmptyProjects({
  onCreateProject,
}: {
  onCreateProject?: () => void;
}) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#0b0b0f] px-5 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03]">
        <FolderGit2 className="h-5 w-5 text-zinc-700" />
      </div>

      <h3 className="mt-4 text-sm font-medium text-zinc-400">
        No projects yet
      </h3>

      <p className="mt-1 max-w-xs text-[11px] leading-5 text-zinc-700">
        Create your first project and start building with DevPilot AI.
      </p>

      <button
        type="button"
        onClick={onCreateProject}
        className="mt-4 flex items-center gap-2 rounded-lg bg-violet-600 px-3.5 py-2 text-[11px] font-medium text-white transition hover:bg-violet-500"
      >
        <Plus className="h-3.5 w-3.5" />
        Create Project
      </button>
    </div>
  );
}