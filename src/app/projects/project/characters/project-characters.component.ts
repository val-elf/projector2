import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '~/services/api/models';

@Component({
    selector: 'app-project-characters',
    templateUrl: './project-characters.component.html',
    styleUrls: ['./project-characters.component.scss'],
})
export class ProjectCharactersComponent {
    public characters: ICharacter[];
    public get _characters() {
        return this.route.snapshot.data.characters;
    }

    constructor(private route: ActivatedRoute) {
        console.log(route.snapshot.data.characters);
        this.characters = route.snapshot.data.characters;
    }
}