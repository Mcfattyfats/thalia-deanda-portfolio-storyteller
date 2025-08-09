
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TheBoysSection from '@/components/TheBoysSection';
import TopGunSection from '@/components/TopGunSection';
import StrangerThingsSection from '@/components/StrangerThingsSection';
import CulpaMiaSection from '@/components/CulpaMiaSection';
import SummerTurnedPrettySection from '@/components/SummerTurnedPrettySection';
import CinderellaSection from '@/components/CinderellaSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TheBoysSection />
      <TopGunSection />
      <StrangerThingsSection />
      <CulpaMiaSection />
      <SummerTurnedPrettySection />
      <CinderellaSection />
    </div>
  );
};

export default Index;
