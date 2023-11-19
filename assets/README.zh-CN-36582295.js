import{_ as s}from"./locales-451951ba.js";import{o as t,a,z as n}from"./vue-libs-83dbabed.js";const l={},d={class:"van-doc-markdown-body"},e=n(`<h1>Cell 单元格</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>单元格为列表中的单个展示项。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cell</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cell</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p><code>Cell</code> 可以单独使用，也可以与 <code>CellGroup</code> 搭配使用，<code>CellGroup</code> 可以为 <code>Cell</code> 提供上下外边框。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;描述信息&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qia-pian-feng-ge" tabindex="-1">卡片风格</h3><p>通过 <code>CellGroup</code> 的 <code>inset</code> 属性，可以将单元格转换为圆角卡片风格（从 3.1.0 版本开始支持）。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;描述信息&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dan-yuan-ge-da-xiao" tabindex="-1">单元格大小</h3><p>通过 <code>size</code> 属性可以控制单元格的大小。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;描述信息&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-tu-biao" tabindex="-1">展示图标</h3><p>通过 <code>icon</code> 属性在标题左侧展示图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;location-o&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-jian-tou" tabindex="-1">展示箭头</h3><p>设置 <code>is-link</code> 属性后会在单元格右侧显示箭头，并且可以通过 <code>arrow-direction</code> 属性控制箭头方向。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">is-link</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ye-mian-dao-hang" tabindex="-1">页面导航</h3><p>可以通过 <code>url</code> 属性进行 URL 跳转，或通过 <code>to</code> 属性进行路由跳转。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;URL 跳转&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;路由跳转&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fen-zu-biao-ti" tabindex="-1">分组标题</h3><p>通过 <code>CellGroup</code> 的 <code>title</code> 属性可以指定分组标题。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;分组1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;分组2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-cha-cao" tabindex="-1">使用插槽</h3><p>如以上用法不能满足你的需求，可以使用插槽来自定义内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> <span class="hljs-attr">is-link</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 使用 title 插槽来自定义标题 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-title&quot;</span>&gt;</span>单元格<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 使用 right-icon 插槽来自定义右侧图标 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;search-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom-title</span> {
    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">vertical-align</span>: middle;
  }

  <span class="hljs-selector-class">.search-icon</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
    <span class="hljs-attribute">line-height</span>: inherit;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi-ju-zhong" tabindex="-1">垂直居中</h3><p>通过 <code>center</code> 属性可以让 <code>Cell</code> 的左右内容都垂直居中。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;描述信息&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="cellgroup-props" tabindex="-1">CellGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>分组标题</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>inset</td><td>是否展示为圆角卡片风格</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>是否显示外边框</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cell-props" tabindex="-1">Cell Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>左侧标题</td><td><em>number | string</em></td><td>-</td></tr><tr><td>value</td><td>右侧内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>标题下方的描述信息</td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>单元格大小，可选值为 <code>large</code> <code>normal</code></td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>tag</td><td>根节点对应的 HTML 标签名</td><td><em>string</em></td><td><code>div</code></td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，等同于 Vue Router 的 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to 属性</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>border</td><td>是否显示内边框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clickable</td><td>是否开启点击反馈</td><td><em>boolean</em></td><td><code>null</code></td></tr><tr><td>is-link</td><td>是否展示右侧箭头并开启点击反馈</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>required</td><td>是否显示表单必填星号</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>center</td><td>是否使内容垂直居中</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>arrow-direction</td><td>箭头方向，可选值为 <code>left</code> <code>up</code> <code>down</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>title-style</td><td>左侧标题额外样式</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>title-class</td><td>左侧标题额外类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>value-class</td><td>右侧内容额外类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>label-class</td><td>描述信息额外类名</td><td><em>string | Array | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cell-events" tabindex="-1">Cell Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击单元格时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cellgroup-slots" tabindex="-1">CellGroup Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td></tr><tr><td>title</td><td>自定义分组标题</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cell-slots" tabindex="-1">Cell Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>自定义左侧标题</td></tr><tr><td>value</td><td>自定义右侧内容</td></tr><tr><td>label</td><td>自定义标题下方的描述信息</td></tr><tr><td>icon</td><td>自定义左侧图标</td></tr><tr><td>right-icon</td><td>自定义右侧图标</td></tr><tr><td>extra</td><td>自定义单元格最右侧的额外内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CellSize</span>,
  <span class="hljs-title class_">CellProps</span>,
  <span class="hljs-title class_">CellGroupProps</span>,
  <span class="hljs-title class_">CellArrowDirection</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-cell-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-cell-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-cell-vertical-padding</td><td><em>10px</em></td><td>-</td></tr><tr><td>--van-cell-horizontal-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-cell-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-cell-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-cell-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-cell-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-cell-required-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-cell-label-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-cell-label-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-cell-label-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-cell-label-margin-top</td><td><em>var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-cell-value-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-cell-value-font-size</td><td><em>inherit</em></td><td>-</td></tr><tr><td>--van-cell-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-cell-right-icon-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-cell-large-vertical-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-cell-large-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-cell-large-label-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-cell-large-value-font-size</td><td><em>inherit</em></td><td>-</td></tr><tr><td>--van-cell-group-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-padding</td><td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-cell-group-title-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-cell-group-inset-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-cell-group-inset-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-cell-group-inset-title-padding</td><td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)</em></td><td>-</td></tr></tbody></table></div>`,22),p=[e];function c(r,o){return t(),a("div",d,p)}const g=s(l,[["render",c]]);export{g as default};
