import { Component, input, output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const regex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$/;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  label = input<string>('PLEASE_ADD_A_WORD');
  word = output<string>();

  wordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5),
    Validators.pattern(regex),
  ]);

  confirm() {
    if (this.wordFormControl.invalid) return;
    this.word.emit(this.wordFormControl.value!);
  }
}
