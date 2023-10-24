import '../qualification/qualification.css';
import { useState } from 'react';

export const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education'); 

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              activeTab === 'education' ? 'qualification__active' : ''
            }`}
            onClick={() => toggleTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${
              activeTab === 'experience' ? 'qualification__active'  : ''
            }`}
            onClick={() => toggleTab('experience')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {activeTab === 'education' && (
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Technical Informatic</h3>
                  <span className="qualification__subtitle">Perú</span>
                  <div className="qualification__calendar">
                    
                    <i className="uil uil-calendar-alt"></i>  2022 - Institute Amauta
                  </div>
                </div>

                
              </div>

              </div>
          )}

          {activeTab === 'experience' && (
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title"> Currently </h3>
                  <span className="qualification__subtitle"> I find myself in the search of new customers <br /> to further develop in this field</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2023 - FreeLance
                  </div>
                </div>

          
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

