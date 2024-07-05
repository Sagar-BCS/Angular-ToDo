import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  task:any= [{id:0, title:'Tasks to do'}];
  newtask(data:string){
    if(data != ' ')
    {
      this.task.push({id:this.task.length,title:data})
      console.log(this.task)
    }
  }

  removetask(id:number){
    this.task = this.task.filter((item:{id:number}) => item.id != id)
  }
}
