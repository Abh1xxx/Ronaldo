import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Forms() {
    return (
        <div className='container py-4 mt-3 '>
            <Form className=' text-light'>
                <h2 className='text-center  pb-3'>Contact</h2>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Control type="email" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                        <Form.Control type="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="col-md-12 my-3">
                    <Form.Control as="textarea" rows={5} placeholder="Your Email" />
                </div>
                <p className='text-center'>
                    <Button variant="primary" type="submit" >
                        Send Meassage
                    </Button>
                </p>
            </Form>
        </div>
    )
}

export default Forms