import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className="home text-white d-flex justify-content-center flex-column align-items-center ">
            <h1 className='fw-light  m-3' style={{fontSize:"60px"}}>Cristiano Ronaldo</h1>
            <p className='fs-4 fw-light'>Football Legend | Record-Breaker | Global Icon</p>
            <Button className='m-2' variant="primary" href="#about" >Learn More</Button>
        </div>
    )
}

export default Home
