## 准备

### 脚手架安装

```bash
npm install -g @angular/cli
```

### 创建新项目

```bash
ng new test
```

### 在项目中创建组件

在需要创建组件的文件夹下执行该命令。

```bash
ng generate component homeCom
```

### 创建服务

服务用户不同组件之间数据共享

```jsx
ng generate service store
```



## 插值

使用双大括号`{{ value }}`插入变量值

```jsx
<p>{{title}}</p>
<div><img src="{{itemImageUrl}}"></div>
```

## 绑定

### 属性绑定

在元素标签上某个属性需要动态绑定一个值时，使用`[prop]`或`bind-prop`绑定对应的变量值。

```jsx
<p [title]='value'></p>
<p bind-title='value'></p>
```

### 双向绑定

要使用双向绑定需要先引入`FormsModule`，再在表单元素中使用` [(ngMode)] `或`bindon-prop`实现双向绑定

```jsx
<input [(ngModel)]="hero.name" placeholder="name"/>
<input bindon-value="hero.name" placeholder="name"/>
//app.module.ts
@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
   ]
})
```

### 样式绑定

通过使用`[class.className]='condition'`，满足条件时使用对应的`className`

使用`[ngClass]='{className:true}'`，来显示对应的`className`,不推荐使用`[ngClass]`,直接使用`[class]`

使用` [style.prop]='condition' `,设置单个样式的属性值

```jsx
//当num>5时，div使用active样式
<div [class.active]='num>5'></div>
<div [ngClass]="{'special': isSpecial}"></div>
<div [class]="['foo', 'bar']"></div>
<div [style.color]="isSpecial ? 'red' : 'green'"></div>
<div [style]="{width: '100px', height: '100px'}"></div>
```



## 事件

监听某一事件，在对应元素标签上使用`(event)`包裹需要监听的事件或使用`on-event`。绑定的触发函数后面必须加`()`

```jsx
<button (click)='onSave($event)'>on-click Save</button>
<button on-click="onSave($event)">on-click Save</button>
```

## 列表渲染

使用`*ngFor`进行列表渲染

```jsx
<p *ngFor='let item of items'>
	{{item.name}}
</p>
```

## 添加渲染

使用`*ngIf`进行条件渲染

```jsx
<p *ngIf="product.description">
    Description: {{ product.description }}
</p>
```

## 组件

### 组件基础

使用装饰器`@Component`定义一个组件

使用`template`定义`html模板`内容或使用`templateUrl`定义`html模板路径`

```jsx
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',  //在对应html模板中使用该组件时的标签名
  templateUrl: './product-alerts.component.html',  //该组件对应的html模板
  styleUrls: ['./product-alerts.component.css']   //该组件模板对应的css样式
})
export class ProductAlertsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
```

### 组件传值

在组件内部通过装饰器`@Input`定义一个从外部接收的属性。在使用该组件时通过`[prop]`传递该属性值。

```jsx
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }
}

<app-product-alerts [product]="product"> </app-product-alerts>
```

### 自定义事件

通过使用装饰器`@Output`和事件对象` EventEmitter `在组件中定义一个事件

```jsx
import { Output, EventEmitter } from '@angular/core';

export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
//在组件的html模板中触发自定义事件
<button (click)="notify.emit()">Notify Me</button>

//在对应组件标签上监听
<app-product-alerts
  [product]="product" 
  (notify)="onNotify()">
</app-product-alerts>
```

## 网络请求

 `HttpClient` 是Angular通过HTTP与远程服务器通信的机制 ， 首先，`AppModule`通过导入将其添加到根目录中 ，再 添加`HttpClient`到`imports`数组中 

```jsx
//app.module.ts
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

在组件中引入`httpClient`。

```jsx
import {HttpClient} from '@angular/common/http'
export class HomeComponent implements OnInit {
  id = ''
  constructor(private http:HttpClient) { }
  ngOnInit() {
    console.log(this.http) //使用this.http.get|post发送网络请求
  }  
}
```



## 数据共享

通过创建服务来实现数据共享

```jsx
ng generate service hero

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

}
```

## 生命周期

### **AfterContentChecked**

### **AfterContentInit**

### **AfterViewInit**

### **onDestroy**

### **DoCheck**

### **OnChanges**

### **OnInit**

## 路由

### 创建路由模型

```tsx
//生成app-routing.module.ts文件
ng generate module app-routing --flat --module=app 

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//配置路由表
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

`RouterModule.forRoot()`：添加根路由

### 创建路由视图

创建好路由表后，需要这`html`种添加路由视图`router-outlet`，用于显示对应路由的内容。

```jsx
//app.component.html

<router-outlet></router-outlet>
```

### 路由跳转

在`html`模板中使用`routerLink`属性跳转对应路由

```jsx
<a routerLink='/home'></a>
```

通过这组件中定义`Location`用于路由跳转

```jsx
import {Location} from '@angular/common'
export class HomeComponent implements OnInit {
  constructor(private location:Location) { }
  ngOnInit() {
  }
  to(){
    this.location.go('/detail')
  }
}
```



### 动态路由和参数

```jsx
{ path: 'detail/:id', component: HeroDetailComponent },
```

通过在对应组件中定义`ActivatedRoute`获取当前路由信息

```jsx
import {ActivatedRoute} from '@angular/router'

export class HomeComponent implements OnInit {
  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route)
  }
}
```

