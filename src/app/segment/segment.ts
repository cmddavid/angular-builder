import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Element } from '../element/element';
import { form, Field, minLength, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-segment',
  imports: [MatCardModule, MatButtonModule, MatInputModule, Element, Field],
  templateUrl: './segment.html',
  styleUrl: './segment.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Segment {
  segment = input.required<AppModel.SegmentWithSignal>();
  segmentFormData = model.required<AppModel.FormData>();
  segmentForm = form(this.segmentFormData, (schemaPath) => {
    minLength(schemaPath.title, 5, { message: 'Title needs to be at least 5 characters' });
    minLength(schemaPath.description, 10, {
      message: 'Description needs to be at least 10 characters',
    });
  });

  submitForm(): void {
    if (this.segmentForm().valid()) {
      submit(this.segmentForm, async (formData) => {
        console.log('Form submitted with data:', this.segmentForm().value());
      })
        .then(() => {
          console.log('Form submission process completed.');
        })
        .catch((error) => {
          console.error('Error during form submission:', error);
        });
    }
  }
}
