import DashboardPage from "../dashboard/dashboard";

interface PageProps {
  params: {
    id: Promise<string>;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  // You can use searchParams here if needed, or just ignore it for now
  const resolvedId = await params.id; // Await the promise
  return <DashboardPage defaultImportedSetID={resolvedId} />;
}
