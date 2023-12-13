import { FormattedMessage } from 'react-intl'

export const Frontend = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'> Frontend developer </h3>

            <div className='skills__box'>

                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className='skills__name'> <FormattedMessage id="REACT JS" /> </h3>
                            <span className='skills__level'> Intermediate </span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className='skills__name'> NEXT JS </h3>
                            <span className='skills__level'> Intermediate </span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className='skills__name'> TYPESCRIPT </h3>
                            <span className='skills__level'> Intermediate </span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className='skills__name'> MATERIAL UI </h3>
                            <span className='skills__level'> Basic </span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className='skills__name'> BOOSTRAP </h3>
                            <span className='skills__level'> Basic </span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className='skills__name'> SASS </h3>
                            <span className='skills__level'> Basic </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}