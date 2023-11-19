import{_ as s}from"./locales-451951ba.js";import{o as a,a as t,z as n}from"./vue-libs-83dbabed.js";const l={},d={class:"van-doc-markdown-body"},p=n(`<h1>Button 按钮</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>按钮用于触发一个操作，如提交表单。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="an-niu-lei-xing" tabindex="-1">按钮类型</h3><p>按钮支持 <code>default</code>、<code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code> 五种类型，默认为 <code>default</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="po-su-an-niu" tabindex="-1">朴素按钮</h3><p>通过 <code>plain</code> 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xi-bian-kuang" tabindex="-1">细边框</h3><p>设置 <code>hairline</code> 属性可以展示 0.5px 的细边框。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>细边框按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>细边框按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>通过 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">加载状态</h3><p>通过 <code>loading</code> 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 <code>loading-text</code> 设置加载状态下的文字。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;spinner&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">loading-text</span>=<span class="hljs-string">&quot;加载中...&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="an-niu-xing-zhuang" tabindex="-1">按钮形状</h3><p>通过 <code>square</code> 设置方形按钮，通过 <code>round</code> 设置圆形按钮。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>方形按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>圆形按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tu-biao-an-niu" tabindex="-1">图标按钮</h3><p>通过 <code>icon</code> 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
&gt;</span>
  按钮
<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="an-niu-chi-cun" tabindex="-1">按钮尺寸</h3><p>支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>大号按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;normal&quot;</span>&gt;</span>普通按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>迷你按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="kuai-ji-yuan-su" tabindex="-1">块级元素</h3><p>按钮在默认情况下为行内块级元素，通过 <code>block</code> 属性可以将按钮的元素类型设置为块级元素。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>块级元素<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ye-mian-dao-hang" tabindex="-1">页面导航</h3><p>可以通过 <code>url</code> 属性进行 URL 跳转，或通过 <code>to</code> 属性进行路由跳转。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span>&gt;</span>URL 跳转<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>路由跳转<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>color</code> 属性可以自定义按钮的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>单色按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>单色按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;</span>&gt;</span>
  渐变色按钮
<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dong-hua-an-niu" tabindex="-1">动画按钮</h3><p>搭配 Button 和 <a href="/#/zh-CN/swipe" target="_blank">Swipe 组件</a>，可以实现垂直滚动的动画按钮效果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>
    <span class="hljs-attr">vertical</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-swipe&quot;</span>
    <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;2000&quot;</span>
    <span class="hljs-attr">:touchable</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">:show-indicators</span>=<span class="hljs-string">&quot;false&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>做任务<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>抽大奖<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.notice-swipe</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">40px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值为 <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>size</td><td>尺寸，可选值为 <code>large</code> <code>small</code> <code>mini</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td>text</td><td>按钮文字</td><td><em>string</em></td><td>-</td></tr><tr><td>color</td><td>按钮颜色，支持传入 <code>linear-gradient</code> 渐变色</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>icon-position</td><td>图标展示位置，可选值为 <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>tag</td><td>按钮根节点的 HTML 标签</td><td><em>string</em></td><td><code>button</code></td></tr><tr><td>native-type</td><td>原生 button 标签的 type 属性</td><td><em>string</em></td><td><code>button</code></td></tr><tr><td>block</td><td>是否为块级元素</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>plain</td><td>是否为朴素按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>square</td><td>是否为方形按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>round</td><td>是否为圆形按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>hairline</td><td>是否使用 0.5px 边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>是否显示为加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading-text</td><td>加载状态提示文字</td><td><em>string</em></td><td>-</td></tr><tr><td>loading-type</td><td><a href="#/zh-CN/loading" target="_blank">加载图标类型</a>，可选值为 <code>spinner</code></td><td><em>string</em></td><td><code>circular</code></td></tr><tr><td>loading-size</td><td>加载图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，等同于 Vue Router 的 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to 属性</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮，且按钮状态不为加载或禁用时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>touchstart</td><td>开始触摸按钮时触发</td><td><em>event: TouchEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>按钮内容</td></tr><tr><td>icon</td><td>自定义图标</td></tr><tr><td>loading</td><td>自定义加载图标</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ButtonType</span>,
  <span class="hljs-title class_">ButtonSize</span>,
  <span class="hljs-title class_">ButtonProps</span>,
  <span class="hljs-title class_">ButtonNativeType</span>,
  <span class="hljs-title class_">ButtonIconPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-button-mini-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-button-mini-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-button-mini-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-button-small-height</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-button-small-padding</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-button-small-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-button-normal-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-button-normal-padding</td><td><em>0 15px</em></td><td>-</td></tr><tr><td>--van-button-large-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-button-default-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-button-default-line-height</td><td><em>1.2</em></td><td>-</td></tr><tr><td>--van-button-default-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-button-default-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-button-default-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-button-default-border-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr><tr><td>--van-button-primary-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-primary-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-button-primary-border-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-button-success-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-success-background</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-button-success-border-color</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-button-danger-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-danger-background</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-button-danger-border-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-button-warning-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-warning-background</td><td><em>var(--van-orange)</em></td><td>-</td></tr><tr><td>--van-button-warning-border-color</td><td><em>var(--van-orange)</em></td><td>-</td></tr><tr><td>--van-button-border-width</td><td><em>var(--van-border-width)</em></td><td>-</td></tr><tr><td>--van-button-radius</td><td><em>var(--van-radius-md)</em></td><td>-</td></tr><tr><td>--van-button-round-radius</td><td><em>var(--van-radius-max)</em></td><td>-</td></tr><tr><td>--van-button-plain-background</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-button-icon-size</td><td><em>1.2em</em></td><td>-</td></tr><tr><td>--van-button-loading-icon-size</td><td><em>20px</em></td><td>-</td></tr></tbody></table></div>`,23),e=[p];function c(o,r){return a(),t("div",d,e)}const g=s(l,[["render",c]]);export{g as default};
