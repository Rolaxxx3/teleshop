import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css']
})

export class SelectFieldComponent {
  @Input() data: SelectFieldComponent;
  @Output() changeValue = new EventEmitter<number>();
  @Input() valueDefault: number;

  onChange(e:Event) {
    this.changeValue.emit(parseInt((<HTMLSelectElement>e.target).value));
  }
}
