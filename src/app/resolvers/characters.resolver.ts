import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ICharacter } from "~/services/api/models";
import { CharactersService } from "~/services/api/services";

@Injectable({ providedIn: 'root' })
export class CharactersResolver 
{
    constructor(
        private charctersService: CharactersService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ICharacter[]> {
        return this.charctersService.getCharacters({ projectId: route.params.projectId });
    }
}