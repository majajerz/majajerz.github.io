export const caseStudies = [
  {
    slug: "assignment-1",
    title: "Dissect a Single Web Page",
    description:
      "A collaborative analysis of ChatGPT’s homepage across desktop and mobile.",
    sections: [
      { id: "objectives", label: "Objectives" },
      { id: "analysis", label: "Desktop & mobile analysis" },
      { id: "context", label: "Subject: ChatGPT" },
      { id: "findings", label: "What we noticed" },
      { id: "process", label: "Working together in Miro" },
      { id: "reflection", label: "Reflection" },
    ],
    label: "Assignment 1",
  },
  {
    slug: "assignment-2",
    title: "Information Architecture",
    description: "A collaborative sitemap study of MR’s website.",
    sections: [
      { id: "objectives", label: "Objectives" },
      { id: "sitemap", label: "Sitemap" },
      { id: "process", label: "Process" },
      { id: "reflection", label: "Reflection" },
    ],
    label: "Assignment 2",
  },
  {
    slug: "project-1",
    title: "Dieter Rams",
    description:
      "Single-page scrolling website · Mobile UI design & Figma prototype",
    sections: [
      { id: "objectives", label: "Objectives" },
      { id: "finished", label: "Final design & prototype" },
      { id: "process", label: "Process & development" },
      { id: "visuals", label: "Visual direction & components" },
      { id: "reflection", label: "Reflection & outcomes" },
    ],
    label: "Project 1",
  },
  {
    slug: "project-2",
    title: "Tagged Bird, Do Not Disturb",
    description:
      "Ad Council Campaign · Billboards, digital advertising, website & widget",
    sections: [
      { id: "objectives", label: "Objectives" },
      { id: "billboards", label: "Billboards" },
      { id: "desktop", label: "Desktop website" },
      { id: "mobile", label: "Mobile website" },
      { id: "ads", label: "Instagram & digital ads" },
      { id: "widget", label: "Widget" },
      { id: "process", label: "Process & development" },
      { id: "reflection", label: "Reflection & outcomes" },
    ],
    label: "Project 2",
  },
  {
    slug: "project-3",
    title: "Exhibition Folio & Augmented Reality",
    description:
      "Jim Arendt · In the Making · South Carolina State Museum · Printed lookbook & AR experience",
    sections: [
      { id: "objectives", label: "Objectives" },
      { id: "folio", label: "Final folio" },
      { id: "ar", label: "Augmented reality" },
      { id: "process", label: "Process & development" },
      { id: "reflection", label: "Reflection & outcomes" },
    ],
    label: "Project 3",
  },
] as const;
export type CaseStudySlug = (typeof caseStudies)[number]["slug"];
