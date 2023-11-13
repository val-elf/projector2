import { Component, Input, OnChanges } from '@angular/core';
import { ITreeItem } from './tree-item/tree-item.component';

@Component({
    selector: 'app-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnChanges {
    @Input() settings: {
        labelField: string;
        childrenField: string;
    } = { labelField: 'name', childrenField: 'children' };

    @Input() tree: any[];

    public mappedTree: ITreeItem[];

    ngOnChanges(): void {
        if (this.tree) {
            this.mappedTree = this.tree?.map((item) => this.mapItem(item)) ?? [];
        }
    }

    private mapItem(item: any): ITreeItem {
        return {
            label: item[this.settings.labelField],
            ...(item[this.settings.childrenField] ?
                { children: item[this.settings.childrenField]?.map((child) => this.mapItem(child)) ?? [] }
                : {})
        };
    }
}