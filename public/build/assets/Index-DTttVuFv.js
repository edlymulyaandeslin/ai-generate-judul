import{r as R,V as Z,a as ee,j as o,M as te}from"./app-BQPWsx0L.js";import{C as ne}from"./ContentWrapper-DrPEb_k1.js";import{M as se,L as ie,t as I}from"./MainLayout-DU0OSsty.js";import"./index-QUKnDTt3.js";var A;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(A||(A={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(k||(k={}));var T;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(T||(T={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=["user","model","function","system"];var L;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(L||(L={}));var D;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(D||(D={}));var G;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(G||(G={}));var $;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})($||($={}));var x;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"})(x||(x={}));var F;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(F||(F={}));var U;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(U||(U={}));var H;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(H||(H={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class C extends g{constructor(t,n){super(t),this.response=n}}class V extends g{constructor(t,n,s,i){super(t),this.status=n,this.statusText=s,this.errorDetails=i}}class b extends g{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="https://generativelanguage.googleapis.com",oe="v1beta",re="0.21.0",le="genai-js";var v;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(v||(v={}));class ce{constructor(t,n,s,i,a){this.model=t,this.task=n,this.apiKey=s,this.stream=i,this.requestOptions=a}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||oe;let a=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ae}/${s}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function de(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${le}/${re}`),t.join(" ")}async function ue(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",de(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(i){throw new b(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${i.message}`)}for(const[i,a]of s.entries()){if(i==="x-goog-api-key")throw new b(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new b(`Header name ${i} can only be set using the apiClient field`);n.append(i,a)}}return n}async function he(e,t,n,s,i,a){const c=new ce(e,t,n,s,a);return{url:c.toString(),fetchOptions:Object.assign(Object.assign({},pe(a)),{method:"POST",headers:await ue(c),body:i})}}async function j(e,t,n,s,i,a={},c=fetch){const{url:l,fetchOptions:d}=await he(e,t,n,s,i,a);return fe(l,d,c)}async function fe(e,t,n=fetch){let s;try{s=await n(e,t)}catch(i){ge(i,e)}return s.ok||await me(s,e),s}function ge(e,t){let n=e;throw e instanceof V||e instanceof b||(n=new g(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function me(e,t){let n="",s;try{const i=await e.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,s=i.error.details)}catch{}throw new V(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function pe(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),O(e.candidates[0]))throw new C(`${E(e)}`,e);return _e(e)}else if(e.promptFeedback)throw new C(`Text not available. ${E(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),O(e.candidates[0]))throw new C(`${E(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),K(e)[0]}else if(e.promptFeedback)throw new C(`Function call not available. ${E(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),O(e.candidates[0]))throw new C(`${E(e)}`,e);return K(e)}else if(e.promptFeedback)throw new C(`Function call not available. ${E(e)}`,e)},e}function _e(e){var t,n,s,i;const a=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const c of(i=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||i===void 0?void 0:i.parts)c.text&&a.push(c.text),c.executableCode&&a.push("\n```"+c.executableCode.language+`
`+c.executableCode.code+"\n```\n"),c.codeExecutionResult&&a.push("\n```\n"+c.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function K(e){var t,n,s,i;const a=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const c of(i=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||i===void 0?void 0:i.parts)c.functionCall&&a.push(c.functionCall);if(a.length>0)return a}const Ee=[x.RECITATION,x.SAFETY,x.LANGUAGE];function O(e){return!!e.finishReason&&Ee.includes(e.finishReason)}function E(e){var t,n,s;let i="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)i+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(i+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const a=e.candidates[0];O(a)&&(i+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(i+=`: ${a.finishMessage}`))}return i}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function be(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),i,a=[];return i={},c("next"),c("throw"),c("return"),i[Symbol.asyncIterator]=function(){return this},i;function c(r){s[r]&&(i[r]=function(u){return new Promise(function(h,f){a.push([r,u,h,f])>1||l(r,u)})})}function l(r,u){try{d(s[r](u))}catch(h){p(a[0][3],h)}}function d(r){r.value instanceof y?Promise.resolve(r.value.v).then(m,_):p(a[0][2],r)}function m(r){l("next",r)}function _(r){l("throw",r)}function p(r,u){r(u),a.shift(),a.length&&l(a[0][0],a[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ve(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ye(t),[s,i]=n.tee();return{stream:xe(s),response:Ce(i)}}async function Ce(e){const t=[],n=e.getReader();for(;;){const{done:s,value:i}=await n.read();if(s)return S(Ne(t));t.push(i)}}function xe(e){return be(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:i}=yield y(n.read());if(i)break;yield yield y(S(s))}})}function ye(e){const t=e.getReader();return new ReadableStream({start(s){let i="";return a();function a(){return t.read().then(({value:c,done:l})=>{if(l){if(i.trim()){s.error(new g("Failed to parse stream"));return}s.close();return}i+=c;let d=i.match(B),m;for(;d;){try{m=JSON.parse(d[1])}catch{s.error(new g(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(m),i=i.substring(d[0].length),d=i.match(B)}return a()})}}})}function Ne(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates)for(const i of s.candidates){const a=i.index;if(n.candidates||(n.candidates=[]),n.candidates[a]||(n.candidates[a]={index:i.index}),n.candidates[a].citationMetadata=i.citationMetadata,n.candidates[a].groundingMetadata=i.groundingMetadata,n.candidates[a].finishReason=i.finishReason,n.candidates[a].finishMessage=i.finishMessage,n.candidates[a].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[a].content||(n.candidates[a].content={role:i.content.role||"user",parts:[]});const c={};for(const l of i.content.parts)l.text&&(c.text=l.text),l.functionCall&&(c.functionCall=l.functionCall),l.executableCode&&(c.executableCode=l.executableCode),l.codeExecutionResult&&(c.codeExecutionResult=l.codeExecutionResult),Object.keys(c).length===0&&(c.text=""),n.candidates[a].content.parts.push(c)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t,n,s){const i=await j(t,v.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return ve(i)}async function X(e,t,n,s){const a=await(await j(t,v.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:S(a)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function N(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return je(t)}function je(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,i=!1;for(const a of e)"functionResponse"in a?(n.parts.push(a),i=!0):(t.parts.push(a),s=!0);if(s&&i)throw new g("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!i)throw new g("No content is provided for sending chat message.");return s?t:n}function Re(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=e.generateContentRequest!=null;if(e.contents){if(i)throw new b("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(i)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const a=N(e);s.contents=[a]}return{generateContentRequest:s}}function Y(e){let t;return e.contents?t=e:t={contents:[N(e)]},e.systemInstruction&&(t.systemInstruction=z(e.systemInstruction)),t}function Oe(e){return typeof e=="string"||Array.isArray(e)?{content:N(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ie={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Se(e){let t=!1;for(const n of e){const{role:s,parts:i}=n;if(!t&&s!=="user")throw new g(`First content should be with role 'user', got ${s}`);if(!M.includes(s))throw new g(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(M)}`);if(!Array.isArray(i))throw new g("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new g("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of i)for(const d of P)d in l&&(a[d]+=1);const c=Ie[s];for(const l of P)if(!c.includes(l)&&a[l]>0)throw new g(`Content with role '${s}' can't contain '${l}' part`);t=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="SILENT_ERROR";class we{constructor(t,n,s,i={}){this.model=n,this.params=s,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(Se(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,i,a,c,l,d;await this._sendPromise;const m=N(t),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(c=this.params)===null||c===void 0?void 0:c.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,m]},p=Object.assign(Object.assign({},this._requestOptions),n);let r;return this._sendPromise=this._sendPromise.then(()=>X(this._apiKey,this.model,_,p)).then(u=>{var h;if(u.response.candidates&&u.response.candidates.length>0){this._history.push(m);const f=Object.assign({parts:[],role:"model"},(h=u.response.candidates)===null||h===void 0?void 0:h[0].content);this._history.push(f)}else{const f=E(u.response);f&&console.warn(`sendMessage() was unsuccessful. ${f}. Inspect response object for details.`)}r=u}),await this._sendPromise,r}async sendMessageStream(t,n={}){var s,i,a,c,l,d;await this._sendPromise;const m=N(t),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(c=this.params)===null||c===void 0?void 0:c.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,m]},p=Object.assign(Object.assign({},this._requestOptions),n),r=W(this._apiKey,this.model,_,p);return this._sendPromise=this._sendPromise.then(()=>r).catch(u=>{throw new Error(q)}).then(u=>u.response).then(u=>{if(u.candidates&&u.candidates.length>0){this._history.push(m);const h=Object.assign({},u.candidates[0].content);h.role||(h.role="model"),this._history.push(h)}else{const h=E(u);h&&console.warn(`sendMessageStream() was unsuccessful. ${h}. Inspect response object for details.`)}}).catch(u=>{u.message!==q&&console.error(u)}),r}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t,n,s){return(await j(t,v.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t,n,s){return(await j(t,v.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function Te(e,t,n,s){const i=n.requests.map(c=>Object.assign(Object.assign({},c),{model:t}));return(await j(t,v.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=z(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const i=Y(t),a=Object.assign(Object.assign({},this._requestOptions),n);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},i),a)}async generateContentStream(t,n={}){var s;const i=Y(t),a=Object.assign(Object.assign({},this._requestOptions),n);return W(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},i),a)}startChat(t){var n;return new we(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Re(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return Ae(this.apiKey,this.model,s,i)}async embedContent(t,n={}){const s=Oe(t),i=Object.assign(Object.assign({},this._requestOptions),n);return ke(this.apiKey,this.model,s,i)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Te(this.apiKey,this.model,t,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new g("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new J(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new b("Cached content must contain a `name` field.");if(!t.model)throw new b("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const c of i)if(n!=null&&n[c]&&t[c]&&(n==null?void 0:n[c])!==t[c]){if(c==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,d=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(l===d)continue}throw new b(`Different value for "${c}" specified in modelParams (${n[c]}) and cachedContent (${t[c]})`)}const a=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new J(this.apiKey,a,s)}}const Le="AIzaSyC_W7P0D7TUWuRKuwBywJzygNOMoaHojz0",De=new Me(Le),Ge=De.getGenerativeModel({model:"gemini-2.0-flash"}),$e=async e=>{try{return(await Ge.generateContent(e)).response.text()}catch(t){throw console.error("Error generating content with Gemini: ",t),t}};function Be({jumlah_judul:e}){var p;const[t,n]=R.useState([]),{auth:s}=Z().props,[i,a]=R.useState(!1),c=t.length>0?"Generate Ulang":"Generate Judul",{data:l,setData:d,post:m}=ee({jurusan:"",jenis_penelitian:"",lokasi:"",tingkat_kesulitan:"mudah hingga menengah",ai_response:"",basis:"",jenis_aplikasi:"",additional_prompt:""}),_=async r=>{if(r.preventDefault(),!s.user.is_premium&&e>0)return I.error("You must be a premium user to access this feature.");if(!l.jurusan||!l.jenis_penelitian||!l.basis||!l.lokasi)return I.warning("Pastikan semua data di isi ya brader!");a(!0);let u="";l.additional_prompt&&(u=` Selain itu, ${l.additional_prompt} secara mendalam.`);const h=`Saya membutuhkan 3 referensi judul penelitian ${l.jenis_penelitian} untuk jurusan ${l.jurusan}, dengan fokus pada pengembangan ${l.jenis_aplikasi} berbasis ${l.basis}. Penelitian ini dilakukan di ${l.lokasi}, dengan tingkat kesulitan ${l.tingkat_kesulitan}.

        Untuk setiap judul, berikan penjelasan terstruktur yang mencakup:
        - judul
        - latar_belakang
        - tujuan_penelitian
        - metodologi_penelitian [array]
        - inovasi
        - keunggulan [array]

        ${u}

        Tampilkan jawaban dalam format JSON array dengan key yang konsisten dan tanpa penjelasan tambahan di luar struktur JSON.`;try{const Q=(await $e(h)).replace(/```json\s*|```/g,"").trim(),w=JSON.parse(Q);n(w),d("ai_response",JSON.stringify(w)),a(!1)}catch{return a(!1),I.error("Something wrong, check your network and try again!")}};return R.useEffect(()=>{l.ai_response&&m(route("carijudul.store"))},[t]),R.useEffect(()=>{l.jenis_penelitian==="magang"?(d("jenis_aplikasi","sistem informasi"),d("tingkat_kesulitan","mudah")):(d("tingkat_kesulitan","mudah hingga menengah"),d("jenis_aplikasi",""))},[l.jenis_penelitian]),o.jsxs(se,{children:[o.jsx(te,{title:"Home"}),o.jsx(ne,{children:o.jsxs("div",{className:"w-full",children:[o.jsx("h1",{className:"text-center md:text-lg text-md md:text-left",children:"Temukan judul penelitian terbaik dengan bantuan AI canggih! Hanya dalam hitungan detik, dapatkan rekomendasi judul penelitian yang kreatif, relevan, dan sesuai dengan bidang Anda. Coba sekarang dan buat penelitian anda lebih mudah dari sebelumnya!"}),o.jsxs("form",{onSubmit:_,className:"grid grid-cols-1 lg:grid-cols-2",children:[o.jsxs("div",{className:"my-4",children:[o.jsx("h1",{className:"mb-4 text-lg font-bold text-center",children:"Pilih Jurusan"}),o.jsxs("div",{className:"flex justify-center gap-4",children:[o.jsxs("label",{htmlFor:"sistem_informasi",className:`btn ${l.jurusan=="sistem informasi"?"btn-primary":""}`,children:[o.jsx("input",{id:"sistem_informasi",type:"radio",name:"jurusan",value:"sistem informasi",className:"hidden",onChange:r=>d("jurusan",r.target.value)}),"Sistem Informasi"]}),o.jsxs("label",{htmlFor:"teknik_informatika",className:`btn ${l.jurusan=="teknik informatika"?"btn-primary":""}`,children:[o.jsx("input",{id:"teknik_informatika",type:"radio",name:"jurusan",value:"teknik informatika",className:"hidden",onChange:r=>d("jurusan",r.target.value)}),"Teknik Informatika"]})]})]}),o.jsxs("div",{className:"my-4",children:[o.jsx("h1",{className:"mb-4 text-lg font-bold text-center",children:"Jenis Penelitian"}),o.jsxs("div",{className:"flex justify-center gap-4",children:[o.jsxs("label",{htmlFor:"magang",className:`btn ${l.jenis_penelitian=="magang"?"btn-accent":""}`,children:[o.jsx("input",{id:"magang",type:"radio",name:"jenis_penelitian",value:"magang",className:"hidden",onChange:r=>d("jenis_penelitian",r.target.value)}),"Magang"]}),o.jsxs("label",{htmlFor:"skripsi",className:`btn ${l.jenis_penelitian=="skripsi"?"btn-accent":""}`,children:[o.jsx("input",{id:"skripsi",type:"radio",name:"jenis_penelitian",value:"skripsi",className:"hidden",onChange:r=>d("jenis_penelitian",r.target.value)}),"Skripsi"]})]})]}),l.jenis_penelitian=="skripsi"&&o.jsxs("div",{className:"my-4",children:[o.jsx("h1",{className:"mb-4 text-lg font-bold text-center",children:"Jenis Aplikasi"}),o.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[o.jsxs("label",{htmlFor:"sistem pakar",className:`btn ${l.jenis_aplikasi=="sistem pakar"?"btn-accent":""}`,children:[o.jsx("input",{id:"sistem pakar",type:"radio",name:"jenis_aplikasi",value:"sistem pakar",className:"hidden",onChange:r=>d("jenis_aplikasi",r.target.value)}),"Sistem Pakar"]}),o.jsxs("label",{htmlFor:"sistem pendukung keputusan",className:`btn ${l.jenis_aplikasi=="sistem pendukung keputusan"?"btn-accent":""}`,children:[o.jsx("input",{id:"sistem pendukung keputusan",type:"radio",name:"jenis_aplikasi",value:"sistem pendukung keputusan",className:"hidden",onChange:r=>d("jenis_aplikasi",r.target.value)}),"Sistem Pendukung Keputusan"]}),o.jsxs("label",{htmlFor:"sistem informasi",className:`btn ${l.jenis_aplikasi=="sistem informasi"?"btn-accent":""}`,children:[o.jsx("input",{id:"sistem informasi",type:"radio",name:"jenis_aplikasi",value:"sistem informasi",className:"hidden",onChange:r=>d("jenis_aplikasi",r.target.value)}),"Sistem Informasi"]}),o.jsxs("label",{htmlFor:"iot",className:`btn ${l.jenis_aplikasi=="iot"?"btn-accent":""}`,children:[o.jsx("input",{id:"iot",type:"radio",name:"jenis_aplikasi",value:"iot",className:"hidden",onChange:r=>d("jenis_aplikasi",r.target.value)}),"Internet of Things"]})]})]}),o.jsxs("div",{className:"my-4",children:[o.jsx("h1",{className:"mb-4 text-lg font-bold text-center",children:"Berbasis"}),o.jsxs("div",{className:"flex justify-center gap-4",children:[o.jsxs("label",{htmlFor:"web",className:`btn ${l.basis=="web"?"btn-info":""}`,children:[o.jsx("input",{id:"web",type:"radio",name:"basis",value:"web",className:"hidden",onChange:r=>d("basis",r.target.value)}),"Web"]}),o.jsxs("label",{htmlFor:"mobile",className:`btn ${l.basis=="mobile"?"btn-secondary":""}`,children:[o.jsx("input",{id:"mobile",type:"radio",name:"basis",value:"mobile",className:"hidden",onChange:r=>d("basis",r.target.value)}),"Mobile"]})]})]}),o.jsxs("div",{className:"my-4",children:[o.jsx("h1",{className:"mb-4 text-lg font-bold text-center",children:"Lokasi Penelitian"}),o.jsx("div",{className:"w-full max-w-xs mx-auto",children:o.jsx("input",{type:"text",placeholder:"example: Dinas Kominfo Riau",className:"w-full input input-bordered",onChange:r=>d("lokasi",r.target.value),required:!0})})]}),l.jenis_penelitian=="skripsi"&&o.jsxs("div",{className:"my-4",children:[o.jsxs("h1",{className:"mb-4 text-lg font-bold text-center",children:["Additional Prompt",o.jsx("span",{className:"text-xs",children:" (opsional)"})]}),o.jsx("div",{className:"w-full max-w-md mx-auto",children:o.jsx("textarea",{placeholder:"example: saya ingin membahas khusus menggunakan metode x",className:"w-full textarea textarea-bordered",onChange:r=>d("additional_prompt",r.target.value)})})]}),o.jsx("div",{className:"flex justify-center gap-2 lg:col-span-2",children:o.jsx("button",{type:"submit",className:"btn bg-blue-600 text-white hover:bg-blue-700 btn-block max-w-md",children:i?o.jsx(ie,{className:"animate-spin",size:20}):o.jsxs(o.Fragment,{children:[c,!((p=s.user)!=null&&p.is_premium)&&o.jsx("span",{className:"text-sm text-yellow-300",children:e==0?"(Free x1)":"(Upgrade)"})]})})})]}),t.length>0&&!i&&o.jsx("div",{className:"w-full max-w-6xl mx-auto px-4 py-10 grid gap-8",children:t==null?void 0:t.map((r,u)=>o.jsxs("div",{className:"relative border border-blue-900 rounded-xl p-6 bg-base-100 shadow-md hover:shadow-lg transition-all",children:[o.jsx("div",{className:"flex justify-between items-center mb-4 text-sm text-base-content/60",children:o.jsxs("span",{className:"font-medium",children:["Referensi #",u+1]})}),o.jsx("h2",{className:"text-xl font-semibold mb-4 text-base-content",children:r==null?void 0:r.judul}),o.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-sm",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold text-base-content/70",children:"Latar Belakang"}),o.jsx("p",{className:"text-base-content",children:r==null?void 0:r.latar_belakang})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold text-base-content/70",children:"Tujuan Penelitian"}),o.jsx("p",{className:"text-base-content",children:r==null?void 0:r.tujuan_penelitian})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold text-base-content/70",children:"Metodologi Penelitian"}),r==null?void 0:r.metodologi_penelitian.map((h,f)=>o.jsxs("p",{className:"text-base-content text-justify",children:[f+1,". ",h]},f))]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold text-base-content/70",children:"Inovasi"}),o.jsx("p",{className:"text-base-content",children:r==null?void 0:r.inovasi})]}),o.jsxs("div",{className:"sm:col-span-2",children:[o.jsx("p",{className:"font-semibold text-base-content/70",children:"Keunggulan"}),r==null?void 0:r.keunggulan.map((h,f)=>o.jsxs("p",{className:"text-base-content text-justify",children:[f+1,". ",h]},f))]})]})]},u))})]})})]})}export{Be as default};
