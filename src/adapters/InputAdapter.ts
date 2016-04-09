/*
 *
 * * Copyright 2015 Acrolinx GmbH
 * *
 * * Licensed under the Apache License, Version 2.0 (the "License");
 * * you may not use this file except in compliance with the License.
 * * You may obtain a copy of the License at
 * *
 * * http://www.apache.org/licenses/LICENSE-2.0
 * *
 * * Unless required by applicable law or agreed to in writing, software
 * * distributed under the License is distributed on an "AS IS" BASIS,
 * * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * * See the License for the specific language governing permissions and
 * * limitations under the License.
 * *
 * * For more information visit: http://www.acrolinx.com
 *
 */

namespace acrolinx.plugins.adapter {
  'use strict';

  import MatchWithReplacement = acrolinx.sidebar.MatchWithReplacement;
  import Match = acrolinx.sidebar.Match;
  import AlignedMatch = acrolinx.plugins.lookup.AlignedMatch;
  import lookupMatches = acrolinx.plugins.lookup.diffbased.lookupMatches;
  import $ = acrolinxLibs.$;
  import _ = acrolinxLibs._;
  import Check = acrolinx.sidebar.Check;
  import CheckResult = acrolinx.sidebar.CheckResult;

  type ValidInputElement = HTMLInputElement | HTMLTextAreaElement

  export class InputAdapter implements AdapterInterface {
    element: ValidInputElement;
    html: string;
    currentHtmlChecking: string;

    constructor(elementOrConf: ValidInputElement | AdapterConf) {
      if (elementOrConf instanceof Element) {
        this.element = elementOrConf;
      } else {
        const conf = elementOrConf as AdapterConf;
        this.element = document.getElementById(conf.editorId) as ValidInputElement;
      }
    }

    getHTML() {
      return acrolinxLibs.$(this.element).val();
    }

    getCurrentText() {
      return this.getHTML();
    }

    extractHTMLForCheck() {
      this.html = this.getHTML();
      this.currentHtmlChecking = this.html;
      return {html: this.html} as HtmlResult;
    }

    registerCheckResult(checkResult: CheckResult) : void {
    }

    registerCheckCall(checkInfo: Check) {
    }

    scrollAndSelect(matches: AlignedMatch<Match>[]) {
      const newBegin = matches[0].foundOffset;
      const matchLength = matches[0].flagLength;

      $(this.element).focus();
      $(this.element).setSelection(newBegin, newBegin + matchLength);

      $(this.element)[0].scrollIntoView();
      // TODO: Do we need this special workaround for wordpress? Here?
      const wpContainer = $('#wp-content-editor-container');
      if (wpContainer.length > 0) {
        window.scrollBy(0, -50);
      }
    }

    selectRanges(checkId: string, matches: Match[]) {
      this.selectMatches(checkId, matches);
    }

    selectMatches<T extends Match>(checkId: string, matches: T[]): AlignedMatch<T>[] {
      const alignedMatches = lookupMatches(this.currentHtmlChecking, this.getCurrentText(), matches, 'TEXT');

      if (_.isEmpty(alignedMatches)) {
        throw 'Selected flagged content is modified.';
      }

      this.scrollAndSelect(alignedMatches);
      return alignedMatches;
    }

    replaceSelection(content: string) {
      acrolinxLibs.$(this.element).replaceSelectedText(content, 'select');
    }

    replaceRanges(checkId: string, matchesWithReplacement: MatchWithReplacement[]) {
      const alignedMatches = this.selectMatches(checkId, matchesWithReplacement);
      this.scrollAndSelect(alignedMatches);
      const replacement = alignedMatches.map(m => m.originalMatch.replacement).join('');
      this.replaceSelection(replacement);
    }
  }
}