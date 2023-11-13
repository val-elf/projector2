import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

export interface ITreeItem {
    label: string;
    children?: ITreeItem[];
}

@Component({
    selector: 'app-tree-item',
    templateUrl: './tree-item.component.html',
    styleUrls: ['./tree-item.component.scss'],
})
export class TreeItemComponent implements AfterViewInit {
    @Input() item: ITreeItem;

    @ViewChild('treeItemChildren') treeItemChildren: ElementRef<HTMLDivElement>;

    @Input() public collapsed: boolean = true;

    ngAfterViewInit() {
        if (this.treeItemChildren) {
            const children = this.treeItemChildren.nativeElement;
            const content = children.querySelector('.tree-item-children__content') as HTMLDivElement;
            children.addEventListener('transitionend', () => {
                if (!this.collapsed) {
                    children.style.height = `auto`;
                }
            });
        }
    }

    expandToggle(): void {
        this.collapsed = !this.collapsed;
        const content = this.treeItemChildren.nativeElement.querySelector('.tree-item-children__content') as HTMLDivElement;
        const offsetHeight = content.offsetHeight;
        this.treeItemChildren.nativeElement.style.height = `${offsetHeight}px`;

        if (this.collapsed) {
            setTimeout(() => {
                this.treeItemChildren.nativeElement.style.height = `0px`;
            }, 0);

        }
    }

}