import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "src/environments/environment";
import { WebComponentModule } from "../web-component.module";

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(WebComponentModule);
bootstrap().catch(err => console.log(err));