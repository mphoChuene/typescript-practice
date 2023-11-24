// import {useState} from 'react'

interface props{
    name: string;
    surname: string;
    email:string;
    isMarried: boolean;
    friends: string[];
    country?: string;
}

export enum Country{
    Brazil= 'Brazil',
    America= 'america',
    southAfrica= 'South Africa'
}

export const Person =(props:props)=>{

   return(
    <div>
        <h4>Name: {props.name}</h4>
        <h4>surname: {props.surname}</h4>
        <h4>Email: {props.email}</h4>
        <h4>Marriage: {props.isMarried? 'Yes' : 'No' }</h4>
        <h4>Friends : {props.friends.map((friend: string)=>{
            return(<h4>{friend}</h4>)
        })}</h4>
        <h4>Country:{props.country}</h4>
        <button>click me!</button>
        <button>click me again!</button>
    </div>
   )
}