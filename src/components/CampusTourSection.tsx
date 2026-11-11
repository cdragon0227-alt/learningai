import React, { useState } from 'react';
import { FACILITIES } from '../data/schoolData';
import { Check, Clock, Users, MapPin } from 'lucide-react';

export const CampusTourSection: React.FC = () => {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(0);
  const activeFacility = FACILITIES[selectedFacilityIndex];

  return (
    <section id="campus" className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Campus Life & Facilities
          </div>
          <h2 className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50">
            사색과 창의적 실험이 공존하는 캠퍼스
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300">
            건축적 영감을 주는 높은 천고와 자연 채광, 최첨단 기술 장비가 결합된 
            Chan's School의 공간은 학생들에게 지적인 몰입과 깊이 있는 사색의 경험을 선사합니다.
          </p>
        </div>

        {/* Interactive Space Selectors */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FACILITIES.map((fac, idx) => {
            const isSelected = selectedFacilityIndex === idx;
            return (
              <button
                key={fac.id}
                type="button"
                onClick={() => setSelectedFacilityIndex(idx)}
                className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? 'border-stone-900 bg-stone-900 text-white shadow-xs dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900'
                    : 'border-stone-200/80 bg-white/70 hover:border-stone-300 dark:border-stone-800/80 dark:bg-stone-900/60 dark:hover:border-stone-700'
                }`}
              >
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider ${
                    isSelected ? 'text-stone-300 dark:text-stone-600' : 'text-stone-500 dark:text-stone-400'
                  }`}
                >
                  {fac.category}
                </span>
                <span
                  className={`mt-1 font-editorial text-lg font-medium ${
                    isSelected ? 'text-white dark:text-stone-900' : 'text-stone-900 dark:text-stone-100'
                  }`}
                >
                  {fac.nameEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Facility Spotlight Showcase */}
        <div className="mt-8 grid grid-cols-1 gap-8 rounded-2xl border border-stone-200/80 bg-white/70 p-6 lg:grid-cols-12 lg:p-8 dark:border-stone-800/80 dark:bg-stone-900/60">
          {/* Facility Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-stone-200/60 bg-stone-100 dark:border-stone-800 dark:bg-stone-950">
              <img
                src={activeFacility.image}
                alt={activeFacility.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-lg bg-stone-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                {activeFacility.category}
              </div>
            </div>
          </div>

          {/* Facility Details */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
                <MapPin className="h-3.5 w-3.5 text-stone-600 dark:text-stone-300" />
                <span>Chan's School Campus · {activeFacility.nameEn}</span>
              </div>

              <h3 className="mt-2 font-editorial text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
                {activeFacility.name}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {activeFacility.description}
              </p>

              {/* Key Features */}
              <div className="mt-6 border-t border-stone-200/60 pt-5 dark:border-stone-800/60">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Specialized Features
                </div>
                <ul className="mt-3 space-y-2">
                  {activeFacility.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-stone-800 dark:text-stone-200" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Capacity & Hours */}
            <div className="mt-8 border-t border-stone-200/80 pt-5 dark:border-stone-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600 dark:text-stone-300">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-stone-500" />
                  <span>수용: {activeFacility.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-stone-500" />
                  <span>운영: {activeFacility.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
