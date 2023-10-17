
export const Frontend = () => {
  return (
    <>
        <div className = 'skills__content'>
            <h3 className = 'skills__title'> Frontend developer </h3>

            <div className = 'skills__box'>
                <div className = 'skills__group'>
                    <div className = 'skills__data'> 
                    <i className='bx bx-check-square'></i>

                    <div>
                        
                        <h3 className = 'skills__name'> HTML </h3>
                        <span className = 'skills__level'> Advance </span>
                    </div>
                    </div>

                    <div className = 'skills_data'>
                    <i className ='bx bx-badge-check' ></i>
                    
                    <div>
                        <h3 className = 'skills__name'> CSS </h3>        
                        <span className = 'skills__level'> Intermediate</span>
                    </div>
                    </div>

                    <div className = 'skills_data'>
                    <i className ='bx bx-badge-check' ></i>
                    
                    <div>
                        <h3 className = 'skills__name'> JAVASCRIPT </h3>        
                        <span className = 'skills__level'> Intermediate</span>
                    </div>
                    </div>          
                </div>

                {/* Framework or library */}

                <div className = 'skills__group'>
                    <div className = 'skills__data'> 
                    <i className ='bx bx-badge-check' ></i>

                    <div>
                        <h3 className = 'skills__name'> React.js </h3>
                        <span className = 'skills__level'> Intermediate </span>
                    </div>
                    </div>

                    <div className = 'skills__data'> 
                    <i className ='bx bx-badge-check' ></i>

                    <div>
                        <h3 className = 'skills__name'> TypeScript </h3>
                        <span className = 'skills__level'> Intermediate </span>
                    </div>
                    </div>

                    <div className = 'skills__data'> 
                    <i className ='bx bx-badge-check' ></i>

                    <div>
                        <h3 className = 'skills__name'> Material UI </h3>
                        <span className = 'skills__level'> Basic </span>
                    </div>
                    </div>

                    <div className = 'skills__data'> 
                    <i className ='bx bx-badge-check' ></i>

                    <div>
                        <h3 className = 'skills__name'> Boostrap </h3>
                        <span className = 'skills__level'> Basic </span>
                    </div>
                    </div>

                    <div className = 'skills__data'> 
                    <i className ='bx bx-badge-check' ></i>

                    <div>
                        <h3 className = 'skills__name'> SASS </h3>
                        <span className = 'skills__level'> Basic </span>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    </>
  )
}