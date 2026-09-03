"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Bot,
  Bug,
  Check,
  ChevronDown,
  Code2,
  FileCode2,
  History,
  KeyRound,
  Menu,
  MessageSquare,
  Moon,
  Save,
  Settings as SettingsIcon,
  Shield,
  Sparkles,
  User,
} from "lucide-react";

export default function SettingsPage() {
  const [name, setName] = useState("Developer");
  const [email, setEmail] = useState("developer@example.com");

  const [model, setModel] = useState("DevPilot AI");
  const [theme, setTheme] = useState("Dark");

  const [notifications, setNotifications] = useState(true);
  const [saveHistory, setSaveHistory] = useState(true);

  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);

  const saveSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-[#0b0b0b] md:flex">
          {/* Logo */}
          <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
              <Sparkles size={18} />
            </div>

            <div>
              <h1 className="text-sm font-semibold">DevPilot AI</h1>
              <p className="text-xs text-gray-500">AI Developer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <SidebarLink
              href="/dashboard"
              icon={<Code2 size={17} />}
              label="Dashboard"
            />

            <SidebarLink
              href="/chat"
              icon={<MessageSquare size={17} />}
              label="AI Chat"
            />

            <SidebarLink
              href="/code"
              icon={<Code2 size={17} />}
              label="Generate Code"
            />

            <SidebarLink
              href="/debug"
              icon={<Bug size={17} />}
              label="Debug Code"
            />

            <SidebarLink
              href="/explain"
              icon={<FileCode2 size={17} />}
              label="Explain Code"
            />

            <div className="my-4 border-t border-white/10" />

            <SidebarLink
              href="/history"
              icon={<History size={17} />}
              label="History"
            />

            <SidebarLink
              href="/settings"
              icon={<SettingsIcon size={17} />}
              label="Settings"
              active
            />
          </nav>

          {/* AI Status */}
          <div className="border-t border-white/10 p-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />

                <span className="text-xs text-gray-400">
                  DevPilot AI Online
                </span>
              </div>

              <p className="mt-2 text-[11px] leading-5 text-gray-600">
                Your AI developer assistant is ready.
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <section className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <button className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white md:hidden">
                <Menu size={20} />
              </button>

              <Link
                href="/dashboard"
                className="hidden items-center gap-2 text-sm text-gray-400 transition hover:text-white sm:flex"
              >
                <ArrowLeft size={16} />
                Dashboard
              </Link>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-sm font-medium">Settings</p>
                <p className="text-xs text-gray-500">
                  Manage your DevPilot preferences
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400">
              <SettingsIcon size={14} />
              Settings
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-8">
              {/* Heading */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <SettingsIcon size={17} />
                  Preferences
                </div>

                <h1 className="mt-3 text-3xl font-bold tracking-tight">
                  Settings
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                  Customize your DevPilot AI experience and developer
                  workspace.
                </p>
              </div>

              <div className="space-y-6">
                {/* Profile */}
                <SettingsSection
                  icon={<User size={17} />}
                  title="Profile"
                  description="Manage your basic account information."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Display name"
                      value={name}
                      onChange={setName}
                      placeholder="Your name"
                    />

                    <Field
                      label="Email"
                      value={email}
                      onChange={setEmail}
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>
                </SettingsSection>

                {/* Appearance */}
                <SettingsSection
                  icon={<Moon size={17} />}
                  title="Appearance"
                  description="Choose how DevPilot looks."
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <SelectField
                      label="Theme"
                      value={theme}
                      onChange={setTheme}
                      options={["Dark", "Light", "System"]}
                    />

                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                          <Moon size={16} />
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            Dark developer theme
                          </p>

                          <p className="mt-1 text-xs text-gray-600">
                            Optimized for long coding sessions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SettingsSection>

                {/* AI Preferences */}
                <SettingsSection
                  icon={<Bot size={17} />}
                  title="AI Preferences"
                  description="Configure how DevPilot responds."
                >
                  <div className="space-y-5">
                    <SelectField
                      label="AI Model"
                      value={model}
                      onChange={setModel}
                      options={[
                        "DevPilot AI",
                        "Fast Model",
                        "Advanced Model",
                      ]}
                    />

                    <Toggle
                      enabled={saveHistory}
                      onChange={setSaveHistory}
                      icon={<History size={16} />}
                      title="Save conversation history"
                      description="Keep your AI sessions available in History."
                    />

                    <Toggle
                      enabled={notifications}
                      onChange={setNotifications}
                      icon={<Bell size={16} />}
                      title="AI notifications"
                      description="Receive notifications about completed AI tasks."
                    />
                  </div>
                </SettingsSection>

                {/* API */}
                <SettingsSection
                  icon={<KeyRound size={17} />}
                  title="API Configuration"
                  description="Connect DevPilot to your AI backend."
                >
                  <div>
                    <label className="mb-2 block text-xs font-medium text-gray-400">
                      API Key
                    </label>

                    <input
                      type="password"
                      value={apiKey}
                      onChange={(event) => setApiKey(event.target.value)}
                      placeholder="Enter your API key"
                      className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white outline-none placeholder:text-gray-700 focus:border-white/20"
                    />

                    <p className="mt-2 text-xs leading-5 text-gray-600">
                      Your API key will be used to authenticate requests to
                      your AI service. Do not expose secret keys in client-side
                      code.
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex gap-3">
                      <Shield
                        size={17}
                        className="mt-0.5 shrink-0 text-gray-500"
                      />

                      <div>
                        <p className="text-sm font-medium">
                          Security
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-600">
                          In production, keep API secrets on your backend
                          rather than storing them in browser storage.
                        </p>
                      </div>
                    </div>
                  </div>
                </SettingsSection>

                {/* Workspace */}
                <SettingsSection
                  icon={<Code2 size={17} />}
                  title="Developer Workspace"
                  description="Configure your coding environment."
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <WorkspaceCard
                      title="Code Generation"
                      description="Generate code from natural language prompts."
                      icon={<Code2 size={17} />}
                    />

                    <WorkspaceCard
                      title="Debugging"
                      description="Analyze errors and find possible fixes."
                      icon={<Bug size={17} />}
                    />

                    <WorkspaceCard
                      title="Code Explanation"
                      description="Understand unfamiliar code quickly."
                      icon={<FileCode2 size={17} />}
                    />

                    <WorkspaceCard
                      title="AI Chat"
                      description="Talk with DevPilot about development."
                      icon={<MessageSquare size={17} />}
                    />
                  </div>
                </SettingsSection>

                {/* Save */}
                <div className="flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-medium">
                      Save your changes
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Apply your updated DevPilot preferences.
                    </p>
                  </div>

                  <button
                    onClick={saveSettings}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                  >
                    {saved ? (
                      <>
                        <Check size={16} />
                        Saved
                      </>
                    ) : (
                      <>
                        <Save size={16} />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="py-8 text-center text-[11px] text-gray-700">
                DevPilot AI · Developer Assistant
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Sidebar */
function SidebarLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
        active
          ? "bg-white/10 text-white"
          : "text-gray-500 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

/* Section */
function SettingsSection({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">
      <div className="flex items-start gap-3 border-b border-white/10 px-5 py-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
          {icon}
        </div>

        <div>
          <h2 className="text-sm font-semibold">{title}</h2>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
}

/* Field */
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-400">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white outline-none placeholder:text-gray-700 focus:border-white/20"
      />
    </div>
  );
}

/* Select */
function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-400">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.02] px-4 pr-10 text-sm text-gray-300 outline-none focus:border-white/20"
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#111111]"
            >
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
        />
      </div>
    </div>
  );
}

/* Toggle */
function Toggle({
  enabled,
  onChange,
  icon,
  title,
  description,
}: {
  enabled: boolean;
  onChange: (value: boolean) => void;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
          {icon}
        </div>

        <div>
          <p className="text-sm font-medium">{title}</p>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={() => onChange(!enabled)}
        aria-label={title}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-white" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full transition ${
            enabled
              ? "left-6 bg-black"
              : "left-1 bg-gray-500"
          }`}
        />
      </button>
    </div>
  );
}

/* Workspace card */
function WorkspaceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-medium">{title}</h3>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}