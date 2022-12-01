import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company.model'

@Component({
  selector: 'app-list-company',
  templateUrl: 'list-company.component.html',
  styleUrls: ['list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  datas:Company[]=[];

  constructor(private productService: CompanyService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe((res:any)=>{
      this.datas = res
    })
  }
}


