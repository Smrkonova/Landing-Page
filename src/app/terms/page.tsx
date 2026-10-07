import React from "react";
import LegalTopTOC from "@/components/legal/LegalTopTOC";

export const metadata = {
  title: "Terms & Conditions | Smrkonova",
  description:
    "Governing the use of SMRKONOVA digital infrastructure, engineering systems, APIs, client consulting engagements, and related services under the laws of the Republic of India.",
};

const sections = [
  { id: "acceptance-framework", title: "1. Acceptance & Regulatory Framework", shortTitle: "1. Acceptance Framework" },
  { id: "scope-services", title: "2. Scope of Services & Deployments", shortTitle: "2. Scope of Services" },
  { id: "accounts-security", title: "3. Client Accounts & Access Controls", shortTitle: "3. Accounts & Security" },
  { id: "intellectual-property", title: "4. Intellectual Property Rights", shortTitle: "4. Intellectual Property" },
  { id: "fees-invoicing", title: "5. Fees, Invoicing & GST Compliance", shortTitle: "5. Fees & Invoicing" },
  { id: "client-obligations", title: "6. Client Obligations & Acceptable Use", shortTitle: "6. Client Obligations" },
  { id: "confidentiality", title: "7. Confidentiality & Trade Secrets", shortTitle: "7. Confidentiality" },
  { id: "warranties-slas", title: "8. Warranties, Disclaimers & SLAs", shortTitle: "8. Warranties & SLAs" },
  { id: "liability-limitation", title: "9. Limitation of Liability", shortTitle: "9. Liability Limits" },
  { id: "term-termination", title: "10. Term, Termination & Suspension", shortTitle: "10. Term & Termination" },
  { id: "grievance-redressal", title: "11. Grievance Redressal (IT Rules 2021)", shortTitle: "11. Grievance Redressal" },
  { id: "governing-law", title: "12. Governing Law & Arbitration", shortTitle: "12. Governing Law" },
  { id: "amendments", title: "13. Amendments to Terms", shortTitle: "13. Amendments" },
  { id: "contact-notices", title: "14. Contact & Legal Notices", shortTitle: "14. Contact & Notices" },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="relative w-full bg-white text-[#4B5563] min-h-screen font-sans selection:bg-[#111827] selection:text-white">
      {/* Header / Hero Section matching exact Figma specs (1440 x 510) */}
      <section
        className="relative w-full h-[510px] min-h-[510px] flex flex-col justify-end pb-16 md:pb-20 border-b border-white/10 overflow-hidden"
        style={{
          background:
            "radial-gradient(65% 55% at 50% 0%, rgba(30, 64, 175, 0.35) 0%, rgba(30, 64, 175, 0) 70%), radial-gradient(56.93% 209.13% at 50% 100%, rgba(24, 24, 27, 0.4) 0%, rgba(24, 24, 27, 0) 75%), #08080A",
        }}
      >
        <div className="w-full max-w-[1344px] mx-auto px-6 lg:px-8">
          <div className="max-w-[768px] flex flex-col gap-4">
            <h1 className="font-sans font-medium text-[42px] sm:text-[52px] lg:text-[60px] leading-[1] tracking-tight text-white">
              Terms &amp; Conditions
            </h1>
            <p className="max-w-[672px] font-sans font-normal text-[15px] sm:text-[16px] leading-6 text-[#94A3B8]">
              Governing the use of SMRKONOVA digital infrastructure, engineering systems, APIs, client consulting engagements, and related services under the laws of the Republic of India.
            </p>
            <p className="font-sans font-normal text-[12px] leading-4 text-[#64748B] pt-1 uppercase tracking-wider">
              LAST UPDATED: FEBRUARY 15, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Top Horizontal Table of Contents Tab Bar */}
      <LegalTopTOC sections={sections} />

      {/* MainContentLayout: Centered clean readable width */}
      <div className="max-w-[1024px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        {/* Article - DocumentBody */}
        <article className="w-full space-y-16">
            {/* Preamble Section */}
            <div className="pb-12 border-b border-[#E5E5E5] space-y-4">
              <p className="font-sans font-normal text-[15px] leading-6 text-[#4B5563]">
                By commissioning, accessing, browsing, integrating, or utilizing the proprietary software engineering platforms, specialized cloud deployments, artificial intelligence models, code repositories, APIs, or consulting offerings provided by{" "}
                <strong className="font-bold text-[#111827]">
                  SMRKONOVA DIGITAL SYSTEMS PRIVATE LIMITED
                </strong>{" "}
                (a private limited company incorporated under the Companies Act, 2013, having its principal corporate presence in Bengaluru, Karnataka, India, hereinafter referred to as “SMRKONOVA”, “we”, “us”, or “our”), you (“Client”, “Customer”, or “User”) unconditionally accept and agree to be bound by these Terms.
              </p>
              <p className="font-sans font-normal text-[15px] leading-6 text-[#4B5563]">
                If you are entering into this Agreement on behalf of a corporate legal entity, you represent and warrant that you possess full corporate authorization and legal capacity to bind such entity.
              </p>
            </div>

            {/* Section 1 */}
            <section id="acceptance-framework" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                1. Acceptance of Terms &amp; Regulatory Framework
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  Your engagement with SMRKONOVA establishes a valid and binding contract between you and SMRKONOVA under the provisions of the Indian Contract Act, 1872. By executing a Master Services Agreement (“MSA”), Statement of Work (“SOW”), Service Order, or by initiating any authenticated API interaction, you consent to these operational and legal frameworks.
                </p>
                <p>
                  These Terms incorporate by reference our Privacy Policy, Information Security Addendum, and any project-specific Service Level Agreements (&ldquo;SLAs&rdquo;). In the event of any conflict between these Terms and an executed SOW, the specific terms of the SOW shall govern with respect to that individual engagement.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="scope-services" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                2. Scope of Services &amp; System Deployments
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  SMRKONOVA architects, designs, develops, and delivers high-performance digital engineering platforms, cloud infrastructure automations, specialized API gateways, and custom algorithmic engines. All technical engagements are provisioned in accordance with discrete specifications detailed within an applicable SOW.
                </p>
                <p>
                  Any changes, feature additions, architectural restructuring, or scope enhancements requested outside an active SOW shall be executed solely through written Change Orders signed by authorized officers of both parties, specifying modified engineering timelines, cloud provisioning parameters, and revised financial schedules.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="accounts-security" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                3. Client Accounts, Security &amp; Access Controls
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  Access to SMRKONOVA managed staging platforms, container registries, artifact repositories, and telemetry dashboards requires client-authenticated administrative credentials. Clients are exclusively responsible for maintaining the confidentiality of their private keys, OAuth tokens, SSH pairs, and Multi-Factor Authentication (&ldquo;MFA&rdquo;) secrets.
                </p>
                <p>
                  In compliance with directives issued by the Indian Computer Emergency Response Team (&ldquo;CERT-In&rdquo;) under Section 70B of the Information Technology Act, 2000, Clients must report any unauthorized access, compromised API tokens, system anomalies, or cyber security incidents impacting connected production infrastructure to SMRKONOVA’s security desk immediately, and no later than six (6) hours from detection.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="intellectual-property" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                4. Intellectual Property Rights &amp; Work Product
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  <strong className="font-bold text-[#111827]">Bespoke Work Product:</strong> Subject to timely and full settlement of all corresponding project milestones, invoices, and statutory taxes, SMRKONOVA assigns to the Client all right, title, and copyright ownership in and to the custom software source code, bespoke application designs, and explicit project deliverables created exclusively for the Client under an executed SOW, in terms of Section 19 of the Copyright Act, 1957.
                </p>
                <p>
                  <strong className="font-bold text-[#111827]">Pre-Existing Background IP:</strong> Notwithstanding the foregoing, SMRKONOVA retains sole, exclusive, and unencumbered ownership of all pre-existing software frameworks, base architecture patterns, core algorithmic modules, proprietary CI/CD pipelines, container configurations, reusable libraries, and foundational design systems (&ldquo;SMRKONOVA Background IP&rdquo;). SMRKONOVA grants the Client a perpetual, worldwide, non-exclusive, non-transferable, royalty-free license to utilize such Background IP strictly as integrated into the final client deliverable.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="fees-invoicing" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                5. Fees, Invoicing &amp; GST Compliance
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  All commercial fees for engineering retainers, milestone deliverables, and cloud maintenance services are detailed within the corresponding SOW. Invoices are payable within the net settlement window specified (typically 15 or 30 days from invoice issuance).
                </p>
                <p>
                  <strong className="font-bold text-[#111827]">Goods and Services Tax (GST):</strong> In accordance with the Central Goods and Services Tax Act, 2017 (&ldquo;CGST Act&rdquo;), Integrated Goods and Services Tax Act, 2017 (&ldquo;IGST Act&rdquo;), and respective State enactments, all domestic invoices are subject to mandatory GST levied at the applicable statutory rate (presently 18% under SAC 998314 - IT Design and Development Services). Domestic corporate clients must furnish a valid Goods and Services Tax Identification Number (GSTIN) to claim Input Tax Credit (ITC).
                </p>
                <p>
                  <strong className="font-bold text-[#111827]">Tax Deducted at Source (TDS):</strong> Applicable withholdings under the Income-tax Act, 1961 (such as Section 194J for technical services) may be deducted by the Client, provided valid statutory TDS certificates (Form 16A) are transmitted to SMRKONOVA on a quarterly basis within statutory deadlines.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="client-obligations" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                6. Client Obligations &amp; Acceptable Use
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  The Client covenants that all computational workloads, software deployments, and system interactions shall strictly adhere to Indian cyber laws. In particular, the Client agrees not to upload, transmit, host, display, or distribute any data, content, or code that:
                </p>
                <ul className="space-y-3 list-none pl-6 pt-1">
                  <li className="relative pl-4 text-[#525252] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#525252]">
                    Infringes any patent, trademark, copyright, trade secret, or other proprietary intellectual property rights of any party.
                  </li>
                  <li className="relative pl-4 text-[#525252] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#525252]">
                    Contains software viruses, malicious worms, Trojan horses, rootkits, or unauthorized payloads designed to disrupt or compromise server integrity.
                  </li>
                  <li className="relative pl-4 text-[#525252] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#525252]">
                    Violates applicable laws, statutory rules, or public order directives under the Information Technology Act, 2000.
                  </li>
                  <li className="relative pl-4 text-[#525252] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#525252]">
                    Attempts to circumvent authentication mechanisms, perform unauthorized penetration testing, or reverse-engineer confidential system cores without explicit written authorization.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="confidentiality" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                7. Confidentiality &amp; Non-Disclosure
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  Each party agrees to maintain in strict confidence and protect with reasonable industry care all proprietary technology, system designs, architectural configurations, pricing metrics, and business methodologies disclosed by the other party (&ldquo;Confidential Information&rdquo;).
                </p>
                <p>
                  Confidentiality obligations shall survive for a period of three (3) years following the termination of the engagement; provided, however, that trade secrets, cryptographic keys, and proprietary source code engines shall remain confidential indefinitely or until such information falls into the public domain through no fault of the receiving party.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="warranties-slas" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                8. Warranties, Disclaimers &amp; Uptime SLAs
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  SMRKONOVA warrants that all engineering deliverables will be constructed in a professional and workmanlike manner adhering to recognized industry standards. SMRKONOVA provides a limited thirty (30) day warranty post-deployment against reproducible coding bugs, during which identified non-conformities will be remediated without additional charges.
                </p>
                <p>
                  <strong className="font-bold text-[#111827]">Third-Party Infrastructure Disclaimer:</strong> Except as expressly stated, all third-party managed infrastructure, edge CDNs, foundational large language models (LLMs), hyperscale hosting (AWS, GCP, Azure), and upstream open-source packages are integrated &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without express or implied warranties of any kind under Indian law.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="liability-limitation" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                9. Limitation of Liability
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  To the maximum extent permissible under applicable Indian law, neither SMRKONOVA nor its directors, officers, engineers, or affiliates shall be liable to the Client or any third party for indirect, incidental, punitive, special, or consequential damages, including loss of profits, commercial interruption, data corruption, or business goodwill, regardless of legal theory.
                </p>
                <p>
                  The aggregate liability of SMRKONOVA arising out of or related to any single engagement or SOW, whether in contract, tort (including negligence), or statutory duty, shall under no circumstances exceed the total fees actually received by SMRKONOVA under the specific applicable Statement of Work during the six (6) months immediately preceding the event giving rise to liability.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="term-termination" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                10. Term, Termination &amp; Suspension
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  Either party may terminate an engagement or SOW for convenience by providing thirty (30) days prior written notice, or immediately for material breach if the breaching party fails to cure such breach within fifteen (15) days of receiving formal notification.
                </p>
                <p>
                  Upon termination, the Client shall pay SMRKONOVA for all professional services performed, milestones achieved, and non-cancellable cloud infrastructure commitments incurred up to the effective termination date. SMRKONOVA shall transfer all fully-paid deliverable code repositories and transition assets within fourteen (14) business days.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="grievance-redressal" className="space-y-6 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                11. Grievance Redressal &amp; Compliance Officer
              </h2>
              <p className="font-sans text-[15px] leading-6 text-[#4B5563]">
                In compliance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Digital Personal Data Protection Act, 2023, SMRKONOVA has designated a Grievance &amp; Compliance Officer to address concerns regarding platform use, data security, and terms compliance.
              </p>

              {/* Officer Details Card matching Figma */}
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Left Column */}
                  <div className="space-y-1">
                    <h3 className="font-sans font-semibold text-[12px] leading-4 uppercase tracking-[0.6px] text-[#A3A3A3]">
                      GRIEVANCE &amp; COMPLIANCE OFFICER
                    </h3>
                    <p className="font-sans font-bold text-[16px] leading-6 text-[#171717]">
                      Mohit Ravindran
                    </p>
                    <p className="font-sans font-normal text-[14px] leading-5 text-[#525252]">
                      Head of Engineering Compliance &amp; Regulatory Affairs
                    </p>
                    <p className="font-sans font-normal text-[12px] leading-4 text-[#737373] pt-1">
                      SMRKONOVA Digital Systems Private Limited
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-1">
                    <h3 className="font-sans font-semibold text-[12px] leading-4 uppercase tracking-[0.6px] text-[#A3A3A3]">
                      CONTACT CHANNELS &amp; ADDRESS
                    </h3>
                    <p className="font-mono text-[12px] leading-4 text-[#404040]">
                      Email: grievance@smrkonova.com
                    </p>
                    <p className="font-mono text-[12px] leading-4 text-[#404040]">
                      Escalations: legal@smrkonova.com
                    </p>
                    <p className="font-sans text-[12px] leading-5 text-[#737373] pt-1">
                      Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103, India
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5]/80">
                  <p className="font-sans text-[12px] leading-4 text-[#737373]">
                    Grievances are acknowledged within 24 hours and resolved within fifteen (15) days in accordance with the IT Rules, 2021.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section id="governing-law" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                12. Governing Law &amp; Dispute Resolution
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  This Agreement, its interpretation, and all disputes arising hereunder shall be governed by, construed, and enforced in accordance with the substantive laws of the Republic of India, without regard to conflict of law principles.
                </p>
                <p>
                  <strong className="font-bold text-[#111827]">Arbitration:</strong> Any dispute, claim, or controversy arising out of or relating to this Agreement, including its breach, termination, or invalidity, shall be referred to and finally resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Bengaluru, Karnataka, India. The tribunal shall consist of a sole arbitrator appointed by mutual agreement. The proceedings shall be conducted in English.
                </p>
                <p>
                  Subject to arbitration, the courts of competent jurisdiction located in Bengaluru, Karnataka shall possess exclusive territorial and subject-matter jurisdiction.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="amendments" className="space-y-4 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                13. Amendments to Terms
              </h2>
              <div className="space-y-4 font-sans text-[15px] leading-6 text-[#4B5563]">
                <p>
                  We periodically update these Terms to reflect technical enhancements, statutory adjustments under Indian regulatory directives, or updated commercial practices.
                </p>
                <p>
                  Material changes shall be notified to active account administrators via registered email or enterprise portal alerts thirty (30) days prior to taking effect. Continued engagement with our digital systems after the effective revision date constitutes full acceptance of the revised Terms.
                </p>
              </div>
            </section>

            {/* Section 14: Contact & Legal Notices */}
            <section id="contact-notices" className="space-y-6 scroll-mt-28">
              <h2 className="font-sans font-normal text-[28px] sm:text-[32px] leading-8 text-[#111827]">
                14. Contact &amp; Legal Notices
              </h2>
              <p className="font-sans text-[15px] leading-6 text-[#4B5563]">
                If you have questions, statutory communications, or contractual notices regarding these Terms, please direct your communication to our legal desk:
              </p>

              {/* Structured 2-box Contact card matching Figma */}
              <div className="bg-[#FAFAFA]/50 border border-[#E5E5E5] rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
                  {/* Left Box: Mailing Address */}
                  <div className="p-8 space-y-2">
                    <h3 className="font-sans font-bold text-[11px] leading-[18px] uppercase tracking-[0.55px] text-[#A3A3A3]">
                      MAILING ADDRESS
                    </h3>
                    <p className="font-sans font-bold text-[14px] leading-5 text-[#171717] pt-1">
                      SMRKONOVA Engineering Systems
                    </p>
                    <p className="font-sans font-normal text-[14px] leading-[23px] text-[#525252]">
                      Outer Ring Road, Bellandur<br />
                      Bangalore, Karnataka 560103<br />
                      India
                    </p>
                  </div>

                  {/* Right Box: Inquiries & Legal Desk */}
                  <div className="p-8 space-y-3">
                    <h3 className="font-sans font-bold text-[11px] leading-[18px] uppercase tracking-[0.55px] text-[#A3A3A3]">
                      INQUIRIES &amp; LEGAL DESK
                    </h3>
                    <a
                      href="mailto:legal@smrkonova.com"
                      className="font-sans font-normal text-[16px] leading-6 text-[#171717] hover:underline block"
                    >
                      legal@smrkonova.com
                    </a>
                    <div className="pt-2">
                      <p className="font-sans font-normal text-[12px] leading-4 text-[#737373]">
                        Formal statutory inquiries and service of notices are acknowledged within 48 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
      </div>
    </main>
  );
}
