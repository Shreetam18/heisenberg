import './Routine.css'
import './Buttons.css'

import { Link } from 'react-router-dom'

function Routine() {
    return (
        <div className="routine-page">

            <div className="routine-container">

                <div className="routine-header">
                    <h1>CLASS ROUTINE (1ST SEM CMSM)</h1>

                    <Link to="/" className="page-button">
                        Home
                    </Link>
                </div>
                <div className="routine-table-wrapper">
                    <table className="routine-table">

                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>11AM-12PM</th>
                                <th>12PM-1PM</th>
                                <th>1PM-2PM</th>
                                <th>2PM-3PM</th>
                                <th>3PM-4PM</th>
                                <th>4PM-5PM</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* MONDAY */}
                            <tr>
                                <th>Monday</th>
                                <td></td>

                                <td>
                                    Vector<br />
                                    Analysis<br />
                                    Sultan Ali
                                </td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            {/* TUESDAY */}
                            <tr>
                                <th>Tuesday</th>

                                <td colSpan="2">
                                    DSCC-1-P<br />
                                    H/W<br />
                                    TBS
                                </td>

                                <td>
                                    DSCC-1-T<br />
                                    HALL ROOM<br />
                                    TBS
                                </td>

                                <td>
                                    Calculus<br />
                                    MR
                                </td>

                                <td>
                                    SEC-1-T<br />
                                    DMP
                                </td>

                                <td>
                                    CVAC
                                </td>
                            </tr>

                            {/* WEDNESDAY */}
                            <tr>
                                <th>Wednesday</th>

                                <td colSpan="2">
                                    DSCC-1-P<br />
                                    H/W<br />
                                    TBS
                                </td>

                                <td></td>
                                <td></td>

                                <td>
                                    DSCC-1-T<br />
                                    HALL ROOM<br />
                                    TBS
                                </td>

                                <td>
                                    AEC
                                </td>
                            </tr>

                            {/* THURSDAY */}
                            <tr>
                                <th>Thursday</th>

                                <td></td>

                                <td>
                                    Geometry<br />
                                    JJ
                                </td>

                                <td>
                                    SEC-1-T<br />
                                    DMP
                                </td>

                                <td colSpan="2">
                                    SEC-1<br />
                                    S/W LAB<br />
                                    DMP
                                </td>

                                <td></td>
                            </tr>

                            {/* FRIDAY */}
                            <tr>
                                <th>Friday</th>

                                <td colSpan="3"></td>

                                <td colSpan="2">
                                    SEC-1<br />
                                    S/W LAB<br />
                                    DMP
                                </td>

                                <td></td>
                            </tr>

                            {/* SATURDAY */}
                            <tr>
                                <th>Saturday</th>

                                <td colSpan="2"></td>

                                <td>
                                    DSCC-1-T<br />
                                    HALL ROOM<br />
                                    TBS
                                </td>

                                <td></td>

                                <td>
                                    CVAC - ENVS
                                </td>

                                <td></td>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default Routine