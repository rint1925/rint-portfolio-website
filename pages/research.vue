<template>
  <div class="outer-container">
    <div class="board">
      <main class="main-content">
        
        <h2 class="mt-30">Research</h2>
        <br>
        <h3 class="mt-8 mb-6">研究内容</h3>
          <p>窃盗などの被害者に目撃されにくい犯罪は、検挙率が低い傾向にあります。</p>
          <p>犯行を認知しても、<em>犯人の逃亡後は追跡困難である</em>ため、取り逃がしてしまうのです。</p>
          <br>
          <p>このような犯罪を防ぐため、</p>
          <p>「防犯カメラを設置して犯罪を自動で検知して通報 → 犯人をその場で捕まえる」</p>
          <p>仕組みがあれば理想ですが、これを機械学習で実現するには未だ困難です。</p>
          <br>
          <p>そこで、<em>クラウドソーシング</em>を活用した犯罪検知を提案します。クラウドソーシングとは「インターネットを通して不特定多数の人間に仕事を依頼する仕組み」であり、手軽に人間の高度な認識能力にアクセスできます。下図はシステムの概略です。</p>
          <img src="../assets/images/research.jpg" class="inline-block my-12">
          <p>防犯カメラが動体を検知をすると、映像は監視用サーバーに送信されます。監視用サーバーは、犯罪が起こっているかどうかを判別してもらう不特定多数の人間を募集します。判別結果が一定件数集まれば、監視用サーバーは<em>多数決</em>を行い、本当に犯罪が起こっているかを決定します。</p>

        <h3 class="mt-16 mb-4">メリット</h3>
          <ul>
          <li class="font-bold text-pink-600">現場の条件に左右されない</li>
          <p>人間の柔軟な認識能力により、あらゆる条件下でも犯罪を検知可能。</p>
          <br>
          <li class="font-bold text-pink-600">高精度</li>
          <p>複数人での多数決により、少数の誰かが間違った判断をしても高い精度は維持。</p>
          <br>
          <li class="font-bold text-pink-600">事前の学習が不要</li>
          <p>入手が難しい犯行映像データセットを入手して学習させる必要は無い。</p>
          </ul>

        <h3 class="mt-16 mb-4">課題</h3>
          <ul>
          <li class="font-bold text-sky-600">リアルタイム性</li>
          <p>現状では多数決に十分な回答を集めるのに約5分掛かる。</p>
          <p>より早くワーカーを集める手法が必要。</p>
          <br>
          <li class="font-bold text-sky-600">コスト</li>
          <p>人間に答えてもらう対価として報酬を支払う必要がある。</p>
          <br>
          </ul>

        <h3 class="mt-16 mb-4">私のMission</h3>
          <p>実用には上記の<em>リアルタイム性</em>と<em>コスト</em>の課題を解決する必要があります。</p>
          <br>
          <p>リアルタイム性の課題はワーカーが注目しやすいタスクにしたり、待機タスクを用意して一定時間ワーカーを保持する仕組みを考えています。</p>
          <br>
          <p>コストの課題はシステムを根本的に見直し、<em>AIが取りこぼした判断を人間が補う</em>ようなHuman-in-the-loop的なシステムにシフトしていくことを考えています。</p>

        <h3 class="mt-16 mb-4">研究発表</h3>
          <br>
          <ul class="marker:text-green-300">
            <li>板野竜也, 目良侃太郎, 小板隆浩, クラウドソーシングを用いたリアルタイム防犯システムの検討, 電子情報通信学会, ソサイエティ大会, B-11-16, 2021/09. <a href="https://www.dropbox.com/s/7y49kek1zdutwbm/2021%E5%B9%B4%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E9%80%9A%E4%BF%A1%E5%AD%A6%E4%BC%9A%E3%82%BD%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%86%E3%82%A3%E5%A4%A7%E4%BC%9A_Paper.pdf?dl=0" target="_blank" rel="noopener noreferrer">[Paper]</a></li>
            <br>
            <li>板野竜也, 目良侃太郎, 小板隆浩, クラウドソーシングにおける回答のリアルタイム性向上手法の検討, 電気情報通信学会, 信学技報, vol. 121, no. 326, ICTSSL2021-39, pp. 46-51, 2022/01. <a href="https://www.dropbox.com/s/rfe1yh17luazrvy/%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%9B%9E%E7%AD%94%E3%81%AE%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E6%80%A7%E5%90%91%E4%B8%8A%E6%89%8B%E6%B3%95%E3%81%AE%E6%A4%9C%E8%A8%8E_Paper.pdf?dl=0" target="_blank" rel="noopener noreferrer">[Paper]</a></li>
             <br>
            <li>Ryuya Itano, and Takahiro Koita, Evaluation of the Effectiveness of a Crowdsourcing-based Crime Detection System, IEICE Communications Express, 2022/06. <a href="https://www.dropbox.com/s/b11dhtczsk7wml9/Evaluation%20of%20the%20Effectiveness%20of%20a%20Crowdsourcing-based%20Crime%20Detection%20System_Paper.pdf?dl=0" target="_blank" rel="noopener noreferrer">[Paper]</a></li>
          </ul>

        <NuxtLink class="inline-block link-text mt-8" to="/">[Back]</NuxtLink>
      </main>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>