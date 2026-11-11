/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { CurriculumSection } from './components/CurriculumSection';
import { CampusTourSection } from './components/CampusTourSection';
import { InteractivePathwayPlanner } from './components/InteractivePathwayPlanner';
import { FacultySection } from './components/FacultySection';
import { StudentStoriesSection } from './components/StudentStoriesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chans_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialTrack, setBookingInitialTrack] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('chans_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('chans_theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenBooking = (track?: string) => {
    if (track) {
      setBookingInitialTrack(track);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreCampus = () => {
    const el = document.getElementById('campus');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyPlan = (planSummary: string) => {
    setBookingInitialTrack(planSummary);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* Hero Section with large "Learning for the better life" slogan */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplorePrograms={handleExplorePrograms}
          onExploreCampus={handleExploreCampus}
        />

        {/* Educational Philosophy (Why Chan's School) */}
        <PhilosophySection />

        {/* Academic Curricula & Programs */}
        <CurriculumSection onBookConsultation={handleOpenBooking} />

        {/* Campus Facilities & Architectural Space Tour */}
        <CampusTourSection />

        {/* Interactive Custom Academic Trajectory Planner */}
        <InteractivePathwayPlanner onApplyPlan={handleApplyPlan} />

        {/* Distinguished Faculty & Mentors */}
        <FacultySection onBookConsultation={handleOpenBooking} />

        {/* Student Transformations & Stories */}
        <StudentStoriesSection />

        {/* Admissions Procedures & Briefings */}
        <AdmissionsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Booking & Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialTrack={bookingInitialTrack}
      />
    </div>
  );
}
