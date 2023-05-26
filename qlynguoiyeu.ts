export class Lover {
    loverID: string;
    loverName: string;
    loverZodiac: string;
    homeTown: string;
    yearOfBirth: number;
    like: string;
    constructor(loverName:string, loverID:string, loverZodiac:string, homeTown:string, yearOfBirth: number, like: string ){
        this.loverID = loverID,
        this.loverName = loverName,
        this.loverZodiac = loverZodiac,
        this.homeTown = homeTown,
        this.yearOfBirth = yearOfBirth,
        this.like = like
    };
}
export class LoverService {
    listLover : Lover [] = [];
    constructor(){

    }
    showListLover(){
        if(this.listLover.length > 0){
            console.log('Danh sach nguoi yeu cua tao bao gom: ');
            console.table(this.listLover);  
        }
        else{
            console.log('May lam gi co ny');
        }       
    }
    addLover(lover:Lover){
        this.listLover.push(lover);
    }
    editLover(idName :string, loverEdit : Lover){
        for( let  i = 0; i < this.listLover.length; i++){
            if(this.listLover[i].loverID == idName){
                this.listLover[i] = loverEdit;
            }
            else{
                console.log(' Khong tim thay dua nao nhu the: ');
            }
        }
    }
    deleteLover(idDelete : string){
        for(let i = 0; i < this.listLover.length; i++){
            if (this.listLover[i].loverID == idDelete){
                this.listLover = this.listLover.filter((item => item.loverID !== idDelete));
            }
        }
        
    }
    findLover(findNameLover : string){
        this.listLover = this.listLover.filter((item => item.loverName.includes(findNameLover)));
    }
}