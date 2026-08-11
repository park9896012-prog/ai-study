import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AIComparisonSection } from './components/AIComparisonSection';
import { LevelGuideSection } from './components/LevelGuideSection';
import { InteractivePracticeSection } from './components/InteractivePracticeSection';
import { PromptEngineeringSection } from './components/PromptEngineeringSection';
import { AIQuizSection } from './components/AIQuizSection';
import { AdSenseSlot } from './components/AdSenseSlot';
import { PolicyModal } from './components/PolicyModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('compare');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Policy Modal state
  const [policyModalOpen, setPolicyModalOpen] = useState<boolean>(false);
  const [activePolicy, setActivePolicy] = useState<'about' | 'privacy' | 'terms' | 'contact' | null>(null);

  const handleOpenPolicy = (type: 'about' | 'privacy' | 'terms' | 'contact') => {
    setActivePolicy(type);
    setPolicyModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPolicy={handleOpenPolicy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Banner Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* AdSense Banner 1: Below Hero */}
        <div className="max-w-7xl mx-auto px-4 my-6">
          <AdSenseSlot type="banner" slotId="hero-bottom-ad" />
        </div>

        {/* AI Model Features & Comparison Matrix Section */}
        <AIComparisonSection searchQuery={searchQuery} />

        {/* Level-based Guides Section (Beginner, Intermediate, Advanced) */}
        <LevelGuideSection />

        {/* AdSense Banner 2: In-Article Content Slot */}
        <div className="max-w-7xl mx-auto px-4 my-8">
          <AdSenseSlot type="in-article" slotId="mid-content-ad" />
        </div>

        {/* Step-by-Step Hands-On Practice Exercises */}
        <InteractivePracticeSection />

        {/* Prompt Engineering & Prompt Builder Section */}
        <PromptEngineeringSection />

        {/* AI Diagnosis Quiz Section */}
        <AIQuizSection />

        {/* AdSense Banner 3: Bottom Footer Pre-slot */}
        <div className="max-w-7xl mx-auto px-4 my-8">
          <AdSenseSlot type="footer" slotId="footer-top-ad" />
        </div>

      </main>

      {/* Footer */}
      <Footer onOpenPolicy={handleOpenPolicy} />

      {/* Policy Pages Modal (About, Privacy Policy, Terms, Contact) */}
      <PolicyModal
        isOpen={policyModalOpen}
        activePolicy={activePolicy}
        onClose={() => setPolicyModalOpen(false)}
      />

    </div>
  );
}
