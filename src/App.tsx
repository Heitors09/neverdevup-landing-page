import './App.css';
import { ContactSection } from './components/contact/contact';
import { Header } from './components/header/header';
import { HeroSection } from './components/hero/hero-section';
import { ImpactsSection } from './components/impacts/impacts-section';
import { Steps } from './components/steps/steps';
import { ThemeProvider } from './components/theme/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <main className="w-full">
        <HeroSection />
        <ImpactsSection />
        <Steps />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
