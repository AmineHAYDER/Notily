import React, {useState} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'


function Header(props) {
    const [value,setValue]=useState('')
    const onChange = (e)=>{
        setValue(e.target.value)
    }
    const onClick = ()=>{ //submitting the value to the state
        props.setFilter(value)
    }
    return (
        <div>
            <Navbar bg="secondary" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand className="logo">
                    <img src="/img/Logo.png" style={{height:"34px"}} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <FormControl type="text"
                                     placeholder="Search by name"
                                     className="mr-sm-2"
                                     value={value}
                                     onChange={onChange}/>
                        <Button variant="secondary" onClick={onClick} >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
