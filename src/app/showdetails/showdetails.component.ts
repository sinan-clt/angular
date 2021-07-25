import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service';
@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor(private pass:DataServiceService) { }

  ngOnInit(): void {
    this.showData()
  }
data:any

showData(){
  this.pass.getData().subscribe(res=>{
    this.data=res
    console.log(this.data)
  })
}
delete(i:any){
  {
  console.log(i)
  this.pass.deletedata(i).subscribe(result=>{
    this.showData()
  })
}
}
}
