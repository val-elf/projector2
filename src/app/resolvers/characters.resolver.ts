import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ICharacter } from "~/services/api/models";
import { CharactersService } from "~/services/api/services";

@Injectable({ providedIn: 'root' })
export class CharactersResolver implements Resolve<ICharacter[]>
{
    constructor(
        private charctersService: CharactersService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ICharacter[]> {
        return this.charctersService.getCharacters({ projectId: route.params.projectId });
    }
}