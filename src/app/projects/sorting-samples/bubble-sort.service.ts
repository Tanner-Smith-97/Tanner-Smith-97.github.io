import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {
  public inProgress$: Observable<number[]>;
  public currentIndex$: Observable<number>;
  private inProgressBehavior: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  private currentIndexBehavior: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public firstIndex: number = 0;
  public secondIndex: number = 1;
  public iterations: number = 0;

  constructor() {
    this.inProgress$ = this.inProgressBehavior.asObservable();
    this.currentIndex$ = this.currentIndexBehavior.asObservable();
  }

  public async bubbleSort(sortList: number[]): Promise<number[]> {
    this.iterations = 0;
    let arr = sortList;
    let currentIndex: number = 0;
    let eveyFour = 0;
    // outer pass
    for (let i = 0; i < arr.length; i++) {
      // inner pass
      for (let j = 0; j < arr.length; j++) {
        currentIndex = j + 1;
        this.firstIndex = j;
        this.secondIndex = j + 1;
        if (arr[j + 1] < arr[j]) {
          // swapping
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
        this.inProgressBehavior.next(arr);
        this.currentIndexBehavior.next(currentIndex);
        sortList = arr;
        // if (eveyFour === 4) {
        //   await this.sleep(50);
        //   eveyFour = 0;
        // }
        // eveyFour++;
        await this.sleep(100);
      }
      this.iterations++;
      // await this.sleep(100);
    }
    return sortList;
  }

  public async bogoSort(arr: number[]) {
    return this.sort(arr);
  }

  public isSorted = function (arr: number[]) {
    for (let i = 1; i < arr.length; i++) {

      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  };

  public shuffle(arr: number[]) {
    let count = arr.length, temp, index;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count--;

      temp = arr[count];
      arr[count] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }

  public async sort(arr: number[]) {
    this.iterations = 0;
    let sorted = false;
    while (!sorted) {
      arr = this.shuffle(arr);
      sorted = this.isSorted(arr);
      await this.sleep(50);
      this.inProgressBehavior.next(arr);
      console.log(arr);
      this.iterations++;
    }
    return arr;
  }

  private async sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
}
