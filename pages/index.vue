<template>
  <div class="outer-container">
    <div class="board">
      <Identity></Identity>
      <main class="main-content">
        <br>
        <h2 class="mt-0">About me</h2>
          <p>同志社大学で情報工学を専攻している修士1年生です。Webフロントエンド、バックエンド、機械学習など幅広い技術に興味があります。
          <NuxtLink class="link-text" to="/more-about">[もっと自己紹介]</NuxtLink></p>
        
        <h2>Research</h2>
          <p>ヒューマンコンピューテーション（人間と人工知能による協調問題解決）に関わる研究をしています。その中でも、私はクラウドソーシングを活用した犯罪検知システムを構築するための研究しています。
          <NuxtLink class="link-text" to="/research">[研究詳細]</NuxtLink></p>
        
        <h2>Skills</h2>
          <p>アルバイト経験のあるPythonが得意です。また、AWSでLinux環境を構築し、Webサーバーを立てたこともあります。
          <NuxtLink class="link-text" to="/skills">[スキル詳細]</NuxtLink></p>

        <h2>Works</h2>
          <ul class="marker:text-green-300">
            <li>機械学習による時系列分析システムの開発 <NuxtLink class="link-text" to="/work-ml">[詳細]</NuxtLink></li>
            <li>ポートフォリオサイト (当サイト) <NuxtLink class="link-text" to="/work-portfolio-site">[詳細]</NuxtLink></li>
          </ul>
      </main>
    </div>
  </div>
</template>


<script>
import Identity from '~/components/Identity.vue'

export default {
    components: {
        Identity,
    },
}
</script>


<style scoped>
</style>
