import { Injectable } from '@angular/core';
import { translations } from "projector-localizations";

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private locale: string = "en";

    public get(key: string, params?: any[]) {
        return translations[this.locale][key.toUpperCase()];
    }
}