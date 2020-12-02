import { FormGroup, AbstractControl } from "@angular/forms";

export function comparePassword(controlName: string, compareControl: string) {
    return (formGroup : FormGroup) => {
        const control = formGroup.controls[controlName];
        const comparedControl = formGroup.controls[compareControl];

        if (comparedControl.errors && !comparedControl.errors.mustMatch){
            return;
        }

        if (control.value !== comparedControl.value){
            comparedControl.setErrors({ mustMatch: true })
        } else {
            comparedControl.setErrors(null);
        }
    }
}