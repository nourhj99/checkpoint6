class Human {
    constructor(){
        name;
        job;
        skills;
    }

    name;
    job;
    skills= ["",""];


    getJob(a){
        this.job = a ; 
    }
    leaveJob(){
        this.job="unemployed";
    }
    learnNewSkill(a){
        this.skills=skills.push(a)
    }
    forgetSkill(  a  )
    {
        for(var i = skills.length - 1; i >= 0; i--) {
            if(skills[i] === a) {
               skills.splice(i, 1);
            }
        }
        this.skills= skills;
    }
    

}