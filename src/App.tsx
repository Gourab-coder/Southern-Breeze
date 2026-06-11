import styles from './App.module.css';
import { AnimatedBackground } from './components/Layout';
import { Benefits } from './components/Benefits/Benefits';
import { BlogSection } from './components/BlogSection/BlogSection';
import { BrandQuote } from './components/BrandQuote/BrandQuote';
import { FeaturedProduct } from './components/FeaturedProduct/FeaturedProduct';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Newsletter } from './components/Newsletter/Newsletter';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { Testimonials } from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className={styles.appShell}>
      <AnimatedBackground />
      {/* Persistent top navigation for anchor-based section jumps. */}
      <Navbar />
      <main className={styles.main}>
        {/* Hero is intentionally separate from the stacked content panels below. */}
        <Hero />
        {/* The remaining homepage sections share the same vertical rhythm. */}
        <div className={styles.stack}>
          <ProductShowcase />
          <Benefits />
          <FeaturedProduct />
          <Testimonials />
          <BrandQuote />
          <BlogSection />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
