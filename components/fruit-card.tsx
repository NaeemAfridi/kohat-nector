import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface FruitCardProps {
  id: string;
  name: string;
  image: string;
  season: string;
  description: string;
  region?: string;
}

export function FruitCard({ id, name, image, season, description, region }: FruitCardProps) {
  return (
    <Link href={`/fruits/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <CardTitle className="text-xl">{name}</CardTitle>
              <CardDescription>{region}</CardDescription>
            </div>
            <Badge variant="secondary" className="text-xs whitespace-nowrap">{season}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-primary text-sm font-medium group">
            Learn more
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
