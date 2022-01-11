import PostHeader from './post-header';

const DUMMY_POST= {
    slug: 'getting-started-with-nextJs1',
    title: 'Getting Started',
    image: 'getting-started-nextjs.png',
    date: '2022-02-10',
    content: '# This is first dummy data',
}

export default function PostContent(){
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return <article>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        {DUMMY_POST.content} 
    </article>
}