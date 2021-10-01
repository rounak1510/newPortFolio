import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}

function About() {

    const [author, setAuthor] = useState(null)

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch((err) => console.log(err))
    },[])

    if(!author){
        return <div>Loading...</div>
    }

    return (
        <main className="relative bg-blue-100">
            <img className="absolute w-full" />
            <div className="p-10 lg:pt-35 container mx-auto relative">
                <section className="bg-blue-400 rounded-lg shawdow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage)} alt={author.name} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-6xl text-blue-300 mb-4">Hey There, I am{" "}
                        <span className="text-blue-150">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                        <BlockContent blocks={author.bio} projectId="p6xszvg1" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
