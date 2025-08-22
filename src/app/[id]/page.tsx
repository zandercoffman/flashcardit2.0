import Dashboard from "../dashboard/page"

interface PageProps {
    params: {
      id: string;
    };
  }

export default function PageID({params}: PageProps) {
    return <Dashboard defaultImportedSetID={params.id}/>
}