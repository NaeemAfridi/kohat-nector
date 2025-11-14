import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Kohat Nectar</h3>
            <p className="text-sm text-muted-foreground">
              Celebrating the rich fruit heritage of Kohat, Pakistan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/fruits" className="text-muted-foreground hover:text-foreground">Fruits</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/community" className="text-muted-foreground hover:text-foreground">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Growing Guide</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Seasons</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Diseases</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Climate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                Kohat, Pakistan
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                +92 (0)XXX XXXXXXX
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                info@kohalnectar.pk
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Kohat Nectar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
