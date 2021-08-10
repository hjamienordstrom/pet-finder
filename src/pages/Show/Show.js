import React, { useEffect, useState } from 'react'
import { Button, Card, Grid, Loader } from 'semantic-ui-react'
import { useParams,useHistory, Link } from 'react-router-dom'
import petService from '../../utils/petService'
import EditPet from '../EditPet/EditPet'

export default function Show({ user }) {
    const [loading, setLoading]=useState(true)
    const { id } = useParams()
    const [pet, setPet] = useState({})
    const history = useHistory();
    const [updateFormShow, setUpdateFormShow] = useState(false)

    async function getPet() {
        const data = await petService.getOne(id)
        setPet(data)
    }
    async function getPet(id) {
        setLoading(true);
        const data = await petService.getOne(id)
        setPet(data)
        setLoading(false)
    }
    
    useEffect(() => {
    async function getPet(id) {
        setLoading(true);
        const data = await petService.getOne(id)
        setPet(data)
        setLoading(false)
    }
        getPet(id)
    }, [])

    const deletePet = () => {
        petService.deletePet(id)
        history.push('/')
    }

    function handleUpdateBtn() {
        updateFormShow === false ? setUpdateFormShow(() => true) : setUpdateFormShow(() => false)
    }

    if (loading) {
        return (
          <Grid
            textAlign="center"
            style={{ height: "65vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Loader size="large" active>
                Loading
              </Loader>
            </Grid.Column>
          </Grid>
        );
      } else {
    
    return (
        <Card centered>
            <Card>
                {pet.pet.name}
                <Card.Content>
                    color: {pet.pet.color}
                    <br />
                    birthday: {pet.pet.birthday}
                    <br />
                    sex: {pet.pet.sex}
                </Card.Content>
            </Card>
            {pet.author._id == user._id ? <><Button onClick={deletePet}>Delete</Button> <Button onClick={handleUpdateBtn}>Update</Button> </>: '' }
        
        {
            updateFormShow === true ? (
                <EditPet pet={pet.pet}/>
                ) : ( "" )
        }
        </Card>
    )
}
}

