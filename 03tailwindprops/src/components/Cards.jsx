import React from 'react'

function Cards({username="rt",post="not assigned yet"}) {
  return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/16878538/pexels-photo-16878538/free-photo-of-a-seagull-is-standing-in-the-grass-near-some-bushes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa reiciendis harum pariatur ullam ducimus molestias facere aut! Quibusdam reprehenderit id animi molestias aut laudantium dignissimos nesciunt optio voluptas voluptatem.
            </p>
            </blockquote>
            <figcaption>
            <div>
            {username}
            </div>
            <div>
            {post}
            </div>
            </figcaption>
            </div>
            </figure>
        </div>
  )
}

export default Cards
