import {Component, ComponentRef, OnInit} from '@angular/core';
import { BubbleSortService } from "./bubble-sort.service";
import {Observable, Observer} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-sorting-samples',
  templateUrl: './sorting-samples.component.html',
  styleUrls: ['./sorting-samples.component.css'],
})
export class SortingSamplesComponent implements OnInit {
  public bubbleSortObservable$: Observable<number[]>;
  public currentIndex$: Observable<number>;
  public firstIndex: number = 0;
  public secondIndex: number = 0;
  public numList: number[];
  public iterations: number = 0;

  constructor(private bubbleSortService: BubbleSortService) {
    // let numList: number[];
    // this.buildNumList(100);
   this.bubbleSortObservable$ = this.bubbleSortService.inProgress$.pipe(tap(() => {
     this.firstIndex = this.bubbleSortService.firstIndex;
     this.secondIndex = this.bubbleSortService.secondIndex;
     this.iterations = this.bubbleSortService.iterations;
   }));
   this.currentIndex$ = this.bubbleSortService.currentIndex$;
   this.numList = [];
   // this.buildNumList(1000);
  }

  ngOnInit(): void {
    console.log('sorting created');
  }

  public async onClick_BogoSort(): Promise<void> {
    this.numList = [];
    this.buildNumList(6);
    await this.bubbleSortService.bogoSort(this.numList);
  }

  public  async onClick_BubbleSort(): Promise<void> {
    this.numList = [];
    this.buildNumList(40);
    await this.bubbleSortService.bubbleSort(this.numList);
  }

  // numList: number[] = [];
  //
  buildNumList(amount: number): void{
    for (let i = 0; i < amount; i++) {
      let temp = this.getRandom(100, 10)
      this.numList.push(temp)
    }
  }
  //
  // addExtras(){
  //   let temp = this.getRandom(100);
  //   this.numList.push(temp);
  //   // this.numList.pop();
  // }
  //
  getRandom(max: number, min = 0): number{
    return Math.floor(Math.random() * max) + min;
  }
  //
  // bubbleSort(){
  //   let arr:number[];
  //   arr = this.numList;
  //   this.numList = [];
  //   //outer pass
  //   for (let i = 0; i < arr.length; i++) {
  //     //inner pass
  //     for (let j = 0; j < arr.length; j++) {
  //       //value comparison using ascending order
  //       if(arr[j + 1] < arr[j]){
  //         //swapping
  //         [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]];
  //       }
  //       this.numList = arr;
  //     }
  //
  //     this.sleep(5);
  //   }
  //   // return arr
  // }
  //
  // sleep(milliseconds: number){
  //   const date = Date.now();
  //   let currentDate = null;
  //   console.log('Sleeping...');
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }

}

