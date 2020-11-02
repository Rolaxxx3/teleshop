import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.css']
})
export class TextareaFieldComponent {
  @Input() label: string;
  @Input() rows: string;
  @Input() value: string;
  @Output() changeValue = new EventEmitter<string>();

  onChange(e:Event) {
    this.changeValue.emit((<HTMLTextAreaElement>e.target).value);
  }
}
