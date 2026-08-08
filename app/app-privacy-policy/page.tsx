// components/PrivacyPolicy.tsx
import React from 'react';

interface PrivacySection {
  title: string;
  content: string | React.ReactNode;
  id: string;
}

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sections: PrivacySection[] = [
    {
      id: 'info-collected',
      title: '1. Information We Collect',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-saja-dark">a. Account Information</h4>
            <ul className="list-disc pl-6 mt-1 text-saja-dark/80">
              <li>Interviewer login credentials (username, encrypted password, assigned role)</li>
              <li>Organization/team identifiers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-saja-dark">b. Survey Response Data</h4>
            <ul className="list-disc pl-6 mt-1 text-saja-dark/80">
              <li>Responses submitted by interviewers through assigned surveys</li>
              <li>Timestamps and metadata associated with each submission</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-saja-dark">c. Device & Location Information</h4>
            <ul className="list-disc pl-6 mt-1 text-saja-dark/80">
              <li>Device model, operating system version, unique device identifiers</li>
              <li>GPS location (if enabled), used to verify interview location and field coverage</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-saja-dark">d. Audio Recordings (where enabled)</h4>
            <ul className="list-disc pl-6 mt-1 text-saja-dark/80">
              <li>With respondent consent, the App may record audio during interviews for quality assurance and verification purposes only</li>
              <li>Recordings are encrypted in transit and at rest, and access is restricted to authorized QC personnel</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-saja-dark">e. Offline Data</h4>
            <ul className="list-disc pl-6 mt-1 text-saja-dark/80">
              <li>Data collected offline is stored securely on the device until the device reconnects to the internet, at which point it syncs to our servers and is removed from local unsynced storage.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'how-we-use',
      title: '2. How We Use Information',
      content: (
        <ul className="list-disc pl-6 space-y-2 text-saja-dark/80">
          <li>To deliver assigned surveys to the correct interviewer</li>
          <li>To store and sync survey responses to the central research database</li>
          <li>To verify field interview authenticity and quality (via location and/or audio verification)</li>
          <li>To manage interviewer accounts and access permissions</li>
          <li>To improve app performance and troubleshoot technical issues</li>
        </ul>
      ),
    },
    {
      id: 'legal-basis',
      title: '3. Legal Basis & Consent for Recording',
      content: (
        <div className="space-y-2 text-saja-dark/80">
          <p>Where audio recording is used, we require that:</p>
          <ul className="list-disc pl-6">
            <li>Respondents are informed before recording begins</li>
            <li>Recording only proceeds with the respondent's explicit consent</li>
            <li>Recordings are used solely for internal quality-control review and not shared externally without authorization</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'data-sharing',
      title: '4. Data Sharing',
      content: (
        <div className="space-y-2 text-saja-dark/80">
          <p>We do not sell personal data. Data may be shared with:</p>
          <ul className="list-disc pl-6">
            <li>The research agency/organization that deployed the App (your employer/client)</li>
            <li>Cloud hosting/infrastructure providers, under strict data-processing agreements</li>
            <li>Regulatory or legal authorities, if required by law</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'data-retention',
      title: '5. Data Retention',
      content: (
        <p className="text-saja-dark/80">
          Survey response data and recordings are retained for 2 years or as required by the contracting research agency, after which they are securely deleted unless a longer retention period is legally required.
        </p>
      ),
    },
    {
      id: 'data-security',
      title: '6. Data Security',
      content: (
        <p className="text-saja-dark/80">
          We use encryption (in transit and at rest), role-based access controls, and secure authentication to protect collected data. Interviewer accounts have restricted access and cannot view survey design, other interviewers' data, or aggregated results.
        </p>
      ),
    },
    {
      id: 'your-rights',
      title: '7. Your Rights',
      content: (
        <p className="text-saja-dark/80">
          Depending on your jurisdiction, you may have the right to access, correct, or request deletion of your personal data. Requests can be sent to{' '}
          <a href="mailto:privacy@saja.biz" className="text-saja-primary hover:text-saja-secondary transition-colors">
            privacy@saja.biz
          </a>
        </p>
      ),
    },
    {
      id: 'childrens-privacy',
      title: "8. Children's Privacy",
      content: (
        <p className="text-saja-dark/80">
          Saja is intended for use by adult field personnel and is not directed at children. We do not knowingly collect data from individuals under 18 through interviewer accounts.
        </p>
      ),
    },
    {
      id: 'permissions',
      title: '9. Permissions Used by the App',
      content: (
        <ul className="list-disc pl-6 space-y-2 text-saja-dark/80">
          <li>
            <span className="font-semibold text-saja-dark">Microphone</span> for consent-based interview recording (QC purposes)
          </li>
          <li>
            <span className="font-semibold text-saja-dark">Location</span> to verify field interview location
          </li>
          <li>
            <span className="font-semibold text-saja-dark">Storage</span> to store survey data offline before syncing
          </li>
          <li>
            <span className="font-semibold text-saja-dark">Internet/Network</span> to sync collected data when connectivity is available
          </li>
        </ul>
      ),
    },
    {
      id: 'changes',
      title: '10. Changes to This Policy',
      content: (
        <p className="text-saja-dark/80">
          We may update this Privacy Policy periodically. Continued use of the App after changes constitutes acceptance of the updated policy.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-saja-primary to-saja-secondary px-6 py-8 sm:px-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">App Privacy Policy</h1>
          <p className="text-white/80 mt-2">
            Last Updated: <span className="font-medium">{currentDate}</span>
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-8 sm:px-10">
          {/* Company Info */}
          <div className="mb-8 p-4 bg-saja-light rounded-lg border border-saja-primary/10">
            <p className="text-saja-dark/90 text-sm leading-relaxed">
              Saja is a trading name of Saja Limited ("we," "us," "our"), a company registered in Isle of Man under company number 137004C, with its registered office at 15 Hillberry Heights, Douglas, IOM IM2 7BN
            </p>
            <p className="text-saja-dark/90 text-sm leading-relaxed mt-2">
              Saja Limited ("we," "us," "our") operates the Saja mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and protect information when field interviewers and administrators use our App.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-4">
                <h2 className="text-xl font-bold text-saja-dark mb-3 border-b-2 border-saja-primary/20 pb-2">
                  {section.title}
                </h2>
                <div className="text-saja-dark/80 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold text-saja-dark mb-3">11. Contact Us</h2>
            <div className="bg-saja-light rounded-lg p-4 border border-saja-primary/10">
              <p className="text-saja-dark/80">For privacy-related questions, contact us at:</p>
              <div className="mt-2">
                <p className="font-semibold text-saja-dark">Saja Limited</p>
                <a
                  href="mailto:privacy@saja.biz"
                  className="text-saja-primary hover:text-saja-secondary transition-colors font-medium"
                >
                  privacy@saja.biz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;