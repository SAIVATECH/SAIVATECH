import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SaivaTech',
  description: 'Learn how SaivaTech collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8cc] to-[#00FFFF]">Policy</span>
        </h1>
        <p className="text-slate-500 text-sm mb-12">Last Updated: April 16, 2026</p>

        <div className="prose prose-invert prose-lg text-slate-400 bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-10">

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="mb-4 leading-relaxed">We may collect the following types of information:</p>

            <h3 className="text-lg font-semibold text-white mb-2">a) Personal Information</h3>
            <ul className="list-disc list-inside space-y-1 mb-6 text-slate-400">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details (if provided)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2">b) Usage Data</h3>
            <ul className="list-disc list-inside space-y-1 mb-6 text-slate-400">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on site</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2">c) Communication Data</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Messages sent via forms, chatbot, or WhatsApp</li>
              <li>Inquiry details related to our services</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">We use your data to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Respond to inquiries and provide services</li>
              <li>Generate leads and manage client relationships</li>
              <li>Improve website performance and user experience</li>
              <li>Send updates, offers, or service-related communication</li>
              <li>Automate workflows and CRM integrations</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">AI &amp; Automation Usage</h2>
            <p className="mb-4 leading-relaxed">SaivaTech uses AI-powered tools (including chatbots and automation systems) to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>Respond to user queries</li>
              <li>Capture and qualify leads</li>
              <li>Improve customer interaction efficiency</li>
            </ul>
            <p className="leading-relaxed">Your data may be processed through these systems securely.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing</h2>
            <p className="mb-4 leading-relaxed font-semibold text-white">We do NOT sell your personal data.</p>
            <p className="mb-4 leading-relaxed">We may share data with:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>CRM tools</li>
              <li>Email marketing platforms</li>
              <li>Hosting providers</li>
              <li>Analytics services</li>
            </ul>
            <p className="leading-relaxed">Only to the extent necessary for business operations.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="leading-relaxed">We implement industry-standard security measures to protect your data. However, no system is 100% secure.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="mb-4 leading-relaxed">We may use cookies to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>Analyze traffic</li>
              <li>Improve user experience</li>
            </ul>
            <p className="leading-relaxed">You can disable cookies via your browser settings.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="mb-4 leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="leading-relaxed">Contact us to exercise these rights.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
            <p className="leading-relaxed">Our website may contain links to external sites. We are not responsible for their privacy practices.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Updates to Policy</h2>
            <p className="leading-relaxed">We may update this policy at any time. Changes will be posted on this page.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="space-y-3 text-slate-300">
              <p className="font-semibold text-white text-lg">SaivaTech</p>
              <p>
                Email:{' '}
                <a href="mailto:saivatech786@gmail.com" className="text-[#00FFFF] hover:underline">
                  saivatech786@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+919442101823" className="text-[#00FFFF] hover:underline">
                  +91 94421 01823
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://www.saivatech.info/" target="_blank" rel="noopener noreferrer" className="text-[#00FFFF] hover:underline">
                  https://www.saivatech.info/
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
