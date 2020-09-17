document.addEventListener('DOMContentLoaded', () => {

    //Data Kartu Presiden
    const cardsPresident = [{
            presidentName: 'soekarno',
            img: './assets/image/soekarno.png'
        },
        {
            presidentName: 'soekarno',
            img: './assets/image/soekarno.png'
        },
        {
            presidentName: 'soekarno',
            img: './assets/image/soekarno.png'
        },
        {
            presidentName: 'soekarno',
            img: './assets/image/soekarno.png'
        }, {
            presidentName: 'soeharto',
            img: './assets/image/soeharto.png'
        }, {
            presidentName: 'soeharto',
            img: './assets/image/soeharto.png'
        }, {
            presidentName: 'habibie',
            img: './assets/image/habibie.png'
        }, {
            presidentName: 'habibie',
            img: './assets/image/habibie.png'
        }, {
            presidentName: 'abdurrahman',
            img: './assets/image/abdurrahman.png'
        }, {
            presidentName: 'abdurrahman',
            img: './assets/image/abdurrahman.png'
        }, {
            presidentName: 'megawati',
            img: './assets/image/megawati.png'
        }, {
            presidentName: 'megawati',
            img: './assets/image/megawati.png'
        }, {
            presidentName: 'sby',
            img: './assets/image/sby.png'
        }, {
            presidentName: 'sby',
            img: './assets/image/sby.png'
        }, {
            presidentName: 'jokowi',
            img: './assets/image/jokowi.png'
        }, {
            presidentName: 'jokowi',
            img: './assets/image/jokowi.png'
        },
    ]

    // mengurutkan array secara acak 
    cardsPresident.sort(() => 0.5 - Math.random())


    const board = document.querySelector('.board')
    const h2 = document.querySelector('h2')
    var cardsChosen = []
    var cardsChosenId = [];
    var cardsCorrect = [];


    //fungsi membuat board untuk tempat kartu
    function createBoard() {
        for (let i = 0; i < cardsPresident.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'assets/image/indonesia.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);

        }
    }

    //fungsi membalikkan kartu
    function flipCard() {
        const getId = this.getAttribute('data-id');
        cardsChosen.push(cardsPresident[getId].presidentName);
        cardsChosenId.push(getId);
        console.log(getId)
        console.log(cardsChosen)

        if (cardsChosen.length < 3) {
            this.setAttribute('src', cardsPresident[getId].img)
        } else if (cardsChosen.length >= 3) {
            alert('Maaf tidak bisa mengecek tiga kartu bersamaan ')
        }

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    //fungsi mengecek gambar yang dibalikkan
    function checkForMatch() {

        const allImg = document.querySelectorAll('img');
        const optionOneCard = cardsChosenId[0];
        const optionTwoCard = cardsChosenId[1];

        if (optionOneCard == optionTwoCard) {
            alert('Tidak bisa memilih kartu diposisi yang sama ');
            allImg[optionOneCard].setAttribute('src', 'assets/image/indonesia.png');
            allImg[optionTwoCard].setAttribute('src', 'assets/image/indonesia.png');
        } else if (cardsChosen[0] !== cardsChosen[1]) {
            alert('Kartu tidak cocok, ayo coba lagii ')
            allImg[optionOneCard].setAttribute('src', 'assets/image/indonesia.png');
            allImg[optionTwoCard].setAttribute('src', 'assets/image/indonesia.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('yeaay kartu cocok, semangatt')
            allImg[optionOneCard].setAttribute('src', 'assets/image/blank.png');
            allImg[optionTwoCard].setAttribute('src', 'assets/image/blank.png');
            allImg[optionOneCard].removeEventListener('click', flipCard)
            allImg[optionTwoCard].removeEventListener('click', flipCard)
            cardsCorrect.push(cardsChosen);
        }
        cardsChosen = [];
        cardsChosenId = [];
        h2.innerHTML = `Your Score : <span id="result">${cardsCorrect.length}</span>`;
        if (cardsCorrect.length === cardsPresident.length / 2) {
            h2.innerHTML = "Selamat anda telah mencocokkan semua foto presiden &#128513;&#128077;";

            board.remove();
        }


    }

    //menjalankan fungsi createboard
    createBoard();
})