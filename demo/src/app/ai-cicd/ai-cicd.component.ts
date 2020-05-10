import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-cicd',
  templateUrl: './ai-cicd.component.html',
  styleUrls: ['./ai-cicd.component.css']
})
export class AiCicdComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  L1=true;
  L2_CL=true;
  L2_SAFE=true;
  L3_CL=true;
  L4_CL_EDC=true;
  L4_CL_WTC=true;
  L5=true;
  L6=true;
  PROD_EDC=true;
  PROD_WTC=true;


  hello(){
    console.log(this.L1)
  }
}
