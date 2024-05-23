export interface Seccion{
  id:Number
  titulo:String
  descripcion:String
  pie:String
  visual:{}
  fondo:String
}

export interface Intereses{
  nombre:String
  icon:String
  color:String
  // color:{
  //   color1:String,
  //   color2:String
  // }
}

export interface Skills{
  id:Number
  skill:string
  progreso:number
}

export interface Certificados{
  id:Number,
  titulo:String,
  descripcion:String,
  url:String
}

export interface Links{
  nombre:string,
  link:string
}
