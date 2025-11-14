import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockAdminData } from '@/lib/mock-data';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function AdminPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Administrative"
            title="Admin Dashboard"
            description="Manage community content and monitor platform activity"
          />

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Reports', value: mockAdminData.totalReports, color: 'text-primary' },
              { label: 'Pending Review', value: mockAdminData.pendingReview, color: 'text-accent' },
              { label: 'Approved Posts', value: mockAdminData.approvedPosts, color: 'text-primary' },
              { label: 'Active Users', value: mockAdminData.totalUsers, color: 'text-secondary' }
            ].map((stat, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Latest community submissions requiring review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAdminData.recentReports.map((report, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition">
                    <div className="flex items-start gap-3 flex-1">
                      {report.status === 'pending' && <AlertCircle className="text-accent mt-1" size={20} />}
                      {report.status === 'reviewing' && <Clock className="text-muted-foreground mt-1" size={20} />}
                      {report.status === 'approved' && <CheckCircle className="text-primary mt-1" size={20} />}
                      <div className="flex-1">
                        <p className="font-semibold">{report.title}</p>
                        <p className="text-sm text-muted-foreground">{report.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={report.status === 'approved' ? 'default' : report.status === 'reviewing' ? 'secondary' : 'outline'}
                      >
                        {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Moderation Actions */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Content Moderation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Review Pending Posts</Button>
                <Button variant="outline" className="w-full">Manage User Reports</Button>
                <Button variant="outline" className="w-full">Block/Unblock Users</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">View Activity Logs</Button>
                <Button variant="outline" className="w-full">Manage Fruits Database</Button>
                <Button variant="outline" className="w-full">System Settings</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
