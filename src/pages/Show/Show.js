import React, { useEffect, useState } from 'react'
import { Button, Card, Grid, Loader } from 'semantic-ui-react'
import { useParams,useHistory } from 'react-router-dom'
import petService from '../../utils/petService'

export default function Show({ user }) {
    const [loading, setLoading]=useState(true)
    const { id } = useParams()
    const [pet, setPet] = useState({})
    const history = useHistory();

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
            {pet.author._id == user._id ? <><Button onClick={deletePet}>Delete</Button> <Button>Update</Button> </>: '' }
        </Card>
    )
}
}

