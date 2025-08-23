import Dashboard from "../page";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  // You can use searchParams here if needed, or just ignore it for now
  return <Dashboard defaultImportedSetID={params.id} />;
}
