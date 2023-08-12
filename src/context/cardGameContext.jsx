import { createContext, useEffect, useState } from "react";

const CardGameContext = createContext()
let randomNumberArray = []
let healt = 0

const cardImg = [
    {
        img: "https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 1,
        id: 1,

    },
    {
        img: "https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 1,
        id: 2,
    },
    {
        img: "https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 1,
        id: 3,
    },
    {
        img: "https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 1,
        id: 4,
    },
    {
        img: "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 2,
        id: 5,
    },
    {
        img: "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 2,
        id: 6,
    },
    {
        img: "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 2,
        id: 7,
    },
    {
        img: "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: false,
        selected: false,
        imgId: 2,
        id: 8,
    },
]

function Provider({ children }) {



    const [cardData, setCardData] = useState([])
    const [selectCards, setSelectCards] = useState([])
    const [chance, setChance] = useState(4)
    const [randomNumber, setrandomNumber] = useState([])


    function handleReset() {
        
        cardData.find(x => {
            x.status = false
            x.selected = false
        })

        setSelectCards([])
        setChance(4)
        setrandomNumber([])
        randomNumberArray = []
        healt = 0;
        setCardData(cardImg)
        start()
    }


    useEffect(() => {
        start()
    }, [])

    function start() {
        randomNumberGenarator()
        setrandomNumber(randomNumberArray)
        setCardData(cardImg)
    }



    const randomNumberGenarator = (arrayLength = cardImg.length, min = 1, max = cardImg.length) => {
        if (arrayLength < min || arrayLength > max)
            throw ''
        while (randomNumberArray.length < arrayLength) {
            const rand = Math.floor(Math.random() * (max - min + 1) + min)
            if (randomNumberArray.indexOf(rand) > -1) continue
            randomNumberArray[randomNumberArray.length] = rand
        }

    }




    function handleCardStatus(card) {
        const userSelectCard = cardData.find(x => {
            if (x.id === card.id) {
                x.status = true
                x.selected = true
            }
            return x.id === card.id
        })
        setSelectCards([...selectCards, { imgId: userSelectCard.imgId }])
        setChance(chance - 1)

        if (chance === 1) {
            cardData.map(x => { x.status = true })
        }
    }

    if (selectCards.length >= 4) {


        for (let i = 0; i < selectCards.length; i++) {
            for (let j = i + 1; j < selectCards.length; j++) {
                if (selectCards[i].imgId === selectCards[j].imgId) {
                    healt++;
                }
            }
        }


    }


    const shareValues = {
        cardData,
        chance,
        randomNumber,
        healt,
        handleCardStatus,
        handleReset
    }




    return (


        <CardGameContext.Provider value={shareValues}>
            {
                children
            }
        </CardGameContext.Provider>
    )

}

export { Provider };
export default CardGameContext