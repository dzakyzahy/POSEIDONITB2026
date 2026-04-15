/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Dashboard } from './components/Dashboard';
import { Products } from './components/Products';
import { Documentation } from './components/Documentation';
import { VisionMission } from './components/VisionMission';
import { ContactLocation, Footer } from './components/ContactFooter';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Dashboard />
        <Products />
        <Documentation />
        <VisionMission />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
}
