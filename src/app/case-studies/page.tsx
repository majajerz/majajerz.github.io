import type { Metadata } from "next";
import CaseStudy from "@/components/case-studies/CaseStudy";

export const metadata: Metadata = {
  title: "Case Studies | Maja Jerzmanowska",
  description:
    "Design process, finished work, and reflections across five interaction design case studies.",
};
export default function Page() {
  return <CaseStudy slug="assignment-1" />;
}
