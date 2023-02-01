import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

export default function Schedule ({
  title,
  publish,
  content,
  eyecatch,
  categories
}) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export async function getServerSideProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
