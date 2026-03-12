import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const sections = [
  {
    id: 'model3',
    title: 'Model 3',
    subtitle: 'From $40,240',
    buttons: [
      { label: 'Order Now', type: 'primary' },
      { label: 'Learn More', type: 'secondary' },
    ],
  },
  {
    id: 'modely',
    title: 'Model Y',
    subtitle: 'From $44,990',
    buttons: [
      { label: 'Order Now', type: 'primary' },
      { label: 'Learn More', type: 'secondary' },
    ],
  },
  {
    id: 'modelx',
    title: 'Model X',
    subtitle: 'From $79,990',
    buttons: [
      { label: 'Order Now', type: 'primary' },
      { label: 'Learn More', type: 'secondary' },
    ],
  },
  {
    id: 'models',
    title: 'Model S',
    subtitle: 'From $74,990',
    buttons: [
      { label: 'Order Now', type: 'primary' },
      { label: 'Learn More', type: 'secondary' },
    ],
  },
  {
    id: 'solar',
    title: 'Solar Panels',
    subtitle: 'Produce Clean Energy From Your Roof',
    buttons: [
      { label: 'Order Now', type: 'primary' },
      { label: 'Learn More', type: 'secondary' },
    ],
  },
];

export default function Home() {
  return (
    <main style={{ background: '#000' }}>
      <Navbar />
      {sections.map((section) => (
        <HeroSection key={section.id} {...section} />
      ))}
      <Footer />
    </main>
  );
}
