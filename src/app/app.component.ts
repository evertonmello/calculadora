import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadora';
  valueA ='';
  operation = '';
  decimal = false

  calculadora = new FormGroup({
    result: new FormControl(''),
  });

  inputValue(value){
    var curValue = this.calculadora.controls.result.value || '';
    var newValue ;

    if(value == ','){
      this.decimal = true;
    }
    
    if(this.decimal && value != ','){
      newValue = curValue.toString() + '.' + value;
      this.decimal = false
    }else{
      newValue = curValue.toString() +  value.toString()
    }

    this.calculadora.controls.result.setValue(parseFloat(newValue))    
  }

  setOperation(oprt){
    this.valueA = this.calculadora.controls.result.value || '';
    this.calculadora.controls.result.setValue('');
    this.operation = oprt;
    this.decimal = false
  }

  onSubmit() {
    if(this.calculadora.controls.result.value){
      var result = eval(this.valueA + this.operation + this.calculadora.controls.result.value || '');  
      this.calculadora.controls.result.setValue(parseFloat(result))    
    }
  }

  clear(){
    this.decimal = false
    this.valueA = ''
    this.calculadora.reset()
  }
}
