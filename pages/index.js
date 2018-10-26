import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

import css from '../styles/index.style.sass'

export default withPosts(({ posts }) => {
  return (
    <section className={css.section}>
      {posts.map((post, i) => <Content key={i} {...post} />)}
    </section>
  )
})
