import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import FooterCTA from './FooterCTA';
import { formatPhoneHref, siteConfig } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-[#04080D] text-gray-400 pt-32 pb-12 relative border-t-[12px] border-accent">
      <div className="absolute inset-0 bg-grid-slate-900/[0.2] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Call to Action in Footer */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-20 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-accent font-black uppercase tracking-[0.2em] text-sm">Initiate Project</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">
              Ready to <br/>Build?
            </h2>
            <p className="text-xl text-gray-500 font-medium">{"Let's build Ethiopia's next landmark together."}</p>
          </div>
          <FooterCTA />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 border-b border-gray-800 pb-16">

          <div className="lg:col-span-4">
            <div className="mb-8 relative h-20 w-48">
              <Image
                src="/Logos/t-che 2-white.png"
                alt="Che Construction Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-500 mb-10 leading-relaxed pr-8 text-base font-medium">
              {"Ethiopia's trusted general contractor delivering building construction, road infrastructure, and renovation projects across Addis Ababa and beyond."}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8">Headquarters</h3>
            <address className="not-italic">
              <ul className="space-y-6 text-sm text-gray-400 font-medium">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{siteConfig.addressLabel[0]}<br />{siteConfig.addressLabel[1]}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href={formatPhoneHref(siteConfig.phoneHref)} className="font-bold tracking-wider text-white hover:text-accent transition-colors">{siteConfig.phoneDisplay}</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="font-bold tracking-wider text-white hover:text-accent transition-colors">{siteConfig.email}</a>
                </li>
              </ul>
            </address>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8">Explore</h3>
            <ul className="space-y-5 text-sm font-black tracking-widest uppercase text-gray-500">
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-3"><span className="w-2 h-2 bg-gray-800"></span> Company Profile</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-3"><span className="w-2 h-2 bg-gray-800"></span> Our Expertise</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors flex items-center gap-3"><span className="w-2 h-2 bg-gray-800"></span> Selected Works</Link></li>
              <li><Link href="/locations" className="hover:text-accent transition-colors flex items-center gap-3"><span className="w-2 h-2 bg-gray-800"></span> Areas Served</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-3"><span className="w-2 h-2 bg-gray-800"></span> Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-widest text-gray-600">
          <p>© {new Date().getFullYear()} Che Construction. All Rights Reserved.</p>
          <Link href="/contact" className="mt-6 md:mt-0 hover:text-white transition-colors">Request Quote</Link>
        </div>
      </div>
    </footer>
  );
}
