import React, { useState } from 'react'
import data from "./people.json";
import { Button, Container } from 'react-bootstrap';
import PersonCard from './person-card';


const Birthday = () => {

    const [people, setPeople] = useState(data);

    const deletePerson = (id) => {
        const arr = people.filter((item) => item.id !== id);
        setPeople(arr);
    }

  return (
    <Container>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {people.length} kişi bulundu</p>

        {people.map((item) => <PersonCard {...item} key={item.id} deletePerson={deletePerson}></PersonCard>)} 

        <Button variant='danger' onClick={() => setPeople([])}>Remove All</Button>
        <Button variant='primary' onClick={() => setPeople(data)}>Reload Data</Button>

    </Container>
  )
}

export default Birthday