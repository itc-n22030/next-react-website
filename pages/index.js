import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
export default function Home ({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl='/blog' nextText='More Posts' />
    </Container>
  )
}

export async function getStaticProps () {
//  const url = 'https://images.microcms-assets.io/assets/a6238f2cea804aeb9b3120b69fe5172b/2b21730d6267487896faafcf2c91a41d/eyecatch.jpg'
//  console.log(await getPlaiceholder(url))

  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts
    }
  }
}
