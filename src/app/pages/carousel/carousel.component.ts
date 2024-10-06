import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

let nextId: number = 0;

@Component({
  selector: 'ede-carousel',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, NgClass],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnDestroy {
  public componentId: string = `carousel-id-${nextId++}`;
  public items: string[] = [
    `“Reading is essential for those who seek to rise above the ordinary.” — Jim Rohn`,
    `“In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.” — Mortimer J. Adler`,
    `“Books are a uniquely portable magic.” — Stephen King`,
    `“I think books are like people, in the sense that they’ll turn up in your life when you most need them.” — Emma Thompson`,
    `“Rainy days should be spent at home with a cup of tea and a good book.” — Bill Watterson`
  ];

  public currentPage: number = 0;
  public itemMap: Map<number, string[]> = new Map(); 
  public pageSize: number = 1; 
  public itemKeys: number[] = [];
  public numberOfPages: number = 0;
  public isNextDisabled: boolean = true;
  public isPrevDisabled: boolean = true;
  public currentGroupIndex: number = 0;

  private intervalId: any; // Adăugat pentru a păstra referința la interval

  ngOnInit(): void {
    if (this.items.length === 0) {
      return;
    }

    this.createSliderGroups();
    this.numberOfPages = this.itemMap.size;
    this.itemKeys = Array.from(this.itemMap.keys());
    this.calcButtonStates();

    // Setează intervalul pentru a schimba automat citatul
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    // Cureță intervalul la distrugerea componentei
    clearInterval(this.intervalId);
  }

  navToPrev() {
    if (this.currentGroupIndex > 0) {
        this.currentGroupIndex--;
        this.calcButtonStates();
    }
  }

  navToNext() {
    if (this.currentGroupIndex < this.numberOfPages - 1) {
        this.currentGroupIndex++;
        this.calcButtonStates();
    } else {
        // Dacă ești la ultima pagină, revino la prima
        this.currentGroupIndex = 0;
        this.calcButtonStates();
    }
  }

  private startAutoScroll() {
    // Schimbă citatul la fiecare 7 secunde
    this.intervalId = setInterval(() => {
      this.navToNext();
    }, 7000); // 7000 ms = 7 secunde
  }

  private calcButtonStates(): void {
    this.isPrevDisabled = this.currentGroupIndex <= 0; 
    this.isNextDisabled = this.currentGroupIndex >= this.itemMap.size - 1; 
  }

  private createSliderGroups(): void {
    this.itemMap = new Map<number, string[]>();
    let groupIndex = 0;
    let currentGroup: string[] = [];

    for (let i = 0; i < this.items.length; i++) {
        currentGroup.push(this.items[i]); 

        if (currentGroup.length === this.pageSize || i === this.items.length - 1) {
            this.itemMap.set(groupIndex, currentGroup);
            groupIndex++;
            currentGroup = []; 
        }
    }
  }
}