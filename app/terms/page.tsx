import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SaivaTech',
  description: 'Read the terms and conditions for using SaivaTech services and website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8cc] to-[#00FFFF]">Service</span>
        </h1>
        <p className="text-slate-500 text-sm mb-12">Last Updated: April 16, 2026</p>

        <div className="prose prose-invert prose-lg text-slate-400 bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-10">

          <p className="leading-relaxed text-slate-300">
            Welcome to SaivaTech. By accessing or using our website (<a href="https://www.saivatech.info/" className="text-[#00FFFF] hover:underline">https://www.saivatech.info/</a>), you agree to the following terms:
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <p className="mb-4 leading-relaxed">SaivaTech provides:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>Website development</li>
              <li>AI chatbot integration</li>
              <li>Business automation solutions</li>
            </ul>
            <p className="leading-relaxed">All services are subject to agreed project scope and pricing.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
            <p className="mb-4 leading-relaxed">You agree:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>To provide accurate information</li>
              <li>Not to misuse the website or services</li>
              <li>Not to attempt unauthorized access or disrupt systems</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Payments</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Payments must be made as per agreed terms</li>
              <li>No work will begin without initial payment (if applicable)</li>
              <li>Delays in payment may result in service suspension</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>All content, designs, and code remain the property of SaivaTech until full payment is completed</li>
              <li>After payment, ownership is transferred unless otherwise agreed</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Service Limitations</h2>
            <p className="mb-4 leading-relaxed font-semibold text-white">We do NOT guarantee:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Specific revenue or lead results</li>
              <li>SEO ranking positions</li>
              <li>Continuous uptime (due to third-party hosting)</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Revisions &amp; Support</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Limited revisions are included based on the package</li>
              <li>Additional changes may be charged separately</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="mb-4 leading-relaxed">We reserve the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Terminate services for misuse or non-payment</li>
              <li>Refuse service to anyone at our discretion</li>
            </ul>
          </div>

          <hr className="border-slate-800" />

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Liability Limitation</h2>
            <p className="mb-4 leading-relaxed">SaivaTech is not liable for:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>Business losses</li>
              <li>Data loss</li>
              <li>Third-party service failures</li>
            </ul>
            <p className="leading-relaxed">Use services at your own risk.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="mb-4 leading-relaxed">We may integrate:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
              <li>Payment gateways</li>
              <li>Hosting providers</li>
              <li>AI tools</li>
            </ul>
            <p className="leading-relaxed">We are not responsible for their failures or policies.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="leading-relaxed">We may update these terms anytime. Continued use means acceptance.</p>
          </div>

          <hr className="border-slate-800" />

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
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
