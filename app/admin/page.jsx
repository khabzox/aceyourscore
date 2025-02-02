import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getArticles,
  getTeachers,
  getTestimonials,
  fetchDataUsersList,
} from "./_components/dataFetchers";

async function StatsCard({ title, value }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

async function StatsDisplay() {
  // These functions now return the arrays directly.
  const articles = await getArticles();
  const teachers = await getTeachers();
  const testimonials = await getTestimonials();
  const students = await fetchDataUsersList();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard title="Teachers" value={teachers?.length || 0} />
      <StatsCard title="Blog Posts" value={articles?.length || 0} />
      <StatsCard title="Testimonials" value={testimonials?.length || 0} />
      <StatsCard title="Students" value={students?.length || 0} />
    </div>
  );
}

export default function AdminPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome, Admin</h1>
      <Suspense fallback={<div>Loading stats...</div>}>
        <StatsDisplay />
      </Suspense>
    </div>
  );
}
