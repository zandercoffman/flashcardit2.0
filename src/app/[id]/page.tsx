import DashboardPage from "../dashboard/dashboard";

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Page({ params, searchParams }: PageProps) {
  // You can use searchParams here if needed, or just ignore it for now
  return <DashboardPage defaultImportedSetID={params.id} />;
}
