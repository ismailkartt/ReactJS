import React, { useState } from 'react'
import data from "./people.json";
import { Container } from 'react-bootstrap';
import PersonCard from './person-card';

const Birthday = () => {

    const [people, setPeople] = useState(data);

  return (
    <Container>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {people.length} kişi bulundu</p>

        {people.map((item) => <PersonCard {...item}></PersonCard>)}

    </Container>
  )
}

export default Birthday