import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GiTrophy } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";

function Achievements() {
    return (
        <div className="container ">
            <h1 className='text-center'>Achievements</h1>
            <div className="row ">
                <div className="col-md-4 "><Card className='border-0'>
                    <Card.Body>
                        <Card.Title className='text-center'><GiTrophy className='icons text-warning' /></Card.Title>
                        <h4 className='text-center'>5 Ballon d'Or</h4>
                        <Card.Text className='text-center'>

                            Awarded for his outstanding football career.                        </Card.Text>
                    </Card.Body>
                </Card></div>
                <div className="col-md-4"><Card className='border-0'>
                    <Card.Body>
                        <Card.Title className='text-center'><FaStar  className='icons text-primary' /></Card.Title>
                        <h4 className='text-center'>UEFA Champions League</h4>
                        <Card.Text className='text-center'>
                            Won 5 UEFA Champions League titles.
                        </Card.Text>
                    </Card.Body>
                </Card></div>
                <div className="col-md-4"><Card className='border-0'>
                    <Card.Body>
                        <Card.Title className='text-center'><FaCrown className='icons text-success' /></Card.Title>
                        <h4 className='text-center'>European Champion</h4>
                        <Card.Text className='text-center'>
                        Led Portugal to victory in Euro 2016.</Card.Text>
                    </Card.Body>
                </Card></div>
            </div>
        </div>
    )

}

export default Achievements;