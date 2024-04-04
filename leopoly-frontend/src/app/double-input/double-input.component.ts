import { Component, input, output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const regex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$/;

@Component({
  selector: 'app-double-input',
  templateUrl: './double-input.component.html',
  styleUrl: './double-input.component.scss',
})
export class DoubleInputComponent {
  label = input<string>('PLEASE_ADD_A_WORD');
  words = output<{ source: string; target: string }>();

  sourceFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5),
    Validators.pattern(regex),
  ]);

  targetFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5),
    Validators.pattern(regex),
  ]);

  confirm() {
    if (this.sourceFormControl.invalid || this.targetFormControl.invalid)
      return;
    this.words.emit({
      source: this.sourceFormControl.value!,
      target: this.targetFormControl.value!,
    });
  }
}
