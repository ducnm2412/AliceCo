import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteFooter, SiteHeader } from "../../site-chrome";
import { getService, services } from "../data";
import { ServiceContent } from "./service-content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Vietnam — ALICE & CO.`,
    description: `${service.headline} ${service.text}`,
  };
}

export default function ServicePage({ params }: PageProps<"/services/[slug]">) {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<section className="page-hero" aria-busy="true" />}>
          <ServiceContent params={params} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
