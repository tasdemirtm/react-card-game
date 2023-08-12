import { useContext } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import CardGameContext from '../CardGameContext'

function GameCard() {

    const { cardData, handleCardStatus, chance, randomNumber, healt, handleReset } = useContext(CardGameContext)


    return (
        <>
            <Row>
                <h6>Chance: {chance} </h6>
                <h6>Status:{healt === 3 ? "Win" : healt !== 0 ? "Lost" : ""} </h6>
            </Row>

            <Row>

                {
                    randomNumber.map((x) => {
                        return <Col className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6' key={x}> <Card className={cardData[x - 1].status ? "active" : ""} ><div className={cardData[x - 1].selected ? "" : "undesired"}><img src={cardData[x - 1].img} onClick={() => handleCardStatus(cardData[x - 1])} /></div></Card> </Col>
                    })
                }
                <Button onClick={() => handleReset()} >Reset</Button>
            </Row>
        </>
    )
}

export default GameCard
