"use client";

const sections = [
  {
    title: "1. Description of Service",
    content: [
      "Saja provides an online platform for creating, distributing, and analyzing surveys, forms, and related data collection tools. Features may include survey design, distribution channels, response collection, reporting, analytics, and integrations with third-party tools.",
      "We may add, modify, or discontinue features at our discretion, with or without notice, though we will make reasonable efforts to notify Customers of material changes affecting paid plans.",
    ],
  },
  {
    title: "2. Eligibility and Account Registration",
    content: [
      "2.1 You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service.",
      "2.2 You agree to provide accurate, current, and complete information during registration and to keep it updated.",
      "2.3 You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.",
      "2.4 We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.",
    ],
  },
  {
    title: "3. Subscription Plans, Fees, and Payment",
    content: [
      "3.1 Certain features require a paid subscription. Fees, billing cycles, and plan details are described on our pricing page or in your order form.",
      "3.2 Fees are billed in advance on a recurring basis unless otherwise agreed. All fees are non-refundable except as required by law or expressly stated in these Terms.",
      "3.3 We may change our pricing with at least 30 days' notice. Continued use after a price change constitutes acceptance of the new pricing at your next renewal.",
      "3.4 You are responsible for all applicable taxes, except taxes on our net income.",
      "3.5 Failure to pay fees when due may result in suspension or termination of your access to the Service.",
    ],
  },
  {
    title: "4. Customer Content and Data",
    content: [
      "4.1 Ownership. As between you and Saja, you retain all ownership rights to the survey content, questions, branding, and response data you create or collect through the Service (\"Customer Content\").",
      "4.2 License to Us. You grant Saja a limited, non-exclusive, worldwide license to host, store, process, and display Customer Content solely as necessary to provide and improve the Service, and as otherwise permitted under our Privacy Policy.",
      "4.3 Respondent Data. You are solely responsible for ensuring that your collection and use of survey respondent data complies with applicable privacy laws (e.g., GDPR, CCPA), including obtaining necessary consents and providing required disclosures to respondents. You represent that you have the legal right to collect and process any personal data submitted through your surveys.",
      "4.4 Data Security. We implement industry-standard technical and organizational safeguards designed to protect Customer Content, as described in our Privacy Policy and Security documentation. However, no system is completely secure, and we cannot guarantee absolute security.",
      "4.5 Backups. While we perform routine backups, you are responsible for maintaining your own copies of critical Customer Content and data exports.",
    ],
  },
  {
    title: "5. Acceptable Use",
    content: [
      "You agree not to use the Service to:",
      "• Violate any applicable law or regulation;",
      "• Collect sensitive personal data (e.g., health, financial, or biometric data) without appropriate safeguards and consents;",
      "• Send unsolicited surveys or spam, or violate anti-spam laws (e.g., CAN-SPAM, CASL);",
      "• Harass, defame, or infringe the rights of any third party;",
      "• Upload malicious code, attempt to breach security, or interfere with the Service's operation;",
      "• Reverse-engineer, decompile, or attempt to extract source code from the Service, except where permitted by law;",
      "• Resell or white-label the Service without our express written consent;",
      "• Use the Service to build a competing product.",
      "We reserve the right to investigate and take appropriate action, including suspension or termination, for violations of this section.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "6.1 The Service, including all software, design, trademarks, and underlying technology, is owned by Saja or its licensors and is protected by intellectual property laws. These Terms do not grant you any rights to our trademarks, logos, or brand assets except as necessary to use the Service.",
      "6.2 Any feedback, suggestions, or ideas you provide about the Service may be used by us without restriction or compensation to you.",
    ],
  },
  {
    title: "7. Third-Party Services and Integrations",
    content: [
      "The Service may integrate with third-party tools (e.g., CRMs, payment processors, analytics tools). We are not responsible for the practices, availability, or content of third-party services. Your use of such integrations is subject to the third party's own terms and privacy policies.",
    ],
  },
  {
    title: "8. Confidentiality",
    content: [
      "Each party agrees to protect the other's confidential information with the same degree of care it uses for its own similar information, and not less than reasonable care, and to use such information only as necessary to perform under these Terms.",
    ],
  },
  {
    title: "9. Disclaimers of Warranties",
    content: [
      '9.1 THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
      "9.2 We do not warrant that the Service will be uninterrupted, error-free, or completely secure, or that survey results, data, or analytics will be accurate or reliable for any particular purpose.",
      "9.3 Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    content: [
      "10.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SAJA, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, including but not limited to loss of profits, revenue, data, goodwill, or business interruption, arising out of or related to your use of or inability to use the Service, even if advised of the possibility of such damages.",
      "10.2 TOTAL LIABILITY CAP. Our total aggregate liability arising out of or relating to these Terms or the Service shall not exceed the total fees paid by you to us in the twelve (12) months immediately preceding the event giving rise to the claim, or [$100 USD] if you are on a free plan.",
      "10.3 Exceptions. The limitations in this Section 10 do not apply to: (a) liability arising from our gross negligence, fraud, or willful misconduct; (b) our indemnification obligations under Section 11; or (c) liability that cannot be limited under applicable law.",
      "10.4 These limitations apply regardless of the legal theory of liability (contract, tort, negligence, strict liability, or otherwise) and are a fundamental basis of the bargain between the parties.",
    ],
  },
  {
    title: "11. Indemnification",
    content: [
      "11.1 By You. You agree to indemnify, defend, and hold harmless Saja and its affiliates from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from: (a) your Customer Content; (b) your violation of these Terms; (c) your violation of any applicable law, including data privacy laws relating to survey respondents; or (d) your misuse of the Service.",
      "11.2 By Us. We will indemnify you against third-party claims that the Service, as provided by us, infringes a third party's intellectual property rights, subject to the liability cap in Section 10, provided you promptly notify us of the claim and cooperate in its defense.",
    ],
  },
  {
    title: "12. Data Breach Notification",
    content: [
      "In the event of a security incident affecting your Customer Content, we will notify you without undue delay and in accordance with applicable law, and will provide reasonably available information to help you meet your own notification obligations to affected respondents or regulators.",
    ],
  },
  {
    title: "13. Term and Termination",
    content: [
      "13.1 These Terms remain in effect while you use the Service.",
      "13.2 You may cancel your subscription at any time through your account settings; cancellation will take effect at the end of the current billing period.",
      "13.3 We may suspend or terminate your access immediately for material breach of these Terms, non-payment, or conduct that we believe harms the Service, other users, or third parties.",
      "13.4 Upon termination, your right to use the Service ceases. We will make Customer Content available for export for [30] days post-termination, after which it may be deleted from our systems, unless a longer retention period is required by law.",
    ],
  },
  {
    title: "14. Dispute Resolution and Arbitration",
    content: [
      "14.1 Informal Resolution. Before filing a claim, you agree to contact us at support@saja.biz to attempt to resolve the dispute informally for at least 30 days.",
      "14.2 Binding Arbitration. Except for claims that qualify for small claims court or claims for injunctive relief regarding intellectual property or unauthorized use of the Service, any dispute arising out of or relating to these Terms shall be resolved through binding arbitration administered by the applicable arbitration association under its applicable rules, rather than in court.",
      "14.3 Class Action Waiver. Disputes shall be resolved on an individual basis only. You waive any right to participate in a class, consolidated, or representative action, to the extent permitted by law.",
      "14.4 Opt-Out. You may opt out of this arbitration provision within 30 days of first accepting these Terms by sending written notice to support@saja.biz",
    ],
  },
  {
    title: "15. Governing Law",
    content: [
      "These Terms are governed by the laws of the Isle of Man, without regard to conflict-of-law principles, except where mandatory local consumer protection or data protection laws require otherwise.",
    ],
  },
  {
    title: "16. Modifications to These Terms",
    content: [
      "We may update these Terms from time to time. Material changes will be notified via email or in-app notice at least [15] days before taking effect. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "17. Miscellaneous",
    content: [
      "17.1 Entire Agreement. These Terms, together with our Privacy Policy and any order forms, constitute the entire agreement between you and Saja regarding the Service.",
      "17.2 Severability. If any provision of these Terms is found unenforceable, the remaining provisions will remain in full effect, and the unenforceable provision will be modified to the minimum extent necessary to make it enforceable.",
      "17.3 No Waiver. Our failure to enforce any right or provision will not be considered a waiver of those rights.",
      "17.4 Assignment. You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.",
      "17.5 Force Majeure. Neither party is liable for delays or failures due to causes beyond reasonable control, including natural disasters, internet or infrastructure failures, or government actions.",
      "17.6 Contact. Questions about these Terms can be sent to support@saja.biz",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0095DA] text-white text-sm font-medium mb-6">
            Legal & Compliance
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Terms of Service
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Saja Limited - Isle of Man
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last Updated: 19.08.2026
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 md:p-12 mb-12">
          <p className="text-gray-700 leading-8 text-[15px] md:text-base">
            Please read these Terms of Service carefully before using Saja. These Terms govern your access to and use of Saja's survey creation, distribution, and analytics tools, including our website, applications, and APIs (collectively, the "Service").
          </p>
          <p className="text-gray-700 leading-8 text-[15px] md:text-base mt-4">
            By creating an account, accessing, or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you are entering into these Terms on behalf of a company or organization, you represent that you have authority to bind that entity, and "you" refers to that entity. If you do not agree to these Terms, do not access or use the Service.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Section Header */}
              <div className="border-b border-gray-100 px-6 md:px-10 py-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="px-6 md:px-10 py-8 space-y-4">
                {section.content.map((text, i) => {
                  const isBullet = text.startsWith("•");
                  const isNumbered = /^\d+\.\d+/.test(text);

                  return (
                    <div key={i}>
                      {isBullet ? (
                        <div className="flex items-start gap-3">
                          <span className="text-[#0095DA] font-bold mt-1">•</span>
                          <p className="text-gray-700 leading-8 text-[15px] md:text-base">
                            {text.substring(1).trim()}
                          </p>
                        </div>
                      ) : isNumbered ? (
                        <p className="text-gray-700 leading-8 text-[15px] md:text-base font-medium">
                          {text}
                        </p>
                      ) : (
                        <p className="text-gray-700 leading-8 text-[15px] md:text-base">
                          {text}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-[#0095DA] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>

              <div className="space-y-3 text-gray-200">
                <p>
                  If you have any questions or concerns regarding these Terms of
                  Service, please contact us at:
                </p>
                <p className="font-medium text-white">Email: support@saja.biz</p>
                <p className="text-sm text-gray-300 mt-2">
                  Saja Limited
                  <br />
                  Registered in the Isle of Man
                  <br />
                  Company Registration Number: 137004C
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Acceptance of Terms
              </h3>

              <p className="text-gray-200 leading-7">
                By using Saja's services, you signify your acceptance of these
                Terms of Service. If you do not agree to these terms, please do
                not use our services. We encourage you to read and understand
                these terms thoroughly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}