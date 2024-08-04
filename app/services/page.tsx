import { FooterCompo } from '../_components/footer';
import Navbar from '../_components/navbar'; 
import Services from './Services';

export default function ServicePage() {
    return (
        <div>
            <Navbar />
            <main className="p-4">
                <Services />
            </main>
            <FooterCompo />
        </div>
    );
}
