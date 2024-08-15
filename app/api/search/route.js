import { NextResponse } from 'next/server';

// Mock data (يمكن استبدالها بقاعدة بيانات حقيقية)
const mockData = [
    { id: 1, title: 'Introduction to Next.js' },
    { id: 2, title: 'Advanced React Techniques' },
    { id: 3, title: 'Understanding TypeScript' },
    { id: 4, title: 'Building APIs with Next.js' },
    { id: 5, title: 'Deploying Next.js Applications' },
];

export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('q') || '';

    // Normalize query to lowercase and split into words
    const words = query.toLowerCase().split(/\s+/);

    // Filter mock data based on the query words
    const results = mockData.filter(item =>
        words.some(word => item.title.toLowerCase().includes(word))
    );

    return NextResponse.json({ results });
}
