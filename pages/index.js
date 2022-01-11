import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextJs1',
    title: 'Getting Started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextJs2',
    title: 'Getting Started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextJs3',
    title: 'Getting Started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextJs4',
    title: 'Getting Started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. ',
    date: '2022-02-10',
  },
]

function HomePage(){

return(
  <Fragment>
    <Hero />
    <FeaturedPosts posts={ DUMMY_POSTS}/>
  </Fragment>
)
}

export default HomePage;

// export function getStaticProps(){
//   const featuredPosts = getFeaturedPosts();

//   return({
//     props: {
//       posts: featuredPosts
//     }
//   })
// }