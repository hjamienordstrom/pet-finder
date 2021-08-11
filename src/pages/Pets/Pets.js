import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  Card } from 'semantic-ui-react'
import petService from '../../utils/petService'
import NavBar from '../../components/NavBar/NavBar'

export default function Pets({ user , handleLogout}) {
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
            <>
            <NavBar handleLogout={handleLogout}/>
            <h1>no pets</h1>
            </>
        )
    } else {
        return (
            <>
            <NavBar handleLogout={handleLogout}/>
            <Card.Group>
                {pets.map((pet) => {
                    return (
                        <Card>
                        <Link to={'pet/' + pet._id}>
                        <Card style={{color:'black'}}>
                            {pet.name}
                            <Card.Content style={{color:'black'}}>
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
            </>
        )
    }
}