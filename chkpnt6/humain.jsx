import React from 'react';

class humain{
    name;
    job;
    skills;
    constructor(){

    this.name ='john';

    this.job ='string';

    this.skills =[]
}


getJob(a){
this.job=a;
}

leaveJob(){
this.job='unemployed';
}

learnNewSkill(a){
  this.skills.push(a);

}

forgetSkill(c){
this.skills= this.skills.filter(a => a!=c);

}
}
class Student extends Human{
    constructor(){
        this.super();
}}
const me = new Student();

me.getJob(Webdeveloper);

me.learnNewSkill(React);

me.forgetSkill(React);

me.leaveJob();
