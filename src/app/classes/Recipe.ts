import { Category } from './Category';

export class Recipe{

    
    constructor(public code:number,public name:string,
        public category:Category,public duration:number,
        public difficult:number,public date:number,
        public product:string[],public preparation:string[],
         public userCode:number,public urlPicture:string){
    
    }

}