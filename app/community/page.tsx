'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionHeader } from '@/components/section-header';
import { mockCommunityPosts } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function CommunityPage() {
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Connect & Share"
            title="Community Forum"
            description="Share farming insights, ask questions, and learn from our vibrant community"
          />

          <div className="mb-8">
            <Button className="gap-2">
              Share Your Story
            </Button>
          </div>

          <div className="space-y-6">
            {mockCommunityPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <img
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{post.author}</p>
                        <CardDescription>{post.timestamp}</CardDescription>
                        <CardTitle className="text-xl mt-2">{post.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.content}</p>

                  <div className="bg-muted rounded-lg overflow-hidden h-48">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleLike(post.id)}
                      className={`gap-2 ${likes[post.id] ? 'text-primary' : ''}`}
                    >
                      <Heart size={18} fill={likes[post.id] ? 'currentColor' : 'none'} />
                      {post.likes + (likes[post.id] ? 1 : 0)}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle size={18} />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
