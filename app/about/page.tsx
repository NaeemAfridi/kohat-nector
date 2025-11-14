import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Story"
            title="About Kohat Nectar"
            description="Celebrating agricultural heritage and promoting sustainable fruit cultivation"
          />

          <div className="prose prose-sm md:prose-base max-w-none mb-12">
            <p>
              Kohat Nectar is a comprehensive platform dedicated to showcasing and promoting the diverse fruit varieties of Kohat, Pakistan. Our mission is to connect farmers, traders, researchers, and consumers in a thriving ecosystem that celebrates agricultural excellence and sustainability.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
            <p>
              We envision Kohat becoming a global center for premium fruit production, where traditional farming wisdom meets modern technology. Through education, innovation, and community collaboration, we aim to enhance yield, quality, and farmer income.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Fruit Information Database',
                description: 'Comprehensive details about fruits, including nutrition, seasonality, diseases, and climate preferences.'
              },
              {
                title: 'Community Forum',
                description: 'A platform for farmers and enthusiasts to share experiences, ask questions, and learn together.'
              },
              {
                title: 'Disease & Issue Tracking',
                description: 'Report and track agricultural issues with community support and expert guidance.'
              },
              {
                title: 'Orchard Mapping',
                description: 'Interactive maps showing orchard locations and fruit availability across regions.'
              }
            ].map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Impact</CardTitle>
              <CardDescription>Supporting the farming community of Kohat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">342</p>
                  <p className="text-muted-foreground">Active Community Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">156</p>
                  <p className="text-muted-foreground">Verified Fruit Listings</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">28</p>
                  <p className="text-muted-foreground">Active Orchards</p>
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
