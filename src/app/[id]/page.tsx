import { AllSets } from "@/lib/AllSets";
import Dashboard from "../page";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
    then: Promise<unknown>['then'];
    catch: Promise<unknown>['catch'];
    finally: Promise<unknown>['finally'];
    [Symbol.toStringTag]: Promise<unknown>[typeof Symbol.toStringTag];
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const foundSet = AllSets.find(set => set.id === params.id);
  
  return {
    title: foundSet?.set.title || "Set",
  };
}

export default function Page({ params }: PageProps) {
  // You can use searchParams here if needed, or just ignore it for now
  return <Dashboard defaultImportedSetID={params.id} />;
}
