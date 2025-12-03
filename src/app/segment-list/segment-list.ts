import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-segment-list',
  imports: [CdkDrag, CdkDropList, MatListModule, MatIconModule],
  templateUrl: './segment-list.html',
  styleUrl: './segment-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentList {
  @Input() segments: AppModel.SegmentWithSignal[] = [];
  drop(event: CdkDragDrop<AppModel.SegmentWithSignal[]>) {
    moveItemInArray(this.segments, event.previousIndex, event.currentIndex);
  }
}