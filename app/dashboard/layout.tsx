import { Metadata } from 'next';
import Layout from '@/layout/layout';
interface AppLayoutProps {
    children: React.ReactNode;
}
export const metadata: Metadata = {
    title: 'SOFC | Dashboard',
    description: 'Dashboard de Administracion SOFC',
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
