import React, { useEffect, useState } from 'react'
import sanityClient from '../client'

function Project() {

    const [projectData, setProjectData] = useState(null)

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            link2
        }`)
        .then((data) => setProjectData(data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-3xl flex justify-center">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcom to my Projects Page.</h2>
                <section className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                    {
                        projectData && projectData.map((project,index) =>(
                            <article className="relative rounded-lg shawdow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-lg font-blog px-3 py-3 bg-blue-100 text-blue-100 rounded">
                                <a href={project.link} target="_blank" className="text-blue-500 hover: text-blue-300">{project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Finished On</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                                <a href={project.link} target="_blank" className="text-blue-500 hover:underline  hover:text-blue-300">
                                    View The Project{" "}
                                </a>
                                <a href={project.link2} target="_blank" className="text-blue-500 hover:underline  hover:text-blue-300">
                                    View Github Source Code{" "}
                                </a>
                        </div>
                    </article>
                        ))
                    }
                </section>
            </section>
        </main>
    )
}

export default Project
