import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'student-list', pathMatch:'full'},
  
  {
    path: 'student-create',
    loadChildren: () => import('./student-create/student-create.module').then( m => m.StudentCreatePageModule)
  },
  {
    path: 'student-edit/:id',
    loadChildren: () => import('./student-edit/student-edit.module').then( m => m.StudentEditPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
