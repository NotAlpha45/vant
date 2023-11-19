import{_ as t}from"./locales-451951ba.js";import{o as s,a,z as e}from"./vue-libs-83dbabed.js";const d={},n={class:"van-doc-markdown-body"},o=e(`<h1>Image</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Enhanced img tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">VanImage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">VanImage</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fit-mode" tabindex="-1">Fit Mode</h3><p>Same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">object-fit</a>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;contain&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="position" tabindex="-1">Position</h3><p>Same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position" target="_blank">object-position</a>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="round" tabindex="-1">Round</h3><p>Show round image, it may not works at <code>fit=contain</code> and <code>fit=scale-down</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
  <span class="hljs-attr">round</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="lazy-load" tabindex="-1">Lazy Load</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">lazy-load</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>src</td><td>Src</td><td><em>string</em></td><td>-</td></tr><tr><td>fit</td><td>Fit mode, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">object-fit</a></td><td><em>string</em></td><td><code>fill</code></td></tr><tr><td>position</td><td>Position, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position" target="_blank">object-position</a>, can be set to <code>top</code> <code>right</code> <code>bottom</code> <code>left</code> or <code>string</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>alt</td><td>Alt</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>Width</td><td><em>number | string</em></td><td>-</td></tr><tr><td>height</td><td>Height</td><td><em>number | string</em></td><td>-</td></tr><tr><td>radius</td><td>Border Radius</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>round</td><td>Whether to be round</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>block <code>3.6.3</code></td><td>Whether the root node is a block element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-load</td><td>Whether to enable lazy load, should register <a href="#/en-US/lazyload" target="_blank">Lazyload</a> component</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error</td><td>Whether to show error placeholder</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-loading</td><td>Whether to show loading placeholder</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>error-icon</td><td>Error icon</td><td><em>string</em></td><td><code>photo-fail</code></td></tr><tr><td>loading-icon</td><td>Loading icon</td><td><em>string</em></td><td><code>photo</code></td></tr><tr><td>icon-size</td><td>Icon size</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fit-optional-value" tabindex="-1">fit optional value</h3><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td>contain</td><td>Keep aspect ratio, fully display the long side of the image</td></tr><tr><td>cover</td><td>Keep aspect ratio, fully display the short side of the image, cutting the long side</td></tr><tr><td>fill</td><td>Stretch and resize image to fill the content box</td></tr><tr><td>none</td><td>Not resize image</td></tr><tr><td>scale-down</td><td>Take the smaller of <code>none</code> or <code>contain</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when image is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>load</td><td>Emitted when image loaded</td><td><em>event: Event</em></td></tr><tr><td>error</td><td>Emitted when image load failed</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom the content below the image</td></tr><tr><td>loading</td><td>Custom loading placeholder</td></tr><tr><td>error</td><td>Custom error placeholder</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImageFit</span>, <span class="hljs-title class_">ImagePosition</span>, <span class="hljs-title class_">ImageProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-image-placeholder-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-image-placeholder-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-image-placeholder-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-image-loading-icon-size</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-image-loading-icon-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr><tr><td>--van-image-error-icon-size</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-image-error-icon-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr></tbody></table></div>`,17),l=[o];function r(c,i){return s(),a("div",n,l)}const m=t(d,[["render",r]]);export{m as default};
