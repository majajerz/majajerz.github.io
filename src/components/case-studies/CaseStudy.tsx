import Link from "next/link";
import { caseStudies, type CaseStudySlug } from "@/lib/case-studies";
import SectionNavigation from "./SectionNavigation";
import Assignment1 from "./content/assignment-1";
import Assignment2 from "./content/assignment-2";
import Project1 from "./content/project-1";
import Project2 from "./content/project-2";
import Project3 from "./content/project-3";

const content = {
  "assignment-1": Assignment1,
  "assignment-2": Assignment2,
  "project-1": Project1,
  "project-2": Project2,
  "project-3": Project3,
};

export default function CaseStudy({ slug }: { slug: CaseStudySlug }) {
  const study = caseStudies.find((item) => item.slug === slug)!;
  const Content = content[slug];
  return (
    <div className={`case-study case-study--${slug}`}>
      <nav className="case-switch" aria-label="Case studies">
        {caseStudies.map((item) => (
          <Link
            href={`/case-studies/${item.slug}/`}
            key={item.slug}
            aria-current={item.slug === slug ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <SectionNavigation key={slug} sections={study.sections} />
      <Content />
    </div>
  );
}
