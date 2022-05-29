import { useEffect, useState } from 'react'
import {
  Button, Card, Col, Container, Form, FormControl, InputGroup, Modal, Row, Spinner,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addAnimal, addSpecies, filterBySpecies } from '../../store/reducers/animalReducer'
import { RootState, AppDispatch } from '../../app/store'

const Home = () => {
  const animals = useSelector((state: RootState) => state.animalSlice.animals)
  const species = useSelector((state: RootState) => state.animalSlice.species)
  const dispatch = useDispatch<AppDispatch>()

  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [speciesInput, setSpeciesInput] = useState('')
  const [chosenSpecie, setChosenSpecie] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleAddAnimal = () => {
    if (!name) {
      setErrorMsg('Name is required')
      return
    }
    if (!image) {
      setErrorMsg('Image is required')
      return
    }
    if (!chosenSpecie) {
      setErrorMsg('Species is required')
      return
    }

    dispatch(addAnimal({
      id: animals.length + 1,
      name,
      image,
      species: chosenSpecie,
    }))

    setName('')
    setImage('')
    setChosenSpecie('')
    setErrorMsg('')
    handleClose()

    toast.success(`${name} successfully added !`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })
  }

  return (
    <Container>
      {species && (
        <Row className="justify-content-center">
          <Col>
            <div className="filter-container">
              <Button
                variant="outline-secondary"
                onClick={() => {
                  dispatch(filterBySpecies('all'))
                }}
              >
                All
              </Button>
              {species.map((specie) => (
                <Button
                  key={specie}
                  variant="outline-secondary"
                  onClick={() => {
                    dispatch(filterBySpecies(specie))
                  }}
                >
                  {specie}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      )}
      <Row className="justify-content-start">
        {animals.length > 0 ? (
          animals.map((animal) => (
            <Col xs={3} className="mb-5" key={animal.id}>
              <Card key={animal.id} style={{ width: '15rem' }}>
                <Card.Img variant="top" src={animal.image} height={200} />
                <Card.Body>
                  <Card.Title>{animal.name}</Card.Title>
                  <Card.Text>
                    {animal.species}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h1 className="text-center">No animals added yet</h1>
        )}
      </Row>

      <Row>
        <Col className="d-flex justify-content-center gap-5 m-5">
          <Button variant="dark" onClick={handleShow}>
            Add animal
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
          >
            Clear storage
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add animal</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <FormControl
                  placeholder="Name of the animal"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
                <FormControl
                  placeholder="Image link for the animal"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value)
                  }}
                />
              </InputGroup>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsEdit(!isEdit)
                }}
              >
                Add new species
              </span>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  Species
                </InputGroup.Text>
                {isEdit ? (
                  <>
                    <FormControl
                      placeholder="Add species name"
                      value={speciesInput}
                      onChange={(e) => {
                        setSpeciesInput(e.target.value)
                      }}
                    />
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(addSpecies(speciesInput))
                        setSpeciesInput('')
                        setIsEdit(false)
                      }}
                    >
                      Add
                    </Button>
                  </>
                ) : (
                  <Form.Select
                    value={chosenSpecie}
                    onChange={(e) => {
                      setChosenSpecie(e.target.value)
                    }}
                  >
                    <option hidden>Select a specie</option>
                    {species.map((specie) => (
                      <option
                        key={specie}
                      >
                        {specie}
                      </option>
                    ))}
                  </Form.Select>
                )}
              </InputGroup>
              {errorMsg && (
                <div className="alert alert-danger" role="alert">
                  {errorMsg}
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  handleAddAnimal()
                }}
              >
                Add animal
              </Button>
            </Modal.Footer>
          </Modal>

          <ToastContainer />

        </Col>
      </Row>
    </Container>
  )
}

export default Home
