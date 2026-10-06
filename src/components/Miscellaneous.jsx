import './Miscellaneous.css'
import './Buttons.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'

function Miscellaneous() {
    const [previewFile, setPreviewFile] = useState(null)

    return (
        <div className="misc-page">

            <div className="misc-container">

                <div className="misc-header">
                    <h1>MISCELLANEOUS</h1>

                    <Link to="/" className="page-button">
                        Home
                    </Link>
                </div>

                <div className="misc-section">

                    <h2>Computer Science Syllabus</h2>

                    <div className="file-actions">
                        <button
                            className="page-button"
                            onClick={() => setPreviewFile('/ComputerScienceSylb.pdf')}
                        >
                            Preview
                        </button>

                        <a
                            href="/ComputerScienceSylb.pdf"
                            download
                            className="page-button"
                        >
                            Download
                        </a>
                    </div>

                </div>

                <br />

                <div className="misc-section">

                    <h2>CMSM Theory Class Attendance</h2>

                    <div className="attendance-chart">
                        <img
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQAO1i_wQw7bElCbC9Dtvu9lxHx58jHrMUcHY6lGbDJppWfRGtkQ2wAiSwUuTcTzw/pubchart?oid=1364800802&format=image"
                            width="600"
                            height="371"
                            frameBorder="0"
                            scrolling="no"
                            title="CMSM Theory Class Attendance"
                        />
                    </div>

                </div>

                <br />

                <div className="misc-section">

                    <h2>Group A Practical Attendance</h2>

                    <div className="attendance-chart">
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQAO1i_wQw7bElCbC9Dtvu9lxHx58jHrMUcHY6lGbDJppWfRGtkQ2wAiSwUuTcTzw/pubchart?oid=1648597355&format=interactive"
                            width="600"
                            height="371"
                            frameBorder="0"
                            scrolling="no"
                            title="Group A Practical Attendance"
                        ></iframe>
                    </div>

                </div>

                <br />

                <div className="misc-section">

                    <h2>Group B Practical Attendance</h2>

                    <div className="attendance-chart">
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQAO1i_wQw7bElCbC9Dtvu9lxHx58jHrMUcHY6lGbDJppWfRGtkQ2wAiSwUuTcTzw/pubchart?oid=560524643&format=interactive"
                            width="600"
                            height="371"
                            frameBorder="0"
                            scrolling="no"
                            title="Group B Practical Attendance"
                        ></iframe>
                    </div>

                </div>

                {previewFile && (
                    <div className="preview-overlay">

                        <div className="preview-window">

                            <div className="preview-header">
                                <span>ComputerScienceSylb.pdf</span>

                                <button
                                    className="page-button"
                                    onClick={() => setPreviewFile(null)}
                                >
                                    Close
                                </button>
                            </div>

                            <iframe
                                src={previewFile}
                                title="ComputerScienceSylb.pdf"
                                className="preview-frame"
                            />

                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Miscellaneous