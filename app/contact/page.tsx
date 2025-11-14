'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for reaching out! We will be in touch soon.');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Get In Touch"
            title="Contact Us"
            description="Have questions or want to collaborate? We'd love to hear from you"
          />

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold block mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Message</label>
                    <textarea
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin size={24} />,
                  title: 'Location',
                  content: 'Kohat, Khyber Pakhtunkhwa, Pakistan'
                },
                {
                  icon: <Phone size={24} />,
                  title: 'Phone',
                  content: '+92 (0)XXX XXXXXXX'
                },
                {
                  icon: <Mail size={24} />,
                  title: 'Email',
                  content: 'info@kohalnectar.pk'
                },
                {
                  icon: <Clock size={24} />,
                  title: 'Business Hours',
                  content: 'Monday - Friday: 9AM - 5PM (PKT)'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-primary mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
              <CardDescription>Find us on the map</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground">Map integration coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
