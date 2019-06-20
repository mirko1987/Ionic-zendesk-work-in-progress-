import { Component } from "@angular/core";

import { ngxZendeskWebwidgetService } from "ngx-zendesk-webwidget";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private zE: ngxZendeskWebwidgetService) {
    zE.hide();
    zE.activate();
  }
}
