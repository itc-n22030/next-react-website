import { getAllCategories } from 'lib/api'
import Container from 'conponents/container'
import PostHeader from 'components/post-header'

export async function Category ({ name }) {
  return (
    <Container>
      <PostHeader title={name} subtitle='Blog Category' />
    </Container>
  )
}

export async function getStaticPaths () {
  return {
    paths: ['/blog/category/technology'],
    fallback: false
  }
}

export async function getStaticProps (context) {
  const catSlug = context.params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  return {
    props: {
      name: cat.naem
    }
  }
}