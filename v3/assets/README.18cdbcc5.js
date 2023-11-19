import{o as s,a as e,y as d}from"./vue-libs.b44bc779.js";const a={class:"van-doc-markdown-body"},n=d(`<h1>Dialog</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>A modal box pops up on the page, which is often used for message prompts, message confirmation, or to complete specific interactive operations in the current page. It supports two methods: function call and component call.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="alert-dialog" tabindex="-1">Alert dialog</h3><p>Used to prompt for some messages, only including one confirm button.</p><pre><code class="language-js"><span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Title&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Content&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});

<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Content&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});
</code></pre></div><div class="van-doc-card"><h3 id="confirm-dialog" tabindex="-1">Confirm dialog</h3><p>Used to confirm some messages, including a confirm button and a cancel button.</p><pre><code class="language-js"><span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Title&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Content&#39;</span>,
})
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// on confirm</span>
  })
  .<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// on cancel</span>
  });
</code></pre></div><div class="van-doc-card"><h3 id="round-button-style" tabindex="-1">Round Button Style</h3><p>Use round button style.</p><pre><code class="language-js"><span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Title&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Content&#39;</span>,
  <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;round-button&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});

<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Content&#39;</span>,
  <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;round-button&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});
</code></pre></div><div class="van-doc-card"><h3 id="async-close" tabindex="-1">Async Close</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params">action</span>) =&gt;
  <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-title function_">resolve</span>(action === <span class="hljs-string">&#39;confirm&#39;</span>);
    }, <span class="hljs-number">1000</span>);
  });

<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Title&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Content&#39;</span>,
  beforeClose,
});
</code></pre></div><div class="van-doc-card"><h3 id="global-method" tabindex="-1">Global Method</h3><p>After registering the Dialog component through <code>app.use</code>, the <code>$dialog</code> method will be automatically mounted on all subComponents of the app.</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">$dialog</span>.<span class="hljs-title function_">alert</span>({
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Content&#39;</span>,
    });
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="advanced-usage" tabindex="-1">Advanced Usage</h3><p>If you need to render vue components within a dialog, you can use dialog component.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dialog</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">show-cancel-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dialog</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { show };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>Dialog</td><td>Show dialog</td><td><em>options: DialogOptions</em></td><td><code>Promise&lt;void&gt;</code></td></tr><tr><td>Dialog.alert</td><td>Show alert dialog</td><td><em>options: DialogOptions</em></td><td><code>Promise&lt;void&gt;</code></td></tr><tr><td>Dialog.confirm</td><td>Show confirm dialog</td><td><em>options: DialogOptions</em></td><td><code>Promise&lt;void&gt;</code></td></tr><tr><td>Dialog.setDefaultOptions</td><td>Set default options of all dialogs</td><td><em>options: DialogOptions</em></td><td><code>void</code></td></tr><tr><td>Dialog.resetDefaultOptions</td><td>Reset default options of all dialogs</td><td>-</td><td><code>void</code></td></tr><tr><td>Dialog.close</td><td>Close dialog</td><td>-</td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dialogoptions" tabindex="-1">DialogOptions</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>Dialog width</td><td><em>number | string</em></td><td><code>320px</code></td></tr><tr><td>message</td><td>Message</td><td><em>string | () =&gt; JSX.ELement</em></td><td>-</td></tr><tr><td>messageAlign</td><td>Message text align, can be set to <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>theme</td><td>Theme style, can be set to <code>round-button</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>className</td><td>Custom className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>showConfirmButton</td><td>Whether to show confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>showCancelButton</td><td>Whether to show cancel button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>cancelButtonText</td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td>cancelButtonColor</td><td>Cancel button color</td><td><em>string</em></td><td><code>black</code></td></tr><tr><td>confirmButtonDisabled <code>v3.5.0</code></td><td>Whether to disable cancel button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirmButtonText</td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>confirmButtonColor</td><td>Confirm button color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>confirmButtonDisabled <code>v3.5.0</code></td><td>Whether to disable confirm button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlayClass</td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle</td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>closeOnPopstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>closeOnClickOverlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lockScroll</td><td>Whether to lock body scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allowHtml</td><td>Whether to allow HTML rendering in message</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>beforeClose</td><td>Callback function before close</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>transition</td><td>Transition, equivalent to <code>name</code> prop of <a href="https://v3.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td><td><em>string</em></td><td>-</td></tr><tr><td>teleport</td><td>Specifies a target element where Dialog will be mounted</td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:show</td><td>Whether to show dialog</td><td><em>boolean</em></td><td>-</td></tr><tr><td>title</td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>Width</td><td><em>number | string</em></td><td><code>320px</code></td></tr><tr><td>message</td><td>Message</td><td><em>string | () =&gt; JSX.ELement</em></td><td>-</td></tr><tr><td>message-align</td><td>Message align, can be set to <code>left</code> <code>right</code> <code>justify</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>theme</td><td>Theme style, can be set to <code>round-button</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>show-confirm-button</td><td>Whether to show confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-cancel-button</td><td>Whether to show cancel button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>cancel-button-text</td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td>cancel-button-color</td><td>Cancel button color</td><td><em>string</em></td><td><code>black</code></td></tr><tr><td>cancel-button-disabled <code>v3.5.0</code></td><td>Whether to disable cancel button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirm-button-text</td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>confirm-button-color</td><td>Confirm button color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>confirm-button-disabled <code>v3.5.0</code></td><td>Whether to disable confirm button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>Custom overlay class</td><td><em>string</em></td><td>-</td></tr><tr><td>overlay-style</td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>close-on-popstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>Whether to lazy render util appeared</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lock-scroll</td><td>Whether to lock background scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-html</td><td>Whether to allow HTML rendering in message</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>before-close</td><td>Callback function before close</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>transition</td><td>Transition, equivalent to <code>name</code> prop of <a href="https://v3.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td><td><em>string</em></td><td>-</td></tr><tr><td>teleport</td><td>Specifies a target element where Dialog will be mounted</td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>confirm</td><td>Emitted when the confirm button is clicked</td><td>-</td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td>-</td></tr><tr><td>open</td><td>Emitted when opening Dialog</td><td>-</td></tr><tr><td>close</td><td>Emitted when closing Dialog</td><td>-</td></tr><tr><td>opened</td><td>Emitted when Dialog is opened</td><td>-</td></tr><tr><td>closed</td><td>Emitted when Dialog is closed</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom message</td></tr><tr><td>title</td><td>Custom title</td></tr><tr><td>footer <code>v3.0.11</code></td><td>Custom footer</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">DialogProps</span>,
  <span class="hljs-title class_">DialogTheme</span>,
  <span class="hljs-title class_">DialogMessage</span>,
  <span class="hljs-title class_">DialogOptions</span>,
  <span class="hljs-title class_">DialogMessageAlign</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-dialog-width</td><td><em>320px</em></td><td>-</td></tr><tr><td>--van-dialog-small-screen-width</td><td><em>90%</em></td><td>-</td></tr><tr><td>--van-dialog-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-dialog-transition</td><td><em>var(--van-animation-duration-base)</em></td><td>-</td></tr><tr><td>--van-dialog-border-radius</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-dialog-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-dialog-header-font-weight</td><td><em>var(--van-font-weight-bold)</em></td><td>-</td></tr><tr><td>--van-dialog-header-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-dialog-header-padding-top</td><td><em>26px</em></td><td>-</td></tr><tr><td>--van-dialog-header-isolated-padding</td><td><em>var(--van-padding-lg) 0</em></td><td>-</td></tr><tr><td>--van-dialog-message-padding</td><td><em>var(--van-padding-lg)</em></td><td>-</td></tr><tr><td>--van-dialog-message-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-dialog-message-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-dialog-message-max-height</td><td><em>60vh</em></td><td>-</td></tr><tr><td>--van-dialog-has-title-message-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-dialog-has-title-message-padding-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-dialog-button-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-dialog-round-button-height</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-dialog-confirm-button-text-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr></tbody></table></div>`,19),o=[n],h={__name:"README",setup(l,{expose:t}){return t({frontmatter:{}}),(c,i)=>(s(),e("div",a,o))}};export{h as default};
