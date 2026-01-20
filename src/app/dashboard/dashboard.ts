import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SegmentList } from '../segment-list/segment-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Segment } from '../segment/segment';

@Component({
  selector: 'app-dashboard',
  imports: [SegmentList, MatSidenavModule, Segment],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Dashboard {
  segments: AppModel.SegmentWithSignal[] = this.convertToSignals([
    {
      formData: {
        title: 'Segment 1',
        description: 'Description for Segment 1',
      },
      elements: [
        { formData: { title: 'Element 1.1', description: 'Description for Element 1.1' } },
        { formData: { title: 'Element 1.2', description: 'Description for Element 1.2' } },
      ],
    },
    {
      formData: {
        title: 'Segment 2',
        description: 'Description for Segment 2',
      },
      elements: [
        { formData: { title: 'Element 2.1', description: 'Description for Element 2.1' } },
        { formData: { title: 'Element 2.2', description: 'Description for Element 2.2' } },
      ],
    },
    {
      formData: {
        title: 'Segment 3',
        description: 'Description for Segment 3',
      },
      elements: [
        { formData: { title: 'Element 3.1', description: 'Description for Element 3.1' } },
        { formData: { title: 'Element 3.2', description: 'Description for Element 3.2' } },
      ],
    },
    {
      formData: {
        title: 'Segment 4',
        description: 'Description for Segment 4',
      },
      elements: [
        { formData: { title: 'Element 4.1', description: 'Description for Element 4.1' } },
        { formData: { title: 'Element 4.2', description: 'Description for Element 4.2' } },
      ],
    },
  ]);

  convertToSignals(segments: AppModel.Segment[]): AppModel.SegmentWithSignal[] {
    return segments.map(segment => ({
      ...segment,
      formData: signal(segment.formData),
      elements: segment.elements.map(element => ({
        ...element,
        formData: signal(element.formData),
      })),
    }));
  }
}
