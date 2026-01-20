import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-element',
  imports: [MatInputModule],
  templateUrl: './element.html',
  styleUrl: './element.css',
  standalone: true,
})
export class Element {
  @Input() element!: AppModel.ElementWithSignal;

  onTitleChange(event: Event) {
    this.element.formData.set(Object.assign({}, this.element.formData(), {
      title: (event?.target as HTMLInputElement).value
    }));
  }

  onDescriptionChange(event: Event) {
    this.element.formData.set(Object.assign({}, this.element.formData(), {
      description: (event?.target as HTMLInputElement).value
    }));
  }
}
