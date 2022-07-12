type Human = {name: string, job:string};
type Dog = {name:string, tailWagSpeed:number};

type Family<T> = {
    parents : [T, T], mate: T, children: T[] 
}

let theFamily:Family<number> = {
    parents: [3,4], mate:9, children:[5,30,121]
}

let someFamily:Family<boolean> = {
    parents:[true, true], mate:false, children:[false,false,true,true]
}

let aFamily:Family<Human> = {
    parents:[
        {name:'Mom', job: 'software engineer'},
        {name:'Dad', job: 'coding engineer'}

    ],
    mate: {name:'Matesky', job: 'engineering coder'},
    children: [{name: 'Babesky', job: 'none'}]
}

let aDog:Family<Dog> = {
    parents:[
        {name:"Char", tailWagSpeed: 4},
        {name:'lorenzo', tailWagSpeed:5}
        
        
    ],
    mate:{name:'cheems' , tailWagSpeed:6},
    children:[
        {name:'Puppin', tailWagSpeed:9}
    ]
};