import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Grid, Segment} from 'semantic-ui-react'
import petService from '../../utils/petService'
export default function EditPet({pet}){
    const history = useHistory()
    const [input, setInput] = useState({
        name: '',
        color: '',
        birthday: '',
        sex: ''
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(input);
       const data = await petService.editPet(pet._id, input)
       console.log(data)
       history.push('/')
    }


    return(
        
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment stacked>               
                    <Form.Input                    
                      name="name"
                      placeholder="name of pet"
                      value={input.name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      name="color"
                      placeholder="color of the baby"
                      value={ input.color}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="birthday"
                      placeholder="birthdate of the baby"
                      value={ input.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="sex"
                      placeholder="gender of the baby"
                      value={ input.sex}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit" className="btn">
                    Update Pet
                    </Button>
                  </Segment>
                </Form>
               
            </Grid.Column>
          </Grid>
        
        );
}