
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Posts({ allPosts }: Props) {
    return (
      <>
        <Layout>
          <Head>
            <title>Leiko - Home</title>
          </Head>
          <Container>
            {allPosts.length > 0 && <MoreStories name="My posts" posts={allPosts} />}
          </Container>
        </Layout>
      </>
    )
  }