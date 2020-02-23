import axios from 'axios';
import Link from 'next/link';

const Index = ({posts}) => {
  return (
    <div>
      <ul>
        {posts.map(post => (
          
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Index.getInitialProps = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return { posts: response.data}
  }

export default Index;