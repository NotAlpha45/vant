import{_ as s}from"./locales-451951ba.js";import{o as a,a as t,z as n}from"./vue-libs-83dbabed.js";const l={},e={class:"van-doc-markdown-body"},p=n(`<h1>Tabbar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to switch between different pages.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabbar</span>, <span class="hljs-title class_">TabbarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabbar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabbarItem</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="match-by-name" tabindex="-1">Match by name</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;friends&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;setting&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;home&#39;</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="show-badge" tabindex="-1">Show Badge</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">dot</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3><p>Use <code>icon</code> slot to custom icon.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Custom<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.active ? icon.active : icon.inactive&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> icon = {
      <span class="hljs-attr">active</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactive</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
    <span class="hljs-keyword">return</span> {
      icon,
      active,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="change-event" tabindex="-1">Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>Tab 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Tab 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>Tab 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>Tab 4<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`Tab <span class="hljs-subst">\${index}</span>\`</span>);
    <span class="hljs-keyword">return</span> {
      icon,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="route-mode" tabindex="-1">Route Mode</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">route</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">replace</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/home&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">replace</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/search&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Tab<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="tabbar-props" tabindex="-1">Tabbar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Identifier of current tab</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>fixed</td><td>Whether to fixed bottom</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>border</td><td>Whether to show border</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>z-index</td><td>Z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>active-color</td><td>Color of active tab item</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>Color of inactive tab item</td><td><em>string</em></td><td><code>#7d7e80</code></td></tr><tr><td>route</td><td>Whether to enable route mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>Whether to generate a placeholder element when fixed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>before-change</td><td>Callback function before changing tab, return <code>false</code> to prevent change, support return Promise</td><td><em>(name: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbar-events" tabindex="-1">Tabbar Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when changing active tab</td><td><em>active: number | string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbaritem-props" tabindex="-1">TabbarItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Identifier</td><td><em>number | string</em></td><td>Item index</td></tr><tr><td>icon</td><td>Icon name</td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>dot</td><td>Whether to show red dot</td><td><em>boolean</em></td><td>-</td></tr><tr><td>badge</td><td>Content of the badge</td><td><em>number | string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>badge-props</td><td>Props of Badge, see <a href="#/en-US/badge#props" target="_blank">Badge - props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>url</td><td>Link</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>The target route should navigate to when clicked on, same as the <a href="https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to prop</a> of Vue Router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbaritem-slots" tabindex="-1">TabbarItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>icon</td><td>Custom icon</td><td><em>active: boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabbarProps</span>, <span class="hljs-title class_">TabbarItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-tabbar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-tabbar-z-index</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-tabbar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-active-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-line-height</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-tabbar-item-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-tabbar-item-icon-margin-bottom</td><td><em>var(--van-padding-base)</em></td><td>-</td></tr></tbody></table></div>`,19),c=[p];function r(o,d){return a(),t("div",e,c)}const j=s(l,[["render",r]]);export{j as default};
