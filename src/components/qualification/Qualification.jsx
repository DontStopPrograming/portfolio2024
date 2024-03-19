import '../qualification/qualification.css';
import { useState } from 'react';

export const Qualification = () => {
  const [activeTab, setActiveTab] = useState('experience');

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
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''
              }`}
            onClick={() => toggleTab('experience')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            <p> Experience</p>
          </div>

          <div
            className={`qualification__button button--flex ${activeTab === 'experience' ? 'qualification__active' : ''
              }`}
            onClick={() => toggleTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            <p> Education</p>
          </div>
        </div>

        <div className="qualification__sections">

          {activeTab === 'experience' && (
            <div className="qualification__content">

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title"> CURRENTLY </h3>
                  <span className="qualification__subtitle"> I interested in creating new projects working with a good company, as well as searching for new clients. </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2024 - Jobseeker/Freelance
                  </div>
                </div>


              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title"> CI EIRL </h3>
                  <span className="qualification__subtitle"> Managing customer database creation with MySQL Collaborating on JavaScript code analysis for new project PHP database connection. </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - Trainee
                  </div>
                </div>


              </div>


            </div>
          )}



          {activeTab === 'education' && (
            <div className="qualification__content">
              <div className="qualification__data">

                <div>
                  <h3 className="qualification__title"> WEB DEVELOPMENT </h3>
                  <span className="qualification__subtitle"></span>
                  <div className="qualification__calendar">

                    <i className="uil uil-calendar-alt"></i>  2024 - Polishing design analysis, my knowledge in frontend, backend and clean architecture.
                  </div>
                </div>

                <div>
                  <h3 className="qualification__title"> WEB DEVELOPMENT </h3>
                  <span className="qualification__subtitle"></span>
                  <div className="qualification__calendar">

                    <i className="uil uil-calendar-alt"></i>  2023 - Plazti, EDTeam, Codigo Facilito and Other Sources.
                  </div>
                </div>

                <div>
                  <h3 className="qualification__title"> WEB LAYOUT AND PROGRAMING </h3>
                  <span className="qualification__subtitle"> </span>
                  <div className="qualification__calendar">

                    <i className="uil uil-calendar-alt"></i>  2022 - FreeCodeCamp.
                  </div>
                </div>

                <div>
                  <h3 className="qualification__title"> WEB DEVELOPMENT  </h3>
                  <span className="qualification__subtitle">  </span>
                  <div className="qualification__calendar">

                    <i className="uil uil-calendar-alt"></i>  2022 -  Other Sources.
                  </div>
                </div>

                <div>
                  <h3 className="qualification__title">TECHNICAL INFORMATIC</h3>
                  <span className="qualification__subtitle"></span>
                  <div className="qualification__calendar">

                    <i className="uil uil-calendar-alt"></i>  2021 - Institute Amauta.
                  </div>
                </div>

                <div>
                  <h3 className='qualification__title'> LANGUAGES </h3>
                  <span className='qualification__subtitle'> English Level B1 </span>
                  <span className='qualification__subtitle'> Spanish Level Native </span>
                  <div>

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

