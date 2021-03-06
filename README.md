# Acrolinx Sidebar SDK JS

[![Build Status](https://travis-ci.org/acrolinx/sidebar-sdk-js.svg?branch=master)](https://travis-ci.org/acrolinx/sidebar-sdk-js)
[![Dependencies Status](https://david-dm.org/acrolinx/sidebar-sdk-js/status.svg)](https://david-dm.org/acrolinx/sidebar-sdk-js)
[![DevDependencies Status](https://david-dm.org/acrolinx/sidebar-sdk-js/dev-status.svg)](https://david-dm.org/acrolinx/sidebar-sdk-js?type=dev)

This is a library for integrating the [Acrolinx](https://www.acrolinx.com/) Sidebar into a web application.

See: [Getting Started with Custom Integrations](https://docs.acrolinx.com/customintegrations)

## Live Demo

[Acrolinx Sidebar Web Live Demo](https://acrolinx.github.io/acrolinx-sidebar-demo/samples/index.html)

## Examples

[Acrolinx Sidebar Web Demo](https://github.com/acrolinx/acrolinx-sidebar-demo)

## The Acrolinx Sidebar

The Acrolinx Sidebar is designed to show up beside the window where you edit your content.
You use it for checking, reviewing, and correcting your content.
To get an impression what the Sidebar looks like in existing integrations, have a look at
[Get Started With the Sidebar](https://docs.acrolinx.com/coreplatform/latest/en/the-sidebar/get-started-with-the-sidebar).

## Prerequisites

Please contact [Acrolinx SDK support](https://github.com/acrolinx/acrolinx-coding-guidance/blob/master/topics/sdk-support.md)
for consulting and getting your integration certified.
This sample works with a test license on an internal Acrolinx URL.
This license is only meant for demonstration and developing purposes.
Once you finished your integration, you'll have to get a license for your integration from Acrolinx.
  
Acrolinx offers different other SDKs, and examples for developing integrations.

Before you start developing your own integration, you might benefit from looking into:

* [Getting Started with Custom Integrations](https://docs.acrolinx.com/customintegrations),
* the [Guidance for the Development of Acrolinx Integrations](https://github.com/acrolinx/acrolinx-coding-guidance),
* the [Acrolinx SDKs](https://github.com/acrolinx?q=sdk), and
* the [Acrolinx Demo Projects](https://github.com/acrolinx?q=demo).

## Getting Started

### Installation

To install the SDK to your npm-based Acrolinx Integration project call:

```bash
npm install @acrolinx/sidebar-sdk
```

### Instructions for Contributing Code

[CONTRIBUTING.md](CONTRIBUTING.md)

## SDK Features

The SDK provides [adapters](https://acrolinx.github.io/sidebar-sdk-js/pluginDoc/interfaces/adapterinterface.html) for:

* `contentEditable` `div`-elements,
* `input` text elements,
* CodeMirror,
* CKEditor,
* Xeditor,
* TinyMCE, and a
* `MultiEditorAdapter` that can be used to combine different adapters as one document.

If you need to support other editors, sometimes the `ContentEditableAdapter` works without any changes.
If not, implement the [`AdapterInterface`](https://acrolinx.github.io/sidebar-sdk-js/pluginDoc/interfaces/adapterinterface.html).

## References

* The [Sidebar DEMO JS](https://github.com/acrolinx/acrolinx-sidebar-demo) is built based on this SDK.
* The Sidebar SDKs are based on the [Acrolinx Sidebar Interface](https://acrolinx.github.io/sidebar-interface/).

## Running this project

* Make sure you have a chrome or chromium version later then 72.0.0. This is needed to execute the tests successfully.
* Run `npm i`
* Run `npm run buildLocal` to run all tests and build distribution

## License

Copyright 2015-present Acrolinx GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

For more information visit: [https://www.acrolinx.com](https://www.acrolinx.com)
