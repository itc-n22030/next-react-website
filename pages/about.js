import Meta from 'components/meta'
import TwoColumn from 'components/two-column'
import Accordion from 'components/accordion'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import Image from 'next/legacy/image'
// import eyecatch from 'images/about.jpg'

const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/a6237f2cea804aeb9b3120b69fe5172b/2b21730d6267487896faafcf2c91a41d/eyecatch.jpg',
  height: 960,
  width: 1920,
  blurDataURL: 'data:image/jpeg:base64,'
}

export default function About () {
  return (
    <Container>
      <Meta
        pageTitle='アバウト'
        pageDesc='About development activities'
  // <Hero title='About' subtitle='About development activities' />
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title='About' subtitle='About development activities' />

      <figure>
        <Image
          src={eyecatch}
          alt=''
          layout='responsive'
          sizes='(min-width: 1152px) 1152px, 100vw'
          priority
          placeholder='blur'
        />

      </figure>

      <TwoColumn>
        <TwoColumn.Main>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り込れながら、ユーザーにマッチした提案を実現することが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけではなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出していきます。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いていきます。そこで興味を持ったことは小さなことでもいいぁら取り入れて、良いものを作れるようにしていきます。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>

            <h2>FAQ</h2>
            <Accordion heading='プログラミングのポイントについて'>
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいこ
                とから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきな
                がら、プログラムを作っていきます。
              </p>
            </Accordion>
            <Accordion heading='古代語の解読について'>
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。古
                代の世界観や思考方法。それらを読み取ってこそ古代の世界観が理解できてきます。
              </p>
            </Accordion>
            <Accordion heading='公開リポジトリの活用について'>
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発
                者が関連するプロジェクトのタスクを利用することができます。
              </p>
            </Accordion>

          </PostBody>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>

      </TwoColumn>
    </Container>
  )
}
