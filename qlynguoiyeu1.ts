var readlineSync = require('readline-sync');
import { Lover } from "../qlynguoiyeu";
import { LoverService } from "../qlynguoiyeu";
let choice = -1;
let HaveLover = new LoverService;
while (true){
    console.log('Nhap vao lua chon cua ban: '
    +'\n1. Them ny moi: '
    +'\n2. Sua thong tin ny: '
    +'\n3. Chia tay: '
    +'\n4. Tim ny theo ten: '
    +'\n5. Hien thi danh sach nguoi yeu: '
    +'\n0. Thoat: ');
    let choice = readlineSync.question('Nhap vao lua chon: ')
    if ( choice == 1 ){
        let loverId = readlineSync.question('Nhap vao id cua ny: ');
        if(typeof (loverId)!== 'string'){
            console.log('Du lieu khong hop le:')
        }
        let loverName = readlineSync.question("Nhap vao ten cua ny: ");
        if(typeof (loverName)!== 'string'){
            console.log('Du lieu khong hop le: ')
        }
        let loverZodiac = readlineSync.question('Nhap vao cung hoang dao cua ny: ');
        if(typeof (loverZodiac)!== 'string'){
            console.log('Du lieu khong hop le: ')
        }
        let loverHomeTown = readlineSync.question('Nhap vao que quan cua ny: ');
        if(typeof (loverHomeTown)!== 'string'){
            console.log('Du lieu khong hop le: ')
        }
        let loverYearOfBirth = readlineSync.question('Nhap vao nam sinh cua ny: ');
        if(typeof (loverYearOfBirth)!== 'number'){
            console.log('Du lieu khong hop le:')
            let loverYearOfBirth = readlineSync.question('Nhap lai nam sinh cua ny: ');
        }
        let loverLike = readlineSync.question('Nhap vao so thich cua ny: ');
        if(typeof (loverLike)!== 'string'){
            console.log('Du lieu khong hop le: ')
        }
        let lover = new Lover (loverId, loverName, loverZodiac, loverHomeTown, loverYearOfBirth, loverLike);
        HaveLover.addLover(lover);
    }
    if ( choice == 2 ){
        let editId = readlineSync.question('Nhap vao id ny muon sua: ');
        let loverId = readlineSync.question('Nhap vao id cua ny: ');
        let loverName = readlineSync.question("Nhap vao ten cua ny: ");
        let loverZodiac = readlineSync.question('Nhap vao cung hoang dao cua ny: ');
        let loverHomeTown = readlineSync.question('Nhap vao que quan cua ny: ');
        let loverYearOfBirth = readlineSync.question('Nhap vao nam sinh cua ny: ');
        let loverLike = readlineSync.question('Nhap vao so thich cua ny: ');
        let loverEdit = new Lover (loverId, loverName, loverZodiac, loverHomeTown, loverYearOfBirth, loverLike);
        HaveLover.editLover(editId, loverEdit);
    }
    if ( choice == 3 ){
        let deleteLoverId = readlineSync.question('Nhap vao id ny muon chia tay: ');
        HaveLover.deleteLover(deleteLoverId);
    }
    if ( choice == 4 ){
        let findNameLover = readlineSync.question('Nhap vao ten ny muon tim: ');
        HaveLover.findLover(findNameLover);
    }
    if ( choice == 5 ){
        HaveLover.showListLover();
    }
    if (choice == 0 ){
        break;
    }   
}