import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Grid, Segment} from 'semantic-ui-react'
import petService from '../../utils/petService'
export default function AddPet(){
    const history = useHistory()
    const [input, setInput] = useState({
        name: '',
        color: '',
        birthday: '',
        sex: ''
    })
    const [file, setFile] = useState('')
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
       const form = new FormData();
    //    form.append('photo', file)
       for (let key in input){
           form.append(key, input[key])
       }
       const data = await petService.addPet(form)
       console.log(data)
       history.push('/')
    }
    // function handleFile(e){
    //     setFile(e.target.files[0])
    // }

    return(
        <>
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
                    {/* <Form.Field>
                        <Form.Input
                        type='file'
                        name='photo'
                        placeholder='upload picture'
                        onChange={handleFile}
                        required/>
                    </Form.Field> */}
                    <Button
                      type="submit" className="btn">
                    Add Pet
                    </Button>
                  </Segment>
                </Form>
               
            </Grid.Column>
          </Grid>
        </> 
        );
}