import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-list-user',
  templateUrl: 'list-user.component.html',
  styleUrls: ['list-user.component.css']
})


export class ListUserComponent implements OnInit {
  datas: User[] = [];
  userSeleted = new User();
  deleteSeleted = new User();
  submitUser = new User();
  editUserData = new User();
  profileForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
  });



  formUpdate = new FormGroup({
    idUser: new FormControl(''),
    nameUpdate: new FormControl(''),
    phoneUpdate: new FormControl(''),
  })

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((res: any) => {
      this.datas = res
    })
  }

  public onSubmit(item: any) {
    item.id = +this.datas[this.datas.length - 1].id + 1
    item.name = this.profileForm.value.name
    item.phone = this.profileForm.value.phone
    console.log('test submit before use api', item)
    this.userService.addUser(item).subscribe((res: any) => {
      this.submitUser = res
      this.getAll()
      console.log('new user:', res)
      console.log('new user after use api:', this.submitUser)
    })

  }

  public editUser(item: any) {
    this.userService.getUserById(item.id).subscribe((res: any) => {
      this.editUserData = res
      this.formUpdate.value.idUser = res.id
      this.formUpdate.value.nameUpdate = res.name
      this.formUpdate.value.phoneUpdate = res.phone
      console.log('step1', res)

    })
  }

  public onUpdate(item: any) {
    console.log("value of id input", item)
    if (item.id === this.formUpdate.value.idUser) {
      //update user
      item.id = this.formUpdate.value.idUser
      item.name = this.formUpdate.value.nameUpdate
      item.phone = this.formUpdate.value.phoneUpdate
      console.log("new user", item)
      this.userService.updateUser(item).subscribe((res:any)=>{
        this.editUserData = res
        this.getAll()
        console.log("after use api", res)
      })
      
    } else {
      // add
      item.id = this.formUpdate.value.idUser
      item.name = this.formUpdate.value.nameUpdate
      item.phone = this.formUpdate.value.phoneUpdate
      console.log('new user:', item)
      this.userService.addUser(item).subscribe((res: any) => {
        this.submitUser = res
        this.getAll()
        console.log('new user after use api:', this.submitUser)
      })
    }

  }

  showAddForm() {

  }

  showUpdateForm() {
    this.datas
  }
  getDetails(item: any) {

    this.userService.findUserById(item.id).subscribe((res: any) => {
      this.userSeleted = res
      console.log('this is get details:', res)
    })
  }

  deleteUser(item: any) {
    this.deleteSeleted = item
  }

  confirmDelete(item: any) {
    this.userService.deleteUserById(item.id).subscribe((res: any) => {
      this.userSeleted = res
      console.log('this is delete user:', res)
      this.getAll()
    })
  }


}





