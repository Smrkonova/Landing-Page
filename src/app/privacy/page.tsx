import React from "react";
import Link from "next/link";
import LegalTopTOC from "@/components/legal/LegalTopTOC";

export const metadata = {
  title: "Privacy Policy | Smrkonova",
  description:
    "How SMRKONOVA protects data, user privacy, and proprietary information across our enterprise systems and client partnerships.",
};

const sections = [
  { id: "service-provider", title: "1. SMRKONOVA as a Service Provider and Sub-Processor", shortTitle: "1. Sub-Processor" },
  { id: "personal-information", title: "2. Personal Information We Collect", shortTitle: "2. Data Collected" },
  { id: "collection-methods", title: "3. How We Collect Personal Information", shortTitle: "3. How Collected" },
  { id: "cookies-tracking", title: "4. Cookies and Tracking Technology", shortTitle: "4. Cookies & Tracking" },
  { id: "how-we-use", title: "5. How We Use the Personal Information We Collect", shortTitle: "5. How We Use Data" },
  { id: "how-we-share", title: "6. How We Share Personal Information", shortTitle: "6. How We Share" },
  { id: "european-rights", title: "7. European Data Privacy Rights", shortTitle: "7. European Rights" },
  { id: "us-privacy-rights", title: "8. U.S. Privacy Rights", shortTitle: "8. U.S. Privacy Rights" },
  { id: "control-information", title: "9. Control Over Your Information", shortTitle: "9. Control Over Data" },
  { id: "retention-security", title: "10. Data Retention and Data Security", shortTitle: "10. Retention & Security" },
  { id: "children-privacy", title: "11. Children's Privacy", shortTitle: "11. Children's Privacy" },
  { id: "policy-changes", title: "12. Changes to Privacy Policy", shortTitle: "12. Policy Changes" },
  { id: "european-rep", title: "13. European Representative and Data Protection Officer Details", shortTitle: "13. DPO & EU Rep" },
  { id: "contact-us", title: "14. Contact Us", shortTitle: "14. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative w-full bg-white text-[#334155] min-h-screen font-sans selection:bg-[#020617] selection:text-white">
      {/* Header / Hero Section matching exact Figma specs (1440 x 510) */}
      <section
        className="relative w-full h-[510px] min-h-[510px] flex flex-col justify-end pb-16 md:pb-20 border-b border-white/10 overflow-hidden"
        style={{
          background:
            "radial-gradient(65% 55% at 50% 0%, rgba(30, 64, 175, 0.35) 0%, rgba(30, 64, 175, 0) 70%), radial-gradient(56.93% 209.13% at 50% 100%, rgba(24, 24, 27, 0.4) 0%, rgba(24, 24, 27, 0) 75%), #08080A",
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-[768px] flex flex-col gap-4">
            <h1 className="font-sans font-medium text-[42px] sm:text-[52px] lg:text-[60px] leading-[1] tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="max-w-[672px] font-sans font-normal text-[15px] sm:text-[16px] leading-6 text-[#94A3B8]">
              How SMRKONOVA protects data, user privacy, and proprietary information across our enterprise systems and client partnerships.
            </p>
            <p className="font-sans font-normal text-[12px] leading-4 text-[#64748B] pt-1 uppercase tracking-wider">
              LAST UPDATED: FEBRUARY 15, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Top Horizontal Table of Contents Tab Bar */}
      <LegalTopTOC sections={sections} />

      {/* Container - Document Content */}
      <div className="max-w-[1024px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        {/* Main Detailed Legal Document Content */}
        <article className="w-full space-y-12">
            {/* Section - Intro Preamble */}
            <div className="space-y-4">
              <p className="font-sans font-normal text-[20px] leading-[28px] text-[#020617]">
                SMRKONOVA (“SMRKONOVA,” “we,” “us,” or “our”) respects your privacy and is dedicated to protecting your personal information. This Privacy Policy outlines how we collect, store, handle, and disclose personal data gathered across our websites, enterprise engineering portals, APIs, client consulting engagements, and related developer platforms (collectively, our “Services”).
              </p>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#475569]">
                At SMRKONOVA, our core principle is rooted in data minimality, user sovereignty, and enterprise-grade operational security. We never sell, rent, or trade your personal data. Any data collected is retained solely to deliver, secure, and optimize our digital systems and technical collaborations. If you have questions regarding this policy or our data practices, contact us at{" "}
                <a href="mailto:privacy@smrkonova.com" className="text-[#020617] underline hover:text-black">
                  privacy@smrkonova.com
                </a>
                .
              </p>
            </div>

            {/* Section 1 */}
            <section id="service-provider" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                1. SMRKONOVA as a Service Provider and Sub-Processor
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                SMRKONOVA provides digital infrastructure architecture, software development, cloud operations, and systems integration services to our enterprise Clients. In providing these engineering services, SMRKONOVA frequently acts as a Service Provider and “Sub-Processor” or “Processor” on behalf of our Clients, who act as the primary Data Controllers.
              </p>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                Where SMRKONOVA processes data strictly on behalf of our corporate Clients, we do so strictly pursuant to executed Master Services Agreements (MSAs) and Data Processing Addenda (DPAs). We do not control or own the telemetry, database payloads, or proprietary assets our Clients ingest into their cloud clusters or software environments. If you are an end-user, employee, or partner of one of our Clients and have inquiries regarding your personal information processed within their systems, please direct your inquiry directly to that respective entity.
              </p>
            </section>

            {/* Section 2 */}
            <section id="personal-information" className="pt-8 border-t border-[#E5E7EB] space-y-6 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                2. Personal Information We Collect
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                In the table below, we outline the categories of Personal Information that SMRKONOVA has collected within the last twelve (12) months, the sources from which information is derived, and the operational purposes for which it is processed:
              </p>

              {/* Structured Legal Table (Matching Routable & Cohere) */}
              <div className="border border-[#E5E7EB] rounded-[2px] overflow-x-auto shadow-sm">
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                      <th className="p-4 sm:p-5 font-sans font-medium text-[11px] leading-4 tracking-[0.275px] uppercase text-[#0F172A] border-r border-[#E5E7EB] w-[33%]">
                        EXAMPLES / CATEGORIES OF PERSONAL INFORMATION
                      </th>
                      <th className="p-4 sm:p-5 font-sans font-medium text-[11px] leading-4 tracking-[0.275px] uppercase text-[#0F172A] border-r border-[#E5E7EB] w-[33%]">
                        SOURCES OF PERSONAL INFORMATION
                      </th>
                      <th className="p-4 sm:p-5 font-sans font-medium text-[11px] leading-4 tracking-[0.275px] uppercase text-[#0F172A] w-[34%]">
                        PURPOSES FOR PERSONAL INFORMATION COLLECTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-[#E5E7EB]">
                    {/* Row 1 */}
                    <tr>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        <strong className="block font-bold text-[#0F172A] mb-1">Identifiers:</strong>
                        Name, business email address, company name, phone number, enterprise IP address.
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        Direct Submissions &amp; Enterprise Onboarding
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] align-top">
                        Establishing client communications, account authorization, enterprise provisioning, verifying technical support tickets, and service onboarding.
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        <strong className="block font-bold text-[#0F172A] mb-1">Commercial Information:</strong>
                        Scope of contracted services, signed statements of work (SOWs), billing records, payment histories.
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        Direct Submissions &amp; Enterprise Contracting
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] align-top">
                        Fulfilling contractual scope, invoicing, financial reporting, corporate tax audits, and ongoing account administration.
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        <strong className="block font-bold text-[#0F172A] mb-1">Payment &amp; Billing Information:</strong>
                        Bank account wire instructions, masked credit card tokens (processed via PCI-DSS certified gateway), VAT/GST identifiers.
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        Direct Submissions &amp; Merchant Processors
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] align-top">
                        Executing wire receipts, processing project retainer payments, resolving billing inquiries, and fraud mitigation.
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        <strong className="block font-bold text-[#0F172A] mb-1">Professional / Employment Details:</strong>
                        Job titles, engineering roles, department affiliations, technical credentials provided during partnership.
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        Direct Submissions &amp; Enterprise Client Records
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] align-top">
                        Assembling dedicated engineering pods, evaluating technical competency, team communication, and managing project milestones.
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        <strong className="block font-bold text-[#0F172A] mb-1">Internet &amp; Electronic Network Activity:</strong>
                        Browser type, operating system, device telemetry, request timestamps, pages visited, API diagnostic logs.
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        Automated Platform Telemetry &amp; Server Logs
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] align-top">
                        System uptime monitoring, mitigating DDoS and malicious queries, identifying application regressions, and interface performance tuning.
                      </td>
                    </tr>
                    {/* Row 6 */}
                    <tr>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        <strong className="block font-bold text-[#0F172A] mb-1">Geolocation Data:</strong>
                        General coarse regional location derived from business IP address.
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] border-r border-[#E5E7EB] align-top">
                        Automated Network Telemetry
                      </td>
                      <td className="p-4 sm:p-5 font-sans text-[13px] leading-5 text-[#334155] align-top">
                        Ensuring compliance with localized data sovereignty regulations, edge cache routing, and server load balancing.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-mono text-[12px] leading-4 text-[#64748B]">
                In the preceding 12 months, SMRKONOVA has not collected biometric identifiers, protected health information (PHI), or sensory audio/visual surveillance data from general website visitors.
              </p>
            </section>

            {/* Section 3 */}
            <section id="collection-methods" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                3. How We Collect Personal Information
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                SMRKONOVA gathers personal and technical data through three transparent methods:
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <p className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    <strong className="font-semibold text-[#0F172A]">Direct Submissions:</strong> Technical inquiries, RFPs, contact submissions, contract onboarding, credential generation, and direct support tickets initiated by authorized client personnel.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <p className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    <strong className="font-semibold text-[#0F172A]">Automated Platform Telemetry:</strong> Server logs, telemetry collectors, and essential performance cookies deployed across our hosted web properties and customer portals.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <p className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    <strong className="font-semibold text-[#0F172A]">Third-Party &amp; Commercial Partners:</strong> Verified business referrals, enterprise directories, payment settlement gateways, and public repositories relevant to active technical consulting scopes.
                  </p>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="cookies-tracking" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                4. Cookies and Tracking Technology
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                We employ cookies, HTTP state tokens, and local web storage to maintain interface continuity, enhance security, and monitor system performance.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Essential / Necessary Cookies:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    These tokens are cryptographically required to safeguard sessions, prevent Cross-Site Request Forgery (CSRF), and authenticate active engineers. You cannot disable these via settings without interrupting platform utility.
                  </p>
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Performance &amp; Telemetry Headers:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    We use minimal aggregated analytics to identify platform bottlenecks, optimize server routing, and evaluate documentation readability. These metrics do not profile users across unrelated third-party websites.
                  </p>
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Browser Control Instructions:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    Most modern web browsers allow you to disable cookies or clear stored cache via application settings. Note that disabling essential security tokens will prevent login to SMRKONOVA client dashboards and development staging environments.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="how-we-use" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                5. How We Use the Personal Information We Collect
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                We process collected data strictly under verified legal and operational grounds:
              </p>
              <ul className="space-y-2.5 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <span className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    Provisioning, executing, and maintaining enterprise software, digital architectures, and cloud services.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <span className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    Verifying client authorizations, executing signed statements of work, and issuing statutory tax invoices.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <span className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    Mitigating security vulnerabilities, monitoring infrastructure uptime, and defending against unauthorized API queries.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <span className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    Communicating critical system advisories, security patches, scheduled maintenance windows, and technical releases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <span className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    Complying with regulatory obligations, financial audits, corporate tax governance, and lawful government requests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <span className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    Continuously tuning web performance, documentation clarity, and developer interface latency.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="how-we-share" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                6. How We Share Personal Information
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                SMRKONOVA does not disclose personal data to third parties for monetary consideration. We only share information with vetted sub-processors and entities bound by rigorous data confidentiality agreements:
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <p className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    <strong className="font-semibold text-[#0F172A]">Cloud Infrastructure &amp; Hosting Sub-Processors:</strong> Enterprise cloud providers (e.g., AWS, GCP, Vercel) operating under certified SOC2 Type II and ISO 27001 data processing agreements.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <p className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    <strong className="font-semibold text-[#0F172A]">Operational Service Providers:</strong> Secure payment processors, billing automation systems, enterprise ticketing desks, and cryptographic key management vaults.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <p className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    <strong className="font-semibold text-[#0F172A]">Business Reorganizations:</strong> In the event of an acquisition, corporate restructuring, merger, or asset transfer, where data transfer is conducted under executed non-disclosure agreements.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                  <p className="font-sans text-[16px] leading-[26px] text-[#334155]">
                    <strong className="font-semibold text-[#0F172A]">Legal &amp; Regulatory Authorities:</strong> When strictly mandated by valid legal process, judicial subpoena, or statutory enforcement orders under applicable law.
                  </p>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="european-rights" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                7. European Data Privacy Rights
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                If you are located within the European Economic Area (EEA), the United Kingdom, or Switzerland, you are entitled to statutory protections under the General Data Protection Regulation (GDPR) and UK GDPR:
              </p>
              <div className="space-y-3 font-sans text-[15px] leading-6 text-[#334155]">
                <p>
                  <strong>Lawful Basis for Processing:</strong> We process personal data solely when necessary for performance of our contracts, compliance with legal obligations, or pursuant to our legitimate business interests in operating secure engineering services.
                </p>
                <p>
                  <strong>Your Statutory Prerogatives:</strong> You have the right to request access, correction, erasure (“right to be forgotten”), restriction of processing, data portability, and to object to processing. Where processing is based on consent, you may withdraw it at any time.
                </p>
                <p>
                  <strong>International Transfers:</strong> Where data is transferred outside the EEA/UK, SMRKONOVA implements European Commission-approved Standard Contractual Clauses (SCCs) and robust technical safeguards to ensure adequate data protection.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="us-privacy-rights" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                8. U.S. Privacy Rights
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                This section supplements our policy to address specific disclosures required by U.S. state privacy legislation, including the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), as well as privacy statutes in Virginia, Colorado, Utah, and Connecticut.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Notice at Collection:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    The categories of personal information gathered over the preceding 12 months, the commercial purposes for use, and retention standards are set forth in Section 2 above.
                  </p>
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Do Not Sell or Share My Personal Info:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    SMRKONOVA does not sell personal information to third parties, nor do we “share” personal information for cross-context behavioral advertising.
                  </p>
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Exercising Consumer Rights:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    Eligible U.S. residents may submit access, correction, or deletion requests via email at{" "}
                    <a href="mailto:privacy@smrkonova.com" className="text-[#020617] underline">
                      privacy@smrkonova.com
                    </a>
                    . We will verify your identity before processing and will never discriminate against you for exercising your privacy prerogatives.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="control-information" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                9. Control Over Your Information
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                You have practical tools to inspect, modify, and limit the collection of your information:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Email Communications:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    You may opt out of non-transactional marketing announcements at any time by clicking the “unsubscribe” link embedded in emails. You will continue to receive critical operational, billing, and security advisories.
                  </p>
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Account Updates:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    Authorized client administrators can review and revise user profile details by logging into the SMRKONOVA administrative console.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="retention-security" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                10. Data Retention and Data Security
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Retention Schedules:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    We retain personal data strictly for as long as necessary to fulfill active contractual engagements, resolve customer support inquiries, and comply with legal, tax, or accounting requirements. Upon contract expiration or verified erasure requests, client data is securely purged or cryptographically pseudonymized according to established retention cycles.
                  </p>
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[2px]">
                  <p className="font-sans font-semibold text-[15px] leading-6 text-[#0F172A] mb-1">
                    Security Controls:
                  </p>
                  <p className="font-sans text-[14px] leading-[22px] text-[#475569]">
                    SMRKONOVA maintains enterprise technical and organizational protections designed to prevent unauthorized access, alteration, or disclosure. All data at rest is encrypted using AES-256 standards, and data in transit is protected via TLS 1.3 protocol. Access to production systems is restricted via mandatory multi-factor authentication (MFA) and least-privilege role-based access control (RBAC).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section id="children-privacy" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                11. Children&apos;s Privacy
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                Our websites and enterprise engineering offerings are strictly intended for commercial entities and individuals aged 18 and older. SMRKONOVA does not knowingly solicit or collect personal information from individuals under the age of 16. If we become aware that personal information of a minor has been collected without parental consent, we will promptly delete the data from our repositories.
              </p>
            </section>

            {/* Section 12 */}
            <section id="policy-changes" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                12. Changes to Privacy Policy
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                We periodically review and update this Privacy Policy to reflect advancements in our engineering systems, legal requirements, and industry standards. Material changes will be highlighted via an updated “Last Updated” date at the top of this document or communicated via direct email notification to enterprise account holders. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Section 13 */}
            <section id="european-rep" className="pt-8 border-t border-[#E5E7EB] space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                13. European Representative and Data Protection Officer Details
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                For individuals residing within the European Economic Area (EEA), United Kingdom, or Switzerland, inquiries regarding cross-border telemetry, standard contractual clauses, or supervisory authority escalations may be directed to our dedicated compliance desk at{" "}
                <a href="mailto:privacy@smrkonova.com" className="text-[#020617] underline font-medium">
                  privacy@smrkonova.com
                </a>
                .
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact-us" className="pt-8 border-t border-[#E5E7EB] space-y-6 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-[36px] text-[#020617]">
                14. Contact Us
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[26px] text-[#334155]">
                If you have questions, comments, or formal data access requests regarding this Privacy Policy, please reach out to our privacy desk:
              </p>

              {/* Overlay+Border Box matching exact Figma styling */}
              <div className="bg-[#F8FAFC]/70 border border-[#E5E7EB] rounded-[2px] p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Column 1: Mailing Address */}
                  <div>
                    <h3 className="font-sans font-bold text-[12px] leading-4 uppercase tracking-wider text-[#64748B] mb-2">
                      MAILING ADDRESS
                    </h3>
                    <p className="font-sans font-medium text-[14px] leading-[21px] text-[#0F172A]">
                      SMRKONOVA Engineering Systems<br />
                      Outer Ring Road, Bellandur<br />
                      Bangalore, Karnataka 560103<br />
                      India
                    </p>
                  </div>

                  {/* Column 2: Inquiries & Legal Desk */}
                  <div>
                    <h3 className="font-sans font-bold text-[12px] leading-4 uppercase tracking-wider text-[#64748B] mb-2">
                      INQUIRIES &amp; LEGAL DESK
                    </h3>
                    <a
                      href="mailto:privacy@smrkonova.com"
                      className="font-mono font-semibold text-[16px] leading-6 text-[#020617] hover:underline block mb-2"
                    >
                      privacy@smrkonova.com
                    </a>
                    <p className="font-mono font-normal text-[12px] leading-4 text-[#64748B]">
                      Formal privacy inquiries are acknowledged within 48 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </article>
      </div>
    </main>
  );
}
