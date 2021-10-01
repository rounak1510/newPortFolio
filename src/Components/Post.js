import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import { Link } from 'react-router-dom'

function Post() {

    const [postData, setPostData] = useState(null)

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPostData(data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-3xl flex justify-center">My Blogs</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">A warm welcome to my Blog Page</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        postData && postData.map((post,index) =>(
                            
                            <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current} target="_blank">
                                <span className="block h-64 relative rounded shawdow leading-snug bg-white border-l-8 border-blue-400" key={index}>
                                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                                    className="w-full h-full rounded-r object-cover absolute" />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-blog px-3 py-3 bg-blue-800 text-blue-100 bg-opacity-75 rounded">
                                            {post.title}
                                        </h3>
                                    </span>
                                </span>
                            </Link>
                        </article>

                        ))
                    }

               </div>
            </section>
        </main>
    )
}

export default Post