import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})

export class InputFieldComponent {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() min: number;
  @Input() max: number;
  @Input() label: string;
  @Output() changeValue = new EventEmitter<string>();

  onChange(e:Event) {
    this.changeValue.emit((<HTMLInputElement>e.target).value);
  }
}
