'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionHeader } from '@/components/section-header';
import { FruitCard } from '@/components/fruit-card';
import { Button } from '@/components/ui/button';
import { mockFruits } from '@/lib/mock-data';
import Link from 'next/link';
import { ArrowRight, Leaf, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Welcome to Kohat Nectar
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Discover the Rich Fruit Heritage
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {' '}of Kohat
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Explore diverse fruit varieties, learn about sustainable farming, and connect with our community of growers and enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fruits">
                  <Button size="lg" className="gap-2">
                    Explore Fruits <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Mission"
              title="Why Kohat Nectar?"
              description="Supporting farmers, educating communities, and celebrating agricultural excellence"
            />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: 'Sustainable Growth',
                  description: 'Promoting eco-friendly farming practices and climate-smart agriculture for a sustainable future.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Community First',
                  description: 'Connecting farmers, traders, and consumers to build a thriving agricultural ecosystem.'
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: 'Local Heritage',
                  description: 'Celebrating the unique fruits and farming traditions that define Kohat\'s agricultural identity.'
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Fruits Showcase */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              subtitle="Explore Our Selection"
              title="Featured Fruits"
              description="Discover the premium fruits of Kohat with detailed information about seasons and varieties"
            />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mockFruits.slice(0, 6).map((fruit) => (
                <motion.div key={fruit.id} variants={item}>
                  <FruitCard
                    id={fruit.id}
                    name={fruit.name}
                    image={fruit.image}
                    season={fruit.season}
                    description={fruit.description}
                    region={fruit.region}
                  />
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-12">
              <Link href="/fruits">
                <Button size="lg" variant="outline" className="gap-2">
                  View All Fruits <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8 opacity-90">
              Share your farming insights, connect with fellow growers, and contribute to Kohat's agricultural knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community">
                <Button size="lg" variant="secondary" className="gap-2">
                  Explore Community <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
