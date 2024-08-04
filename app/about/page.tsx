import { FooterCompo } from '../_components/footer';
import Navbar from '../_components/navbar';
import AboutUs from './AboutUs';

export default function AboutPage() {
    return (
        <div>
            <Navbar/>
            <main className="p-4">
                <AboutUs />
            </main>
            <FooterCompo/>
        </div>
    );
}
