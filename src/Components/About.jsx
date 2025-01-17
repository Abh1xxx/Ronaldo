import Button from 'react-bootstrap/Button';
function About() {
    return (
        <div >
            <h1 className="text-center mt-5 mb-3">About Cristiano Ronaldo</h1>
            <div className="row "
            style={{ 
                padding: "0 13rem", // Top-bottom: 5rem, Left-right: 3rem
              }}
            >
                <div className="col-lg-6 d-flex justify-content-center">
                    <img className='aboutimg' src="https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg" alt="" />
                </div>
                <div className="col-lg-6 d-flex justify-content-center  align-items-center flex-column">
                    <p 
                    
                    className='text-center fs-5 fw-light p-5'>Cristiano Ronaldo is one of the greatest football players of all time. Known for his unmatched dedication, skill, and athleticism, he has won multiple Ballon d'Or awards and led his teams to numerous championships. Off the field, Ronaldo is a philanthropist and a global inspiration. </p>
                    <Button variant="dark" href='#achievements'>Explore Achievements</Button>
                </div>
            </div>
        </div>
    )
}
export default About