import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN

})

export async function getPostBySlug (slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    })
    return post.contents[0]
  } catch (err) {
    console.log('~~ getPostBySlug ~~')
    console.log(err)
  }
}
