import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  Card } from 'semantic-ui-react'
import petService from '../../utils/petService'

export default function Pets({ user }) {
    const [pets, setPets] = useState([])
    async function getPets() {
        const data = await petService.getAllPets()
        setPets([...data.pets])
    }
    useEffect(() => {
        getPets()
    }, [])

    if (!pets.length) {
        return (
            <h1>no pets</h1>
        )
    } else {
        return (
            <Card.Group>
                {pets.map((pet) => {
                    return (
                        <Card>
                        <Link to={'pet/' + pet._id}>
                        <Card>
                            {pet.name}
                            <Card.Content>
                                color: {pet.color}
                                <br />
                                birthday: {pet.birthday}
                                <br />
                                sex: {pet.sex}

                            </Card.Content>
                        </Card>
                        </Link>
                        </Card>
                    )
                })}
            </Card.Group>
        )
    }
}