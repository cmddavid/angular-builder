import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-segment',
  imports: [MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './segment.html',
  styleUrl: './segment.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Segment {
  @Input() segment!: AppModel.SegmentWithSignal;

  onTitleChange(event: Event) {
    this.segment.formData.title.set((event?.target as HTMLInputElement).value);
  }

  onDescriptionChange(event: Event) {
    this.segment.formData.description.set((event?.target as HTMLInputElement).value);
  }
}