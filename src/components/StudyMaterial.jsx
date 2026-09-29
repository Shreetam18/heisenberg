import './StudyMaterial.css'
import './Buttons.css'

import { materials } from '../data/materials'

import { Link } from 'react-router-dom'
import { useState } from 'react'

function StudyMaterial() {
    const [previewFile, setPreviewFile] = useState(null)

    return (
        <div className="study-page">

            <div className="study-container">

                <div className="study-header">
                    <h1>STUDY MATERIAL</h1>

                    <Link to="/" className="page-button">
                        Home
                    </Link>
                </div>

                <section className="material-section">
                    <h2>LECTURE</h2>

                    <div className="material-list">
                        {materials.lecture.map((file) => (
                            <div className="material-file" key={file.path}>

                                <span className="file-name">
                                    {file.name}
                                </span>

                                <div className="file-actions">
                                    <button
                                        className="page-button"
                                        onClick={() => setPreviewFile(file)}
                                    >
                                        Preview
                                    </button>

                                    <a
                                        href={file.path}
                                        download
                                        className="page-button"
                                    >
                                        Download
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

                <section className="material-section">
                    <h2>EXPERIMENTS</h2>

                    <div className="material-list">
                        {materials.experiments.map((file) => (
                            <div className="material-file" key={file.path}>

                                <span className="file-name">
                                    {file.name}
                                </span>

                                <div className="file-actions">
                                    <a
                                        href={file.path}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="page-button"
                                    >
                                        Preview
                                    </a>

                                    <a
                                        href={file.path}
                                        download
                                        className="page-button"
                                    >
                                        Download
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

                <section className="material-section">
                    <h2>BOOKS</h2>

                    <div className="material-list">
                        {materials.books.map((file) => (
                            <div className="material-file" key={file.path}>

                                <span className="file-name">
                                    {file.name}
                                </span>

                                <div className="file-actions">
                                    <a
                                        href={file.path}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="page-button"
                                    >
                                        Preview
                                    </a>

                                    <a
                                        href={file.path}
                                        download
                                        className="page-button"
                                    >
                                        Download
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

                {previewFile && (
                    <div className="preview-overlay">
                        <div className="preview-window">

                            <div className="preview-header">
                                <span>{previewFile.name}</span>

                                <button
                                    className="page-button"
                                    onClick={() => setPreviewFile(null)}
                                >
                                    Close
                                </button>
                            </div>

                            <iframe
                                src={previewFile.path}
                                title={previewFile.name}
                                className="preview-frame"
                            />

                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default StudyMaterial