import { type Metadata } from 'next';
import DashboardPage from '../dashboard/page';

export default function Page({ params }: { params: { id: string } }) {
  return <DashboardPage defaultImportedSetID={params.id} />;
}