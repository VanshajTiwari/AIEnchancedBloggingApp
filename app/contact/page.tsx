import { FooterCompo } from '../_components/footer';
import Navbar from '../_components/navbar';
import Contact from './Contact';

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <main className="p-4">
                <Contact />
            </main>
            <FooterCompo />
        </div>
    );
}
