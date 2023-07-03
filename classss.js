class job{
    constructor(jobTitle,place,salary){
        this.title=jobTitle;
        this.location=place;
        this.salary=salary;
    }
}

const developer =new job('developer','new york','50000');
const cook =new job ('cook','munich','35000');
console.log(developer);