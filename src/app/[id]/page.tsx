import Page from "../dashboard/page"

interface PageProps {
    params: {
      id: string;
    };
  }

export default function PageID({params}: PageProps) {
    return <Page defaultImportedSetID={params.id}/>
}