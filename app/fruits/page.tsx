'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionHeader } from '@/components/section-header';
import { FruitCard } from '@/components/fruit-card';
import { mockFruits } from '@/lib/mock-data';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';

export default function FruitsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const seasons = ['May - July', 'August - October', 'June - July', 'September - October'];
  const regions = ['Upper Kohat', 'Central Kohat', 'Lower Kohat', 'Highland Kohat', 'Forest Areas', 'Upper Valleys'];

  const filteredFruits = mockFruits.filter((fruit) => {
    const matchesSearch = fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fruit.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeason = !selectedSeason || fruit.season === selectedSeason;
    const matchesRegion = !selectedRegion || fruit.region === selectedRegion;
    return matchesSearch && matchesSeason && matchesRegion;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Browse Collection"
            title="Our Fruit Varieties"
            description="Explore the diverse range of fruits grown in Kohat with detailed information"
          />

          {/* Filters */}
          <div className="mb-12 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Input
                placeholder="Search fruits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2">Season</p>
                <div className="flex flex-wrap gap-2">
                  {seasons.map((season) => (
                    <Badge
                      key={season}
                      variant={selectedSeason === season ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedSeason(selectedSeason === season ? null : season)}
                    >
                      {season}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Region</p>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Badge
                      key={region}
                      variant={selectedRegion === region ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
                    >
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {(searchTerm || selectedSeason || selectedRegion) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSeason(null);
                  setSelectedRegion(null);
                }}
                className="gap-2"
              >
                <X size={16} />
                Clear filters
              </Button>
            )}
          </div>

          {/* Results */}
          {filteredFruits.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFruits.map((fruit) => (
                <FruitCard
                  key={fruit.id}
                  id={fruit.id}
                  name={fruit.name}
                  image={fruit.image}
                  season={fruit.season}
                  description={fruit.description}
                  region={fruit.region}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No fruits found matching your filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
