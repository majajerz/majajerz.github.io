import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/case-studies/CaseStudy";
import { caseStudies } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | Maja Jerzmanowska`,
    description: study.description,
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return <CaseStudy slug={study.slug} />;
}
