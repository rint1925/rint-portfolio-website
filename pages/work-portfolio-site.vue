<template>
  <div class="outer-container">
    <div class="board">
      <main class="main-content">
        
        <h2 class="mt-30">ポートフォリオサイト (当サイト)</h2>
        <br>

          <h3 class="mt-16 mb-6">作成の目的</h3>
            <ul class="marker:text-green-200">
              <li>自分のアピール内容を、好きなように書けるため</li>
              <li>モダンなフレームワークを使って何か作ってみたいと思ったため</li>
            </ul>

          <h3 class="mt-16 mb-6">内容</h3>
            <ul class="marker:text-green-300">
              <li>URL : <a href="https://rint.info">rint.info</a></li>
              <li>ソースコード : <a href="https://github.com/rint1925/rint-portfolio-website">github.com/rint1925/rint-portfolio-website</a></li>
              <li>使用技術 : HTML / CSS / JavaScript / Node.js</li>
              <li>フレームワーク等 : Nuxt.js / Vue.js / Tailwind CSS</li>
              <li>デプロイ先 : Netlify</li>
              <br>
              <p>→ 私が小さい頃から<em class="bg-green-100">緑色</em>が大好きで、ベースカラーは緑になっています</p>
            </ul>

          <h3 class="mt-16 mb-6">苦労したこと</h3>
            <ul class="marker:text-green-300">
              <li>モダンのフレームワークについて知識ゼロから勉強し、特有の仕様に慣れること</li>
              <li>自分の理想のデザインに近づけること</li>
              <li>OS特有のエラーによりNode.jsを用いた開発が一時進まなかったこと</li>
            </ul>

          <h3 class="mt-16 mb-6">より良くしたいこと</h3>
            <ul class="marker:text-green-300">
              <li>ContentfulなどのCMSを用いてMarkdown記法で記事作成して、それをそのままページに表示させるようにしたい（記事更新にいちいちHTMLを編集するのはナンセンス）</li>
              <li>ダークモードの実装（最近画面を見っぱなしでダークモードの有難さが分かってきたため）</li>
              <li>「文字」で伝える部分が多いため、より視覚的に伝えられる内容に改良したい</li>
            </ul>
          
        <NuxtLink class="inline-block link-text mt-8" to="/">[Back]</NuxtLink>
      </main>
    </div>
  </div>
</template>


<script>

export default {
    components: {
        
    },
}
</script>

<style scoped>
</style>