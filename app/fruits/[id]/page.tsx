'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { mockFruits } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Leaf, AlertTriangle } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function FruitDetailPage() {
  const params = useParams();
  const fruit = mockFruits.find((f) => f.id === params.id);

  if (!fruit) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Fruit Not Found</h1>
            <Link href="/fruits">
              <Button>Back to Fruits</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/fruits" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft size={20} />
            Back to Fruits
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div className="bg-muted rounded-lg overflow-hidden h-96 md:h-auto">
              <img
                src={fruit.image || "/placeholder.svg"}
                alt={fruit.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <Badge variant="secondary" className="mb-4">{fruit.season}</Badge>
                <h1 className="text-5xl font-bold mb-4">{fruit.name}</h1>
                <p className="text-lg text-muted-foreground mb-8">{fruit.description}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm">Growing Region</p>
                      <p className="text-muted-foreground">{fruit.region}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm">Peak Season</p>
                      <p className="text-muted-foreground">{fruit.season}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Information Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="text-primary" size={20} />
                  Nutrition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{fruit.nutritionInfo}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="text-accent" size={20} />
                  Common Diseases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{fruit.diseases}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-secondary" size={20} />
                  Climate Preference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{fruit.climateInfo}</p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Orchard Locations</CardTitle>
              <CardDescription>Find orchards growing {fruit.name} near you</CardDescription>
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
