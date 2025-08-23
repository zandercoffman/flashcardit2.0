import Dashboard from "../page";

interface PageProps {
  params: {
    id: string;
    then: Promise<unknown>['then'];
    catch: Promise<unknown>['catch'];
    finally: Promise<unknown>['finally'];
    [Symbol.toStringTag]: Promise<unknown>[typeof Symbol.toStringTag];
  };
}

export default function Page({ params }: PageProps) {
  // You can use searchParams here if needed, or just ignore it for now
  return <Dashboard defaultImportedSetID={params.id} />;
}
